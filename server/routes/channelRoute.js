const express = require("express")
const router = express.Router();
const models = require("../models")
const guid = require("guid")
const User = models.User;
const Channel = models.Channel;
const jwt = require('jsonwebtoken')
const secret = require("../config").secret;

var ObjectId = require('mongoose').Types.ObjectId;


router.post("/getChannel", (req, res) => {

    var u = jwt.verify(req.body.token, secret);
    if (u == null) { return res.json({ message: "Invalid user" }) }
    var id = ObjectId(u._doc._id)
    Channel.findOne({ user: id }).then((channel) => {
        res.json(channel);
    })

})



module.exports = router;