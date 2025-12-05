import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ArrowUpDown, Star, Shield, Activity, Trophy, Medal, ChevronRight } from 'lucide-react';
import useDataFetcher from '../hooks/useDataFetcher';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const TopIngredients = () => {
    const { ingredients, loading, error } = useDataFetcher();
    const { language } = useLanguage();
    const t = translations[language] || translations['en'];

    const [sortBy, setSortBy] = useState('versatility'); // 'name', 'versatility', 'safety'
    const [filterCategory, setFilterCategory] = useState('all');

    const categories = useMemo(() => {
        if (!ingredients) return [];
        const cats = new Set(ingredients.map(ing => ing.category));
        return ['all', ...Array.from(cats)];
    }, [ingredients]);

    const filteredAndSortedIngredients = useMemo(() => {
        if (!ingredients) return [];

        let result = [...ingredients];

        // Filter
        if (filterCategory !== 'all') {
            result = result.filter(ing => ing.category === filterCategory);
        }

        // Sort
        result.sort((a, b) => {
            if (sortBy === 'name') {
                return a.name[language].localeCompare(b.name[language]);
            } else if (sortBy === 'versatility') {
                return (b.versatilityScore || 0) - (a.versatilityScore || 0);
            } else if (sortBy === 'safety') {
                return (a.safetyRating || 0) - (b.safetyRating || 0);
            }
            return 0;
        });

        return result;
    }, [ingredients, filterCategory, sortBy, language]);

    const getRankStyle = (index) => {
        if (index === 0) return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-400 shadow-yellow-200/50';
        if (index === 1) return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300 shadow-gray-200/50';
        if (index === 2) return 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-300 shadow-orange-200/50';
        return 'bg-white border-pastel-mint/20 hover:border-pastel-green/50';
    };

    const getRankIcon = (index) => {
        if (index === 0) return <Trophy className="text-yellow-500 fill-yellow-500" size={24} />;
        if (index === 1) return <Medal className="text-gray-400 fill-gray-400" size={24} />;
        if (index === 2) return <Medal className="text-orange-400 fill-orange-400" size={24} />;
        return <span className="text-pastel-text/50 font-bold w-6 text-center">{index + 1}</span>;
    };

    if (loading) return <div className="text-center py-12 text-pastel-text">{t.loading || 'Loading...'}</div>;
    if (error) return <div className="text-center py-12 text-red-500">{t.error || 'Error loading data'}</div>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-pastel-dark mb-2 text-center">{t.top_ingredients}</h1>
            <p className="text-center text-pastel-text/80 mb-10 max-w-2xl mx-auto">
                {t.hero_subtitle}
            </p>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 bg-white p-4 rounded-xl shadow-sm border border-pastel-mint/20">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Filter size={20} className="text-pastel-green" />
                    <span className="font-medium text-pastel-text hidden sm:inline">{t.filter_by_category}:</span>
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="bg-pastel-light/50 border border-pastel-mint/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-green/50 flex-grow sm:flex-grow-0 capitalize"
                    >
                        <option value="all">{t.all_categories}</option>
                        {categories.filter(c => c !== 'all').map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <ArrowUpDown size={20} className="text-pastel-green" />
                    <span className="font-medium text-pastel-text hidden sm:inline">{t.sort_by}:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-pastel-light/50 border border-pastel-mint/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-green/50 flex-grow sm:flex-grow-0"
                    >
                        <option value="versatility">{t.versatility_desc}</option>
                        <option value="name">{t.name_asc}</option>
                        <option value="safety">{t.safety_asc}</option>
                    </select>
                </div>
            </div>

            {/* List View */}
            <div className="flex flex-col gap-4">
                {filteredAndSortedIngredients.map((ingredient, index) => (
                    <Link
                        to={`/ingredient/${ingredient._id}`}
                        key={ingredient._id}
                        className={`group relative flex items-center p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${getRankStyle(index)}`}
                    >
                        {/* Rank / Icon */}
                        <div className="flex-shrink-0 mr-4 w-10 flex justify-center">
                            {getRankIcon(index)}
                        </div>

                        {/* Content */}
                        <div className="flex-grow grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

                            {/* Name & Category */}
                            <div className="md:col-span-4">
                                <h3 className="text-lg font-serif font-bold text-pastel-dark group-hover:text-pastel-green transition-colors">
                                    {ingredient.name[language]}
                                </h3>
                                <span className="text-xs font-medium text-pastel-text/60 uppercase tracking-wider">
                                    {ingredient.category}
                                </span>
                            </div>

                            {/* Description (Desktop only) */}
                            <div className="hidden md:block md:col-span-4 text-sm text-pastel-text/70 truncate">
                                {ingredient.description[language]}
                            </div>

                            {/* Stats */}
                            <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-6">
                                {/* Versatility */}
                                {ingredient.versatilityScore && (
                                    <div className="flex flex-col items-end">
                                        <span className="text-[10px] uppercase text-pastel-text/50 font-bold">{t.versatility_score?.split(' ')[0] || 'Versatility'}</span>
                                        <div className="flex items-center gap-1">
                                            <Activity size={14} className="text-pastel-green" />
                                            <span className="font-bold text-pastel-dark">{ingredient.versatilityScore}/10</span>
                                        </div>
                                    </div>
                                )}

                                {/* Safety */}
                                {ingredient.safetyRating && (
                                    <div className="flex flex-col items-end">
                                        <span className="text-[10px] uppercase text-pastel-text/50 font-bold">{t.safety_rating?.split(' ')[0] || 'Safety'}</span>
                                        <div className="flex items-center gap-1">
                                            <Shield size={14} className="text-blue-400" />
                                            <span className="font-bold text-pastel-dark">{ingredient.safetyRating}/5</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="ml-4 text-pastel-green opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300">
                            <ChevronRight size={24} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TopIngredients;
