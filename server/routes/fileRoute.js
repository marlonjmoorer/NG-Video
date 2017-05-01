const express = require("express")
const router = express.Router();
const models = require("../models")
const guid = require("guid")
const User = models.User;
const Channel = models.Channel;
const jwt = require('jsonwebtoken')
const secret = require("../config").secret;
var AWS = require('aws-sdk');
var multer = require('multer')
var multerS3 = require('multer-s3')
var config = require("../config")
var s3 = new AWS.S3()
var ObjectId = require('mongoose').Types.ObjectId;
var fs = require("fs")

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: config.bucket,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        acl: 'public-read',
        key: function (req, file, cb) {
            var token = jwt.verify(req.body.token, config.secret);
            if (!token) { throw new Error("Invalid User") }
            var type = ""
            if (file.mimetype.includes("video"))
                type = "Vid"
            if (file.mimetype.includes("image"))
                type = "Thumbnail"
            cb(null, `uploads/${req.body.title}_${token._doc._id}/${type}/${file.originalname}`)
        }
    })
})
router.post("/upload", upload.array('file', 2), (req, res) => {
    if (req.files && req.files[0]) {
        var file = req.files[0]
        var thumb = req.files[1]

        var video = new models.Video({
            title: req.body.title,
            path: file.key,
            size: file.size,
            thumbnail: thumb.location
        })
        let meta;
        video.save()
            .then((v) => {
                meta = {
                    id: v._id,
                    title: v.title,
                    thumb: thumb.location,
                    key: thumb.key
                }
                var id = req.body.channel_id;
                return models.Channel.findById(id).exec()
            }).then((ch) => {
                if (!meta) { throw new Error(" No Metadata") }
                if (!ch) { throw new Error(" No Channel Found") }
                ch.videos.push(meta)
                return ch.save()
            }).then((ch) => {
                if (!ch) { throw new Error(" No Channel Found") }
                return res.json(ch)
            }).catch((err) => {
                console.log(err)
            })
    } else {
        res.json({ message: "upload failed" })
    }
})

router.get("/watch/:id", (req, res) => {
    var id = ObjectId(req.params.id)
    models.Video.findById(req.params.id)
        .exec()
        .then((vid) => {
            s3.getObject({ Key: vid.path, Bucket: config.bucket })
                .createReadStream().on("error", (err) => {
                    throw err
                }).pipe(res)
        }).catch((err) => {
            console.log(err)
        })
})

router.get("/videos/recent", (req, res) => {

    models.Video.find({}).exec((err, v) => {
        res.json(v);
    })
})

router.delete("/video", (req, res) => {
    var thumbnail_key;
    var token = jwt.verify(req.body.token, secret)
    if (token) {
        var userId = ObjectId(token._doc._id)
        models.Channel.findOne({ user: userId })
            .exec()
            .then((ch) => {
                let vids = ch.videos;
                thumbnail_key = vids.filter((v) => v.id.equals(ObjectId(req.body.id)))[0].key
                return models.Channel.update({ user: userId }, { $pull: { videos: { id: ObjectId(req.body.id) } } }).exec()
            }).then((result) => {
                if (result.nModified == 1 && result.ok == 1) {
                    //res.json({ succes: true, message: "Video Removed" });
                    return models.Video.findOne({ _id: req.body.id }).exec()
                }
            }).then((v) => {
                var params = {
                    Bucket: config.bucket,
                    Delete: {
                        Objects: [
                            { Key: v.path },
                            { Key: thumbnail_key }
                        ]
                    }
                }
                return s3.deleteObjects(params).promise()
            }).then((result) => {
                if (!result.Deleted) {
                    return new Error("Failed to delete object")
                }
                return models.Video.findOneAndRemove({ _id: req.body.id }).exec()
            }).then((result) => {
                if (result) {
                    res.json({ success: true, message: "Video Removed" });
                } else {
                    res.json({ success: false, message: "Video Not Found" })
                }
            }).catch((err) => {
                res.json({ succes: false, error: err })
            })

    }
})



module.exports = router;