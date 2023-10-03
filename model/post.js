const mongoose = require('../database/connection');

const postSchema = new mongoose.Schema({
    title: String,
    username: String,
    location: String,
    image: String,
    caption: String,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;