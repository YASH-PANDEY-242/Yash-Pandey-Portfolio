import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "C", value: 80 },
  { name: "C++", value: 70 },
  { name: "Python", value: 75 },
  { name: "SQL", value: 80 },
  { name: "AI / Machine Learning", value: 70 },
  { name: "HTML", value: 75 },
  { name: "CSS", value: 70 },
  { name: "JavaScript", value: 65 },
];

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setAnimate(true),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto reveal" ref={ref}>
        <div className="text-center mb-12">
          <h2 className="section-title">
            Programming <span className="gradient-text">Skills</span>
          </h2>
          <p className="portfolio-text text-foreground/70">Tools & languages I work with</p>
        </div>
        <div className="glass-card p-8 grid md:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between mb-2">
                <span className="portfolio-text font-bold">{s.name}</span>
                <span className="portfolio-text font-bold gradient-text">{s.value}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: animate ? `${s.value}%` : "0%" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
