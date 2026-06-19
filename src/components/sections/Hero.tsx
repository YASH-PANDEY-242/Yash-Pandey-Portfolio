import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const phrases = [
  "Artificial Intelligence Engineer",
  "Machine Learning Engineer",
  "AI Research Enthusiast",
];

const NAME = "YASH PANDEY";

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

  const stats = [
    { label: "CGPA", value: "8.84" },
    { label: "GATE Score", value: "320" },
    { label: "Projects", value: "6+" },
    { label: "Experience", value: "7 Months" },
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 relative">
      <div className="max-w-5xl w-full text-center">
        <h1 className="hero-name float-slow" aria-label={NAME}>
          {NAME.split("").map((ch, i) => (
            <span
              key={i}
              className="hero-letter"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h1>

        <div className="glass mx-auto mt-8 px-6 py-5 rounded-2xl max-w-xl animate-fade-in">
          <p className="portfolio-text gradient-text typing-caret min-h-[1.8em] font-bold">
            {text}
          </p>
          <p className="text-base text-foreground/70 mt-2 font-medium">
            Building intelligent systems with Machine Learning, Computer Vision and Deep Learning.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-8 animate-fade-in">
          <a href="#projects" className="btn-modern btn-primary-modern">
            View Projects
          </a>
          <a href="#contact" className="btn-modern btn-glass-modern">
            Hire Me
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 reveal">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold gradient-text">{s.value}</div>
              <div className="text-sm font-semibold text-foreground/70 mt-1 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary float"
        aria-label="Scroll"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;
