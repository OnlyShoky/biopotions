import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AilmentList from '../components/AilmentList';
import { ArrowLeft } from 'lucide-react';
import { bodyPartsData } from '../data';

const BodyPartDetails = () => {
    const { name } = useParams();
    const [bodyPart, setBodyPart] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        setTimeout(() => {
            const found = bodyPartsData.find(bp => bp.bodyPart.toLowerCase() === name.toLowerCase());
            setBodyPart(found);
            setLoading(false);
        }, 300);
    }, [name]);

    if (loading) return <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pastel-green"></div></div>;

    if (!bodyPart) return <div className="text-center py-20 text-pastel-text">Body part not found</div>;

    return (
        <div className="max-w-3xl mx-auto">
            <Link to="/" className="inline-flex items-center text-pastel-text/60 hover:text-pastel-green mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-1" /> Back to Home
            </Link>

            <div className="mb-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                    <img src={bodyPart.image} alt={bodyPart.bodyPart} className="w-full h-full object-contain" />
                </div>
                <h1 className="text-3xl font-serif font-bold text-pastel-dark">
                    {bodyPart.bodyPart} Issues
                </h1>
                <p className="text-pastel-text opacity-80 mt-2">Select an ailment to find remedies</p>
            </div>

            <AilmentList ailments={bodyPart.ailments} />
        </div>
    );
};

export default BodyPartDetails;
