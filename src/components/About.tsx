import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Zap, LineChart, Shield, MinusSquareIcon, Target } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Intelligence-First",
    description: "Every system designed with AI embedded at its core, not bolted on as an afterthought.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: LineChart,
    title: "Continuous Learning",
    description: "Systems that evolve and improve with every interaction, creating compounding value.",
    color: "from-primary to-blue-400",
  },
  {
    icon: Zap,
    title: "Enterprise-Ready",
    description: "Built with governance, security, and compliance at the foundation, not as an add-on.",
    color: "from-accent to-emerald-500",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 md:px-20 bg-background relative overflow-hidden">
      {/* 3D Background Effects */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(207_79%_50%_/_0.1),transparent_50%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 3D Orbiting Circles */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 border border-primary/20 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 border border-accent/20 rounded-full"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section Header - Slide from left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="">
              
              <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold uppercase tracking-wider backdrop-blur-sm flex items-center gap-2">
              <Target className="w-5 h-5" />
                Our Mission
              </div>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Business-Led Intelligence,
            <br />
            <span className="text-gradient">Built for CIOs</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            HaiIntel helps CIOs lead the shift from software delivery to intelligence delivery. We believe the most valuable AI systems aren't tools — they're <span className="text-gradient">teammates</span>. Our mission is to embed continuous intelligence into the heart of business architecture.
          </motion.p>
        </motion.div>

        {/* Feature Cards - Zoom in from center */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.3, z: -100 }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1, 
                z: 0,
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.7 + index * 0.2,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{
                scale: 1.05,
                y: -15,
                rotateY: 8,
                rotateX: 8,
                transition: { duration: 0.4, type: "spring", stiffness: 300 },
              }}
              className="group relative perspective-1000"
            >
              <div className="relative p-8 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl hover:border-primary/60 transition-all duration-500 h-full transform-gpu preserve-3d overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                {/* 3D Glow effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-2xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <div className="relative z-10">
                  {/* Icon with 3D rotation */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, 360],
                      transition: { duration: 0.8 }
                    }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h3
                    className="text-xl font-bold mb-4 text-foreground group-hover:text-gradient transition-all"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 + index * 0.2 }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 + index * 0.2 }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Hover arrow indicator */}
                  <motion.div
                    className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-sm font-semibold">Learn More</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-8 bg-card border border-primary/30 rounded-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50M+", label: "Data Points Processed" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
