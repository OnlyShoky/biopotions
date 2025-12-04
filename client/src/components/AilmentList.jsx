import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AilmentList = ({ ailments = [] }) => {
    const { language } = useLanguage();

    return (
        <div className="grid gap-4">
            {ailments.map((ailment, index) => (
                <Link to={`/ailment/${ailment.name.en}`} key={index} className="block">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-pastel-mint/30 hover:border-pastel-green transition-all flex justify-between items-center group">
                        <h3 className="text-lg font-medium text-pastel-dark group-hover:text-pastel-green transition-colors">{ailment.name[language]}</h3>
                        <ChevronRight className="text-pastel-mint group-hover:text-pastel-green transition-colors" />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default AilmentList;
