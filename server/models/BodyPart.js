const mongoose = require('mongoose');

const localizedString = {
    en: { type: String, required: true },
    es: { type: String, required: true },
    fr: { type: String, required: true }
};

const optionalLocalizedString = {
    en: { type: String },
    es: { type: String },
    fr: { type: String }
};

const bodyPartSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // Explicitly using string ID to match frontend data
    bodyPart: localizedString,
    image: { type: String }, // Storing image path/url if needed, though frontend imports it. We might need to handle images differently or just keep them on frontend for now.
    ailments: [{
        name: localizedString,
        remedies: [{
            name: localizedString,
            description: localizedString,
            preparation: localizedString,
            warnings: optionalLocalizedString
        }]
    }]
});

module.exports = mongoose.model('BodyPart', bodyPartSchema);
