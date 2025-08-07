
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, Database, FileCode, Cloud } from "lucide-react";

const projects = [
  {
    title: "berguru.com",
    description: "Built an online learning platform connecting students with tutors across Indonesia.",
    technologies: "Laravel, Vue.js, MySQL",
    detailedDescription: "An innovative educational platform developed by ITB students that revolutionized online learning in Indonesia. The platform featured interactive learning materials, live tutoring sessions, and a community-driven approach to education. Built with a modern tech stack, it offered features like video conferencing, comprehensive course management, and an intuitive user interface designed for both students and educators.",
    images: [
      "/professional/projects/berguru/01.png",
      "/professional/projects/berguru/02.png",
      "/professional/projects/berguru/03.png",
      "/professional/projects/berguru/04.png"
    ],
    year: "2014",
    link: "https://sonny.js.org/berguru/index.html?fbclid=IwY2xjawJ6rbNleHRuA2FlbQIxMABicmlkETB4YnphZERuTXJyT2ZpVDNpAR7ecRTlUZlhgm5a-XFBwU1sEdmEbnF-iIIYpUXFB9fw4xioUkrbYxq3GDu7IQ_aem_zaARu8qxsFhNve5sgLkV8Q"
  },
  {
    title: "Nusa n Tara",
    description: "Developed an educational game showcasing Indonesian cultural diversity and heritage.",
    technologies: "Unity, C#, Firebase",
    detailedDescription: "An educational game built with Unity that teaches players about Indonesian culture and heritage. Features include interactive 3D environments, mini-games about traditional customs, and cloud save functionality using Firebase.",
    year: "2014",
    link: "#"
  },
  {
    title: "encirclo.com",
    description: "Create e-commerce for company",
    technologies: "Laravel, MySQL",
    detailedDescription: "A full-featured e-commerce platform specializing in fashion products. Implemented features include inventory management, payment gateway integration, shopping cart functionality, and real-time order tracking.",
    year: "2015-2016",
    link: "#"
  },
  {
    title: "Bukalapak Train Ticket Purchasing",
    description: "Developed a microservice for train ticket purchasing integration with national railway system, integrating to Bukalapak platform.",
    technologies: "Node.js, Express, MongoDB",
    detailedDescription: "A microservice that integrates with Indonesia's national railway system for ticket purchasing. Features include real-time seat availability checking, booking management, and payment processing. Built with Node.js and Express, using MongoDB for ticket and transaction storage.",
    images: [
      "/professional/projects/bukalapak-train/01.png",
      "/professional/projects/bukalapak-train/02.png"
    ],
    year: "2017",
    link: "#"
  },
  {
    title: "Bukareksa",
    description: "Developed an investment management platform for mutual funds for Bukalapak.",
    technologies: "Ruby, Ruby on Rails, MongoDB, MySQL, Redis",
    detailedDescription: "A comprehensive financial investment platform that enables users to manage mutual funds and execute trades. The application provides real-time market data, portfolio analysis, and personalized investment recommendations.",
    images: [
      "/professional/projects/bukareksa/01.png",
      "/professional/projects/bukareksa/02.png",
      "/professional/projects/bukareksa/03.png",
      "/professional/projects/bukareksa/04.png"
    ],
    year: "2017-2018",
    link: "#"
  },
  {
    title: "Bukaemas",
    description: "Created a gold investment and trading digital platform for Bukalapak.",
    technologies: "Ruby, Ruby on Rails, MongoDB, MySQL, Redis",
    detailedDescription: "An innovative digital platform for gold investment and trading. Features include real-time gold price tracking, automated buying and selling mechanisms, secure transaction processing, and comprehensive investment portfolio management.",
    images: [
      "/professional/projects/bukaemas/01.png",
      "/professional/projects/bukaemas/02.png"
    ],
    year: "2017-2018",
    link: "#"
  },
  {
    title: "Rapor Pendidikan Indonesia",
    description: "Built Indonesian government educational scores for schools, cities, provinces, and national",
    technologies: "Golang, PostgreSQL, Docker, Google Cloud Platform, ETL, Big Query, Redis",
    detailedDescription: "An education management system built with Golang that handles academic reporting for Indonesian schools. The system processes large amounts of student data efficiently using PostgreSQL and is containerized with Docker for easy deployment.",
    images: [
      "/professional/projects/rapor-pendidikan-indonesia/01.png",
      "/professional/projects/rapor-pendidikan-indonesia/02.png"
    ],
    year: "2023-2025",
    link: "#"
  },
  {
    title: "Gofood Scrapper",
    description: "Developed a web scraping tool to collect and analyze GoFood restaurant data for market research purposes.",
    technologies: "Python, BeautifulSoup, Selenium, OpenPyXL",
    detailedDescription: "A Python-based web scraping tool that automatically collects restaurant data from GoFood. Features include data extraction of menu items, prices, ratings, and restaurant information using BeautifulSoup, Selenium for dynamic content, and OpenPyXL for data export.",
    year: "2024",
    link: "#"
  }
];

// Sort projects chronologically by year in descending order
const sortedProjects = [...projects].sort((a, b) => {
  const yearA = parseInt(a.year.split('-')[0]);
  const yearB = parseInt(b.year.split('-')[0]);
  return yearB - yearA;
});

const getTechnologyIcon = (tech: string) => {
  if (tech.includes("Ruby") || tech.includes("Rails")) return <FileCode className="h-4 w-4 mr-1" />;
  if (tech.includes("MongoDB") || tech.includes("MySQL") || tech.includes("PostgreSQL") || tech.includes("Big Query")) 
    return <Database className="h-4 w-4 mr-1" />;
  if (tech.includes("Google Cloud")) return <Cloud className="h-4 w-4 mr-1" />;
  return <FileCode className="h-4 w-4 mr-1" />;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader className="relative">
                <div className="absolute top-6 right-6 text-sm font-medium text-muted-foreground">
                  {project.year}
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground flex items-center">
                  {getTechnologyIcon(project.technologies)}
                  {project.technologies}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setSelectedProject(project)}
                >
                  View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-2">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground mb-4">
              Technologies: {selectedProject?.technologies}
            </DialogDescription>
          </DialogHeader>
          
          {selectedProject?.images && selectedProject.images.length > 0 && (
            <div className="my-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {selectedProject.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={image}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          className="rounded-lg object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          )}

          {selectedProject?.link && (
            <div className="mt-4 flex items-center justify-center">
              <a 
                href={selectedProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                View Demo
              </a>
            </div>
          )}

          <div className="mt-4">
            <p className="text-foreground">{selectedProject?.detailedDescription}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
