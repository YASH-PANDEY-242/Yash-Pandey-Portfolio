import { useState } from "react";
import { Mail, Send, Instagram, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    const body = encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`);
    window.location.href = `mailto:py5554443@gmail.com?subject=Portfolio%20Contact&body=${body}`;
    toast.success("Opening your email client...");
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto reveal">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="portfolio-text text-foreground/70">Let's build something amazing together</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-8">
            <Mail className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
            <a
              href="mailto:py5554443@gmail.com"
              className="portfolio-text font-bold gradient-text block mb-6 break-all"
            >
              py5554443@gmail.com
            </a>
            <p className="text-foreground/75 mb-4">Follow me on social media:</p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Github, href: "https://github.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full glass hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all"
                >
                  <Icon className="h-5 w-5 text-primary" />
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={submit} className="glass-card p-8 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="gradient-btn w-full px-6 py-3 rounded-xl font-bold inline-flex items-center justify-center gap-2"
            >
              <Send className="h-5 w-5" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
