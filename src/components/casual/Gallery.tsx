
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gamepad, Music, Headphones, MapPin, Mountain } from "lucide-react";

// Gallery items organized by category
const galleryItems = {
  gaming: [
    {
      title: "Dota 2",
      description: "My top Dota 2 heroes over the years: Axe, Sniper, Legion Commander, and others. Each of these heroes tells a story from epic comebacks to unforgettable defeats. Strategy, perseverance, and a lot of late nights!",
      images: [
        "/casual/galleries/gamings/dota/1.png"
      ],
      isImage: true
    },
    {
      title: "Pokemon Go Main Account",
      description: "My main account for Pokemon Go, with over 1000 hours of gameplay. I've caught all the legendary Pokemon and completed the game's main storyline.",
      images: [
        "/casual/galleries/gamings/pokemon-go/1.png",
        "/casual/galleries/gamings/pokemon-go/2.png",
        "/casual/galleries/gamings/pokemon-go/3.png",
        "/casual/galleries/gamings/pokemon-go/4.png",
        "/casual/galleries/gamings/pokemon-go/5.png",
        "/casual/galleries/gamings/pokemon-go/6.png",
        "/casual/galleries/gamings/pokemon-go/7.png"
      ],
      isImage: true
    },
    {
      title: "Pokemon Go Second Account",
      description: "My main account for Pokemon Go, with over 1000 hours of gameplay. I've caught all the legendary Pokemon and completed the game's main storyline.",
      images: [
        "/casual/galleries/gamings/pokemon-go-2/1.png",
        "/casual/galleries/gamings/pokemon-go-2/2.png",
        "/casual/galleries/gamings/pokemon-go-2/3.png",
        "/casual/galleries/gamings/pokemon-go-2/4.png",
        "/casual/galleries/gamings/pokemon-go-2/5.png",
        "/casual/galleries/gamings/pokemon-go-2/6.png"
      ],
      isImage: true
    },
    {
      title: "Summoners War",
      images: [
        "/casual/galleries/gamings/summoners-war/1.png",
        "/casual/galleries/gamings/summoners-war/2.png",
        "/casual/galleries/gamings/summoners-war/3.png"
      ],
      isImage: true
    }
  ],
  music: [
    {
      title: "Music Collection",
      description: "Part of my growing vinyl collection",
      image: "gray-600"
    },
    {
      title: "Favorite Albums",
      description: "The soundtracks to my life",
      image: "gray-500"
    }
  ],
  concert: [
    {
      title: "Concert Night",
      description: "Enjoying my favorite band live",
      image: "gray-400"
    },
    {
      title: "Festival Weekend",
      description: "Three days of amazing performances",
      image: "gray-500"
    }
  ],
  traveling: [
    {
      title: "City Exploration",
      description: "Weekend getaway in a new city",
      image: "gray-400"
    },
    {
      title: "Travel Memories",
      description: "Exploring new places and cultures",
      image: "gray-300"
    }
  ],
  hiking: [
    {
      title: "Mountain Adventure",
      description: "Conquering peaks and enjoying breathtaking views",
      image: "gray-500"
    },
    {
      title: "Nature Trails",
      description: "Discovering hidden paths through forests and valleys",
      image: "gray-400"
    }
  ]
};

// Component to render gallery items
const GalleryGrid = ({ items }: { items: any[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <Card key={index} className="overflow-hidden transform transition-all hover:scale-105">
          {item.isImage ? (
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 object-cover"
              style={{ background: "#23272e" }}
            />
          ) : (
            <div className={`h-48 bg-${item.image} flex items-center justify-center text-white`}>
              Gallery Image Placeholder
            </div>
          )}
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Life Snapshots</h2>
        
        <Tabs defaultValue="gaming" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="flex flex-wrap gap-2">
              <TabsTrigger value="gaming" className="flex items-center gap-2">
                <Gamepad className="h-4 w-4" /> Gaming
              </TabsTrigger>
              <TabsTrigger value="music" className="flex items-center gap-2">
                <Music className="h-4 w-4" /> Music
              </TabsTrigger>
              <TabsTrigger value="concert" className="flex items-center gap-2">
                <Headphones className="h-4 w-4" /> Concert
              </TabsTrigger>
              <TabsTrigger value="traveling" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Traveling
              </TabsTrigger>
              <TabsTrigger value="hiking" className="flex items-center gap-2">
                <Mountain className="h-4 w-4" /> Hiking
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="gaming" className="mt-6 animate-fade-in">
            <GalleryGrid items={galleryItems.gaming} />
          </TabsContent>
          
          <TabsContent value="music" className="mt-6 animate-fade-in">
            <GalleryGrid items={galleryItems.music} />
          </TabsContent>
          
          <TabsContent value="concert" className="mt-6 animate-fade-in">
            <GalleryGrid items={galleryItems.concert} />
          </TabsContent>
          
          <TabsContent value="traveling" className="mt-6 animate-fade-in">
            <GalleryGrid items={galleryItems.traveling} />
          </TabsContent>
          
          <TabsContent value="hiking" className="mt-6 animate-fade-in">
            <GalleryGrid items={galleryItems.hiking} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
