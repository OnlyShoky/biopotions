import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import RemedyDetail from '../components/RemedyDetail';
import { ArrowLeft } from 'lucide-react';

const AilmentDetails = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [ailment, setAilment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [ailmentRes, favRes] = await Promise.all([
                    axios.get(`http://localhost:5000/api/ailments/${name}`),
                    axios.get('http://localhost:5000/api/favorites')
                ]);
                setAilment(ailmentRes.data);
                setFavorites(favRes.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchData();
    }, [name]);

    const toggleFavorite = async (remedy) => {
        const isFav = favorites.some(f => f.remedyName === remedy.name && f.ailmentName === ailment.name);

        if (isFav) {
            // Remove
            const fav = favorites.find(f => f.remedyName === remedy.name && f.ailmentName === ailment.name);
            try {
                await axios.delete(`http://localhost:5000/api/favorites/${fav._id}`);
                setFavorites(favorites.filter(f => f._id !== fav._id));
            } catch (err) {
                console.error("Error removing favorite", err);
            }
        } else {
            // Add
            try {
                // We need bodyPart name, but we don't have it directly in ailment object from this endpoint
                // In a real app, we'd pass it or fetch it. For now, let's just put "Unknown" or fetch parent.
                // Actually, the ailment endpoint returns the ailment object.
                // We can just pass "General" or fix the backend to return parent info.
                // For simplicity, I'll just send "General" for now or update backend later.
                const res = await axios.post('http://localhost:5000/api/favorites', {
                    remedyName: remedy.name,
                    ailmentName: ailment.name,
                    bodyPart: "General" // Placeholder
                });
                setFavorites([...favorites, res.data]);
            } catch (err) {
                console.error("Error adding favorite", err);
            }
        }
    };

    if (loading) return <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pastel-pink"></div></div>;
    if (!ailment) return <div className="text-center py-20">Ailment not found</div>;

    return (
        <div className="max-w-3xl mx-auto">
            <button onClick={() => navigate(-1)} className="inline-flex items-center text-gray-400 hover:text-pastel-pink mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-1" /> Back
            </button>

            <div className="mb-10">
                <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
                    {ailment.name}
                </h1>
                <p className="text-gray-500">Natural remedies recommended for this condition.</p>
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
