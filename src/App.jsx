import Hero from './components/Hero';
import Header from './components/Header';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import SectionSvg from './components/SectionSvg';
import Technologies from './components/Technologies';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Curriculum from './components/Curriculum';
import { Helmet } from 'react-helmet';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Manu Rodríguez | Desarrollador Frontend</title>
        <meta name="description" content="Portfolio de Manu Rodríguez, desarrollador Frontend especializado en React y tecnologías web modernas." />
        <meta name="keywords" content="desarrollador web, frontend, react, javascript" />
        <meta property="og:title" content="Manu Rodríguez | Desarrollador Frontend" />
        <meta property="og:description" content="Portfolio profesional mostrando proyectos y habilidades en desarrollo web." />
        <meta property="og:image" content="/path-to-your-profile-image.jpg" />
      </Helmet>
      <div className="bg-grid-pattern bg-cover bg-center bg-fixed min-h-screen overflow-hidden relative">
        <div className="max-w-[100vw] overflow-x-hidden">
          <Header />
          
          {/* Inicio */}
          <section id="inicio" className="relative">
            <Hero />
          </section>

          {/* Sobre Mí */}
          <section id="sobre-mi" className="relative py-16">
            <AboutUs />
          </section>

          {/* Proyectos */}
          <section id="proyectos" className="relative py-16">
            <SectionSvg crossesOffset="translate-y-10" />
            <Projects />
          </section>

          {/* Experiencia */}
          <section id="experiencia" className="relative py-16">
            <SectionSvg crossesOffset="translate-y-14" />
            <Curriculum />
          </section>

          {/* Tecnologías */}
          <section id="tecnologias" className="relative py-16">
            <SectionSvg crossesOffset="translate-y-16" />
            <Technologies />
          </section>

          {/* Certificaciones */}
          <section id="certificaciones" className="relative py-16">
            <SectionSvg crossesOffset="translate-y-18" />
            <Certifications />
          </section>

          {/* Testimonios */}
          <section id="testimonios" className="relative py-16">
            <SectionSvg crossesOffset="translate-y-20" />
            <Testimonials />
          </section>

          {/* Contacto */}
          <section id="contacto" className="relative py-16">
            <SectionSvg crossesOffset="translate-y-22" />
            <Contact />
          </section>

          {/* Solo el botón de WhatsApp */}
          <div className="fixed bottom-8 right-8 z-50">
            <WhatsAppButton />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;