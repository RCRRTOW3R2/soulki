const Footer = () => {
  return <footer className="w-full bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4">
              SOUL<span className="text-teal-400">-KI</span>
            </h2>
            <p className="text-gray-300 max-w-md mx-auto">
              Bienestar holistico a través de tratamientos osteopáticos no invasivos. 
              Nuestro enfoque integral se centra en la salud física y emocional de nuestros pacientes.
              Su bienestar empieza con SOUL-KI.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 mt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} SOUL-KI. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>;
};

export default Footer;