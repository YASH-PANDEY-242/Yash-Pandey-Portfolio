import { Search, Sparkles, Calculator, IdCard, Gem, FileText } from "lucide-react";

const projects = [
  {
    icon: Search,
    name: "Image Forgery Detection",
    desc: "AI-powered system capable of detecting manipulated and forged images using deep learning techniques.",
    tech: ["Python", "OpenCV", "Deep Learning"],
  },
  {
    icon: Sparkles,
    name: "Image Enhancement Using Deep Learning",
    desc: "Improves image quality using neural networks and advanced computer vision techniques.",
    tech: ["Python", "TensorFlow"],
  },
  {
    icon: Calculator,
    name: "Simple Calculator",
    desc: "Interactive calculator developed using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: IdCard,
    name: "Aadhaar Card Management Using AI",
    desc: "AI-based management and verification system for Aadhaar card processing and document validation.",
    tech: ["Python", "OCR", "Machine Learning"],
  },
  {
    icon: Gem,
    name: "AI Jewellery Management System",
    desc: "Intelligent jewellery management platform featuring AI-based categorization, inventory management, and visualization.",
    tech: ["AI", "Web Dev", "Database"],
  },
  {
    icon: FileText,
    name: "Invoice Management System",
    desc: "Automated invoice generation, tracking, and management platform using intelligent document processing.",
    tech: ["Python", "AI", "SQL"],
  },
];

const Projects = () => (
  <section id="projects" className="py-20 px-6">
    <div className="max-w-6xl mx-auto reveal">
      <div className="text-center mb-12">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="portfolio-text text-foreground/70">A showcase of my AI & development work</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.name} className="glass-card p-6 group">
            <div className="w-14 h-14 rounded-2xl gradient-btn flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <p.icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{p.name}</h3>
            <p className="text-foreground/75 mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
