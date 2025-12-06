import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AilmentList from '../components/AilmentList';
import useDataFetcher from '../hooks/useDataFetcher';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

import SEO from '../components/SEO';

const BodyPartDetails = () => {
    const { name } = useParams();
    const { data: bodyParts, loading: dataLoading } = useDataFetcher();
    const [bodyPart, setBodyPart] = useState(null);
    const [loading, setLoading] = useState(true);
    const { language } = useLanguage();
    const t = translations[language];

    useEffect(() => {
        if (!dataLoading && bodyParts.length > 0) {
            // Find by English name (since URL uses English name)
            const found = bodyParts.find(bp => bp.bodyPart.en === name);
            setBodyPart(found);
            setLoading(false);
        }
    }, [name, bodyParts, dataLoading]);

    if (loading) return (
        <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pastel-green"></div>
        </div>
    );

    if (!bodyPart) return (
        <div className="text-center py-20">
            <h2 className="text-2xl font-serif text-pastel-dark mb-4">{t.body_part_not_found}</h2>
            <Link to="/" className="text-pastel-green hover:underline">{t.back_to_home}</Link>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto">
            <SEO
                title={`${bodyPart.bodyPart[language]} - ${t.app_name}`}
                description={`Natural remedies for ${bodyPart.bodyPart[language]} ailments.`}
                image={bodyPart.image}
            />
            <Link to="/" className="inline-flex items-center text-pastel-text/60 hover:text-pastel-green mb-6 transition-colors">
                <ArrowLeft size={20} className="mr-2" /> {t.back}
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                <div className="w-full md:w-1/3 aspect-square bg-white rounded-3xl border border-pastel-mint/30 shadow-sm flex items-center justify-center overflow-hidden">
                    <img src={bodyPart.image} alt={bodyPart.bodyPart[language]} className="w-full h-full object-cover object-center scale-125" />
                </div>

                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-pastel-dark mb-4">{bodyPart.bodyPart[language]}</h1>
                    <p className="text-lg text-pastel-text mb-8">{t.select_ailment}</p>

                    <AilmentList ailments={bodyPart.ailments} />
                </div>
            </div>
        </div>
    );
};

export default BodyPartDetails;
