import { GraduationCap, Award, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto reveal">
        <div className="text-center mb-12">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-8">
            <GraduationCap className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Education</h3>
            <p className="portfolio-text font-bold">B.Tech (Artificial Intelligence)</p>
            <p className="portfolio-text text-foreground/70">GH Raisoni College of Engineering and Management</p>
            <p className="portfolio-text text-foreground/60">3rd Year • Graduating 2026</p>
            <p className="portfolio-text text-foreground/60">Average CGPA: 8.84</p>
          </div>

          <div className="glass-card p-8">
            <Award className="h-10 w-10 mb-4" style={{ color: "hsl(var(--accent))" }} />
            <h3 className="text-2xl font-bold mb-2">Qualification</h3>
            <p className="portfolio-text font-bold">Qualified GATE 2026 (CS-IT)</p>
            <p className="portfolio-text text-foreground/70">GATE Score: 320</p>
          </div>

          <div className="glass-card p-8">
            <Target className="h-10 w-10 mb-4" style={{ color: "hsl(var(--teal))" }} />
            <h3 className="text-2xl font-bold mb-2">Career Objective</h3>
            <p className="portfolio-text text-foreground/80">
              Aspiring Artificial Intelligence and Machine Learning Engineer with experience in AI
              development, computer vision, automation systems, and intelligent software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
