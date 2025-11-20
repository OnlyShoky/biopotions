import React from 'react';
import { Heart } from 'lucide-react';

const RemedyDetail = ({ remedy, onToggleFavorite, isFavorite }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-pastel-mint/30 mb-6">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif font-bold text-pastel-dark">{remedy.name}</h3>
                <button
                    onClick={onToggleFavorite}
                    className={`p-2 rounded-full transition-colors ${isFavorite ? 'bg-pastel-green text-white' : 'bg-pastel-light text-pastel-text/40 hover:bg-pastel-green/20 hover:text-pastel-green'}`}
                >
                    <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
                </button>
            </div>

            <div className="space-y-4">
                <div>
                    <h4 className="text-sm font-bold text-pastel-text/40 uppercase tracking-wider mb-1">Why it works</h4>
                    <p className="text-pastel-text leading-relaxed">{remedy.description}</p>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-pastel-text/40 uppercase tracking-wider mb-1">Preparation</h4>
                    <p className="text-pastel-text leading-relaxed">{remedy.preparation}</p>
                </div>

                {remedy.warnings && (
                    <div className="bg-pastel-yellow/30 p-4 rounded-xl border border-pastel-yellow">
                        <h4 className="text-sm font-bold text-yellow-700 uppercase tracking-wider mb-1">Note</h4>
                        <p className="text-yellow-800 text-sm">{remedy.warnings}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RemedyDetail;
