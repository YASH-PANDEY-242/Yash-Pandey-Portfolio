import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Instagram, Linkedin, Github, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import ProfessionalSection from "./ProfessionalSection";
import PersonalSection from "./PersonalSection";
import Chatbot from "./Chatbot";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 2) % 2);
  };

  const downloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/lovable-uploads/c3dfe180-f4cc-4ab8-bd6a-9c73bcae5f74.png';
    link.download = 'Yash_Pandey_CV.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation socialLinks={socialLinks} onDownloadCV={downloadCV} />
      
      {/* Main Content Container */}
      <div className="flex transition-transform duration-700 ease-in-out" 
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        
        {/* Slide 1: Professional Career */}
        <div className="w-full min-h-screen flex-shrink-0 flex items-center justify-center p-8">
          <ProfessionalSection />
        </div>

        {/* Slide 2: Personal & Contact */}
        <div className="w-full min-h-screen flex-shrink-0 flex items-center justify-center p-8">
          <PersonalSection />
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-8 top-1/2 -translate-y-1/2 portfolio-glass hover:bg-primary/20 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="fixed right-8 top-1/2 -translate-y-1/2 portfolio-glass hover:bg-primary/20 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {[0, 1].map((index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-accent scale-125' : 'bg-muted hover:bg-accent/60'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Chatbot Toggle */}
      <Button
        className="fixed bottom-8 right-8 portfolio-glass hover:bg-primary/20 z-20"
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
      >
        <MessageCircle className="h-5 w-5 mr-2" />
        Chat
      </Button>

      {/* Chatbot Component */}
      {isChatbotOpen && (
        <Chatbot onClose={() => setIsChatbotOpen(false)} />
      )}
    </div>
  );
};

export default Portfolio;