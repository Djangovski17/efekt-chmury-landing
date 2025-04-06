
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-cloud-dark via-cloud/30 to-transparent overflow-hidden">
      {/* Animated smoke effects */}
      <div className="absolute inset-0 smoke-animation-container">
        <div className="smoke-animation" style={{animationDelay: '0s'}}></div>
        <div className="smoke-animation" style={{animationDelay: '2s'}}></div>
        <div className="smoke-animation" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-down">
            Niezapomniana atmosfera,<br />
            profesjonalne efekty
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 animate-fade-in-down" style={{animationDelay: '0.2s'}}>
            Podnieś poziom swojego wydarzenia dzięki profesjonalnemu efektowi ciężkiego dymu.
            <br />Efekt Chmury to firma, która zapewni niezapomnianą atmosferę i ogromne wrażenie.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-down" style={{animationDelay: '0.4s'}}>
            <a href="#services" className="btn-primary">
              Nasze usługi
            </a>
            <a href="#contact" className="btn-secondary">
              Skontaktuj się
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
