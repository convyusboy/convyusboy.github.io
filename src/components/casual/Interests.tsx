
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad, Music, Film, Youtube } from "lucide-react";

const interests = [
  {
    title: "Gaming",
    icon: <Gamepad className="h-8 w-8 text-blue-500" />,
    description: "I'm passionate about gaming, with Dota 2 and Pokémon GO being my absolute favorites.",
    details: "I've spent countless hours strategizing in Dota 2 and exploring the world of Pokémon GO, enjoying the competitive and adventure aspects of these games."
  },
  {
    title: "Music",
    icon: <Music className="h-8 w-8 text-purple-500" />,
    description: "Music is my soul's expression. I play piano, guitar, viola, and love singing.",
    details: "I embrace all music genres, constantly expanding my musical horizons. From classical compositions to modern hits, I find joy in every melody."
  },
  {
    title: "Lifestyle",
    icon: <Film className="h-8 w-8 text-green-500" />,
    description: "A true homebody who finds comfort in the world of entertainment.",
    details: "Most of my time is spent at home, immersed in movies of all kinds, following Arsenal's matches, and binge-watching YouTube videos. My world is rich with digital experiences."
  }
];

const Interests = () => {
  return (
    <section id="interests" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Interests</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <Card key={index} className="overflow-hidden border-t-4 border-t-primary">
              <CardHeader className="pb-2">
                <div className="mb-4">{interest.icon}</div>
                <CardTitle className="text-xl">{interest.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{interest.description}</p>
                <CardDescription>
                  {interest.details}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
