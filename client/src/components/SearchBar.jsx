import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query.length < 2) {
                setSuggestions([]);
                return;
            }
            try {
                // In a real app, we'd have a dedicated search endpoint.
                // For now, we'll fetch all body parts and filter client-side or use the bodyparts endpoint.
                // Let's just fetch all body parts for now and filter.
                const res = await axios.get('http://localhost:5000/api/bodyparts');
                const bodyParts = res.data;

                // Flatten ailments to search them too
                let matches = [];
                bodyParts.forEach(bp => {
                    if (bp.bodyPart.toLowerCase().includes(query.toLowerCase())) {
                        matches.push({ type: 'Body Part', name: bp.bodyPart, link: `/bodypart/${bp.bodyPart}` });
                    }
                    bp.ailments.forEach(a => {
                        if (a.name.toLowerCase().includes(query.toLowerCase())) {
                            matches.push({ type: 'Ailment', name: a.name, link: `/ailment/${a.name}` });
                        }
                    });
                });
                setSuggestions(matches.slice(0, 5));
            } catch (err) {
                console.error("Error fetching suggestions", err);
            }
        };

        const timeoutId = setTimeout(() => {
            fetchSuggestions();
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [query]);

    const handleSearch = (e) => {
        e.preventDefault();
        // Navigate to first suggestion or search results page (not implemented yet)
        if (suggestions.length > 0) {
            navigate(suggestions[0].link);
        }
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="relative">
                <input
                    type="text"
                    placeholder="Search for a body part or ailment..."
                    className="w-full px-6 py-4 pl-12 rounded-full border-2 border-pastel-lavender/50 focus:border-pastel-pink focus:outline-none shadow-sm text-lg bg-white/80 backdrop-blur-sm transition-all"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setShowSuggestions(true);
                    }}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </form>

            {showSuggestions && suggestions.length > 0 && (
                <div className="absolute w-full mt-2 bg-white rounded-2xl shadow-lg border border-pastel-lavender/30 overflow-hidden z-10">
                    {suggestions.map((item, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 hover:bg-pastel-cream cursor-pointer flex justify-between items-center group"
                            onClick={() => navigate(item.link)}
                        >
                            <span className="font-medium text-gray-700 group-hover:text-pastel-pink transition-colors">{item.name}</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wider">{item.type}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
