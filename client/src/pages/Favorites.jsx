import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight } from 'lucide-react';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/favorites');
                setFavorites(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchFavorites();
    }, []);

    const removeFavorite = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/favorites/${id}`);
            setFavorites(favorites.filter(f => f._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) return <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pastel-pink"></div></div>;

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">Your Saved Remedies</h1>

            {favorites.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-pastel-lavender/30">
                    <p className="text-gray-500 mb-6">You haven't saved any remedies yet.</p>
                    <Link to="/" className="bg-pastel-pink text-white px-6 py-3 rounded-full hover:bg-pink-300 transition-colors inline-flex items-center gap-2">
                        Explore Remedies <ArrowRight size={18} />
                    </Link>
                </div>
            ) : (
                <div className="grid gap-4">
                    {favorites.map((fav) => (
                        <div key={fav._id} className="bg-white p-6 rounded-xl shadow-sm border border-pastel-lavender/30 flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-medium text-gray-800">{fav.remedyName}</h3>
                                <p className="text-gray-500 text-sm">For: <span className="text-pastel-pink font-medium">{fav.ailmentName}</span></p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link to={`/ailment/${fav.ailmentName}`} className="text-pastel-blueLight hover:text-blue-400 text-sm font-medium">
                                    View Details
                                </Link>
                                <button
                                    onClick={() => removeFavorite(fav._id)}
                                    className="p-2 text-gray-300 hover:text-red-400 transition-colors"
                                    title="Remove from favorites"
                                >
                                    <Trash2 size={18} />
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
