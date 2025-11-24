import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <div className="space-y-32 bg-[#0a0f1f] text-white">

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 relative">
        {/* Background accent */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-purple-900 via-transparent to-blue-950 opacity-20"></div>
        <div className="container mx-auto">
          <About />
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 relative overflow-hidden"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-purple-800 via-blue-900 to-indigo-800 animate-gradient-x opacity-30"></div>
        <div className="container mx-auto">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        {/* Floating geometric shapes or subtle patterns */}
        <div className="absolute top-10 left-0 w-24 h-24 bg-purple-700/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto">
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 relative"
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-900 via-purple-900 to-black opacity-40"></div>
        <div className="container mx-auto">
          <Contact />
        </div>
      </section>

    </div>
  );
}
