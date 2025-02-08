import { memo, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { FaGithub, FaCode, FaHtml5, FaCss3Alt, FaGitAlt, FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const Hero = () => {
  const technologies = [
    {
      icon: <FaHtml5 className="text-4xl text-[#E34F26]" />,
      text: "HTML5",
      color: "text-[#E34F26]",
      glowColor: "#FF4B1F",
      delay: 0
    },
    {
      icon: <FaCss3Alt className="text-4xl text-[#1572B6]" />,
      text: "CSS3",
      color: "text-[#1572B6]",
      glowColor: "#1572B6",
      delay: 0.1
    },
    {
      icon: <FaGitAlt className="text-4xl text-[#F05032]" />,
      text: "Git",
      color: "text-[#F05032]",
      glowColor: "#FF4D2D",
      delay: 0.2
    },
    {
      icon: <SiJavascript className="text-4xl text-[#F7DF1E]" />,
      text: "JavaScript",
      color: "text-[#F7DF1E]",
      glowColor: "#FFD700",
      delay: 0.3
    },
    {
      icon: <SiTypescript className="text-4xl text-[#3178C6]" />,
      text: "TypeScript",
      color: "text-[#3178C6]",
      glowColor: "#3178C6",
      delay: 0.4
    },
    {
      icon: <FaReact className="text-4xl text-[#61DAFB]" />,
      text: "React",
      color: "text-[#61DAFB]",
      glowColor: "#00D8FF",
      delay: 0.5
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.group');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="inicio" className="min-h-screen pt-20 md:pt-40 pb-16 relative bg-transparent text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Sección de texto */}
          <div className="flex-1 relative z-10">
            <Parallax speed={-12}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-10 leading-tight tracking-wide">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient">
                  Portfolio Demo
                </span>
              </h1>
            </Parallax>

            <Parallax speed={-8}>
              <p className="text-3xl lg:text-4xl text-white mb-8 font-bold">
                Frontend Developer
              </p>
            </Parallax>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 rounded-xl
                         hover:bg-purple-700 transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-purple-500/25"
                whileHover={{ y: -5 }}
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-purple-500
                         rounded-xl hover:bg-purple-500/10 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <FaCode className="text-xl" />
                <span>Mi Página Web</span>
              </motion.a>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Desarrollador Frontend especializado en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-semibold">
                React y tecnologías modernas
              </span>
              . Creando experiencias web únicas y optimizadas.
            </p>
          </div>

          {/* Elemento visual derecho */}
          <motion.div 
            className="relative w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Grid de tecnologías flotante */}
            <div className="grid grid-cols-3 gap-4 transform rotate-12">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: tech.delay,
                    ease: "easeOut"
                  }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl
                           flex flex-col items-center justify-center gap-2
                           hover:bg-gray-800/70 transition-all duration-300
                           group relative overflow-hidden"
                >
                  {/* Efecto de destello principal */}
                  <div className="absolute top-0 -left-[100%] w-[50%] h-[200%] 
                                bg-gradient-to-r from-transparent via-white/40 to-transparent 
                                -skew-x-12 group-hover:animate-shine pointer-events-none" />

                  {/* Brillo intensificado para las esquinas */}
                  <div 
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full blur-md opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${tech.glowColor}99 0%, transparent 70%)`
                    }}
                  />
                  <div 
                    className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full blur-md opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${tech.glowColor}99 0%, transparent 70%)`
                    }}
                  />

                  {/* Resplandor detrás del icono */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 blur-xl"
                    style={{
                      background: `radial-gradient(circle at center, ${tech.glowColor}40 0%, transparent 70%)`
                    }}
                  />

                  {/* Contenedor del icono con efecto de escala */}
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>

                  {/* Texto con sombra personalizada */}
                  <span 
                    className={`text-sm font-medium ${tech.color} relative z-10 
                              transition-all duration-300`}
                    style={{
                      textShadow: `0 0 8px ${tech.glowColor}`
                    }}
                  >
                    {tech.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Efectos de fondo */}
            <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-purple-500/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl" />
    </section>
  );
};

export default memo(Hero);