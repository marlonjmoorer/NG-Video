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
            var type = ""
            if (file.mimetype == "video/mp4")
                type = "Vid"
            if (file.mimetype == "image/png")
                type = "thumb"
            cb(null, `uploads/${guid.raw()}/${type}/${file.originalname}`)
        }
    })
})

router.post("/upload", upload.array('file', 2), (req, res) => {
    if (req.files[0]) {
        var file = req.files[0]
        var thumb = req.files[1]
        s3.getObject({ Key: thumb.key, Bucket: config.bucket }, (err, data) => {
            data.Body
            var video = new models.Video({
                title: "Test",
                path: file.key,
                size: file.size,
                thumbnail: data.Body
            })
            video.save((err, v) => {
                var id = req.body.channel_id;
                models.Channel.findById(id).exec((err, ch) => {
                    ch.videos.push({
                        id: v._id,
                        title: v.title,
                        thumb: thumb.location
                    })
                    ch.save((err, c) => {
                        res.json(c)
                    })
                })
            })
        })
    } else {
        res.json({ message: "upload failed" })
    }
})

router.get("/watch/:id", (req, res) => {
    var id = ObjectId(req.params.id)
    models.Video.findById(req.params.id).exec((err, v) => {
        const stream = s3.getObject({ Key: v.path, Bucket: config.bucket }).createReadStream()
        stream.on('error', function (err) {
            console.log(err);
        }).pipe(res);
    })
})

router.get("/videos/recent", (req, res) => {

    models.Video.find({}).exec((err, v) => {
        res.json(v);
    })
})



module.exports = router;