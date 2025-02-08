import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Demo",
      description: "Tienda online moderna con carrito de compras, pasarela de pagos y panel de administración.",
      image: "https://placehold.co/600x400/1a1a1a/purple?text=E-commerce+Demo",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "AI Project Demo",
      description: "Aplicación de IA para procesamiento de imágenes y generación de texto.",
      image: "https://placehold.co/600x400/1a1a1a/purple?text=AI+Project+Demo",
      tags: ["React", "Python", "TensorFlow", "OpenAI"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Landing Page Demo",
      description: "Página de aterrizaje moderna con animaciones y diseño responsive.",
      image: "https://placehold.co/600x400/1a1a1a/purple?text=Landing+Demo",
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Business Site Demo",
      description: "Sitio web corporativo con blog y sistema de contacto.",
      image: "https://placehold.co/600x400/1a1a1a/purple?text=Business+Demo",
      tags: ["React", "Firebase", "Tailwind"],
      github: "https://github.com",
      demo: "#"
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
        <h2 className="text-4xl font-bold mb-4">Proyectos</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Una selección de proyectos que demuestran mis habilidades en desarrollo web.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 rounded-xl overflow-hidden group hover:bg-gray-800/70 transition-all duration-300"
          >
            {/* Imagen del proyecto */}
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Contenido */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Enlaces */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                >
                  <FaGithub /> Código
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
