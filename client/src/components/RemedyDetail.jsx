import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const RemedyDetail = ({ remedy, onToggleFavorite, isFavorite }) => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-pastel-mint/30 mb-6">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif font-bold text-pastel-dark">{remedy.name[language]}</h3>
                <button
                    onClick={onToggleFavorite}
                    className={`p-2 rounded-full transition-colors ${isFavorite ? 'bg-pastel-green text-white' : 'bg-pastel-light text-pastel-text/40 hover:bg-pastel-green/20 hover:text-pastel-green'}`}
                >
                    <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
                </button>
            </div>

            <div className="space-y-4">
                <div>
                    <h4 className="text-sm font-bold text-pastel-text/40 uppercase tracking-wider mb-1">{t.why_it_works}</h4>
                    <p className="text-pastel-text leading-relaxed">{remedy.description[language]}</p>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-pastel-text/40 uppercase tracking-wider mb-1">{t.preparation}</h4>
                    <p className="text-pastel-text leading-relaxed">{remedy.preparation[language]}</p>
                </div>

                {/* Ingredients Section */}
                {remedy.ingredients && remedy.ingredients.length > 0 && (
                    <div>
                        <h4 className="text-sm font-bold text-pastel-text/40 uppercase tracking-wider mb-2">Ingredients</h4>
                        <div className="flex flex-wrap gap-2">
                            {remedy.ingredients.map((ing, idx) => {
                                const ingredientData = ing.ingredientId;
                                // Handle case where ingredientId might be populated object or just ID (though we try to hydrate)
                                const name = ingredientData.name ? ingredientData.name[language] : 'Unknown Ingredient';
                                const id = ingredientData._id || ingredientData;

                                return (
                                    <Link
                                        key={idx}
                                        to={`/ingredient/${id}`}
                                        className="inline-flex items-center px-3 py-1 rounded-full bg-pastel-green/10 text-pastel-green hover:bg-pastel-green/20 transition-colors text-sm font-medium"
                                    >
                                        {name}
                                        {ing.quantity && <span className="ml-1 opacity-70 text-xs">({ing.quantity[language]})</span>}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}

                {remedy.warnings && (
                    <div className="bg-pastel-yellow/30 p-4 rounded-xl border border-pastel-yellow">
                        <h4 className="text-sm font-bold text-yellow-700 uppercase tracking-wider mb-1">{t.note}</h4>
                        <p className="text-yellow-800 text-sm">{remedy.warnings[language]}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RemedyDetail;
