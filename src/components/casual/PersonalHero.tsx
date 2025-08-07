
import { Button } from "@/components/ui/button";
import { Gamepad, Music, User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

const PersonalHero = () => {
  const [colorIndex, setColorIndex] = useState(0);
  
  // Array of colors to cycle through
  const colors = [
    "text-pink-500",
    "text-purple-500", 
    "text-blue-500",
    "text-green-500",
    "text-amber-500",
    "text-red-500"
  ];

  // Effect to change color every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-b from-pink-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hey, I'm <span className={`${colors[colorIndex]} transition-colors duration-1000`}>Ridho</span>! 👋
            </h2>
            <h3 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Software Engineer & Multifaceted Artist
            </h3>
            <p className="text-lg mb-8 max-w-2xl">
              I'm passionate about solving complex problems through code and expressing creativity 
              through various artistic mediums. When I'm not coding, I'm exploring the worlds of music, 
              games, and entertainment.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                <Gamepad size={18} className="text-blue-500" />
                <span className="font-medium">Gamer</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full">
                <Music size={18} className="text-purple-500" />
                <span className="font-medium">Musician</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                <User size={18} className="text-green-500" />
                <span className="font-medium">Homebody</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-pink-300">
              <AvatarImage 
                src="/lovable-uploads/562a3863-2749-4224-8803-a3b6a60c6ce5.png" 
                alt="Ridho Akbarisanto" 
                className="object-cover"
              />
              <AvatarFallback>RA</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalHero;
