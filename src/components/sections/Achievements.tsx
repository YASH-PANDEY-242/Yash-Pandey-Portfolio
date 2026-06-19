import { Award, Brain, Briefcase, Code2, Eye, FlaskConical } from "lucide-react";

const items = [
  { icon: Brain, text: "Artificial Intelligence Engineering Student" },
  { icon: Briefcase, text: "AI Internship Experience" },
  { icon: Award, text: "Multiple AI Project Implementations" },
  { icon: Eye, text: "Computer Vision Development Experience" },
  { icon: Code2, text: "Web Development Experience" },
  { icon: FlaskConical, text: "Machine Learning Research Projects" },
];

const Achievements = () => (
  <section id="achievements" className="py-20 px-6">
    <div className="max-w-6xl mx-auto reveal">
      <div className="text-center mb-12">
        <h2 className="section-title">
          <span className="gradient-text">Achievements</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => (
          <div key={i.text} className="glass-card p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center shrink-0">
              <i.icon className="h-6 w-6 text-white" />
            </div>
            <p className="portfolio-text font-semibold">{i.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
