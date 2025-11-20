import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import SEO from '../components/SEO';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const { language } = useLanguage();
    const t = translations[language];

    useEffect(() => {
        try {
            const storedFavorites = JSON.parse(localStorage.getItem('biopotions_favorites')) || [];
            // Filter out invalid favorites
            const validFavorites = storedFavorites.filter(fav => fav && fav.name && fav.name.en);

            if (validFavorites.length !== storedFavorites.length) {
                localStorage.setItem('biopotions_favorites', JSON.stringify(validFavorites));
            }

            setFavorites(validFavorites);
        } catch (error) {
            console.error("Error loading favorites:", error);
            setFavorites([]);
        }
    }, []);

    const removeFavorite = (remedyNameEn) => {
        const newFavorites = favorites.filter(fav => fav.name.en !== remedyNameEn);
        setFavorites(newFavorites);
        localStorage.setItem('biopotions_favorites', JSON.stringify(newFavorites));
    };

    return (
        <div className="max-w-4xl mx-auto">
            <SEO
                title={t.favorites}
                description="Your saved natural remedies."
            />
            <h1 className="text-4xl font-serif font-bold text-pastel-dark mb-8 flex items-center gap-3">
                <Heart className="text-pastel-green fill-pastel-green" size={32} />
                {t.saved_remedies}
            </h1>

            {favorites.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-3xl border border-pastel-mint/30">
                    <div className="w-16 h-16 bg-pastel-light rounded-full flex items-center justify-center mx-auto mb-4 text-pastel-green">
                        <Heart size={32} />
                    </div>
                    <h3 className="text-xl font-medium text-pastel-dark mb-2">{t.no_saved_remedies}</h3>
                    <Link to="/" className="text-pastel-green font-medium hover:underline">{t.explore_remedies}</Link>
                </div>
            ) : (
                <div className="grid gap-6">
                    {favorites.map((fav, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-pastel-mint/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h3 className="text-xl font-serif font-bold text-pastel-dark mb-1">{fav.name[language]}</h3>
                                <p className="text-sm text-pastel-text/60 mb-2">
                                    {t.for} <span className="text-pastel-green font-medium">{fav.ailmentName[language]}</span> • {fav.bodyPartName[language]}
                                </p>
                                <p className="text-pastel-text line-clamp-2">{fav.description[language]}</p>
                            </div>

                            <div className="flex items-center gap-3 w-full md:w-auto">
                                <Link
                                    to={`/ailment/${fav.ailmentName.en}`}
                                    className="flex-1 md:flex-none px-4 py-2 bg-pastel-light text-pastel-dark rounded-lg text-sm font-medium hover:bg-pastel-green hover:text-white transition-colors text-center"
                                >
                                    {t.view_details}
                                </Link>
                                <button
                                    onClick={() => removeFavorite(fav.name.en)}
                                    className="p-2 text-pastel-text/40 hover:text-red-400 transition-colors"
                                    title={t.remove_favorite}
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
