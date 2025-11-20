import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const AilmentList = ({ ailments }) => {
    return (
        <div className="grid gap-4">
            {ailments.map((ailment, index) => (
                <Link to={`/ailment/${ailment.name}`} key={index}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-pastel-lavender/30 hover:border-pastel-pink transition-all flex justify-between items-center group">
                        <h3 className="text-lg font-medium text-gray-700 group-hover:text-pastel-pink transition-colors">{ailment.name}</h3>
                        <ChevronRight className="text-gray-300 group-hover:text-pastel-pink transition-colors" />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default AilmentList;
