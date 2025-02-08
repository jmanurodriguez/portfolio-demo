import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const menuItems = [
  { title: "Inicio", to: "inicio" },
  { title: "Sobre Mí", to: "sobre-mi" },
  { title: "Proyectos", to: "proyectos" },
  { title: "Experiencia", to: "experiencia" },
  { title: "Tecnologías", to: "tecnologias" },
  { title: "Certificaciones", to: "certificaciones" },
  { title: "Testimonios", to: "testimonios" },
  { title: "Contacto", to: "contacto" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="inicio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer relative group w-12 h-12 md:w-14 md:h-14"
          >
            {/* Efecto de brillo detrás del logo */}
            <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full group-hover:bg-purple-400/30 transition-all duration-500"></div>
            
            {/* Contenedor redondo para el logo demo */}
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <div 
                className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-500 
                         flex items-center justify-center text-white font-bold text-xl"
              >
                PD
              </div>
            </div>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-sm ${
                  activeSection === item.to ? 'text-purple-400 border-b-2 border-purple-400' : ''
                }`}
                activeClass="text-white font-medium"
                onClick={() => setActiveSection(item.to)}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Botón Hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú Mobile */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 visible mt-4"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg py-2">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(item.to);
                }}
                className={`block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 ${
                  activeSection === item.to ? 'text-purple-400 bg-gray-800/30' : ''
                }`}
                activeClass="text-white bg-gray-800/50"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;