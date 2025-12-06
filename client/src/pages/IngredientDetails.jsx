import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import useDataFetcher from '../hooks/useDataFetcher';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import SEO from '../components/SEO';
import { ingredientsData as localIngredients } from '../data';
import { ENABLE_BACKEND } from '../config';

const IngredientDetails = () => {
    const { id } = useParams();
    const [ingredient, setIngredient] = useState(null);
    const [loading, setLoading] = useState(true);
    const { language } = useLanguage();
    const t = translations[language];

    useEffect(() => {
        const fetchIngredient = async () => {
            if (ENABLE_BACKEND) {
                try {
                    const response = await fetch(`http://localhost:5000/api/ingredients/${id}`);
                    if (response.ok) {
                        const data = await response.json();
                        setIngredient(data);
                    } else {
                        // Fallback to local if not found or error
                        const found = localIngredients.find(i => i._id === id);
                        setIngredient(found);
                    }
                } catch (err) {
                    console.warn('Failed to fetch ingredient from backend, using local:', err);
                    const found = localIngredients.find(i => i._id === id);
                    setIngredient(found);
                }
            } else {
                const found = localIngredients.find(i => i._id === id);
                setIngredient(found);
            }
            setLoading(false);
        };

        fetchIngredient();
    }, [id]);

    if (loading) return (
        <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pastel-green"></div>
        </div>
    );

    if (!ingredient) return (
        <div className="text-center py-20">
            <h2 className="text-2xl font-serif text-pastel-dark mb-4">Ingredient Not Found</h2>
            <Link to="/" className="text-pastel-green hover:underline">{t.back_to_home}</Link>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto px-4">
            <SEO
                title={`${ingredient.name[language]} - ${t.app_name}`}
                description={ingredient.description[language]}
            />

            <button onClick={() => window.history.back()} className="inline-flex items-center text-pastel-text/60 hover:text-pastel-green mb-6 transition-colors">
                <ArrowLeft size={20} className="mr-2" /> {t.back}
            </button>

            <div className="bg-white rounded-3xl shadow-sm p-8 border border-pastel-green/10">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Content Section */}
                    <div className="w-full">
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                            <h1 className="text-3xl font-serif font-bold text-pastel-dark">{ingredient.name[language]}</h1>
                            <span className="text-sm font-mono text-pastel-text/60 italic">{ingredient.scientificName}</span>
                        </div>

                        <div className="flex gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-pastel-green/10 text-pastel-green uppercase tracking-wider">
                                {ingredient.category}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 uppercase tracking-wider">
                                Safety: {ingredient.safetyRating}/5
                            </span>
                        </div>

                        <p className="text-pastel-text mb-6 leading-relaxed">
                            {ingredient.description[language]}
                        </p>

                        {/* Properties */}
                        {ingredient.properties && ingredient.properties.length > 0 && (
                            <div className="mb-6">
                                <h3 className="font-serif font-bold text-pastel-dark mb-3">Key Properties</h3>
                                <div className="grid gap-3">
                                    {ingredient.properties.map((prop, idx) => (
                                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center p-3 rounded-xl bg-pastel-cream/30">
                                            <div className="font-bold text-pastel-green mr-2 mb-1 sm:mb-0 min-w-[120px]">{prop.property[language]}:</div>
                                            <div className="text-pastel-text text-sm">{prop.description[language]}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Dosage */}
                        <div className="mb-6">
                            <h3 className="font-serif font-bold text-pastel-dark mb-2">Recommended Dosage</h3>
                            <p className="text-pastel-text">{ingredient.dosage[language]}</p>
                        </div>

                        {/* Sources & References */}
                        {(ingredient.tags || (ingredient.sources && ingredient.sources.length > 0)) && (
                            <div className="mb-6 pt-4 border-t border-pastel-green/10">
                                <h3 className="font-serif font-bold text-pastel-dark mb-3">Sources & References</h3>

                                {/* Tags */}
                                {ingredient.tags && ingredient.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {ingredient.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600 capitalize">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Sources List */}
                                {ingredient.sources && ingredient.sources.length > 0 && (
                                    <ul className="space-y-2">
                                        {ingredient.sources.map((source, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-pastel-text/80">
                                                <span className="w-1.5 h-1.5 rounded-full bg-pastel-green mt-1.5 mr-2 flex-shrink-0"></span>
                                                <span>
                                                    <span className="font-medium capitalize">{source.type}:</span> {source.source}
                                                    {source.url && (
                                                        <a
                                                            href={source.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="ml-2 text-pastel-green hover:underline inline-flex items-center"
                                                        >
                                                            Ref ↗
                                                        </a>
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}

                        {/* Warnings */}
                        {ingredient.warnings && ingredient.warnings[language] && (
                            <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-start">
                                <AlertTriangle size={20} className="text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                                <p className="text-red-700 text-sm">{ingredient.warnings[language]}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IngredientDetails;
