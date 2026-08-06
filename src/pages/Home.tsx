import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import FeaturedProject from "@/components/sections/FeaturedProject";
import ArchitectureVisualization from "@/components/sections/ArchitectureVisualization";
import OtherProjects from "@/components/sections/OtherProjects";
import GitHubSection from "@/components/sections/GitHubSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <FeaturedProject />
      <ArchitectureVisualization />
      <OtherProjects />
      <GitHubSection />
      <Contact />
    </>
  );
}
