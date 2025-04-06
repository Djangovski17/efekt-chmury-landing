
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/36b3f9dc-d4a6-453e-82f2-d3ca53b94def.png" 
              alt="Efekt Chmury Logo" 
              className="h-10 md:h-12" 
            />
            <span className={`font-playfair text-lg md:text-xl font-semibold ${isScrolled ? 'text-cloud-dark' : 'text-gray-100'}`}>
              Efekt Chmury
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#services" 
            className={`hover:text-cloud-dark transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            Usługi
          </a>
          <a 
            href="#about" 
            className={`hover:text-cloud-dark transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            O nas
          </a>
          <a 
            href="#contact" 
            className={`hover:text-cloud-dark transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            Kontakt
          </a>
          <a 
            href="https://www.instagram.com/efektchmury/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`hover:text-cloud-dark transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#services"
              className="text-gray-700 hover:text-cloud-dark transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Usługi
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-cloud-dark transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              O nas
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-cloud-dark transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </a>
            <a
              href="https://www.instagram.com/efektchmury/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-cloud-dark transition-colors py-2 flex items-center space-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
