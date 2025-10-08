import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FileText, Users, Brain, Target, TrendingUp, Zap, ArrowRight, Sparkles, Shield, Rocket } from "lucide-react";

const evolutionPath = [
  {
    icon: FileText,
    title: "IT-Led Tools",
    description: "Traditional software delivery focused on technical specifications",
    color: "bg-blue-500/10 border-blue-500/30 text-blue-400",
  },
  {
    icon: Users,
    title: "Co-Created Systems",
    description: "Business and IT collaboration on AI-powered solutions",
    color: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
  },
  {
    icon: Brain,
    title: "Intelligence Delivery",
    description: "Business-led AI systems that drive measurable outcomes",
    color: "bg-accent/10 border-accent/30 text-accent",
  },
];

const drivingShift = [
  {
    icon: Target,
    title: "Democratizing Intelligence",
    description: "Generative AI puts intelligent capabilities directly in business users' hands",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: TrendingUp,
    title: "Business Ownership",
    description: "Business units taking direct control of AI outcomes tied to revenue and efficiency",
    color: "from-blue-500 to-cyan-500",
    highlight: "Ownership",
  },
  {
    icon: Zap,
    title: "Core Capability",
    description: "AI transforms from isolated initiative to fundamental business capability",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Trust & Governance",
    description: "Building AI systems with transparency, ethics, and compliance at the core",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Rapid Innovation",
    description: "Accelerating time-to-value with agile AI development and deployment",
    color: "from-indigo-500 to-blue-400",
  },
];

// Typewriter component
const TypeWriter = ({ text, delay = 0, speed = 50 }: { text: string; delay?: number; speed?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 500);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return (
    <span>
      {displayText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-1 h-10 md:h-14 bg-primary ml-1"
        />
      )}
    </span>
  );
};

export const Evolution = () => {
  const ref = useRef(null);
  const carouselRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  // Auto-rotate carousel
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % drivingShift.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <section 
      id="whatwedo"
      className="py-16 px-6 md:px-20 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden"
    >
      {/* 3D Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(207_79%_50%_/_0.05),transparent_50%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold uppercase tracking-wider backdrop-blur-sm flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              The Evolution
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-gradient">Enterprise AI</span>
            <br />
            Is Entering Its Business-Led Phase
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto"
          >
            The power center is shifting to domain experts and frontline teams. This is a strategic tilt: <span className="text-gradient">business leads</span>, and software follows.
          </motion.p>
        </motion.div>

        {/* The Evolution Path - Typewriter Title */}
        <div className="mb-2">
          {isInView && (
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-center mb-16 text-gradient"
            >
              <TypeWriter text="The Evolution Path" speed={80} />
            </motion.h3>
          )}

          {/* Evolution Cards - Instant Display */}
          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {evolutionPath.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group"
                >
                  <div className={`p-6 rounded-2xl border ${item.color} backdrop-blur-sm h-full transform-gpu`}>
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        delay: index * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.6 }
                      }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color}`}
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.div>

                    {/* Title */}
                    <h4 className="text-xl font-bold mb-3 text-foreground">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {/* Arrow connector (not on last card) */}
                    {index < evolutionPath.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                          <ArrowRight className="w-4 h-4 text-primary" />
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* What's Driving This Shift - Horizontal Carousel */}
        <div ref={carouselRef} className="py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: Title - Fade In */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-4xl md:text-6xl font-bold text-gradient leading-tight">
                  What's Driving This Shift
                </h3>
                <p className="text-lg text-muted-foreground">
                  Explore the key drivers transforming enterprise AI adoption and business-led intelligence delivery.
                </p>
                
                {/* Navigation Dots */}
                <div className="flex gap-3 pt-4">
                  {drivingShift.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === index
                          ? 'bg-primary w-12'
                          : 'bg-primary/30 hover:bg-primary/50 w-2'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Right: Horizontal Sliding Carousel */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative overflow-hidden rounded-3xl"
              >
                {/* Carousel Container */}
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={(e, { offset, velocity }) => {
                    setIsDragging(false);
                    const swipe = Math.abs(offset.x) * velocity.x;
                    
                    if (swipe < -10000) {
                      setCurrentIndex((prev) => 
                        prev < drivingShift.length - 1 ? prev + 1 : prev
                      );
                    } else if (swipe > 10000) {
                      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
                    }
                  }}
                  animate={{ x: `-${currentIndex * 100}%` }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  className="flex cursor-grab active:cursor-grabbing"
                >
                  {drivingShift.map((item, index) => (
                    <motion.div
                      key={index}
                      className="min-w-full px-2"
                    >
                      <div className="relative p-8 bg-card/90 backdrop-blur-xl border border-primary/30 rounded-3xl shadow-2xl  flex flex-col">
                        {/* Gradient glow */}
                        <motion.div
                          className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl opacity-20 blur-xl -z-10`}
                          animate={{
                            opacity: [0.2, 0.4, 0.2],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Icon */}
                        <motion.div
                          className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto`}
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <item.icon className="w-10 h-10 text-white" />
                        </motion.div>

                        {/* Title */}
                        <h4 className="text-2xl md:text-3xl font-bold mb-4 text-center text-foreground">
                          {item.highlight ? (
                            <>
                              Business <span className="text-gradient">{item.highlight}</span>
                            </>
                          ) : (
                            item.title
                          )}
                        </h4>

                        {/* Description */}
                        <p className="text-base text-muted-foreground leading-relaxed text-center flex-1">
                          {item.description}
                        </p>

                        {/* Card number */}
                        <div className="mt-6 text-center">
                          <span className="text-sm text-primary/60 font-semibold">
                            {String(index + 1).padStart(2, '0')} / {String(drivingShift.length).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : drivingShift.length - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors z-10"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={() => setCurrentIndex((prev) => (prev < drivingShift.length - 1 ? prev + 1 : 0))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors z-10"
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Gartner Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto mt-20"
        >
          <div className="p-8 md:p-12 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl text-center">
            <p className="text-lg md:text-2xl text-foreground/90 italic mb-4">
              "Top-performing organizations adopt co-ownership models between IT and business"
            </p>
            <p className="text-primary font-semibold text-lg">
              — Gartner
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

