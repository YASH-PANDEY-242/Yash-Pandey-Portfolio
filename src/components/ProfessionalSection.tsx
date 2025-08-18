import { useState, useEffect } from "react";
import { Code2, Brain, Database, Calculator, Search, Zap } from "lucide-react";

const ProfessionalSection = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});

  const skills = [
    { name: "C Programming", percentage: 80, icon: Code2 },
    { name: "C++", percentage: 70, icon: Code2 },
    { name: "Python", percentage: 75, icon: Code2 },
    { name: "AI/ML", percentage: 70, icon: Brain },
    { name: "SQL", percentage: 80, icon: Database },
  ];

  const projects = [
    {
      name: "Image Forgery Detection",
      description: "Built a robust system to detect image tampering and forgery using machine learning algorithms with high accuracy.",
      icon: Search,
    },
    {
      name: "Simple Calculator",
      description: "Developed a functional calculator application with clean UI and comprehensive mathematical operations.",
      icon: Calculator,
    },
    {
      name: "Image Enhancement using Deep Learning",
      description: "Implemented advanced deep learning algorithms such as CNNs for noise reduction and contrast adjustment.",
      icon: Zap,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedSkills: Record<string, number> = {};
      skills.forEach((skill) => {
        newAnimatedSkills[skill.name] = skill.percentage;
      });
      setAnimatedSkills(newAnimatedSkills);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="portfolio-glass rounded-3xl p-12 backdrop-blur-xl">
        <div className="text-center mb-12">
          <h1 className="portfolio-name mb-4">Professional Career</h1>
          <p className="portfolio-text text-muted-foreground max-w-3xl mx-auto">
            Dedicated Software Engineer specializing in Artificial Intelligence and Machine Learning. 
            Currently pursuing B-Tech degree with strong foundation in programming and deep learning technologies.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-accent">Education</h2>
          <div className="portfolio-card rounded-2xl p-6">
            <h3 className="portfolio-text font-bold mb-2">Bachelor in Technology (Artificial Intelligence)</h3>
            <p className="portfolio-text text-muted-foreground mb-2">Sacred Heart Academy (CBSE), Nagpur</p>
            <p className="text-sm text-muted-foreground">November 2022 — Present</p>
            <p className="portfolio-text mt-3">Currently in 3rd year, expected graduation in 2026</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-accent">Programming Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="portfolio-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="h-6 w-6 text-primary" />
                  <span className="portfolio-text font-semibold">{skill.name}</span>
                </div>
                <div className="skill-bar mb-2">
                  <div
                    className="skill-fill"
                    style={{
                      width: `${animatedSkills[skill.name] || 0}%`,
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {skill.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-accent">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="portfolio-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <project.icon className="h-8 w-8 text-secondary" />
                  <h3 className="portfolio-text font-bold">{project.name}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSection;