const mongoose = require('mongoose');

const remedySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    preparation: String,
    warnings: String,
});

const ailmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    remedies: [String], // Storing as array of strings initially based on provided JSON, but can be objects if needed. 
    // The provided JSON has remedies as strings. 
    // However, the requirements mention "Remedy Detail Page" with description/prep.
    // I will adapt the schema to support the simple string list from JSON for now, 
    // but I'll also add a separate Remedy collection or embedded object if we want rich details later.
    // For now, let's stick to the JSON structure provided: 
    // "remedies": ["Honey with lemon", ...]
    // BUT, the requirements say "Short description of why each remedy helps", "Preparation steps".
    // The provided JSON DOES NOT have this data. 
    // I will need to ENRICH the data or create a schema that allows for it.
    // I will use an array of objects for remedies in the schema to be future-proof, 
    // even if the seed data only has names initially.
});

// Actually, looking at the JSON again: "remedies": ["Honey with lemon", ...]
// The requirement says: "Use the provided JSON as the base dataset".
// AND "Ailment Detail Page" needs "Short description... Preparation steps".
// I will generate realistic dummy data for description/preparation in the seed script 
// to fulfill the UI requirements, while keeping the structure compatible.

const bodyPartSchema = new mongoose.Schema({
    bodyPart: { type: String, required: true, unique: true },
    ailments: [{
        name: { type: String, required: true },
        remedies: [{
            name: { type: String, required: true },
            description: { type: String, default: "A natural remedy." },
            preparation: { type: String, default: "Mix ingredients and consume." },
            warnings: { type: String, default: "Consult a doctor if symptoms persist." }
        }]
    }]
});

module.exports = mongoose.model('BodyPart', bodyPartSchema);
