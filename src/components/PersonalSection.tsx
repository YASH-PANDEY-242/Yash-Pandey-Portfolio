import { Mail, Phone, MapPin, Briefcase, Languages, GamepadIcon, Edit, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const PersonalSection = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "py5554443@gmail.com", href: "mailto:py5554443@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8623009578", href: "tel:+918623009578" },
    { icon: MapPin, label: "Location", value: "Nagpur, India", href: "#" },
  ];

  const availability = [
    "AI/ML Development",
    "C Programming",
    "Web Development",
  ];

  const languages = [
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Native" },
    { name: "Marathi", proficiency: "Native" },
  ];

  const hobbies = [
    { name: "Chiromancy", icon: Camera },
    { name: "Video Editing", icon: Edit },
    { name: "Gaming", icon: GamepadIcon },
  ];

  const handleContact = (href: string) => {
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      window.location.href = href;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="portfolio-glass rounded-3xl p-12 backdrop-blur-xl">
        <div className="text-center mb-12">
          <h1 className="portfolio-name mb-6" style={{ color: 'black' }}>YASH PANDEY</h1>
          <p className="portfolio-text text-muted-foreground max-w-3xl mx-auto">
            Get in touch for collaboration opportunities in AI/ML, programming, and web development projects.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-12 text-center">
          <h2 className="portfolio-subheading mb-6 text-accent">Educational Background</h2>
          <div className="portfolio-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="portfolio-text font-bold mb-3 text-primary">Bachelor in Technology (Artificial Intelligence)</h3>
            <p className="portfolio-text text-muted-foreground mb-2">Sacred Heart Academy (CBSE), Nagpur</p>
            <p className="text-sm text-muted-foreground mb-3">November 2022 — Present</p>
            <p className="portfolio-text">Currently in 3rd year, expected graduation in 2026</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="portfolio-subheading mb-6 text-accent">Contact Information</h2>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="portfolio-card rounded-2xl p-4 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => handleContact(info.href)}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="portfolio-text font-semibold">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div className="mb-8">
              <h3 className="portfolio-subheading mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-secondary" />
                Available for Jobs In
              </h3>
              <div className="flex flex-wrap gap-3">
                {availability.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-secondary/20 text-secondary rounded-full portfolio-text font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Personal Details */}
          <div>
            <h2 className="portfolio-subheading mb-6 text-accent">Personal Details</h2>
            
            {/* Languages */}
            <div className="mb-8">
              <h3 className="portfolio-subheading mb-4 flex items-center gap-2">
                <Languages className="h-5 w-5 text-primary" />
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="portfolio-card rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="portfolio-text font-semibold">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.proficiency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h3 className="portfolio-subheading mb-4">Hobbies & Interests</h3>
              <div className="grid grid-cols-1 gap-3">
                {hobbies.map((hobby, index) => (
                  <div key={index} className="portfolio-card rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <hobby.icon className="h-5 w-5 text-accent" />
                      <span className="portfolio-text font-medium">{hobby.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="mt-12 text-center">
          <div className="portfolio-card rounded-2xl p-6 inline-block">
            <p className="portfolio-text text-muted-foreground mb-2">Date of Birth</p>
            <p className="portfolio-text font-bold">24th February 2005</p>
            <p className="portfolio-text text-muted-foreground mt-2">Nationality: Indian</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalSection;