import { useEffect, useState } from "react";
import { Menu, X, Instagram, Linkedin, Github } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-2" : "py-3"
      }`}
      style={{ minHeight: 80 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[64px]">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-white" style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)" }}>YP</div>
          <span className="font-extrabold text-lg text-foreground tracking-wider">YASH PANDEY</span>
        </a>




        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-base">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          {[
            { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { Icon: Github, href: "https://github.com", label: "GitHub" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="p-2 rounded-full glass hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all"
            >
              <Icon className="h-5 w-5 text-primary" />
            </a>
          ))}
        </div>

        <button
          className="lg:hidden p-2 rounded-lg glass"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-2xl p-4 flex flex-col gap-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
