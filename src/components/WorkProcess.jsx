const workSteps = [
  {
    number: "01",
    title: "Análisis y Planificación",
    description: "Entiendo tus necesidades y planifico la mejor solución"
  },
  {
    number: "02",
    title: "Diseño y Prototipado",
    description: "Creo wireframes y diseños interactivos"
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Implemento la solución con código limpio y eficiente"
  },
  {
    number: "04",
    title: "Testing y Deployment",
    description: "Pruebo y despliego la aplicación"
  }
];

const WorkProcess = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mi Proceso de Trabajo
          <span className="block text-base font-normal text-purple-300 mt-2">
            Cómo convierto ideas en realidad
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workSteps.map((step, index) => (
            <div 
              key={index}
              className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl group hover:bg-purple-900/20 transition-all duration-300"
            >
              <span className="absolute -top-4 left-6 text-4xl font-bold text-purple-500/20 group-hover:text-purple-500/40 transition-colors">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mb-3 mt-4 text-purple-400">
                {step.title}
              </h3>
              <p className="text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess; 