import Hero from "../components/Hero";
import Skills from "@/components/Skills";
import Projects from "../components/Projects";
import Experience from "@/components/Experience";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <Hero />
      {/* <AboutMe /> */}
        <Skills id="skills"/>
        <Experience id="experience"/>
        <Projects id="projects"/>
        <Awards id="awards"/>  
        <Certifications id="certifications"/>      
    </main>


  );
}
