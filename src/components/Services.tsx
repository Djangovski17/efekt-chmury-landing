
import React from 'react';
import { Camera, Music, Heart } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  image, 
  reverse = false 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  image: string; 
  reverse?: boolean 
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-24`}>
      <div className="md:w-1/2">
        <div className="h-[300px] md:h-[400px] overflow-hidden rounded-2xl shadow-xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-cloud-light rounded-full">
            {icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold gradient-text">{title}</h3>
        </div>
        <p className="text-gray-600 text-lg mb-6">{description}</p>
        <a href="#contact" className="btn-primary self-start">
          Skontaktuj się
        </a>
      </div>
    </div>
  );
};

const FeatureCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
}) => {
  return (
    <div className="cloud-card p-6 md:p-8 flex flex-col items-center text-center">
      <div className="p-4 bg-cloud-light rounded-full mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a href="#contact" className="mt-6 text-cloud-dark hover:text-cloud font-medium">
        Więcej informacji →
      </a>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Profesjonalny efekt ciężkiego dymu
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Przekształć swoje wydarzenie za pomocą naszego efektu ciężkiego dymu, aby stworzyć piękną i niezapomnianą chwilę. Działamy na terenie województwa lubelskiego.
          </p>
        </div>

        <div className="space-y-4 md:space-y-0">
          <ServiceCard 
            title="Ciężki dym na twoje wesele" 
            description="Ciężki dym z pewnością doda wyjątkowego uroku Twojemu weselu, tworząc magiczną atmosferę na parkiecie. Spraw, aby Twój pierwszy taniec odbył się w otoczeniu lekkiej chmury, która zapewni niezapomniane wspomnienia. Oferujemy również tę usługę podczas krojenia tortu oraz sesji zdjęciowych."
            icon={<Heart className="text-cloud-dark" size={24} />} 
            image="/lovable-uploads/3d7367d5-2324-4319-8432-f9ca5941e417.png"
          />
          
          <ServiceCard 
            title="Ciężki dym na twoją sesję zdjęciową" 
            description="Udoskonal swoją sesję zdjęciową dzięki naszemu efektowi ciężkiego dymu. Profesjonalne podejście gwarantuje niezapomniane efekty, które podkreślą klimat Twojej sesji i dodadzą jej tajemniczego, magicznego charakteru. Idealny efekt zarówno do sesji modowych, artystycznych jak i komercyjnych."
            icon={<Camera className="text-cloud-dark" size={24} />} 
            image="/lovable-uploads/f0d57df3-94b5-452a-895e-4b7ec912ffa9.png"
            reverse={true}
          />
          
          <ServiceCard 
            title="Ciężki dym na twój event" 
            description="Przekształć swoje wydarzenie dzięki naszym czarującym chmurom na parkiecie. Idealne na wesela, przyjęcia i imprezy firmowe, wystąpienia, koncerty, przedstawienia, sesje produktowe. Nasze efekty ciężkiego dymu urzekają każdego uczestnika i tworzą niezapomnianą atmosferę dla Twojego wyjątkowego wydarzenia."
            icon={<Music className="text-cloud-dark" size={24} />} 
            image="/lovable-uploads/b2cc8b73-ac43-427a-ade2-8658461ba50c.png"
          />
        </div>

        <div className="mt-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">
            Profesjonalny efekt ciężkiego dymu
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
            Odmień swoje wydarzenie w województwie lubelskim dzięki naszemu profesjonalnemu efektowi ciężkiego dymu, tworząc magiczną i niezapomnianą atmosferę na każdą okazję.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Magiczny efekt chmury" 
              description="Odmień miejsce swojego wydarzenia dzięki efektom ciężkiego dymu, dodając dramaturgii i elegancji każdej uroczystości."
              icon={<div className="w-10 h-10 bg-cloud-dark rounded-full"></div>} 
            />
            <FeatureCard 
              title="Mistyczna atmosfera" 
              description="Wzbogać występy gęstym, mistycznym dymem, który podnosi wrażenia uczestników wydarzenia na wyższy poziom."
              icon={<div className="w-10 h-10 bg-cloud-dark rounded-full"></div>} 
            />
            <FeatureCard 
              title="Spektakularne wejście w chmurze" 
              description="Stwórz niezapomniane wejście dzięki urzekającym efektom dymu, które budują scenę dla magicznych momentów."
              icon={<div className="w-10 h-10 bg-cloud-dark rounded-full"></div>} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
