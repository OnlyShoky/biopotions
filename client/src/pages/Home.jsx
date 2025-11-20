import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import BodyPartCard from '../components/BodyPartCard';
import { motion } from 'framer-motion';

const Home = () => {
    const [bodyParts, setBodyParts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBodyParts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/bodyparts');
                setBodyParts(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching body parts", err);
                setLoading(false);
            }
        };
        fetchBodyParts();
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-12 max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                    Natural Remedies for <span className="text-pastel-pink">Everyday Ailments</span>
                </h1>
                <p className="text-gray-500 text-lg">
                    Find gentle, effective home remedies curated for your well-being.
                </p>
            </div>

            <SearchBar />

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pastel-pink"></div>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-5xl"
                >
                    {bodyParts.map((bp) => (
                        <BodyPartCard key={bp._id} name={bp.bodyPart} />
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Home;
