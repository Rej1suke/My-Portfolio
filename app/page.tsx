import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#0a0f1f] text-white">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 container mx-auto bg-[linear-gradient(180deg,#071023,rgba(7,16,35,0.6))]">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 container mx-auto">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 container mx-auto bg-[linear-gradient(180deg,rgba(12,18,28,0.6),#071023)]">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
