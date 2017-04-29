var AWS = require('aws-sdk');
var S3 = AWS.S3;
var config = require("./config")
const guid = require("guid")
var multer = require('multer')
var multerS3 = require('multer-s3')

var s3 = new S3()

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: config.bucket,
        //metadata: function (req, file, cb) {
        //    cb(null, { fieldName: file.fieldname });
        // },
        key: function (req, file, cb) {
            cb(null, `${baseUrl}/${guid.raw()}/${file.name}`)
        }
    })
})


AWS.config.update({
    region: "us-east-1"
});

var params = {
    Bucket: config.bucket,
    Delimiter: '/',
    Prefix: 'uploads/',
    Marker: "uploads/",
    Key: ''
}
var baseUrl = "uploads"


module.exports = {
    upload,
    getFile(name, callback) {
        s3.getObject({ Key: "uploads/" + name, Bucket: params.Bucket }, (err, data) => {
            if (err) throw err
            callback(data)
        })
    },
    upload(file, callback) {
        var type = file.contentType
        var p = {
            Bucket: params.Bucket,
            Key: `${baseUrl}/${guid.raw()}/${type}/${file.name}`,
            Body: file.buffer,
            ACL: 'public-read'
        }
        s3.upload(p, function (err, data) {
            if (err) {
                return alert('There was an error uploading your file: ', err.message);
            }
            callback(data)
        });

    }


}