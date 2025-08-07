
import { useState, useEffect } from "react";
import { useMode } from "@/context/ModeContext";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  const { mode } = useMode();
  const [scrolled, setScrolled] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  
  // Array of colors to cycle through - same as in PersonalHero
  const colors = [
    "text-pink-500",
    "text-purple-500", 
    "text-blue-500",
    "text-green-500",
    "text-amber-500",
    "text-red-500"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to change color every 3 seconds - same timing as PersonalHero
  useEffect(() => {
    if (mode === "casual") {
      const intervalId = setInterval(() => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [mode]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold transition-colors ${
          mode === "professional" ? "text-primary" : colors[colorIndex]
        }`}>
          {mode === "professional" ? "Ridho Akbarisanto" : "Ridho"}
        </h1>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            {mode === "professional" ? (
              <>
                <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              </>
            ) : (
              <>
                <a href="#interests" className="hover:text-primary transition-colors">Interests</a>
                <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
              </>
            )}
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
