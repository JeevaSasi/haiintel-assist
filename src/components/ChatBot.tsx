import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: number;
}

const CHAT_RESPONSES: Record<string, string> = {
  "what is haiintel?": "HaiIntel is a technology-driven analytics company focused on delivering intelligent insights through data and AI.",
  "what is haiintel": "HaiIntel is a technology-driven analytics company focused on delivering intelligent insights through data and AI.",
  "services offered": "We provide AI solutions, analytics dashboards, and enterprise integrations tailored for data-driven businesses.",
  "services": "We provide AI solutions, analytics dashboards, and enterprise integrations tailored for data-driven businesses.",
  "contact info": "You can reach us at contact@haiintel.com or visit haiintel.com/contact.",
  "contact": "You can reach us at contact@haiintel.com or visit haiintel.com/contact.",
};

const SUGGESTIONS = ["What is HaiIntel?", "Services offered", "Contact info"];

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

const MessageBubble = ({ message, isTyping }: { message: Message; isTyping?: boolean }) => {
  const isUser = message.sender === "user";
  const [displayedText, setDisplayedText] = useState(isTyping ? "" : message.text);
  
  useEffect(() => {
    if (isTyping && message.sender === "ai") {
      let index = 0;
      setDisplayedText("");
      const timer = setInterval(() => {
        if (index < message.text.length) {
          setDisplayedText(message.text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isTyping, message.text, message.sender]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`px-4 py-3 rounded-lg max-w-[70%] ${
          isUser
            ? "bg-primary text-primary-foreground ml-auto"
            : "bg-card text-card-foreground border border-primary/30 mr-auto"
        }`}
      >
        <p className="text-sm">{displayedText}</p>
      </div>
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
  const [showSuggestions, setShowSuggestions] = useState(false);
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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isThinking]);

  const simulateAIResponse = async (userMessage: string) => {
    // Show thinking indicator with countdown
    setIsThinking(true);
    setThinkingCountdown(2);
    
    // Countdown from 2 to 1
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setThinkingCountdown(1);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsThinking(false);
    setIsTyping(true);
    
    // Brief pause before typing starts
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    const lowerMessage = userMessage.toLowerCase().trim();
    const response = CHAT_RESPONSES[lowerMessage] || "Sorry, I couldn't find an answer for that. Please try asking about our services, what HaiIntel is, or contact information.";
    
    const responseMessage: Message = {
      id: Date.now().toString(),
      sender: "ai",
      text: response,
      timestamp: Date.now(),
    };
    
    setIsTyping(false);
    setTypingMessageId(responseMessage.id);
    setMessages((prev) => [...prev, responseMessage]);
    setShowSuggestions(true);
    
    // Clear typing effect after message is fully typed
    setTimeout(() => setTypingMessageId(null), response.length * 30 + 500);
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
    setShowSuggestions(false);
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
    setShowSuggestions(false);
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
        className="fixed bottom-6 right-6 z-50"
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
            <div className="bg-primary/10 border-b border-primary px-4 py-3 flex items-center justify-between">
              <h3 className="font-semibold text-foreground">HaiIntel Chat</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages List */}
            <div className="h-96 overflow-y-auto p-4 space-y-3 bg-background/50">
              {messages.map((message) => (
                <MessageBubble 
                  key={message.id} 
                  message={message} 
                  isTyping={message.id === typingMessageId}
                />
              ))}
              {isThinking && <ThinkingIndicator countdown={thinkingCountdown} />}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {showSuggestions && !isTyping && !isThinking && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="px-4 pb-2 flex flex-wrap gap-2"
              >
                {SUGGESTIONS.map((suggestion, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="bg-background border border-primary text-primary rounded-full px-3 py-1 text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </motion.div>
            )}

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
