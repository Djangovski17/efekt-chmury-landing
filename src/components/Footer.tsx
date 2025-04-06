
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cloud-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src="/lovable-uploads/36b3f9dc-d4a6-453e-82f2-d3ca53b94def.png"
              alt="Efekt Chmury Logo"
              className="h-12 mr-3"
            />
            <div>
              <h3 className="text-xl font-playfair font-semibold">Efekt Chmury</h3>
              <p className="text-sm text-gray-300">HEAVY SMOKE EFFECT</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#services" className="hover:text-cloud-light transition-colors">
              Usługi
            </a>
            <a href="#about" className="hover:text-cloud-light transition-colors">
              O nas
            </a>
            <a href="#contact" className="hover:text-cloud-light transition-colors">
              Kontakt
            </a>
            <a
              href="https://www.instagram.com/efektchmury/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cloud-light transition-colors flex items-center space-x-2"
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 mb-4 md:mb-0">
            &copy; {currentYear} Efekt Chmury. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Polityka prywatności
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Warunki korzystania
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
