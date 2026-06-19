import { useState } from "react";
import { Bot, MessageCircle, Send, User, X } from "lucide-react";

interface Msg { id: number; text: string; from: "bot" | "user"; }

const faq = (q: string): string => {
  const s = q.toLowerCase();
  if (/(hi|hello|hey)/.test(s)) return "Hello! How can I help you learn about Yash today?";
  if (/skill|tech|programming|language/.test(s))
    return "Yash works with C (80%), C++ (70%), Python (75%), SQL (80%), AI/ML (70%), HTML (75%), CSS (70%), and JavaScript (65%).";
  if (/project/.test(s))
    return "Featured projects: Image Forgery Detection, Image Enhancement using Deep Learning, Simple Calculator, Aadhaar Card Management using AI, AI Jewellery Management, and Invoice Management System.";
  if (/experience|intern|work|job history/.test(s))
    return "Yash was an AI Intern at Rakibe Dynamics Pvt. Ltd. (6 months) and an AI Engineer at StacTech (1 month).";
  if (/education|study|college|school/.test(s))
    return "He is pursuing B.Tech in Artificial Intelligence at Sacred Heart Academy (CBSE), graduating in 2026.";
  if (/contact|email|reach|hire/.test(s))
    return "Reach out at py5554443@gmail.com — or use the contact form on the page.";
  if (/availab|open|free|freelance|role/.test(s))
    return "Open for AI/ML roles, ML projects, C programming, web development, and freelance AI solutions.";
  if (/resume|cv|download/.test(s))
    return "Scroll to the Resume section and click Download CV.";
  return "I can answer about skills, projects, experience, education, contact and availability. What would you like to know?";
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { id: 1, from: "bot", text: "Hi! I'm Yash's Portfolio Assistant. How can I help you today?" },
  ]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Msg = { id: Date.now(), from: "user", text: input };
    const botMsg: Msg = { id: Date.now() + 1, from: "bot", text: faq(input) };
    setMsgs((m) => [...m, userMsg]);
    setInput("");
    setTimeout(() => setMsgs((m) => [...m, botMsg]), 500);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 md:right-8 w-[90vw] max-w-sm h-[28rem] glass rounded-2xl z-50 flex flex-col animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full gradient-btn flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold">Portfolio Assistant</span>
            </div>
            <button onClick={() => setOpen(false)} className="p-1 rounded hover:bg-muted">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {msgs.map((m) => (
              <div key={m.id} className={`flex gap-2 ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                {m.from === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.from === "user"
                      ? "gradient-btn text-white rounded-br-sm"
                      : "bg-white/80 text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
                {m.from === "user" && (
                  <div className="w-7 h-7 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                    <User className="h-4 w-4" style={{ color: "hsl(var(--teal))" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 rounded-lg bg-white/80 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button onClick={send} className="gradient-btn px-3 rounded-lg">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-4 md:right-8 z-50 gradient-btn px-5 py-3 rounded-full font-bold inline-flex items-center gap-2 shadow-2xl"
      >
        <MessageCircle className="h-5 w-5" />
        {open ? "Close" : "Chat"}
      </button>
    </>
  );
};

export default Chatbot;
