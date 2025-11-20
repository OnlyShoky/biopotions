import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BodyPartCard = ({ name, image, originalName }) => {
    // Use originalName (English) for routing to keep URLs consistent, or use name if you want localized URLs.
    // For simplicity and data lookup, using the English name or ID is safer, but let's stick to the name prop if it's unique enough or pass an ID.
    // Since our data lookup in BodyPartDetails uses the English name (from the URL param), we should link to that.
    // However, the prompt implies we might want localized URLs. 
    // Let's use the `originalName` (English) for the URL to ensure the data lookup works easily without complex reverse mapping.

    return (
        <Link to={`/bodypart/${originalName || name}`} className="block h-full">
            <motion.div
                whileHover={{ y: -8 }}
                className="relative h-full aspect-square rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
                {/* Background color for the card (behind the image) */}
                <div className="absolute inset-0 bg-pastel-mint/20 group-hover:bg-pastel-mint/30 transition-colors duration-500" />

                {/* Full-bleed Image */}
                <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-pastel-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-serif font-medium text-white drop-shadow-md">
                        {name}
                    </h3>
                </div>
            </motion.div>
        </Link>
    );
};

export default BodyPartCard;
