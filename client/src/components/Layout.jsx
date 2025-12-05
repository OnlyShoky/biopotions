import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Info, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import logo from '../assets/logo.png';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { language, changeLanguage } = useLanguage();
    const t = translations[language] || translations['en']; // Fallback to English if translation is missing

    if (!t) return null; // Prevent crash if everything fails

    return (
        <div className="min-h-screen bg-pastel-light font-sans text-pastel-text flex flex-col">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-pastel-mint/30">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img src={logo} alt="Biopotions Logo" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
                        <span className="text-2xl font-serif font-bold text-pastel-dark tracking-tight">{t.app_name}</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className={`hover:text-pastel-green transition-colors font-medium ${location.pathname === '/' ? 'text-pastel-green' : ''}`}>{t.home}</Link>
                        <Link to="/top-ingredients" className={`hover:text-pastel-green transition-colors font-medium ${location.pathname === '/top-ingredients' ? 'text-pastel-green' : ''}`}>{t.top_ingredients}</Link>
                        <Link to="/favorites" className={`flex items-center gap-2 hover:text-pastel-green transition-colors font-medium ${location.pathname === '/favorites' ? 'text-pastel-green' : ''}`}>
                            <Heart size={18} /> {t.favorites}
                        </Link>
                        <Link to="/about" className={`hover:text-pastel-green transition-colors font-medium flex items-center gap-2 ${location.pathname === '/about' ? 'text-pastel-green' : ''}`}>
                            <Info size={18} /> {t.about}
                        </Link>

                        {/* Language Switcher */}
                        <div className="flex items-center gap-2 ml-4 border-l border-pastel-mint/30 pl-4">
                            <Globe size={18} className="text-pastel-mint" />
                            <select
                                value={language}
                                onChange={(e) => changeLanguage(e.target.value)}
                                className="bg-transparent text-sm font-medium text-pastel-text focus:outline-none cursor-pointer"
                            >
                                <option value="en">EN</option>
                                <option value="es">ES</option>
                                <option value="fr">FR</option>
                            </select>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-pastel-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-pastel-mint/30 px-4 py-4 flex flex-col gap-4 shadow-lg">
                        <Link to="/" className="py-2 hover:text-pastel-green" onClick={() => setIsMenuOpen(false)}>{t.home}</Link>
                        <Link to="/top-ingredients" className="py-2 hover:text-pastel-green" onClick={() => setIsMenuOpen(false)}>{t.top_ingredients}</Link>
                        <Link to="/favorites" className="py-2 hover:text-pastel-green flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                            <Heart size={18} /> {t.favorites}
                        </Link>
                        <Link to="/about" className="py-2 hover:text-pastel-green flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                            <Info size={18} /> {t.about}
                        </Link>
                        <div className="py-2 flex items-center gap-2 border-t border-pastel-mint/10 mt-2 pt-4">
                            <Globe size={18} className="text-pastel-mint" />
                            <select
                                value={language}
                                onChange={(e) => changeLanguage(e.target.value)}
                                className="bg-transparent text-sm font-medium text-pastel-text focus:outline-none w-full"
                            >
                                <option value="en">English</option>
                                <option value="es">Español</option>
                                <option value="fr">Français</option>
                            </select>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-pastel-mint/30 py-8 mt-auto">
                <div className="container mx-auto px-4 text-center text-pastel-text/60 text-sm">
                    <p>&copy; {new Date().getFullYear()} {t.footer_text}</p>
                    <p className="mt-2 text-xs">{t.footer_disclaimer}</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
