
import { useMode } from "@/context/ModeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Professional mode components
import Hero from "@/components/professional/Hero";
import Experience from "@/components/professional/Experience";
import Skills from "@/components/professional/Skills";
import Projects from "@/components/professional/Projects";

// Casual mode components
import PersonalHero from "@/components/casual/PersonalHero";
import Interests from "@/components/casual/Interests";
import Gallery from "@/components/casual/Gallery";

const Index = () => {
  const { mode } = useMode();

  return (
    <div className={`min-h-screen ${mode === "casual" ? "bg-gradient-to-br from-blue-50 to-pink-50" : ""}`}>
      <Navbar />
      
      {mode === "professional" ? (
        // Professional Mode Content
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Projects />
        </main>
      ) : (
        // Casual Mode Content
        <main>
          <PersonalHero />
          <Interests />
          <Gallery />
        </main>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
