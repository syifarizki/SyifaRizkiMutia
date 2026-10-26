import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills";
import FadeUp from "../components/animation/FadeUp";
export default function HomePage() {
  return (
    <>
      <section
        id="home"
        className="flex min-h-screen scroll-mt-20 flex-col items-center justify-center gap-7 px-5 "
      >
        <Hero />
      </section>
      <section id="about">
        <FadeUp delay={0.6}>
          <About />
        </FadeUp>
      </section>
      <section id="experience">
        <FadeUp delay={0.6}>
        <Experience />
        </FadeUp>
      </section>
      <section id="skills">
        <FadeUp delay={0.6}>
          <Skills />
        </FadeUp>
      </section>
      <section id="projects">
        <FadeUp delay={0.6}>
          <Project />
        </FadeUp>
      </section>
    </>
  );
}
