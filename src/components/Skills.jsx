import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind", level: 90 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Firebase", level: 80 }
    ]
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 70 }
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Habilidades Técnicas
          <span className="block text-base font-normal text-purple-300 mt-2">
            Tecnologías que domino
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 