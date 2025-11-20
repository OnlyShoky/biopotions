import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import RemedyDetail from '../components/RemedyDetail';
import { bodyPartsData } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const AilmentDetails = () => {
    const { name } = useParams();
    const [ailment, setAilment] = useState(null);
    const [bodyPart, setBodyPart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const { language } = useLanguage();
    const t = translations[language];

    useEffect(() => {
        // Load favorites from local storage
        try {
            const storedFavorites = JSON.parse(localStorage.getItem('biopotions_favorites')) || [];
            // Filter out invalid favorites that don't match the new schema (must have name.en)
            const validFavorites = storedFavorites.filter(fav => fav && fav.name && fav.name.en);

            // If we filtered out items, update localStorage to clean it up
            if (validFavorites.length !== storedFavorites.length) {
                localStorage.setItem('biopotions_favorites', JSON.stringify(validFavorites));
            }

            setFavorites(validFavorites);
        } catch (error) {
            console.error("Error loading favorites:", error);
            setFavorites([]);
            localStorage.removeItem('biopotions_favorites');
        }

        // Simulate API call
        setTimeout(() => {
            let foundAilment = null;
            let foundBodyPart = null;

            // Search through body parts to find the ailment by English name
            for (const bp of bodyPartsData) {
                const found = bp.ailments.find(a => a.name.en === name);
                if (found) {
                    foundAilment = found;
                    foundBodyPart = bp;
                    break;
                }
            }

            setAilment(foundAilment);
            setBodyPart(foundBodyPart);
            setLoading(false);
        }, 300);
    }, [name]);

    const toggleFavorite = (remedy) => {
        let newFavorites;
        const isFav = favorites.some(fav => fav.name.en === remedy.name.en);

        if (isFav) {
            newFavorites = favorites.filter(fav => fav.name.en !== remedy.name.en);
        } else {
            newFavorites = [...favorites, { ...remedy, ailmentName: ailment.name, bodyPartName: bodyPart.bodyPart }];
        }

        setFavorites(newFavorites);
        localStorage.setItem('biopotions_favorites', JSON.stringify(newFavorites));
    };

    if (loading) return (
        <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pastel-green"></div>
        </div>
    );

    if (!ailment) return (
        <div className="text-center py-20">
            <h2 className="text-2xl font-serif text-pastel-dark mb-4">{t.ailment_not_found}</h2>
            <Link to="/" className="text-pastel-green hover:underline">{t.back_to_home}</Link>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto">
            <Link to={`/bodypart/${bodyPart.bodyPart.en}`} className="inline-flex items-center text-pastel-text/60 hover:text-pastel-green mb-6 transition-colors">
                <ArrowLeft size={20} className="mr-2" /> {t.back}
            </Link>

            <div className="mb-10">
                <h1 className="text-4xl font-serif font-bold text-pastel-dark mb-2">{ailment.name[language]}</h1>
                <p className="text-pastel-text opacity-80">{t.remedies_for}</p>
            </div>

            <div className="grid gap-8">
                {ailment.remedies.map((remedy, index) => (
                    <RemedyDetail
                        key={index}
                        remedy={remedy}
                        isFavorite={favorites.some(fav => fav.name && fav.name.en === remedy.name.en)}
                        onToggleFavorite={() => toggleFavorite(remedy)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AilmentDetails;
