
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-b from-cloud-dark via-cloud/30 to-transparent overflow-hidden">
      {/* Animated smoke effects */}
      <div className="absolute inset-0">
        <div className="smoke-animation"></div>
        <div className="smoke-animation animation-delay-2000"></div>
        <div className="smoke-animation animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            Niezapomniana atmosfera,<br/>profesjonalne efekty
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-down animation-delay-300">
            Podnieś poziom swojego wydarzenia dzięki profesjonalnemu efektowi ciężkiego dymu.<br/>
            Efekt Chmury to firma, która zapewni niezapomnianą atmosferę i ogromne wrażenie.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-down animation-delay-600">
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
