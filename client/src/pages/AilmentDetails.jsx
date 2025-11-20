import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RemedyDetail from '../components/RemedyDetail';
import { ArrowLeft } from 'lucide-react';
import { bodyPartsData } from '../data';

const AilmentDetails = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [ailment, setAilment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Load favorites from localStorage
        const storedFavs = JSON.parse(localStorage.getItem('biopotions_favorites') || '[]');
        setFavorites(storedFavs);

        // Find ailment
        setTimeout(() => {
            let foundAilment = null;
            for (const bp of bodyPartsData) {
                const a = bp.ailments.find(item => item.name.toLowerCase() === name.toLowerCase());
                if (a) {
                    foundAilment = a;
                    break;
                }
            }
            setAilment(foundAilment);
            setLoading(false);
        }, 300);
    }, [name]);

    const toggleFavorite = (remedy) => {
        const isFav = favorites.some(f => f.remedyName === remedy.name && f.ailmentName === ailment.name);
        let newFavs;

        if (isFav) {
            // Remove
            newFavs = favorites.filter(f => !(f.remedyName === remedy.name && f.ailmentName === ailment.name));
        } else {
            // Add
            const newFav = {
                _id: Date.now().toString(), // Simple ID generation
                remedyName: remedy.name,
                ailmentName: ailment.name,
                bodyPart: "General", // Simplified
                addedAt: new Date()
            };
            newFavs = [...favorites, newFav];
        }

        setFavorites(newFavs);
        localStorage.setItem('biopotions_favorites', JSON.stringify(newFavs));
    };

    if (loading) return <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pastel-green"></div></div>;

    if (!ailment) return <div className="text-center py-20 text-pastel-text">Ailment not found</div>;

    return (
        <div className="max-w-3xl mx-auto">
            <button onClick={() => navigate(-1)} className="inline-flex items-center text-pastel-text/60 hover:text-pastel-green mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-1" /> Back
            </button>

            <div className="mb-10">
                <h1 className="text-3xl font-serif font-bold text-pastel-dark mb-2">
                    {ailment.name}
                </h1>
                <p className="text-pastel-text opacity-80">Natural remedies recommended for this condition.</p>
            </div>

            <div>
                {ailment.remedies.map((remedy, index) => (
                    <RemedyDetail
                        key={index}
                        remedy={remedy}
                        onToggleFavorite={() => toggleFavorite(remedy)}
                        isFavorite={favorites.some(f => f.remedyName === remedy.name && f.ailmentName === ailment.name)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AilmentDetails;
