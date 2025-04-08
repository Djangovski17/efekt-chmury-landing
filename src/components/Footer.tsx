
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
              src="/lovable-uploads/3e2d4671-db0f-4dce-92fb-cb9b6dfea73f.png" 
              alt="Efekt Chmury Logo" 
              className="h-12 mr-3"
            />
            <div className="flex flex-col">
              <div className="font-playfair text-xl font-semibold">Efekt Chmury</div>
              <div className="text-xs text-white/70">HEAVY SMOKE EFFECT</div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="#services" className="text-white hover:text-cloud-light transition-colors">
              Usługi
            </a>
            <a href="#about" className="text-white hover:text-cloud-light transition-colors">
              O nas
            </a>
            <a href="#contact" className="text-white hover:text-cloud-light transition-colors">
              Kontakt
            </a>
            <a
              href="https://www.instagram.com/efektchmury/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-cloud-light transition-colors"
            >
              <Instagram size={18} className="mr-2" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} Efekt Chmury. Wszelkie prawa zastrzeżone.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
              Polityka prywatności
            </a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
              Warunki korzystania
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
