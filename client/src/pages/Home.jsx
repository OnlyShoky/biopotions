import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import BodyPartCard from '../components/BodyPartCard';
import { motion } from 'framer-motion';
import { bodyPartsData } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

import SEO from '../components/SEO';

const Home = () => {
    const [bodyParts, setBodyParts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { language } = useLanguage();
    const t = translations[language];

    useEffect(() => {
        // Simulate loading for a smoother feel
        setTimeout(() => {
            setBodyParts(bodyPartsData);
            setLoading(false);
        }, 500);
    }, []);

    return (
        <div className="flex flex-col items-center">
            <SEO
                title={t.home}
                description={t.hero_subtitle}
            />
            <div className="text-center mb-12 max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-pastel-dark mb-4">
                    {t.hero_title_prefix} <span className="text-pastel-green">{t.hero_title_highlight}</span>
                </h1>
                <p className="text-pastel-text text-lg opacity-80">
                    {t.hero_subtitle}
                </p>
            </div>

            <SearchBar />

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pastel-green"></div>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-5xl"
                >
                    {bodyParts.map((bp) => (
                        <BodyPartCard key={bp._id} name={bp.bodyPart[language]} image={bp.image} originalName={bp.bodyPart.en} />
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Home;
