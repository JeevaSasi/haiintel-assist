import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "HaiProducts", href: "/products" },
  { label: "HaiPODs", href: "/pods" },
  { label: "Leadership", href: "/leadership" },
  { label: "Tech Stack", href: "/techstack" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();
  
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Check if it's a route (starts with /) or an anchor
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // It's an anchor link
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.header
        style={{
          opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur}px)`,
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 border-b border-primary/30 shadow-lg shadow-primary/5"
            : "bg-background/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => {
                navigate('/');
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {/* Animated logo with glow on hover */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg opacity-0 blur-xl"
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
                <img
                  src="/logo.svg"
                  alt="HaiIntel Logo"
                  className="h-16 w-32 relative z-10"
                />
              </motion.div>
              {/* <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">
                  Haiintel
                </span>
                <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                  Say Hello to AI
                </span>
              </div> */}
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-foreground/90 hover:text-foreground font-medium transition-colors group py-2"
                  whileHover={{ y: -3 }}
                >
                  {item.label}
                  {/* Animated gradient underline on hover */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-cyan-400 to-accent rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ 
                      scaleX: 1, 
                      opacity: 1,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyan-400 to-accent blur-md"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ 
                      scaleX: 1, 
                      opacity: 0.6,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Get Started Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-white text-black hover:bg-white/90 font-semibold px-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                size="lg"
              >
                Get Started
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          x: isMobileMenuOpen ? 0 : "100%",
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-20 right-0 bottom-0 w-full bg-background/95 backdrop-blur-xl z-40 lg:hidden border-l border-primary/30"
      >
        <nav className="flex flex-col p-8 gap-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => handleNavigation(item.href)}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : 50,
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-2xl font-semibold text-foreground/90 hover:text-primary transition-colors text-left"
            >
              {item.label}
            </motion.button>
          ))}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              x: isMobileMenuOpen ? 0 : 50,
            }}
            transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            className="mt-4"
          >
            <Button
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-white text-black hover:bg-white/90 font-semibold rounded-lg"
              size="lg"
            >
              Get Started
            </Button>
          </motion.div>
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 lg:hidden"
        />
      )}
    </>
  );
};

