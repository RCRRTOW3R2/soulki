const TreatmentSection = () => {
  return <section id="treatments" className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Metodos de Tratamiento
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestro enfoque comnina varias tecnicas no invasivas para proporcionar
            un cuidado holistico para tu cuerpo y mente.
          </p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-2/3">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-teal-100 text-teal-700 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">
                  1
                </span>
                Manipulacion de Tejido Blando
              </h3>
              <p className="text-gray-600 ml-11">
                Estiramiento suave, presion y resistencia para liberar tension en los
                musculos y tejidos conectivos, mejorando la circulacion y movilidad.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-teal-100 text-teal-700 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">
                  2
                </span>
                Mobilizacion de Articulaciones
              </h3>
              <p className="text-gray-600 ml-11">
                Tecnicas para mejorar el rango de movimiento y la funcion de las articulaciones,
                reduciendo la rigidez y el dolor mientras se mejora la movilidad general.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-teal-100 text-teal-700 rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">
                  3
                </span>
                Manipulacion Viseral
              </h3>
              <p className="text-gray-600 ml-11">
                Manipulacion suave de los organos internos para mejorar su funcion y liberar restricciones que 
                pueden estar causando dolor o disfuncion.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="bg-teal-50 p-6 rounded-lg sticky top-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Nuestro Enfoque 
              </h4>
              <p className="text-gray-600">
                cada tratamiento en SOUL-KI es adaptado a tus necesidades especificas.
                Nuestros terapeutas combinan estos metodos para crear un plan de tratamiento
                integral que aborda tus preocupaciones y objetivos unicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TreatmentSection;