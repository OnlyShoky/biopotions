import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Info } from 'lucide-react';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="min-h-screen bg-pastel-light font-sans text-pastel-text flex flex-col">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-pastel-mint/30">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-pastel-green rounded-full flex items-center justify-center text-white font-serif font-bold text-xl group-hover:scale-110 transition-transform">
                            B
                        </div>
                        <span className="text-2xl font-serif font-bold text-pastel-dark tracking-tight">Biopotions</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className={`hover:text-pastel-green transition-colors font-medium ${location.pathname === '/' ? 'text-pastel-green' : ''}`}>Home</Link>
                        <Link to="/favorites" className={`flex items-center gap-2 hover:text-pastel-green transition-colors font-medium ${location.pathname === '/favorites' ? 'text-pastel-green' : ''}`}>
                            <Heart size={18} /> Favorites
                        </Link>
                        <button className="hover:text-pastel-green transition-colors font-medium flex items-center gap-2">
                            <Info size={18} /> About
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-pastel-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-pastel-mint/30 px-4 py-4 flex flex-col gap-4 shadow-lg">
                        <Link to="/" className="py-2 hover:text-pastel-green" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/favorites" className="py-2 hover:text-pastel-green flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                            <Heart size={18} /> Favorites
                        </Link>
                        <button className="py-2 hover:text-pastel-green flex items-center gap-2 text-left" onClick={() => setIsMenuOpen(false)}>
                            <Info size={18} /> About
                        </button>
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
                    <p>&copy; {new Date().getFullYear()} Biopotions. Natural remedies for a better life.</p>
                    <p className="mt-2 text-xs">Disclaimer: This information is for educational purposes only. Consult a doctor for medical advice.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
