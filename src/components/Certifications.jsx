import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: "Frontend Development Pro",
      organization: "Tech Academy Demo",
      date: "2023",
      image: "https://placehold.co/600x400/1a1a1a/purple?text=Frontend+Cert",
      credential: "#",
      skills: ["React", "JavaScript", "CSS", "HTML"]
    },
    {
      title: "UI/UX Design Fundamentals",
      organization: "Design Institute Demo",
      date: "2023",
      image: "https://placehold.co/600x400/1a1a1a/purple?text=UI+UX+Cert",
      credential: "#",
      skills: ["Figma", "Adobe XD", "User Research"]
    },
    {
      title: "Full Stack Development",
      organization: "Code Academy Demo",
      date: "2023",
      image: "https://placehold.co/600x400/1a1a1a/purple?text=Fullstack+Cert",
      credential: "#",
      skills: ["Node.js", "MongoDB", "Express", "React"]
    },
    {
      title: "Web Performance & SEO",
      organization: "Web Masters Demo",
      date: "2023",
      image: "https://placehold.co/600x400/1a1a1a/purple?text=SEO+Cert",
      credential: "#",
      skills: ["Performance", "SEO", "Analytics"]
    }
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Certificaciones</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Formación continua y actualización profesional
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 rounded-xl overflow-hidden group hover:bg-gray-800/70 
                     transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
          >
            {/* Imagen del certificado */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-300 
                         group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>

            {/* Contenido */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 
                           transition-colors duration-300">
                {cert.title}
              </h3>
              
              <div className="mb-4">
                <p className="text-gray-400 text-sm">{cert.organization}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-purple-500/20 text-purple-400 
                             rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Enlace a la credencial */}
              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 
                         hover:text-purple-300 transition-colors text-sm"
              >
                Ver credencial <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-auto bg-gray-900 rounded-2xl p-4"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 text-white bg-gray-800/50 rounded-full
                         hover:bg-gray-700 transition-colors"
              >
                <FaTimes size={20} />
              </button>

              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto rounded-lg"
              />

              <div className="mt-4 text-center">
                <a
                  href={selectedCert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 
                           rounded-lg text-white transition-colors"
                >
                  Ver credencial original <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
