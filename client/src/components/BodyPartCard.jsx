import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BodyPartCard = ({ name }) => {
    // Simple mapping for icons/colors based on name could be added here
    // For now, we use a generic elegant card

    return (
        <Link to={`/bodypart/${name}`}>
            <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-pastel-lavender/30 flex flex-col items-center justify-center gap-4 transition-all cursor-pointer h-48"
            >
                <div className="w-16 h-16 rounded-full bg-pastel-blueLight/30 flex items-center justify-center text-2xl">
                    {/* Placeholder icon - first letter */}
                    {name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-gray-700">{name}</h3>
            </motion.div>
        </Link>
    );
};

export default BodyPartCard;
