const express = require("express")
const router = express.Router();
const models = require("../models")
const guid = require("guid")
const User = models.User;
const Channel = models.Channel;
const jwt = require('jsonwebtoken')
const secret = require("../config").secret;

router.post("/login", (req, res) => {
    let user = req.body;
    User.findOne({ username: user.username }).then((result) => {
        if (result == null) {
            return res.json({ success: false, message: "User not found" })
        } else if (result.password != user.password) {
            return res.json({ success: false, message: "Incorrect password" })
        } else {
            var token = jwt.sign(result, secret);
            return res.json({ success: true, message: "", token })
        }
    });
})

router.post("/signUp", (req, res) => {
    var data = req.body;
    var params = {
        $or: [
            { username: data.username },
            { email: data.email }
        ]
    }
    User.findOne(params, (err, result) => {
        if (err) throw err

        if (result == null) {
            var newUser = new User(data)
            newUser.save((err, u) => {
                if (err) throw err
                var id = u._id;
                var channel = new Channel({
                    user: id
                });
                channel.save((err, ch) => {
                    if (err) throw err
                    res.json({ success: true, message: "Signup successful.  Please Login" })
                })
            })
        } else {
            if (result.username == data.username) {
                res.json({ success: false, message: "User already exist" })
                return
            }
            if (result.email == data.email) {
                res.json({ success: false, message: "User already exist" })
                return
            }
        }
    })
})




module.exports = router;