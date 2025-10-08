import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: number;
  suggestions?: string[];
}

// Comprehensive AI Response Structure inspired by HaiIntel.com
interface AIResponse {
  text: string;
  suggestions?: string[];
}

const AI_KNOWLEDGE_BASE: Record<string, AIResponse> = {
  "what is haiintel?": {
    text: "HaiIntel is an enterprise AI transformation company that embeds human-rooted AI into business operations. We're not just software - we deliver Intelligence. CIOs and business leaders partner with us to accelerate transformation outcomes through our specialized HaiPODs and cutting-edge AI solutions.",
    suggestions: ["Tell me about HaiPODs", "What technologies do you use?", "How can you help my business?"]
  },
  "what is haiintel": {
    text: "HaiIntel is an enterprise AI transformation company that embeds human-rooted AI into business operations. We're not just software - we deliver Intelligence. CIOs and business leaders partner with us to accelerate transformation outcomes through our specialized HaiPODs and cutting-edge AI solutions.",
    suggestions: ["Tell me about HaiPODs", "What technologies do you use?", "How can you help my business?"]
  },
  "tell me about haipods": {
    text: "HaiPODs are our specialized Product-Oriented Delivery teams that bring focused expertise to every engagement:\n\n🔵 Advisory POD - Strategic AI transformation guidance\n🔵 Delivery POD - End-to-end AI solution implementation\n🔵 Training POD - Comprehensive upskilling programs\n🔵 Innovation POD - Cutting-edge R&D and prototyping\n🔵 Optimization POD - Performance tuning and cost optimization\n🔵 Growth POD - AI-powered business acceleration\n\nEach POD delivers exceptional results through specialized expertise.",
    suggestions: ["What services do you offer?", "Tell me about your tech stack", "How do I get started?"]
  },
  "what technologies do you use?": {
    text: "We leverage cutting-edge technologies across multiple domains:\n\n🧠 AI & ML: TensorFlow, PyTorch, OpenAI, LangChain, Hugging Face\n☁️ Cloud: AWS, Azure, Google Cloud, Kubernetes, Docker\n📊 Data Engineering: Apache Spark, Airflow, Snowflake, PostgreSQL\n💻 Development: Python, TypeScript, React, Node.js, FastAPI\n🔄 MLOps: MLflow, Kubeflow, Jenkins, GitLab CI/CD\n📈 Visualization: Tableau, Power BI, D3.js, Plotly\n\nWe ensure 99.9% uptime with 24/7 monitoring on 100% cloud-native infrastructure.",
    suggestions: ["What industries do you serve?", "Tell me about HaiPODs", "Schedule a consultation"]
  },
  "what services do you offer?": {
    text: "Our comprehensive AI services include:\n\n✨ AI Strategy & Consulting - Transform your business with intelligent roadmaps\n🚀 Custom AI Solutions - Tailored implementations for your unique needs\n📊 Data Analytics & Engineering - Turn data into actionable insights\n🔄 MLOps & Deployment - Scalable, production-ready AI systems\n👥 Training & Upskilling - Empower your team with AI capabilities\n⚡ AI Integration - Seamless enterprise system integration\n\nWe've delivered 200+ AI projects for 50+ Fortune 500 clients, creating $10B+ in business value.",
    suggestions: ["How much does it cost?", "Show me case studies", "Book a demo"]
  },
  "how can you help my business?": {
    text: "HaiIntel accelerates your AI transformation journey:\n\n🎯 Business Impact: We focus on measurable ROI and outcomes\n⚡ Rapid Deployment: Our HaiPODs ensure faster time-to-value\n🔒 Enterprise-Grade: Secure, scalable, production-ready solutions\n🤝 Strategic Partnership: We co-create your intelligence future\n📈 Continuous Innovation: Stay ahead with cutting-edge AI\n\nFrom AI maturity assessment to full transformation, we guide you every step.",
    suggestions: ["Schedule a strategy session", "What's the process?", "Tell me about pricing"]
  },
  "schedule a strategy session": {
    text: "Let's co-create your intelligence future! 🚀\n\nBook a FREE 60-minute consultation with our CIO Partners:\n\n✅ AI maturity assessment\n✅ Custom transformation roadmap\n✅ ROI projections and business case\n✅ POD deployment strategy\n✅ Technology integration plan\n✅ Success metrics and timeline\n\nContact us at: contact@haiintel.com\nOr visit: haiintel.com/contact",
    suggestions: ["What industries do you serve?", "Tell me about your team", "What is HaiIntel?"]
  },
  "contact info": {
    text: "📧 Email: contact@haiintel.com\n🌐 Website: haiintel.com\n📍 Serving Fortune 500 enterprises globally\n\n💼 Ready to start? Book a free 60-minute strategy session with our CIO Partners!\n\nWe typically respond within 24 hours and offer flexible engagement options: Quick Chat, AI Assessment, or Direct Engagement.",
    suggestions: ["Schedule a strategy session", "What services do you offer?", "Tell me about HaiPODs"]
  },
  "contact": {
    text: "📧 Email: contact@haiintel.com\n🌐 Website: haiintel.com\n📍 Serving Fortune 500 enterprises globally\n\n💼 Ready to start? Book a free 60-minute strategy session with our CIO Partners!\n\nWe typically respond within 24 hours and offer flexible engagement options: Quick Chat, AI Assessment, or Direct Engagement.",
    suggestions: ["Schedule a strategy session", "What services do you offer?", "Tell me about HaiPODs"]
  },
  "what industries do you serve?": {
    text: "We serve Fortune 500 enterprises across multiple industries:\n\n🏦 Financial Services - Banking, Insurance, Fintech\n🏥 Healthcare - Medical devices, Pharmaceuticals, Health tech\n🛒 Retail & E-commerce - Digital transformation, Customer analytics\n🏭 Manufacturing - Smart factories, Supply chain optimization\n🚗 Automotive - Connected vehicles, Autonomous systems\n📱 Technology - SaaS, Platforms, Enterprise software\n⚡ Energy - Smart grids, Renewable energy optimization\n\nOver 50+ Fortune 500 clients trust us for their AI transformation.",
    suggestions: ["Show me success stories", "What technologies do you use?", "How do I get started?"]
  },
  "how do i get started?": {
    text: "Getting started with HaiIntel is simple:\n\n1️⃣ Book a Strategy Session - Free 60-min consultation\n2️⃣ AI Readiness Assessment - We evaluate your current state\n3️⃣ Custom Roadmap - Tailored transformation plan with ROI projections\n4️⃣ POD Deployment - Our specialized teams begin implementation\n5️⃣ Measure Success - Track KPIs and continuous optimization\n\n🚀 Most clients see initial results within 4-6 weeks!\n\nReady to begin? Contact us at contact@haiintel.com",
    suggestions: ["Schedule a strategy session", "What services do you offer?", "Tell me about pricing"]
  },
  "tell me about pricing": {
    text: "Our pricing is flexible and value-driven:\n\n💼 Engagement Models:\n• Project-Based - Fixed scope and timeline\n• Retainer - Ongoing partnership with dedicated PODs\n• Outcome-Based - Pay for results and ROI achieved\n• Hybrid - Combination of models\n\n💡 Every engagement starts with a FREE strategy session where we:\n✅ Assess your AI maturity\n✅ Define clear objectives and KPIs\n✅ Provide detailed cost estimates\n✅ Outline expected ROI and timeline\n\n📧 Contact us for a custom quote: contact@haiintel.com",
    suggestions: ["Schedule a strategy session", "What's included?", "Show me case studies"]
  },
  // Additional query variations for better matching
  "services": {
    text: "Our comprehensive AI services include:\n\n✨ AI Strategy & Consulting - Transform your business with intelligent roadmaps\n🚀 Custom AI Solutions - Tailored implementations for your unique needs\n📊 Data Analytics & Engineering - Turn data into actionable insights\n🔄 MLOps & Deployment - Scalable, production-ready AI systems\n👥 Training & Upskilling - Empower your team with AI capabilities\n⚡ AI Integration - Seamless enterprise system integration\n\nWe've delivered 200+ AI projects for 50+ Fortune 500 clients, creating $10B+ in business value.",
    suggestions: ["How much does it cost?", "Show me case studies", "Book a demo"]
  },
  "tech stack": {
    text: "We leverage cutting-edge technologies across multiple domains:\n\n🧠 AI & ML: TensorFlow, PyTorch, OpenAI, LangChain, Hugging Face\n☁️ Cloud: AWS, Azure, Google Cloud, Kubernetes, Docker\n📊 Data Engineering: Apache Spark, Airflow, Snowflake, PostgreSQL\n💻 Development: Python, TypeScript, React, Node.js, FastAPI\n🔄 MLOps: MLflow, Kubeflow, Jenkins, GitLab CI/CD\n📈 Visualization: Tableau, Power BI, D3.js, Plotly\n\nWe ensure 99.9% uptime with 24/7 monitoring on 100% cloud-native infrastructure.",
    suggestions: ["What industries do you serve?", "Tell me about HaiPODs", "Schedule a consultation"]
  },
  "pods": {
    text: "HaiPODs are our specialized Product-Oriented Delivery teams that bring focused expertise to every engagement:\n\n🔵 Advisory POD - Strategic AI transformation guidance\n🔵 Delivery POD - End-to-end AI solution implementation\n🔵 Training POD - Comprehensive upskilling programs\n🔵 Innovation POD - Cutting-edge R&D and prototyping\n🔵 Optimization POD - Performance tuning and cost optimization\n🔵 Growth POD - AI-powered business acceleration\n\nEach POD delivers exceptional results through specialized expertise.",
    suggestions: ["What services do you offer?", "Tell me about your tech stack", "How do I get started?"]
  },
  "pricing": {
    text: "Our pricing is flexible and value-driven:\n\n💼 Engagement Models:\n• Project-Based - Fixed scope and timeline\n• Retainer - Ongoing partnership with dedicated PODs\n• Outcome-Based - Pay for results and ROI achieved\n• Hybrid - Combination of models\n\n💡 Every engagement starts with a FREE strategy session where we:\n✅ Assess your AI maturity\n✅ Define clear objectives and KPIs\n✅ Provide detailed cost estimates\n✅ Outline expected ROI and timeline\n\n📧 Contact us for a custom quote: contact@haiintel.com",
    suggestions: ["Schedule a strategy session", "What's included?", "Show me case studies"]
  },
  "schedule": {
    text: "Let's co-create your intelligence future! 🚀\n\nBook a FREE 60-minute consultation with our CIO Partners:\n\n✅ AI maturity assessment\n✅ Custom transformation roadmap\n✅ ROI projections and business case\n✅ POD deployment strategy\n✅ Technology integration plan\n✅ Success metrics and timeline\n\nContact us at: contact@haiintel.com\nOr visit: haiintel.com/contact",
    suggestions: ["What industries do you serve?", "Tell me about your team", "What is HaiIntel?"]
  },
  "industries": {
    text: "We serve Fortune 500 enterprises across multiple industries:\n\n🏦 Financial Services - Banking, Insurance, Fintech\n🏥 Healthcare - Medical devices, Pharmaceuticals, Health tech\n🛒 Retail & E-commerce - Digital transformation, Customer analytics\n🏭 Manufacturing - Smart factories, Supply chain optimization\n🚗 Automotive - Connected vehicles, Autonomous systems\n📱 Technology - SaaS, Platforms, Enterprise software\n⚡ Energy - Smart grids, Renewable energy optimization\n\nOver 50+ Fortune 500 clients trust us for their AI transformation.",
    suggestions: ["Show me success stories", "What technologies do you use?", "How do I get started?"]
  }
};

