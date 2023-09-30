const mongoose = require('../database/connection');

const travelUserSchema = new mongoose.Schema({
    title: String,
    username: String,
    location: String,
    image: String,
    caption: String,
});

const TravelUser = mongoose.model('TravelUser', travelUserSchema);

module.exports = TravelUser;