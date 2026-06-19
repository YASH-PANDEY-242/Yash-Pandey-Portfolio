import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Chatbot from "@/components/Chatbot";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <footer className="text-center py-8 text-foreground/70 font-semibold">
        © {new Date().getFullYear()} Yash Pandey • Built with passion for AI
      </footer>
      <Chatbot />
    </div>
  );
};

export default Portfolio;
