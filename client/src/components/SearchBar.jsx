import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useDataFetcher from '../hooks/useDataFetcher';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const SearchBar = () => {
    const { data: bodyParts, ingredients } = useDataFetcher();
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();
    const { language } = useLanguage();
    const t = translations[language];

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query.length < 2) {
                setSuggestions([]);
                return;
            }

            // Filter data
            let matches = [];

            // Search Body Parts and Ailments
            if (bodyParts) {
                bodyParts.forEach(bp => {
                    // Search in the current language
                    if (bp.bodyPart[language].toLowerCase().includes(query.toLowerCase())) {
                        matches.push({ type: t.type_body_part, name: bp.bodyPart[language], link: `/bodypart/${bp.bodyPart.en}` });
                    }
                    bp.ailments?.forEach(a => {
                        if (a.name[language].toLowerCase().includes(query.toLowerCase())) {
                            matches.push({ type: t.type_ailment, name: a.name[language], link: `/ailment/${a.name.en}` });
                        }
                    });
                });
            }

            // Search Ingredients
            if (ingredients) {
                ingredients.forEach(ing => {
                    if (ing.name[language].toLowerCase().includes(query.toLowerCase())) {
                        matches.push({ type: t.type_ingredient, name: ing.name[language], link: `/ingredient/${ing._id}` });
                    }
                });
            }

            setSuggestions(matches.slice(0, 5));
        };

        const timeoutId = setTimeout(() => {
            fetchSuggestions();
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [query, language, bodyParts, ingredients]);

    const handleSearch = (e) => {
        e.preventDefault();
        // Navigate to first suggestion or search results page
        if (suggestions.length > 0) {
            navigate(suggestions[0].link);
        }
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="relative">
                <input
                    type="text"
                    placeholder={t.search_placeholder}
                    className="w-full px-6 py-4 pl-12 rounded-full border-2 border-pastel-mint/50 focus:border-pastel-green focus:outline-none shadow-sm text-lg bg-white/80 backdrop-blur-sm transition-all text-pastel-text placeholder-pastel-text/50"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setShowSuggestions(true);
                    }}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pastel-green" size={20} />
            </form>

            {showSuggestions && suggestions.length > 0 && (
                <div className="absolute w-full mt-2 bg-white rounded-2xl shadow-lg border border-pastel-mint/30 overflow-hidden z-10">
                    {suggestions.map((item, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 hover:bg-pastel-light cursor-pointer flex justify-between items-center group"
                            onClick={() => navigate(item.link)}
                        >
                            <span className="font-medium text-pastel-text group-hover:text-pastel-green transition-colors">{item.name}</span>
                            <span className="text-xs text-pastel-text/60 uppercase tracking-wider">{item.type}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
