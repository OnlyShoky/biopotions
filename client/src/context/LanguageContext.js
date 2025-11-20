import React, { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const storedLang = localStorage.getItem('biopotions_language');
        const supportedLanguages = ['en', 'es', 'fr'];
        if (storedLang && supportedLanguages.includes(storedLang)) {
            setLanguage(storedLang);
        } else {
            // If invalid or missing, default to 'en' and clean up
            setLanguage('en');
            localStorage.setItem('biopotions_language', 'en');
        }
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('biopotions_language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
