
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-smoke-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Efekt Ciężkiego Dymu
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Stwórz niezapomniane momenty na swoich wydarzeniach dzięki naszym efektom ciężkiego dymu, podnosząc każdą okazję w województwie lubelskim do nadzwyczajnych wysokości.
              </p>
              <p className="text-gray-700 mb-8">
                W Efekt Chmury wiemy, jak ważne są wyjątkowe chwile. Nasz profesjonalny efekt ciężkiego dymu sprawia, że każde wydarzenie staje się magiczne i niezapomniane. Działamy na terenie województwa lubelskiego, oferując usługi na najwyższym poziomie.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cloud-dark mb-2">100+</div>
                  <div className="text-sm text-gray-600">Zadowolonych klientów</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cloud-dark mb-2">200+</div>
                  <div className="text-sm text-gray-600">Zrealizowanych eventów</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cloud-dark mb-2">6+</div>
                  <div className="text-sm text-gray-600">Lat doświadczenia</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/017087ac-9a1b-45dd-b36b-94ef1a175049.png" 
                alt="Efekt Ciężkiego Dymu" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/36b3f9dc-d4a6-453e-82f2-d3ca53b94def.png"
                  alt="Efekt Chmury Logo" 
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
