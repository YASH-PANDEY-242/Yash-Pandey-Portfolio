import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const phrases = [
  "Artificial Intelligence Engineer",
  "Machine Learning Engineer",
  "AI Research Enthusiast",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [pIdx, setPIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[pIdx];
    const speed = deleting ? 40 : 70;
    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, cIdx + 1));
        setCIdx(cIdx + 1);
        if (cIdx + 1 === current.length) setTimeout(() => setDeleting(true), 1400);
      } else {
        setText(current.slice(0, cIdx - 1));
        setCIdx(cIdx - 1);
        if (cIdx - 1 === 0) {
          setDeleting(false);
          setPIdx((pIdx + 1) % phrases.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [cIdx, deleting, pIdx]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative">
      <div className="max-w-5xl w-full text-center">
        <div className="reveal visible">
          <h1 className="portfolio-name mb-6" style={{ fontSize: "60px" }}>
            YASH PANDEY
          </h1>
          <div className="glass-card p-6 md:p-8 mt-6 max-w-3xl mx-auto">
            <p className="portfolio-text gradient-text typing-caret min-h-[2em]">{text}</p>
            <p className="portfolio-text text-foreground/70 mt-4">
              Passionate AI Engineer specializing in Machine Learning, Computer Vision,
              Deep Learning, Automation and Intelligent Systems Development.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a href="#projects" className="gradient-btn px-7 py-3 rounded-full font-bold text-lg">
              View Projects
            </a>
            <a href="#contact" className="glass px-7 py-3 rounded-full font-bold text-lg text-primary">
              Hire Me
            </a>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary float"
        aria-label="Scroll"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;
