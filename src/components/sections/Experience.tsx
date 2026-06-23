import { Briefcase, CalendarDays, Award, Building2 } from "lucide-react";

const experiences = [
  {
    company: "StacTech",
    role: "AI Engineer",
    type: "Internship",
    duration: "June 2025 – July 2025",
    points: [
      "Worked on Artificial Intelligence and Machine Learning solutions.",
      "Assisted in model development, testing, and optimization.",
      "Participated in AI-based software development projects.",
      "Gained practical experience in real-world AI applications.",
    ],
  },
  {
    company: "Rakibe Dynamics Pvt. Ltd.",
    role: "AI Intern",
    type: "Internship",
    duration: "December 2025 – May 2026",
    points: [
      "Developed AI-powered automation solutions.",
      "Worked on Aadhaar Management using AI.",
      "Contributed to AI Jewellery Management systems.",
      "Assisted in Invoice Management automation.",
      "Participated in Computer Vision and Machine Learning projects.",
      "Collaborated with development teams on intelligent software solutions.",
    ],
  },
];

const highlights = [
  "AI Engineer at StacTech",
  "AI Intern at Rakibe Dynamics Pvt. Ltd.",
  "Qualified GATE 2026 (CS-IT)",
  "Average CGPA: 8.84",
  "6+ AI/ML Projects Completed",
  "Experience in Computer Vision and Deep Learning",
];

const DateBadge = ({ duration }: { duration: string }) => (
  <span
    className="inline-block text-sm md:text-base font-bold"
    style={{
      background: "#EFF6FF",
      color: "#2563EB",
      padding: "10px 18px",
      borderRadius: "999px",
    }}
  >
    {duration}
  </span>
);

const ExperienceCard = ({ exp }: { exp: typeof experiences[0] }) => (
  <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_-10px_rgba(37,99,235,0.12)] border border-[rgba(37,99,235,0.12)] hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(37,99,235,0.2)] transition-all">
    <div className="flex items-center gap-3 mb-2">
      <Building2 className="h-6 w-6 shrink-0" style={{ color: "#111827" }} />
      <h3 className="text-xl font-extrabold" style={{ color: "#111827" }}>
        {exp.company}
      </h3>
    </div>
    <div className="flex flex-wrap items-center gap-2 mb-4">
      <Briefcase className="h-4 w-4" style={{ color: "#475569" }} />
      <p className="text-base font-bold" style={{ color: "#475569" }}>
        {exp.role}
      </p>
      <span
        className="text-xs font-bold px-2.5 py-0.5 rounded-full"
        style={{ background: "rgba(37,99,235,0.1)", color: "#2563EB" }}
      >
        {exp.type}
      </span>
    </div>
    <ul className="space-y-2 text-base list-disc pl-5" style={{ color: "#334155" }}>
      {exp.points.map((p, idx) => (
        <li key={idx}>{p}</li>
      ))}
    </ul>
  </div>
);

const TimelineDot = () => (
  <div
    className="rounded-full z-10 shrink-0"
    style={{
      width: 18,
      height: 18,
      border: "4px solid white",
      background: "#2563EB",
      boxShadow: "0 0 0 6px rgba(37,99,235,0.15)",
    }}
  />
);

const Experience = () => (
  <section id="experience" className="py-20 px-6">
    <div className="max-w-5xl mx-auto reveal">
      <div className="text-center mb-14">
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-lg font-semibold" style={{ color: "#475569" }}>
          Professional journey in Artificial Intelligence and Machine Learning
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-7 md:left-1/2 top-0 bottom-0 rounded-full -translate-x-1/2"
          style={{ width: 4, background: "#2563EB" }}
        />

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={exp.company} className="relative flex items-start md:items-stretch">
                {/* Mobile dot column */}
                <div className="md:hidden absolute left-7 top-6 -translate-x-1/2">
                  <TimelineDot />
                </div>

                {/* Desktop left side */}
                <div className="hidden md:flex md:w-[calc(50%-40px)] items-center" style={{ justifyContent: isEven ? "flex-end" : "flex-start" }}>
                  {isEven ? (
                    <DateBadge duration={exp.duration} />
                  ) : (
                    <div className="w-full">
                      <ExperienceCard exp={exp} />
                    </div>
                  )}
                </div>

                {/* Center dot - desktop */}
                <div className="hidden md:flex w-20 shrink-0 justify-center pt-6">
                  <TimelineDot />
                </div>

                {/* Desktop right side */}
                <div className="hidden md:flex md:w-[calc(50%-40px)] items-center" style={{ justifyContent: isEven ? "flex-start" : "flex-end" }}>
                  {isEven ? (
                    <div className="w-full">
                      <ExperienceCard exp={exp} />
                    </div>
                  ) : (
                    <DateBadge duration={exp.duration} />
                  )}
                </div>

                {/* Mobile card column */}
                <div className="md:hidden pl-16 w-full">
                  <DateBadge duration={exp.duration} />
                  <div className="mt-3">
                    <ExperienceCard exp={exp} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Professional Highlights */}
      <div className="mt-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: "#111827" }}>
            Professional <span className="gradient-text">Highlights</span>
          </h3>
          <p className="text-base font-semibold" style={{ color: "#475569" }}>
            Key milestones and achievements
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-[0_4px_20px_-8px_rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.08)] hover:-translate-y-1 transition-all"
            >
              <Award className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#2563EB" }} />
              <span className="text-base font-semibold" style={{ color: "#334155" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
