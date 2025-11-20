import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import AilmentList from '../components/AilmentList';
import { ArrowLeft } from 'lucide-react';

const BodyPartDetails = () => {
    const { name } = useParams();
    const [bodyPart, setBodyPart] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/bodyparts/${name}`);
                setBodyPart(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchDetails();
    }, [name]);

    if (loading) return <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pastel-pink"></div></div>;
    if (!bodyPart) return <div className="text-center py-20">Body part not found</div>;

    return (
        <div className="max-w-3xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-pastel-pink mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-1" /> Back to Home
            </Link>

            <div className="mb-10 text-center">
                <div className="w-20 h-20 bg-pastel-blueLight/30 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    {bodyPart.bodyPart.charAt(0)}
                </div>
                <h1 className="text-3xl font-serif font-bold text-gray-800">
                    {bodyPart.bodyPart} Issues
                </h1>
                <p className="text-gray-500 mt-2">Select an ailment to find remedies</p>
            </div>

            <AilmentList ailments={bodyPart.ailments} />
        </div>
    );
};

export default BodyPartDetails;
