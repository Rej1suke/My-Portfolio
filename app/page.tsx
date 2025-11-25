import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="bg-[#0a0f1f] text-white">
      <Header />

      <section id="hero" className="min-h-screen flex items-center">
        <Hero />
      </section>

      <section id="about" className="py-20 container mx-auto">
        <About />
      </section>

      <section id="skills" className="py-20 container mx-auto bg-[linear-gradient(180deg,#071023,rgba(7,16,35,0.6))]">
        <Skills />
      </section>

      <section id="projects" className="py-20 container mx-auto">
        <Projects />
      </section>

      <section id="contact" className="py-20 container mx-auto bg-[linear-gradient(180deg,rgba(12,18,28,0.6),#071023)]">
        <Contact />
      </section>

      {/* Footer should be OUTSIDE container */}
      <Footer />
    </div>
  );
}
