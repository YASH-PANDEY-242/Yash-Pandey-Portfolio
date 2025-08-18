import { useState } from "react";
import { X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatbotProps {
  onClose: () => void;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = ({ onClose }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Yash's portfolio assistant. Ask me anything about his skills, projects, or experience!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const botResponses: Record<string, string> = {
    skills: "Yash is proficient in C (80%), C++ (70%), Python (75%), AI/ML (70%), and SQL (80%). He's currently studying Artificial Intelligence at Sacred Heart Academy.",
    projects: "His featured projects include Image Forgery Detection using ML algorithms, a Simple Calculator with clean UI, and Image Enhancement using Deep Learning with CNNs.",
    education: "He's pursuing a Bachelor in Technology in Artificial Intelligence from Sacred Heart Academy (CBSE), Nagpur. Currently in his 3rd year, graduating in 2026.",
    contact: "You can reach Yash at py5554443@gmail.com or call him at +91 8623009578. He's based in Nagpur, India.",
    availability: "Yash is available for jobs in AI/ML Development, C Programming, and Web Development.",
    experience: "Yash has worked on various AI/ML projects including image processing, forgery detection, and deep learning applications. He has strong foundations in programming and data science.",
    languages: "Yash speaks English fluently and is a native speaker of Hindi and Marathi.",
    hobbies: "In his free time, Yash enjoys chromancy (color magic), video editing, and gaming.",
  };

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('programming')) return botResponses.skills;
    if (lowerMessage.includes('project')) return botResponses.projects;
    if (lowerMessage.includes('education') || lowerMessage.includes('study')) return botResponses.education;
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) return botResponses.contact;
    if (lowerMessage.includes('job') || lowerMessage.includes('work') || lowerMessage.includes('hire')) return botResponses.availability;
    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) return botResponses.experience;
    if (lowerMessage.includes('language')) return botResponses.languages;
    if (lowerMessage.includes('hobby') || lowerMessage.includes('interest')) return botResponses.hobbies;
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) return "Hello! How can I help you learn more about Yash Pandey?";
    
    return "I can help you learn about Yash's skills, projects, education, contact information, and availability. What would you like to know?";
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-24 right-8 w-96 h-96 portfolio-glass rounded-2xl z-30 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          <span className="font-semibold">Portfolio Assistant</span>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'bot' && (
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Bot className="h-3 w-3 text-primary" />
              </div>
            )}
            <div
              className={`max-w-[80%] p-3 rounded-lg text-sm ${
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}
            >
              {message.text}
            </div>
            {message.sender === 'user' && (
              <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <User className="h-3 w-3 text-secondary" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask me about Yash..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-3 py-2 bg-muted rounded-lg text-sm border-none outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Button size="sm" onClick={sendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;