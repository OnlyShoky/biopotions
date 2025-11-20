const express = require('express');
const router = express.Router();
const BodyPart = require('../models/BodyPart');
const Favorite = require('../models/Favorite');

// @route   GET /api/bodyparts
// @desc    Get all body parts
router.get('/bodyparts', async (req, res) => {
    try {
        const bodyParts = await BodyPart.find({}, 'bodyPart'); // Only return bodyPart name and _id
        res.json(bodyParts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   GET /api/bodyparts/:name
// @desc    Get specific body part with ailments
router.get('/bodyparts/:name', async (req, res) => {
    try {
        const bodyPart = await BodyPart.findOne({ bodyPart: new RegExp('^' + req.params.name + '$', 'i') });
        if (!bodyPart) return res.status(404).json({ message: 'Body part not found' });
        res.json(bodyPart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   GET /api/ailments/:name
// @desc    Get specific ailment details
// Note: Since ailments are embedded, we search across body parts
router.get('/ailments/:name', async (req, res) => {
    try {
        const bodyPart = await BodyPart.findOne({ 'ailments.name': new RegExp('^' + req.params.name + '$', 'i') });

        if (!bodyPart) return res.status(404).json({ message: 'Ailment not found' });

        const ailment = bodyPart.ailments.find(a => a.name.toLowerCase() === req.params.name.toLowerCase());
        res.json(ailment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   GET /api/favorites
// @desc    Get all favorites
router.get('/favorites', async (req, res) => {
    try {
        const favorites = await Favorite.find().sort({ addedAt: -1 });
        res.json(favorites);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/favorites
// @desc    Add a remedy to favorites
router.post('/favorites', async (req, res) => {
    const { remedyName, ailmentName, bodyPart } = req.body;

    try {
        const newFavorite = new Favorite({
            remedyName,
            ailmentName,
            bodyPart
        });

        const savedFavorite = await newFavorite.save();
        res.status(201).json(savedFavorite);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @route   DELETE /api/favorites/:id
// @desc    Remove a favorite
router.delete('/favorites/:id', async (req, res) => {
    try {
        const favorite = await Favorite.findById(req.params.id);
        if (!favorite) return res.status(404).json({ message: 'Favorite not found' });

        await favorite.deleteOne();
        res.json({ message: 'Favorite removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