const DEFAULT_SUGGESTIONS = ["What is HaiIntel?", "Tell me about HaiPODs", "What technologies do you use?"];

const ThinkingIndicator = ({ countdown }: { countdown: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="px-4 py-3 bg-card border border-primary/30 rounded-lg mr-auto max-w-[70%]"
  >
    <p className="text-sm text-muted-foreground">
      HaiIntel is thinking for {countdown} sec(s)...
    </p>
  </motion.div>
);

const TypingIndicator = () => (
  <div className="flex items-center space-x-1 px-4 py-3 bg-card border border-primary/30 rounded-lg mr-auto max-w-[70%]">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-2 bg-primary rounded-full"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: i * 0.15,
        }}
      />
    ))}
  </div>
);

const MessageBubble = ({ message, isTyping, onTypingComplete }: { message: Message; isTyping?: boolean; onTypingComplete?: () => void }) => {
  const isUser = message.sender === "user";
  const [displayedText, setDisplayedText] = useState(isTyping ? "" : message.text);
  const [hasCompleted, setHasCompleted] = useState(!isTyping);
  
  useEffect(() => {
    if (isTyping && message.sender === "ai") {
      let index = 0;
      setDisplayedText("");
      setHasCompleted(false);
      const timer = setInterval(() => {
        if (index < message.text.length) {
          setDisplayedText(message.text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
          setHasCompleted(true);
          if (onTypingComplete) {
            onTypingComplete();
          }
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isTyping, message.text, message.sender, onTypingComplete]);
  
  // Format timestamp
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
    >
      <div
        className={`px-4 py-3 rounded-lg max-w-[70%] ${
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-card text-card-foreground border border-primary/30"
        }`}
      >
        <p className="text-sm whitespace-pre-line">{displayedText}</p>
      </div>
      <span className="text-xs text-muted-foreground mt-1 px-2">
        {formatTime(message.timestamp)}
      </span>
    </motion.div>
  );
};

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [thinkingCountdown, setThinkingCountdown] = useState(2);
  const [isTyping, setIsTyping] = useState(false);
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem("haiintel-chat-session");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      const initialMessage: Message = {
        id: "1",
        sender: "ai",
        text: "Hey 👋, I'm HaiIntel Assistant. How can I help you today?",
        timestamp: Date.now(),
        suggestions: DEFAULT_SUGGESTIONS,
      };
      setMessages([initialMessage]);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("haiintel-chat-session", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    // Scroll to bottom whenever messages change or during typing
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    };
    
    scrollToBottom();
    
    // If typing, keep scrolling during the typing animation
    if (isTyping) {
      const scrollInterval = setInterval(scrollToBottom, 100);
      return () => clearInterval(scrollInterval);
    }
  }, [messages, isTyping, isThinking]);

  const simulateAIResponse = async (userMessage: string) => {
    // Show thinking indicator with countdown
    setIsThinking(true);
    setThinkingCountdown(2);
    
    // Countdown from 2 to 1
    await new Promise((resolve) => setTimeout(resolve, 800));
    setThinkingCountdown(1);
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    setIsThinking(false);
    setIsTyping(true);
    
    // Brief pause before typing starts
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    const lowerMessage = userMessage.toLowerCase().trim();
    
    // Try to find exact match first, then partial match
    let aiResponse = AI_KNOWLEDGE_BASE[lowerMessage];
    
    if (!aiResponse) {
      // Try to find a partial match
      const matchingKey = Object.keys(AI_KNOWLEDGE_BASE).find(key => 
        lowerMessage.includes(key) || key.includes(lowerMessage)
      );
      
      if (matchingKey) {
        aiResponse = AI_KNOWLEDGE_BASE[matchingKey];
      } else {
        // Default response with helpful suggestions
        aiResponse = {
          text: "I'd be happy to help! I can answer questions about:\n\n✨ HaiIntel and our services\n🔵 HaiPODs and specialized teams\n💻 Technologies and tech stack\n🏢 Industries we serve\n📞 Contact information and scheduling\n💰 Pricing and engagement models\n\nWhat would you like to know more about?",
          suggestions: DEFAULT_SUGGESTIONS
        };
      }
    }
    
    const responseMessage: Message = {
      id: Date.now().toString(),
      sender: "ai",
      text: aiResponse.text,
      timestamp: Date.now(),
      suggestions: aiResponse.suggestions,
    };
    
    setIsTyping(false);
    setTypingMessageId(responseMessage.id);
    setMessages((prev) => [...prev, responseMessage]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    simulateAIResponse(inputValue);
  };

  const handleSuggestionClick = (suggestion: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: suggestion,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);
    simulateAIResponse(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-8 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary text-primary-foreground rounded-full p-4 shadow-lg glow-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 bg-card border border-primary rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary/10 border-b border-primary px-4 py-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
              <DotLottieReact
                // src="https://lottie.host/ed8b2ace-7292-4397-a3b3-13f9fc1d4598/xr3WN7KW1s.lottie"
                src="https://lottie.host/99acca30-2742-4800-81a5-718a469f7a07/OWANbzyQGG.lottie"
                className="w-16 h-16 "
                loop
                autoplay
              />
              <h3 className="font-semibold text-foreground">HaiIntel Chat</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
             
            </div>
            

            {/* Messages List */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-background/50 scroll-smooth">
              {messages.map((message, index) => (
                <div key={message.id}>
                  <MessageBubble 
                    message={message} 
                    isTyping={message.id === typingMessageId}
                    onTypingComplete={() => {
                      setTypingMessageId(null);
                    }}
                  />
                  
                  {/* Show suggestions below AI messages only after typing completes */}
                  {message.sender === "ai" && 
                   message.suggestions && 
                   message.suggestions.length > 0 && 
                   !isTyping && 
                   !isThinking &&
                   message.id !== typingMessageId &&
                   index === messages.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-3 flex flex-wrap gap-2"
                    >
                      {message.suggestions.map((suggestion, suggestionIndex) => (
                        <motion.button
                          key={suggestionIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + suggestionIndex * 0.1 }}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="bg-background border border-primary text-primary rounded-full px-3 py-1.5 text-xs hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                        >
                          {suggestion}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              {isThinking && <ThinkingIndicator countdown={thinkingCountdown} />}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Row */}
            <div className="border-t border-primary/30 p-3 flex gap-2 bg-card">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 bg-background text-foreground border-input"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
