const mongoose = require('../database/connection');

const travelUserSchema = new mongoose.Schema({
    name: String,
    location: String,
    image: String,
    comment: String,
});

const TravelUser = mongoose.model('Bookmark', travelUserSchema);

module.exports = TravelUser;