var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var DocumentSchema = new Schema({
    name: String,
    // buffer:Buffer,
    type: String,
    size: String,
    path: String
})
var config = require("./config")
mongoose.connect(`mongodb://${config.connstring}`);
module.exports = {

    Document: mongoose.model("document", new Schema({
        name: String,
        type: String,
        size: String,
        path: String
    })),
    User: mongoose.model("user", new Schema({
        username: String,
        password: String,
        email: String,
        karma: Number,
        user_level: Number,
        avatar: Buffer,
        create_date: Date,
        account_status: Number,
        subs: [Number]
    })),
    Video: mongoose.model("video", new Schema({
        title: String,
        type: String,
        size: String,
        path: String,
        keywords: [String],
        thumbnail: String
    })),
    Channel: mongoose.model("channel", new Schema({
        user: { type: ObjectId, ref: 'user' },
        viewers: [],
        videos: [],
        podcast: []
    })),
    Podcast: mongoose.model("podcast", new Schema({
        title: String,
        type: String,
        size: String,
        path: String,
        keywords: [String],
        thumbnail: Buffer
    })),
}