import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import SEO from '../components/SEO';

const About = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className="max-w-4xl mx-auto">
            <SEO
                title={t.about}
                description="Learn more about Biopotions, your trusted source for natural home remedies."
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-pastel-dark mb-6">{t.about} {t.app_name}</h1>
                <p className="text-xl text-pastel-text max-w-2xl mx-auto leading-relaxed">
                    We believe in the power of nature to heal and restore. Our mission is to make traditional knowledge about natural remedies accessible to everyone.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-pastel-mint/30 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-pastel-light rounded-full flex items-center justify-center mx-auto mb-6 text-pastel-green">
                        <Leaf size={32} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-pastel-dark mb-3">Natural Ingredients</h3>
                    <p className="text-pastel-text/80">We focus on remedies using simple, natural ingredients found in your kitchen or garden.</p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-pastel-mint/30 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-pastel-light rounded-full flex items-center justify-center mx-auto mb-6 text-pastel-green">
                        <ShieldCheck size={32} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-pastel-dark mb-3">Safe & Gentle</h3>
                    <p className="text-pastel-text/80">Our curated remedies are chosen for their safety and gentle effectiveness for everyday ailments.</p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-pastel-mint/30 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-pastel-light rounded-full flex items-center justify-center mx-auto mb-6 text-pastel-green">
                        <Heart size={32} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-pastel-dark mb-3">Holistic Wellness</h3>
                    <p className="text-pastel-text/80">We promote a holistic approach to health, caring for both the body and the mind.</p>
                </div>
            </div>

            <div className="bg-pastel-green/10 rounded-3xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-serif font-bold text-pastel-dark mb-4">Disclaimer</h2>
                <p className="text-pastel-text/80 max-w-3xl mx-auto">
                    The information provided on Biopotions is for educational purposes only and does not substitute professional medical advice. Always consult with a healthcare provider for any medical concerns or before trying new remedies, especially if you have existing conditions or are pregnant.
                </p>
            </div>
        </div>
    );
};

export default About;
