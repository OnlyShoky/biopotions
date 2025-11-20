import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Info, Search, Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col bg-pastel-cream transition-colors duration-300">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-pastel-lavender/30 shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-pastel-text tracking-tight flex items-center gap-2">
                        <span className="bg-pastel-pink w-8 h-8 rounded-full flex items-center justify-center text-white">B</span>
                        Biopotions
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        <Link to="/" className={`hover:text-pastel-pink transition-colors ${location.pathname === '/' ? 'text-pastel-pink font-medium' : ''}`}>Home</Link>
                        <Link to="/favorites" className={`flex items-center gap-1 hover:text-pastel-pink transition-colors ${location.pathname === '/favorites' ? 'text-pastel-pink font-medium' : ''}`}>
                            <Heart size={18} /> Favorites
                        </Link>
                        <button className="flex items-center gap-1 hover:text-pastel-pink transition-colors">
                            <Info size={18} /> About
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-pastel-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-pastel-lavender/30 px-4 py-4 flex flex-col gap-4">
                        <Link to="/" className="block py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/favorites" className="block py-2 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                            <Heart size={18} /> Favorites
                        </Link>
                        <button className="text-left py-2 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                            <Info size={18} /> About
                        </button>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white/50 border-t border-pastel-lavender/30 py-6 mt-auto">
                <div className="container mx-auto px-4 text-center text-sm text-gray-500">
                    <p>&copy; 2025 Biopotions. Natural Home Remedies.</p>
                    <p className="mt-2 text-xs">Disclaimer: This information does not replace professional medical advice.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
