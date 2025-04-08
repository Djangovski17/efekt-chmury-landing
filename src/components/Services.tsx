
import React from 'react';
import { CloudIcon, CameraIcon, MusicIcon } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Profesjonalny efekt ciężkiego dymu
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Przekształć swoje wydarzenie za pomocą naszego efektu ciężkiego dymu, aby stworzyć piękną i niezapomnianą chwilę. 
            Działamy na terenie województwa lubelskiego.
          </p>
        </div>

        <div className="flex flex-col gap-24 mb-24">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="overflow-hidden rounded-lg shadow-xl h-[300px] md:h-[400px]">
                <img 
                  src="/lovable-uploads/d3e9d05c-297f-4811-a6a8-e316c579ed7f.png" 
                  alt="Ciężki dym na twoje wesele" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cloud-light rounded-full flex items-center justify-center mr-3">
                  <CloudIcon className="w-6 h-6 text-cloud-dark" />
                </div>
                <h3 className="text-2xl font-semibold gradient-text">
                  Ciężki dym na twoje wesele
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Ciężki dym z pewnością doda wyjątkowego uroku Twojemu weselu, tworząc magiczną atmosferę na parkiecie. 
                Spraw, aby Twój pierwszy taniec odbył się w otoczeniu lekkiej chmury, która zapewni niezapomniane wspomnienia. 
                Oferujemy również tę usługę podczas krojenia tortu oraz sesji zdjęciowych.
              </p>
              <a href="#contact" className="btn-primary self-start">
                Skontaktuj się
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-8">
            <div className="flex-1">
              <div className="overflow-hidden rounded-lg shadow-xl h-[300px] md:h-[400px]">
                <img 
                  src="/lovable-uploads/c87fc04d-8f2b-4181-a968-59aa0331bfbd.png" 
                  alt="Ciężki dym na twoją sesję zdjęciową" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cloud-light rounded-full flex items-center justify-center mr-3">
                  <CameraIcon className="w-6 h-6 text-cloud-dark" />
                </div>
                <h3 className="text-2xl font-semibold gradient-text">
                  Ciężki dym na twoją sesję zdjęciową
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Udoskonal swoją sesję zdjęciową dzięki naszemu efektowi ciężkiego dymu. Profesjonalne podejście gwarantuje 
                niezapomniane efekty, które podkreślą klimat Twojej sesji i dodadzą jej tajemniczego, magicznego charakteru. 
                Idealny efekt zarówno do sesji modowych, artystycznych jak i komercyjnych.
              </p>
              <a href="#contact" className="btn-primary self-start">
                Skontaktuj się
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="overflow-hidden rounded-lg shadow-xl h-[300px] md:h-[400px]">
                <img 
                  src="/lovable-uploads/6f931f9b-2736-426d-8880-e67637a42f14.png" 
                  alt="Ciężki dym na twój event" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cloud-light rounded-full flex items-center justify-center mr-3">
                  <MusicIcon className="w-6 h-6 text-cloud-dark" />
                </div>
                <h3 className="text-2xl font-semibold gradient-text">
                  Ciężki dym na twój event
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Przekształć swoje wydarzenie dzięki naszym czarującym chmurom na parkiecie. Idealne na wesela, przyjęcia i imprezy firmowe, 
                wystąpienia, koncerty, przedstawienia, sesje produktowe. Nasze efekty ciężkiego dymu urzekają każdego uczestnika 
                i tworzą niezapomnianą atmosferę dla Twojego wyjątkowego wydarzenia.
              </p>
              <a href="#contact" className="btn-primary self-start">
                Skontaktuj się
              </a>
            </div>
          </div>
        </div>

        <div className="features">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Profesjonalny efekt ciężkiego dymu
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Odmień swoje wydarzenie w województwie lubelskim dzięki naszemu profesjonalnemu efektowi 
              ciężkiego dymu, tworząc magiczną i niezapomnianą atmosferę na każdą okazję.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur border border-gray-100 rounded-lg p-8 shadow-lg 
              flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-xl">
              <div className="w-16 h-16 bg-cloud-light rounded-full flex items-center justify-center mb-5">
                <div className="w-10 h-10 bg-cloud-dark rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Magiczny efekt chmury</h3>
              <p className="text-gray-600 mb-6">
                Odmień miejsce swojego wydarzenia dzięki efektom ciężkiego dymu, dodając dramaturgii i elegancji każdej uroczystości.
              </p>
              <a href="#contact" className="text-cloud-dark font-medium hover:text-cloud transition-colors">
                Więcej informacji →
              </a>
            </div>
            
            <div className="bg-white/90 backdrop-blur border border-gray-100 rounded-lg p-8 shadow-lg 
              flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-xl">
              <div className="w-16 h-16 bg-cloud-light rounded-full flex items-center justify-center mb-5">
                <div className="w-10 h-10 bg-cloud-dark rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mistyczna atmosfera</h3>
              <p className="text-gray-600 mb-6">
                Wzbogać występy gęstym, mistycznym dymem, który podnosi wrażenia uczestników wydarzenia na wyższy poziom.
              </p>
              <a href="#contact" className="text-cloud-dark font-medium hover:text-cloud transition-colors">
                Więcej informacji →
              </a>
            </div>
            
            <div className="bg-white/90 backdrop-blur border border-gray-100 rounded-lg p-8 shadow-lg 
              flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-xl">
              <div className="w-16 h-16 bg-cloud-light rounded-full flex items-center justify-center mb-5">
                <div className="w-10 h-10 bg-cloud-dark rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Spektakularne wejście w chmurze</h3>
              <p className="text-gray-600 mb-6">
                Stwórz niezapomniane wejście dzięki urzekającym efektom dymu, które budują scenę dla magicznych momentów.
              </p>
              <a href="#contact" className="text-cloud-dark font-medium hover:text-cloud transition-colors">
                Więcej informacji →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
