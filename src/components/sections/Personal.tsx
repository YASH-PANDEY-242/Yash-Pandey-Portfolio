import { User, Briefcase, CheckCircle2 } from "lucide-react";

const availability = [
  "AI/ML Engineer Roles",
  "Artificial Intelligence Projects",
  "Machine Learning Projects",
  "C Programming Roles",
  "Web Development Projects",
  "Freelance AI Solutions",
];

const Personal = () => (
  <section id="personal" className="py-20 px-6">
    <div className="max-w-5xl mx-auto reveal">
      <div className="text-center mb-12">
        <h2 className="section-title">
          Personal <span className="gradient-text">Information</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-8">
          <User className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <div className="space-y-2 portfolio-text">
            <p><span className="text-foreground/60">Name:</span> <span className="font-bold">Yash Pandey</span></p>
            <p><span className="text-foreground/60">Profession:</span> <span className="font-bold">AI / ML Engineer</span></p>
            <p><span className="text-foreground/60">Location:</span> <span className="font-bold">Nagpur, India</span></p>
          </div>
        </div>
        <div className="glass-card p-8">
          <Briefcase className="h-10 w-10 mb-4" style={{ color: "hsl(var(--teal))" }} />
          <h3 className="text-2xl font-bold mb-4">Open For</h3>
          <ul className="space-y-2">
            {availability.map((a) => (
              <li key={a} className="flex items-center gap-2 text-foreground/85 font-semibold">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Personal;
