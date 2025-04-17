import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-teal-700">
            SOUL<span className="text-teal-500">-KI</span>
          </h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-teal-600 transition-colors">
            Casa
          </a>
          <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">
            Sobre nosotros
          </a>
          <a href="#services" className="text-gray-700 hover:text-teal-600 transition-colors">
            Nuestros Servicios
          </a>
          <a href="#treatments" className="text-gray-700 hover:text-teal-600 transition-colors">
            Metodos de Tratamiento
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-colors">
            Testimonios
          </a>
          <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">
            Contactos
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Hogar
            </a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Sobre nosotros
            </a>
            <a href="#services" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Nuestros servicio
            </a>
            <a href="#treatments" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              metodos de tratamiento
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Testimonios
            </a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contactos
            </a>
          </div>
        </div>}
    </header>;
};
export default Header;