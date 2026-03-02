import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import ParticleField from "@/components/ParticleField";

export default function Home() {
  return (
    <>
      <ParticleField />
      <Hero />
      <hr className="section-divider" />
      <About />
      <Stats />
      <hr className="section-divider" />
      <Projects />
      <hr className="section-divider" />
      <Skills />
      <hr className="section-divider" />
      <Timeline />
      <hr className="section-divider" />
      <Contact />
    </>
  );
}
