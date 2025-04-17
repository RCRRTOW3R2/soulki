import { Heart, Shield, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  return <section id="about" className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Acerca de SOUL-KI
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fundado a base de experiencia personal y administrado con pasion por la medicina holistica.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Nuestra Misión y Visión
            </h3>
            <p className="text-gray-600 mb-6">
              En SOUL-KI, nos dedicamos a brindar servicios profesionales que
              ayudan a los pacientes a restaurar su bienestar físico a través de
              alternativas no invasivas, ayudándoles a recuperar su movilidad de
              manera natural y armónica.
            </p>
            <p className="text-gray-600 mb-8">
              Nuestra vision es ser el centro de bienestar integral líder que ayuda a los
              pacientes a recuperar su salud y movilidad a través de un enfoque
              personalizado y holístico, abordando las causas raíz en lugar de
              solo tratar los síntomas.
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="aspect-[9/16] max-w-[280px] mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <video 
                className="w-full h-full object-contain"
                controls
                poster="/src/assets/videos/thumbnail1.jpg"
              >
                <source src="/src/assets/videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="bg-teal-50 rounded-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-full max-w-[260px] aspect-[2/3] rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/PedroHead.JPG"
                  alt="Pedro Martinez Muños - Fundador de SOUL-KI" 
                  className="w-full h-full object-cover object-[35%_15%]"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                El Fundador
              </h3>
              <p className="text-gray-600 mb-4">
                SOUL-KI fue fundado por Pedro Martinez Muños hace 8 años, inspirado
                por su propio viaje a través la superacion del dolor crónico y el estrés.
                Después de descubrir el poder transformador de la osteopatía en
                su propio proceso de sanación, Pedro hizo la transición de ser
                paciente a convertirse en un terapeuta osteopatico.
              </p>
              <p className="text-gray-600">
                Esta experiencia personal lo llevó a fundar SOUL-KI, un centro
                de bienestar integral que combina su pasión por la medicina
                holística con un enfoque profesional y responsable. En SOUL-KI,
                entendemos que cada paciente es único y que su bienestar es
                nuestra prioridad. La experiencia de Pedro como paciente y
                terapeuta le ha enseñado la importancia de un enfoque
                personalizado y compasivo en la atención médica. Su
                compromiso con la excelencia profesional y su deseo de ayudar a
                otros a superar sus propios desafíos de salud son la base de
                nuestra misión. En SOUL-KI, creemos que la sanación va más allá
                de los tratamientos físicos; se trata de un viaje hacia el
                bienestar integral. Nos esforzamos por crear un ambiente acogedor y
                de apoyo donde cada paciente se sienta valorado y comprendido.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[{
          icon: <Heart size={24} className="text-teal-600" />,
          title: 'Atencion Personalizada',
          description: 'Atencion individual y adaptada a cada paciente'
        }, {
          icon: <Shield size={24} className="text-teal-600" />,
          title: 'Excelecia Profesional',
          description: 'Estamos comprometidos a tener los estandares mas altos en su cuidado y responsabilidad.'
        }, {
          icon: <Users size={24} className="text-teal-600" />,
          title: 'Enfoque Holístico',
          description: 'Estamos comprometidos a tratar al paciente a no solo tratar los simptomas del paciente sino a tratar a la persona de modo completo, asegurandonos de una sanacion mas completa.'
        }, {
          icon: <Clock size={24} className="text-teal-600" />,
          title: 'servicio Eficiente',
          description: 'Somos concientes del valor de tu tiempo, y nos enorgullese nuestro tratado a tiempo.'
        }].map((value, index) => <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-teal-50 p-4 rounded-full mb-4">
                {value.icon}
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default AboutSection;