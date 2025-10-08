import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, FileText, ArrowRight, MessageCircle } from "lucide-react";

// Text Highlighter Component (inspired by Sera UI)
const TextHighlighter = ({ 
  text, 
  highlightText, 
  highlightColor = "from-orange-500 to-amber-500",
  delay = 0 
}: { 
  text: string; 
  highlightText: string; 
  highlightColor?: string;
  delay?: number;
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useState(() => {
    if (isInView) {
      setTimeout(() => setIsHighlighted(true), delay);
    }
  });

  const parts = text.split(highlightText);
  
  return (
    <span ref={ref}>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && (
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <span className="relative z-10">{highlightText}</span>
              <motion.span
                className={`absolute inset-0 bg-gradient-to-r ${highlightColor} -z-10 rounded`}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </motion.span>
          )}
        </span>
      ))}
    </span>
  );
};

// Curved Text Component
const CurvedText = ({ text, radius = 200 }: { text: string; radius?: number }) => {
  const characters = text.split('');
  const angleStep = 180 / characters.length;
  
  return (
    <div className="relative" style={{ height: `${radius}px` }}>
      {characters.map((char, index) => {
        const angle = (index - characters.length / 2) * angleStep;
        return (
          <motion.span
            key={index}
            className="absolute text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            style={{
              transform: `rotate(${angle}deg) translateY(-${radius}px)`,
              transformOrigin: 'center bottom',
              left: '50%',
              bottom: 0,
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
};

const engagementOptions = [
  {
    icon: MessageCircle,
    title: "Quick Chat",
    description: "Start with a brief conversation about your AI transformation goals",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Assessment",
    description: "Get a comprehensive AI readiness assessment for your enterprise",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: ArrowRight,
    title: "Direct Engagement",
    description: "Jump straight into a pilot project with our Intelligence HaiPODs",
    color: "from-orange-500 to-amber-500",
  },
];

const whatToExpect = [
  "AI maturity assessment",
  "Custom transformation roadmap",
  "ROI projections and business case",
];

const nextSteps = [
  "AI Pod deployment strategy",
  "Technology integration plan",
  "Success metrics and timeline",
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  
  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 md:px-20 bg-gradient-to-b from-background via-[#1e3a5f]/20 to-background relative overflow-hidden"
    >
      {/* Parallax Background Effects */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(207_79%_50%_/_0.15),transparent_50%)]"
      />

      {/* Animated Grid */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 100]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0])
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f80e01a_1px,transparent_1px),linear-gradient(to_bottom,#1f80e01a_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      {/* Floating Orbs */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -200]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.4, 0])
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 150]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0])
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Title with Text Highlighter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Let's <TextHighlighter text="Co-Create Your Intelligence" highlightText="Co-Create" highlightColor="from-orange-500 to-amber-500" delay={0.5} />
            <br />
            <TextHighlighter text="Intelligence Future" highlightText="Future" highlightColor="from-blue-500 to-cyan-500" delay={0.8} />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed"
          >
            Book a <TextHighlighter text="strategic session with our leadership" highlightText="strategic session" highlightColor="from-primary to-cyan-500" delay={1} /> to explore how HaiIntel can embed intelligence into your operations, accelerate transformation, and drive measurable outcomes.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-gray-900 font-bold rounded-xl flex items-center gap-2 shadow-xl mx-auto text-white/90"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Strategy Session
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-sm text-muted-foreground"
          >
            Free 60-minute consultation with our CIO Partners
          </motion.p>
        </motion.div>

        {/* Engagement Options Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {engagementOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="perspective-1000"
            >
              <div className="relative p-8 bg-gradient-to-br from-[#2a4a7c]/30 to-[#1e3a5f]/50 backdrop-blur-sm border border-primary/30 rounded-2xl h-full group transform-gpu preserve-3d">
                {/* Gradient glow */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${option.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl -z-10`}
                  whileHover={{ opacity: 0.4 }}
                />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <option.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white text-center mb-3">
                  {option.title}
                </h3>

                <p className="text-blue-100 text-center text-sm leading-relaxed">
                  {option.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What to Expect & Next Steps */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* What to Expect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-8 "
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              What to Expect:
            </motion.h3>

            <ul className="space-y-4">
              {whatToExpect.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-8 text-right"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Next Steps:
            </motion.h3>

            <ul className="space-y-4">
              {nextSteps.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ x: -10, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 text-foreground justify-end"
                >
                  <span className="text-lg text-right">{item}</span>
                  <motion.div
                    className="w-2 h-2 bg-accent rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

