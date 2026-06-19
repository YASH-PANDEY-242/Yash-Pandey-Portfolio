import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Rakibe Dynamics Pvt. Ltd.",
    role: "AI Intern",
    duration: "6 Months",
    points: [
      "Developed AI-powered applications.",
      "Worked on Machine Learning models.",
      "Assisted in computer vision projects.",
      "Data preprocessing and model optimization.",
      "Automation workflow implementation.",
      "Research and development of AI solutions.",
    ],
  },
  {
    company: "StacTech",
    role: "AI Engineer",
    duration: "1 Month",
    points: [
      "AI model development.",
      "Intelligent data processing.",
      "AI solution deployment.",
      "Research on machine learning systems.",
      "Application testing and optimization.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-20 px-6">
    <div className="max-w-5xl mx-auto reveal">
      <div className="text-center mb-12">
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>
      </div>
      <div className="relative">
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 rounded-full"
          style={{ background: "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--teal)))" }}
        />
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`md:flex items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
            >
              <div className="md:w-1/2 md:px-8">
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                  </div>
                  <p className="portfolio-text font-bold gradient-text">{exp.company}</p>
                  <p className="text-sm text-foreground/60 mb-3">{exp.duration}</p>
                  <ul className="space-y-1 text-foreground/80 text-base list-disc pl-5">
                    {exp.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:flex w-12 h-12 rounded-full gradient-btn items-center justify-center font-extrabold text-white shadow-lg z-10 mx-auto">
                {i + 1}
              </div>
              <div className="md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
