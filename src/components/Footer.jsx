import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/jmanurodriguez',
      icon: <FaGithub size={20} />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/juan-manuel-rodriguez-frontend',
      icon: <FaLinkedin size={20} />
    },
    {
      name: 'Email',
      url: 'mailto:manuxs.rodriguez@gmail.com',
      icon: <FaEnvelope size={20} />
    }
  ];

  return (
    <footer className="relative bg-gray-900/80 backdrop-blur-sm">
      {/* Botón "Volver arriba" */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2
                   w-10 h-10 rounded-full bg-purple-600 text-white
                   flex items-center justify-center
                   hover:bg-purple-700 transition-colors
                   shadow-lg hover:shadow-purple-500/20"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </motion.button>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Manu Rodríguez</h3>
            <p className="text-gray-400">
              Desarrollador Frontend especializado en crear experiencias web únicas y funcionales.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#sobre-mi" className="text-gray-400 hover:text-purple-400 transition-colors">
                Sobre Mí
              </a>
              <a href="#proyectos" className="text-gray-400 hover:text-purple-400 transition-colors">
                Proyectos
              </a>
              <a href="#tecnologias" className="text-gray-400 hover:text-purple-400 transition-colors">
                Tecnologías
              </a>
              <a href="#contacto" className="text-gray-400 hover:text-purple-400 transition-colors">
                Contacto
              </a>
            </nav>
          </div>

          {/* Redes sociales */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Conecta Conmigo</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 text-gray-400
                           flex items-center justify-center
                           hover:bg-purple-600 hover:text-white
                           transition-all duration-300
                           hover:transform hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Manu Rodríguez. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Hecho con ❤️ usando React y Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
