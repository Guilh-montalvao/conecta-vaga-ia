
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4", 
        scrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-conecta-blue flex items-center">
          <span className="bg-conecta-blue text-white px-2 py-1 rounded mr-1">C</span>
          onectaIDP
        </Link>
        <div className="hidden md:flex space-x-8">
          <a href="#problem" className="text-gray-600 hover:text-conecta-blue transition-colors">O Problema</a>
          <a href="#solution" className="text-gray-600 hover:text-conecta-blue transition-colors">Nossa Solução</a>
          <a href="#howworks" className="text-gray-600 hover:text-conecta-blue transition-colors">Como Funciona</a>
          <a href="#about" className="text-gray-600 hover:text-conecta-blue transition-colors">Sobre</a>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-conecta-blue hover:text-blue-700 transition-colors">
            Entrar
          </Link>
          <Link to="/register" className="bg-conecta-blue text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Registrar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
