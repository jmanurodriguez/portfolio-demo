const certificates = [
  {
    title: "React JS",
    institution: "Coderhouse",
    date: "2024",
    credentialUrl: "URL_DEL_CERTIFICADO_REACT"
  },
  {
    title: "JavaScript",
    institution: "Coderhouse",
    date: "2023",
    credentialUrl: "URL_DEL_CERTIFICADO_JS"
  },
  // ... otros certificados
];

// En el renderizado de cada certificado:
<motion.a
  href={certificate.credentialUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-purple-500
           rounded-xl hover:bg-purple-500/10 transition-all duration-300"
  whileHover={{ y: -5 }}
>
  <FaExternalLink className="text-lg" />
  <span>Ver Certificado</span>
</motion.a> 