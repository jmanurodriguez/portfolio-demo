import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaUserGraduate } from 'react-icons/fa';

const AboutUs = () => {
  const highlights = [
    {
      icon: <FaCode className="text-3xl text-purple-400" />,
      title: "Desarrollo Frontend",
      description: "Especializado en crear interfaces modernas y responsivas con React y tecnologías actuales."
    },
    {
      icon: <FaLaptopCode className="text-3xl text-purple-400" />,
      title: "Tecnologías Web",
      description: "Experiencia en JavaScript, HTML5, CSS3, y frameworks modernos como Tailwind CSS."
    },
    {
      icon: <FaRocket className="text-3xl text-purple-400" />,
      title: "Optimización",
      description: "Enfocado en crear aplicaciones rápidas y optimizadas para la mejor experiencia de usuario."
    },
    {
      icon: <FaUserGraduate className="text-3xl text-purple-400" />,
      title: "Aprendizaje Continuo",
      description: "Constantemente actualizándome con las últimas tendencias y mejores prácticas."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <div className="relative group">
            <img
              src="https://placehold.co/400x400/1a1a1a/purple?text=Profile+Demo"
              alt="Profile Demo"
              className="rounded-2xl w-full object-cover shadow-xl transition-all duration-300
                       group-hover:scale-105 group-hover:shadow-purple-500/25"
            />
            {/* Efectos de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Contenido */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Sobre Mí</h2>
          <p className="text-gray-300 mb-6">
            Desarrollador Frontend con pasión por crear experiencias web únicas y atractivas. 
            Especializado en React y tecnologías modernas del desarrollo web.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-purple-500">📍</span>
              <span>Ubicación: Ciudad Demo</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-purple-500">💼</span>
              <span>Experiencia: +2 años</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-purple-500">🎓</span>
              <span>Educación: Universidad Demo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
