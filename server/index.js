const express = require("express")
const app = express()
const port = 8800
const bodyParser = require('body-parser');
var http = require('http').Server(app);
global.io = require('socket.io')(http);
const router = require("./routes")
const path = require("path")
const az = require("./aws_mod")




app.use(express.static(path.join(__dirname, '../dist')))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use("/api", router)
app.set("port", port)

app.get('/test', (req, res) => {

  var name = "test.txt"
  az.upload("test2.txt")
  az.getFile(name, (data) => {
    var buff = data
    res.dow
  });

  //let f= path.join(__dirname, '../dist/index.html')
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
app.get('*', (req, res) => {
  //let f= path.join(__dirname, '../dist/index.html')
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
http.listen(port, () => console.log(`Listening on port ${port}`))

