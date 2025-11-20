const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    remedyName: { type: String, required: true },
    ailmentName: { type: String, required: true },
    bodyPart: { type: String, required: true },
    addedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Favorite', favoriteSchema);
