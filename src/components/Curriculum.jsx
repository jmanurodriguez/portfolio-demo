import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaDownload, FaGraduationCap } from 'react-icons/fa';

const Curriculum = () => {
  const handleDownloadCV = () => {
    // URL de descarga directa de Google Drive con el nuevo ID
    const fileId = '1726xiT8nBbsz9JgtJuQnANijzyFw8qMY';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Abrir en nueva pestaña como fallback si la descarga directa no funciona
    window.open(downloadUrl, '_blank');
  };

  const experiences = [
    {
      type: 'work',
      title: 'Senior Frontend Developer',
      company: 'Tech Company Demo',
      period: '2023 - Presente',
      description: 'Desarrollo de aplicaciones web modernas con React y Next.js. Implementación de arquitecturas escalables y optimización de rendimiento.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      icon: <FaBriefcase className="text-purple-400" />
    },
    {
      type: 'education',
      title: 'Master en Desarrollo Web',
      company: 'Universidad Demo',
      period: '2022 - 2023',
      description: 'Especialización en desarrollo web moderno, arquitectura de software y mejores prácticas.',
      technologies: ['Frontend', 'Backend', 'DevOps', 'UI/UX'],
      icon: <FaGraduationCap className="text-purple-400" />
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Startup Demo',
      period: '2021 - 2022',
      description: 'Desarrollo de interfaces de usuario y componentes reutilizables. Integración con APIs y optimización de rendimiento.',
      technologies: ['React', 'JavaScript', 'CSS', 'Git'],
      icon: <FaBriefcase className="text-purple-400" />
    },
    {
      type: 'education',
      title: 'Ingeniería en Sistemas',
      company: 'Instituto Demo',
      period: '2017 - 2021',
      description: 'Fundamentos de programación, estructuras de datos, algoritmos y desarrollo de software.',
      technologies: ['Programación', 'Base de datos', 'Redes', 'Sistemas'],
      icon: <FaGraduationCap className="text-purple-400" />
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Experiencia</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Trayectoria profesional y formación académica
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Línea vertical del timeline */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-purple-500/20" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-8 mb-8 md:mb-16 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Punto en la línea del timeline */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-900 rounded-full border-4 border-purple-500 z-10">
              {exp.icon}
            </div>

            {/* Contenido */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300">
                <span className="text-sm text-purple-400 font-medium">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-1">{exp.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{exp.company}</p>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Curriculum;
