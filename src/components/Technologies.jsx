import {
  FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaWordpress, FaJs, FaBootstrap, FaReact
} from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss, SiFirebase, SiFigma, SiCanva, SiCloudinary
} from 'react-icons/si';

const technologies = [
  { name: 'HTML5', icon: <FaHtml5 />, id: 'html5', color: '#e34c26' },
  { name: 'CSS3', icon: <FaCss3Alt />, id: 'css3', color: '#1572b6' },
  { name: 'Cloudinary', icon: <SiCloudinary />, id: 'cloudinary', color: '#3448C5' },
  { name: 'Git', icon: <FaGitAlt />, id: 'git', color: '#f34f29' },
  { name: 'GitHub', icon: <FaGithub />, id: 'github', color: '#333' },
  { name: 'WordPress', icon: <FaWordpress />, id: 'wordpress', color: '#21759b' },
  { name: 'JavaScript', icon: <FaJs />, id: 'javascript', color: '#f7df1e' },
  { name: 'TypeScript', icon: <SiTypescript />, id: 'typescript', color: '#3178c6' },
  { name: 'Bootstrap', icon: <FaBootstrap />, id: 'bootstrap', color: '#7952b3' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, id: 'tailwind', color: '#06b6d4' },
  { name: 'React JS', icon: <FaReact />, id: 'react', color: '#61dbfb' },
  { name: 'Firebase', icon: <SiFirebase />, id: 'firebase', color: '#ffca28' },
  { name: 'Figma', icon: <SiFigma />, id: 'figma', color: '#f24e1e' },
  { name: 'Canva', icon: <SiCanva />, id: 'canva', color: '#00c4cc' },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-16 text-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Tecnologías</h2>

        {/* Carrusel: Solo visible en pantallas grandes */}
        <div className="hidden lg:block">
          <div className="carousel-container">
            {technologies.map((tech, index) => {
              const angle = (360 / technologies.length) * index;
              const radius = 300; // Ajusta este valor según necesites
              const zIndex = Math.cos((angle * Math.PI) / 180) * 1000;
              
              return (
                <div
                  key={tech.id}
                  className="carousel-item"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backgroundColor: tech.color,
                    zIndex: Math.round(zIndex),
                    animationDelay: `${-index * (10 / technologies.length)}s`
                  }}
                >
                  <div className="icon-wrapper text-4xl">{tech.icon}</div>
                  <h3 className="text-sm mt-2">{tech.name}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Grid: Visible en pantallas pequeñas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center p-4 rounded-lg"
              style={{ backgroundColor: tech.color }}
            >
              <div className="text-5xl mb-4 text-white">{tech.icon}</div>
              <h3 className="text-lg text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
