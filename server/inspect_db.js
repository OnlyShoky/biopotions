const mongoose = require('mongoose');
const dotenv = require('dotenv');
const BodyPart = require('./models/BodyPart');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const inspect = async () => {
    try {
        const bodyParts = await BodyPart.find({});
        if (bodyParts.length > 0) {
            console.log("First item keys:", Object.keys(bodyParts[0].toObject()));
            console.log("Ailments length:", bodyParts[0].ailments ? bodyParts[0].ailments.length : "undefined");
            console.log("First ailment:", JSON.stringify(bodyParts[0].ailments[0], null, 2));
        } else {
            console.log("No data found");
        }
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

inspect();
