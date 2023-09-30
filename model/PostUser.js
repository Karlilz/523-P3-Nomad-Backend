const mongoose = require('../database/connection');

const PostUserSchema = new mongoose.Schema({
    name: String,
    location: String,
    image: String,
    comment: String,
});

const PostUser = mongoose.model('PostUser', PostUserSchema);

module.exports = PostUser;