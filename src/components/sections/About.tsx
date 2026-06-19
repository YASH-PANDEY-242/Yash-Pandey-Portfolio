import { GraduationCap, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto reveal">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Professional <span className="gradient-text">Career</span>
          </h2>
          <p className="portfolio-text text-foreground/70 max-w-3xl mx-auto">
            I am an aspiring Artificial Intelligence and Machine Learning Engineer currently
            pursuing a Bachelor of Technology in Artificial Intelligence. I have experience
            working on real-world AI solutions, automation systems, computer vision projects,
            and intelligent management platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-8">
            <GraduationCap className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Education</h3>
            <p className="portfolio-text font-bold">Bachelor of Technology (Artificial Intelligence)</p>
            <p className="portfolio-text text-foreground/70">Sacred Heart Academy (CBSE)</p>
            <p className="portfolio-text text-foreground/60">Expected Graduation: 2026</p>
            <p className="portfolio-text text-foreground/60">Current Status: Year Engineering Student</p>
          </div>
          <div className="glass-card p-8">
            <Sparkles className="h-10 w-10 text-teal-500 mb-4" style={{ color: "hsl(var(--teal))" }} />
            <h3 className="text-2xl font-bold mb-2">Core Focus</h3>
            <ul className="portfolio-text text-foreground/80 space-y-2 list-disc pl-5">
              <li>Machine Learning & Deep Learning</li>
              <li>Computer Vision & Image Processing</li>
              <li>Automation & Intelligent Systems</li>
              <li>Full-stack AI Solution Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
