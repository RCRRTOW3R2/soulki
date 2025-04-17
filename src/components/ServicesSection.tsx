import { Activity, BarChart2, Brain, Zap } from 'lucide-react';
const ServicesSection = () => {
  return <section id="services" className="w-full bg-teal-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tratamiento especializado para aquellos que experimentan disconforte fisico, comun devido a la vida moderna.
          </p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
            <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Activity size={24} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Asesoria de postura
            </h3>
            <p className="text-gray-600">
              Evaluacion comprensiva enfocada en la ergonomia y el movimiento.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
            <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Brain size={24} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Tratamiento de Alivio de Estrés.
            </h3>
            <p className="text-gray-600">
              Tecnicas especializadas para abordar las manifestaciones fisicas del estres y mejorar el bienestar general.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
            <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Zap size={24} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Terapia de Movimiento
            </h3>
            <p className="text-gray-600">
              Ejercicios y tecnicas personalizadas para aquellos que pasan largas horas sentados o con movilidad limitada.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
            <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <BarChart2 size={24} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Programa de recuperacion
            </h3>
            <p className="text-gray-600">
              tratamiento especializado para la recuperacion de esguinces, torceduras y otras condiciones que limitan la movilidad.
            </p>
          </div>
        </div>
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Ayudamos a
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold text-gray-800 mb-3">
                Trabajadores de Oficina
              </h4>
              <p className="text-gray-600">
                Soluciones para quienes experimentan molestias por estar sentados
                durante mucho tiempo y el uso de computadoras
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-800 mb-3">
                Adultos Activos
              </h4>
              <p className="text-gray-600">
                Soporte para mantener la movilidad y prevenir lesiones relacionadas por actividad fisica.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-800 mb-3">
                Pacientes en Recuperacion
              </h4>
              <p className="text-gray-600">
                Cuidado especializado para quienes se recuperan de lesiones o condiciones
                crónicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;