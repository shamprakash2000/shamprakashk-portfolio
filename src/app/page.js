import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "../components/Projects";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Certifications />
    </main>
  );
}
