import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = [
  {
    title: "HaiProducts",
    links: [
      { label: "HaiIntel-Recode", href: "#about" },
      { label: "HaiReach", href: "#services" },
      { label: "HaiOnboarding", href: "#" },
      { label: "HaiResolve", href: "#contact" },
      { label: "HaiModels", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Intelligence HaiPODs", href: "#" },
      { label: "AI Architecture", href: "#" },
      { label: "Legacy Modernization", href: "#" },
      { label: "CIO Partnership", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@haiintel.com", href: "#" },
      { label: "+1 (555) 123-4567", href: "#" },
      { label: "Global Headquarters Enterprise AI District", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:contact@haiintel.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className=" bg-card border-t border-primary/30 relative overflow-hidden">
      {/* 3D Background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-background to-transparent"
        animate={{
          backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "0%",
          }}
          animate={{
            y: [-100, -300],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut",
          }}
        />
      ))}
      
      <div className="max-w-full mx-auto px-6 md:px-20 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Hai<span className="text-primary">Intel</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
            Partnering with CIOs to embed human-rooted AI into enterprise transformation — accelerating outcomes through intelligence-first systems.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-4 h-4 text-primary" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-primary/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 HaiIntel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
