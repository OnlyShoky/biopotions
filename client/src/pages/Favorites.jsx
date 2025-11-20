import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight } from 'lucide-react';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load from localStorage
        setTimeout(() => {
            const storedFavs = JSON.parse(localStorage.getItem('biopotions_favorites') || '[]');
            setFavorites(storedFavs);
            setLoading(false);
        }, 300);
    }, []);

    const removeFavorite = (id) => {
        const newFavs = favorites.filter(f => f._id !== id);
        setFavorites(newFavs);
        localStorage.setItem('biopotions_favorites', JSON.stringify(newFavs));
    };

    if (loading) return <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pastel-green"></div></div>;

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-serif font-bold text-pastel-dark mb-8 text-center">Your Saved Remedies</h1>

            {favorites.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-pastel-mint/30">
                    <p className="text-pastel-text/60 mb-6">You haven't saved any remedies yet.</p>
                    <Link to="/" className="bg-pastel-green text-white px-6 py-3 rounded-full hover:bg-pastel-dark transition-colors inline-flex items-center gap-2">
                        Explore Remedies <ArrowRight size={18} />
                    </Link>
                </div>
            ) : (
                <div className="grid gap-4">
                    {favorites.map((fav) => (
                        <div key={fav._id} className="bg-white p-6 rounded-xl shadow-sm border border-pastel-mint/30 flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-medium text-pastel-dark">{fav.remedyName}</h3>
                                <p className="text-pastel-text/60 text-sm">For: <span className="text-pastel-green font-medium">{fav.ailmentName}</span></p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link to={`/ailment/${fav.ailmentName}`} className="text-pastel-green hover:text-pastel-dark text-sm font-medium">
                                    View Details
                                </Link>
                                <button
                                    onClick={() => removeFavorite(fav._id)}
                                    className="p-2 text-pastel-text/40 hover:text-red-400 transition-colors"
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
