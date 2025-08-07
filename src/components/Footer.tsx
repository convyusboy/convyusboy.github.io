
import { useMode } from "@/context/ModeContext";

const Footer = () => {
  const { mode } = useMode();
  const year = new Date().getFullYear();

  return (
    <footer className={`py-8 border-t ${
      mode === "professional" ? "border-gray-200" : "border-pink-200"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {year} {mode === "professional" ? "Ridho Akbarisanto" : "Ridho"}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {mode === "professional" ? (
              <>
                <a href="https://github.com/convyusboy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/akbarisanto/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </>
            ) : (
              <>
                <a href="https://www.instagram.com/convyusboy/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="https://twitter.com/convyusboy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

