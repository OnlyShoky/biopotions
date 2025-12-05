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

const propertySchema = new mongoose.Schema({
    property: localizedString,
    description: localizedString
}, { _id: false });

const ingredientSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // Custom ID like 'ing-001'
    name: localizedString,
    scientificName: { type: String },
    image: { type: String },
    description: localizedString,
    properties: [propertySchema],
    dosage: localizedString,
    warnings: optionalLocalizedString,
    category: {
        type: String,
        enum: ['herb', 'spice', 'mineral', 'essential-oil', 'food'],
        required: true
    },
    safetyRating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    }
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
