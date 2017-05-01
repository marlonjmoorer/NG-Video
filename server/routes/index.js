const express = require("express")
const router = express.Router();

const fileRoute = require('./fileRoute');
const userRoute = require('./userRoute');
const channelRoute = require('./channelRoute');
const videoRoute = require("./videoRoute")


router.use("/file", fileRoute)
router.use("/user", userRoute)
router.use("/channel", channelRoute)
//router.use("/video", videoRoute)
module.exports = router;