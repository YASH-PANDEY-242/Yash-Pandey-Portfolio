import { useEffect, useState } from "react";
import { ArrowRight, Brain, Eye, Cpu, Code2, User, GraduationCap, Trophy, FolderOpen, Briefcase } from "lucide-react";

const phrases = [
  "Artificial Intelligence Engineer",
  "Machine Learning Engineer",
  "Computer Vision Enthusiast",
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
    const speed = deleting ? 50 : 100;
    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, cIdx + 1));
        setCIdx(cIdx + 1);
        if (cIdx + 1 === current.length) setTimeout(() => setDeleting(true), 2000);
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

  const features = [
    { Icon: Brain, label: "Machine Learning Engineer", color: "#2563EB" },
    { Icon: Eye, label: "Computer Vision Enthusiast", color: "#3B82F6" },
    { Icon: Cpu, label: "AI Research Enthusiast", color: "#9333EA" },
    { Icon: Code2, label: "Problem Solver", color: "#F97316" },
  ];

  const stats = [
    { Icon: GraduationCap, label: "CGPA", value: "8.84", color: "#2563EB" },
    { Icon: Trophy, label: "GATE Score", value: "320", color: "#22C55E" },
    { Icon: FolderOpen, label: "Projects", value: "6+", color: "#9333EA" },
    { Icon: Briefcase, label: "Experience", value: "7 Months", color: "#F97316" },
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16">
      <div className="max-w-6xl w-full text-center" style={{ position: 'relative', zIndex: 10 }}>
        <h1 className="hero-name" aria-label={NAME}>
          {NAME.split("").map((ch, i) => (
            <span key={i} className="hero-letter" style={{ animationDelay: `${i * 0.08}s` }}>
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h1>

        <p className="mt-6 text-2xl md:text-3xl font-bold typing-caret min-h-[1.6em]" style={{ color: "#2563EB", position: 'relative', zIndex: 10 }}>
          {text}
        </p>

        <p className="mt-4 max-w-3xl mx-auto portfolio-text" style={{ color: "#475569" }}>
          Passionate AI Engineer specializing in Machine Learning, Computer Vision, Deep Learning, Automation and Intelligent Systems Development.
        </p>

        <div className="mt-8 mx-auto max-w-5xl bg-white rounded-2xl px-6 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-3 text-left">
              <f.Icon className="h-7 w-7 shrink-0" style={{ color: f.color }} />
              <span className="text-base font-semibold text-foreground leading-tight">{f.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <a href="#projects" className="inline-flex items-center justify-center gap-2 text-white font-bold rounded-xl shadow-lg hover:-translate-y-1 transition-all" style={{ width: 220, height: 55, background: "linear-gradient(90deg,#2563EB,#06B6D4)" }}>
            View Projects <ArrowRight className="h-5 w-5" />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 font-bold rounded-xl bg-white hover:-translate-y-1 transition-all" style={{ width: 220, height: 55, color: "#2563EB", border: "2px solid #2563EB" }}>
            <User className="h-5 w-5" /> Hire Me
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-[20px] p-6 shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all flex items-center gap-4">
              <s.Icon className="h-9 w-9 shrink-0" style={{ color: s.color }} />
              <div className="text-left">
                <div className="text-3xl font-extrabold" style={{ color: s.color }}>{s.value}</div>
                <div className="text-sm font-semibold uppercase tracking-wide" style={{ color: "#475569" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
