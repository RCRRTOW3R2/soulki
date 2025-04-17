import { ArrowRightIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="w-full bg-gradient-to-r from-teal-50 to-blue-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col max-w-4xl mx-auto">
          {/* Text content */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Restaura tu bienestar natural
            </h1>
            <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
              SOUL-KI provee tratamientos personalizados osteopáticos no invasivos que se enfocan en combatir la raiz del dolor, no solo los sintomas.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Experimenta nuestro enfoque holistico para mejorar la movilidad y el bienestar, adaptado 
              específicamente para aquellos que buscan soluciones completas y naturales para el malestar físico. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center">
                Programa una consulta 
              </a>
              <a href="#about" className="bg-white hover:bg-gray-100 text-teal-600 border border-teal-600 py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center">
                Descubre nuestro enfoque{' '}
                <ArrowRightIcon size={18} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Video section */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/src/assets/videos/thumbnail3.jpg"
              >
                <source src="/src/assets/videos/video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;