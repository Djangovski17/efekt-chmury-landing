import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur shadow-sm py-4' : 'py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/3e2d4671-db0f-4dce-92fb-cb9b6dfea73f.png" 
            alt="Efekt Chmury Logo" 
            className="h-12 mr-3"
          />
          <span className={`font-playfair text-xl font-semibold ${isScrolled ? 'text-cloud-dark' : 'text-white'}`}>
            Efekt Chmury
          </span>
        </a>

        {!isMobile ? (
          <div className="flex items-center">
            <a href="#services" className={`mx-6 ${isScrolled ? 'text-gray-800' : 'text-white'} font-medium hover:text-cloud-dark transition-colors`}>
              Usługi
            </a>
            <a href="#about" className={`mx-6 ${isScrolled ? 'text-gray-800' : 'text-white'} font-medium hover:text-cloud-dark transition-colors`}>
              O nas
            </a>
            <a href="#contact" className={`mx-6 ${isScrolled ? 'text-gray-800' : 'text-white'} font-medium hover:text-cloud-dark transition-colors`}>
              Kontakt
            </a>
            <a 
              href="https://www.instagram.com/efektchmury/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`ml-6 ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-cloud-dark transition-colors`}
            >
              <Instagram size={20} />
            </a>
          </div>
        ) : (
          <button
            onClick={toggleMobileMenu}
            className={`${isScrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {isMobile && (
        <div className={`absolute w-full bg-white shadow-md transition-all duration-300 ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col">
              <a 
                href="#services" 
                className="py-3 border-b border-gray-100 text-gray-800 hover:text-cloud-dark"
                onClick={closeMobileMenu}
              >
                Usługi
              </a>
              <a 
                href="#about" 
                className="py-3 border-b border-gray-100 text-gray-800 hover:text-cloud-dark"
                onClick={closeMobileMenu}
              >
                O nas
              </a>
              <a 
                href="#contact" 
                className="py-3 border-b border-gray-100 text-gray-800 hover:text-cloud-dark"
                onClick={closeMobileMenu}
              >
                Kontakt
              </a>
              <a 
                href="https://www.instagram.com/efektchmury/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-3 flex items-center text-gray-800 hover:text-cloud-dark"
                onClick={closeMobileMenu}
              >
                <Instagram size={18} className="mr-2" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
