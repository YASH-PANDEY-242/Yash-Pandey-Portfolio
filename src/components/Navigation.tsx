import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  socialLinks: Array<{
    icon: React.ComponentType<any>;
    href: string;
    label: string;
  }>;
  onDownloadCV: () => void;
}

const Navigation = ({ socialLinks, onDownloadCV }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 p-6">
      <div className="flex justify-between items-center">
        {/* Logo/Name */}
        <div className="portfolio-name text-white bg-white/10 backdrop-blur px-6 py-2 rounded-xl">
          YASH PANDEY
        </div>

        {/* Social Links & CV Download */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="nav-link portfolio-text text-foreground hover:text-accent p-3 portfolio-glass rounded-lg"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
          
          <Button
            onClick={onDownloadCV}
            className="portfolio-glass hover:bg-primary/20 portfolio-text"
          >
            <Download className="h-4 w-4 mr-2" />
            Download CV
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;