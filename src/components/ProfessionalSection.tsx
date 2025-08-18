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
          <h1 className="portfolio-heading mb-6">Professional Expertise & Projects</h1>
          <p className="portfolio-text text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Passionate Software Engineer with specialized expertise in Artificial Intelligence and Machine Learning. 
            Currently pursuing B-Tech in AI with hands-on experience in developing innovative solutions for real-world problems.
            Proficient in multiple programming paradigms with a focus on cutting-edge technologies and deep learning applications.
          </p>
        </div>

        {/* Core Competencies */}
        <div className="mb-12">
          <h2 className="portfolio-subheading mb-6 text-accent">Core Competencies & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="portfolio-card rounded-2xl p-6">
              <h3 className="portfolio-text font-bold mb-3 text-primary">Machine Learning</h3>
              <p className="text-muted-foreground">Deep Learning, Neural Networks, Computer Vision, CNNs, Image Processing</p>
            </div>
            <div className="portfolio-card rounded-2xl p-6">
              <h3 className="portfolio-text font-bold mb-3 text-primary">Software Development</h3>
              <p className="text-muted-foreground">Algorithm Design, Data Structures, Object-Oriented Programming, Problem Solving</p>
            </div>
            <div className="portfolio-card rounded-2xl p-6">
              <h3 className="portfolio-text font-bold mb-3 text-primary">Database Management</h3>
              <p className="text-muted-foreground">SQL Optimization, Database Design, Data Analysis, Query Performance</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="portfolio-subheading mb-6 text-accent">Programming Proficiency</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="portfolio-card rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <skill.icon className="h-5 w-5 text-primary" />
                      <span className="portfolio-text font-semibold text-sm">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="skill-bar mb-1">
                    <div
                      className="skill-fill"
                      style={{
                        width: `${animatedSkills[skill.name] || 0}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="portfolio-subheading mb-6 text-accent">Featured Projects & Achievements</h2>
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