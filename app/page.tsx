import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto">
          <About />
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-[linear-gradient(180deg,#071023,rgba(7,16,35,0.6))]"
      >
        <div className="container mx-auto">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto">
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-[linear-gradient(180deg,rgba(12,18,28,0.6),#071023)]"
      >
        <div className="container mx-auto">
          <Contact />
        </div>
      </section>
    </div>
  );
}
