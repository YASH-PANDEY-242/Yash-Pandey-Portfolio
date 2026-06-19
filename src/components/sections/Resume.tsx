import { Download, FileText } from "lucide-react";

const CV_URL = "/lovable-uploads/c3dfe180-f4cc-4ab8-bd6a-9c73bcae5f74.png";

const Resume = () => {
  const download = () => {
    const a = document.createElement("a");
    a.href = CV_URL;
    a.download = "Yash_Pandey_CV.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-5xl mx-auto reveal">
        <div className="text-center mb-12">
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="portfolio-text text-foreground/70">Preview or download my CV</p>
        </div>
        <div className="glass-card p-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden border border-border bg-white shadow-lg">
            <img src={CV_URL} alt="Yash Pandey CV preview" className="w-full h-auto" />
          </div>
          <div>
            <FileText className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Yash Pandey — Resume</h3>
            <p className="text-foreground/75 mb-6">
              Get a detailed look at my education, experience, projects, and technical skills.
              Click below to download the latest version.
            </p>
            <button
              onClick={download}
              className="gradient-btn px-7 py-3 rounded-full font-bold inline-flex items-center gap-2"
            >
              <Download className="h-5 w-5" /> Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
