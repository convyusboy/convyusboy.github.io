
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center pt-20 pb-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Ridho Akbarisanto</span>
            </h2>
            <h3 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Software Development Engineer, Backend
            </h3>
            <p className="text-lg mb-8 max-w-2xl">
              I'm a Software Development Engineer, Backend with 9+ years of experience. 
              I have a serious passion for API developments, database designs and solving user problems.

              Nothing is impossible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                onClick={() => window.open("https://drive.google.com/drive/folders/1Bymnm5Dr-ELRBMHcG5w_3czXEwLyspxs?usp=drive_link", "_blank")}
              >
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => window.location.href = "mailto:ridho.akbarisanto@yahoo.com"}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src="/lovable-uploads/6d201a34-7416-4ae3-93bf-2d9ed51860b2.png" 
                  alt="Professional portrait" 
                  className="object-cover"
                />
                <AvatarFallback className="text-lg">RA</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
