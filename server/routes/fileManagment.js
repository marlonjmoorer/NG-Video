const express = require("express")
const router = express.Router();
const db = require('monk')('localhost/liveboards')
const models = require("../models")
const guid = require("guid")
const fs = require("fs")
var io = global.io
var ss = require('socket.io-stream')
const jwt = require('jsonwebtoken')
const secret = require("../config").secret;
var s3Mod = require("../aws_mod")







io.on('connection', function (socket) {
  console.log('a user connected');
  socket.emit("connection")

  ss(socket).on('upload', function (stream, meta) {
    //var dir = `server/uploads/${"temp"}`
    //if (!fs.existsSync(dir)) { fs.mkdirSync(dir) }
    //var url = `${dir}/${meta.name}`;
    //var ws = fs.createWriteStream(url)
    //stream.pipe(ws);
    //var bufs = [];
    var user = jwt.verify(meta.token, secret)
    if (user != null) {
      socket.emit("attached")
      var buffer;
      stream
        .on('data', (bytes) => {
          if (buffer) {
            buffer = Buffer.concat([buffer, bytes])
          } else {
            buffer = bytes
          }
        })
        .on('end', () => {
          //fs.unlinkSync(url)
          var file = {
            name: meta.name,
            buffer: buffer,
            type: meta.contentType
          }
          s3Mod.upload(file, (outFile) => {
            switch (meta.contentType) {
              case 1:
                var video = new models.Video({
                  title: meta.name,
                  type: meta.type,
                  size: meta.size,
                  path: outFile.key
                })
                video.save().then((vid) => {

                  models.Channel.findOne({ user: user._id }).then((c) => {
                    console.log(vid)
                    //c.videos.push(vid._id);
                    //c.save()
                    socket.emit("finish", vid)
                  })
                })
                break;
              case 0:
                break;
              default:
                throw new Error();
            }
          })
        })
    }

  });
});



router.get("/getFiles", (req, res) => {
  var query = models.Document.find();
  // A query is not a fully-fledged promise, but it does have a `.then()`.
  query.then((results) => {
    res.json(results);
  });
})
router.post("/upload", (req, res) => {
  let file = req.body.file;

  var query = models.Document.find();
  // A query is not a fully-fledged promise, but it does have a `.then()`.
  query.then((results) => {
    res.json(results);
  });
})
router.get("/download/:id", (req, res) => {
  let id = req.params.id
  var query = models.Document.findOne({ _id: id });
  query.then((result) => {
    res.download(result._doc.path)
  });
})
router.get("/stream/:id", (req, res) => {
  let id = req.params.id
  var query = models.Document.findOne({ _id: id });
  query.then((result) => {
    var stream = fs.createReadStream(result._doc.path)
    stream.pipe(res);
  });
})

//res.send('Hello World!')
module.exports = router;