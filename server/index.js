const express = require("express")
const app = express()
const port = 8800
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const router = require("./routes")
const path = require("path")
const az = require("./aws_mod")
const socketServer = require("./socket");



app.use(express.static(path.join(__dirname, '../dist')))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use("/api", router)
app.set("port", port)

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
http.listen(port, () => {
  socketServer.start(io);
  console.log(`Listening on port ${port}`)
})

