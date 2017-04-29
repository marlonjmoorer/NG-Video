const express= require("express")
const router= express.Router();
const userManagement = require('./userManagement.js');
const fileManagment = require('./fileManagment.js');

const fileRoute = require('./fileRoute.js');
const userRoute = require('./userRoute.js');
const channelRoute = require('./channelRoute.js');

router.use("/um",userManagement)  
router.use("/fm",fileManagment)  
router.use("/file",fileRoute)
router.use("/user",userRoute)
router.use("/channel",channelRoute)
module.exports= router;