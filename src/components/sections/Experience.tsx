import { Briefcase, CalendarDays, MapPin, Award, Building2 } from "lucide-react";

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
      <div className="relative pl-8 md:pl-0">
        {/* Vertical line */}
        <div
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 rounded-full -translate-x-1/2"
          style={{ background: "linear-gradient(180deg, #2563EB, #06B6D4)" }}
        />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`relative flex items-start md:items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div className="md:w-5/12 w-full md:px-6">
                <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_-10px_rgba(37,99,235,0.12)] border border-[rgba(37,99,235,0.12)] hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(37,99,235,0.2)] transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarDays className="h-4 w-4" style={{ color: "#2563EB" }} />
                    <span className="text-sm font-bold uppercase tracking-wide" style={{ color: "#2563EB" }}>
                      {exp.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="h-6 w-6 shrink-0" style={{ color: "#111827" }} />
                    <h3 className="text-xl font-extrabold" style={{ color: "#111827" }}>
                      {exp.company}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="h-4 w-4" style={{ color: "#475569" }} />
                    <p className="text-base font-bold" style={{ color: "#475569" }}>
                      {exp.role}
                    </p>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[rgba(37,99,235,0.1)]" style={{ color: "#2563EB" }}>
                      {exp.type}
                    </span>
                  </div>
                  <ul className="space-y-2 text-base list-disc pl-5" style={{ color: "#334155" }}>
                    {exp.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Center node */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-7 md:top-1/2 md:-translate-y-1/2">
                <div className="w-5 h-5 rounded-full border-4 border-white shadow-md" style={{ background: "#2563EB" }} />
              </div>

              {/* Date label opposite side */}
              <div className="md:w-5/12 w-full hidden md:block md:px-6">
                <p
                  className={`text-base font-bold ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                  style={{ color: "#64748B" }}
                >
                  {exp.duration}
                </p>
              </div>
            </div>
          ))}
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
