import { useRef } from "react";
import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Project from "./components/project";
import Footer from "./components/footer";
function App() {
  const mainRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section || !mainRef.current) return;

    const top = section.offsetTop - mainRef.current.offsetTop + 50;

    mainRef.current.scrollTo({
      top,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="h-screen overflow-hidden">
        <header>
          <Navbar scrollToSection={scrollToSection} />
        </header>

        <main
          ref={mainRef}
          className="mt-15 h-[calc(100vh-60px)] overflow-y-auto no-scrollbar"
        >
          <section id="home" className="py-45 md:py-0 md:pt-85 lg:pt-60 px-8">
            <Hero />
          </section>

          <section
            id="about"
            className="max-w-6xl mx-auto pt-20 mt-26 md:pt-60 px-8"
          >
            <About />
          </section>

          <section
            id="experience"
            className="max-w-6xl mx-auto pt-20 md:pt-40 md:mt-20 px-8"
          >
            <Experience />
          </section>

          <section
            id="skills"
            className="max-w-6xl mx-auto pt-20 md:pt-40 md:mt-20 lg:pt-60 px-8"
          >
            <Skills />
          </section>

          <section
            id="project"
            className="max-w-6xl mx-auto pt-20 md:pt-20 md:mt-20 px-8"
          >
            <Project />
          </section>

          <footer className="pt-20 md:pt-60 ">
            <Footer scrollToSection={scrollToSection} />
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
