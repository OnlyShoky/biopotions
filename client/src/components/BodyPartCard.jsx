import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BodyPartCard = ({ name, image }) => {
    // Find image from data if passed, or use a fallback/lookup if needed. 
    // In Home.jsx we map over bodyParts which now have the image property.
    // We need to update Home.jsx to pass the image prop, or just pass the whole object.
    // Let's assume Home.jsx passes the image prop now.

    return (
        <Link to={`/bodypart/${name}`}>
            <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(116, 198, 157, 0.3)" }}
                className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 border border-pastel-mint/30 shadow-sm hover:border-pastel-green/50 transition-all h-full aspect-square"
            >
                <div className="w-24 h-24 flex items-center justify-center">
                    <img src={image} alt={name} className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-serif font-medium text-pastel-dark">{name}</h3>
            </motion.div>
        </Link>
    );
};

export default BodyPartCard;
