import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Briefcase, BookOpen, Lightbulb, Target, Rocket } from "lucide-react";

const pods = [
  {
    icon: Users,
    title: "Advisory POD",
    description: "Strategic guidance and consulting for AI transformation initiatives",
    color: "from-blue-500 to-cyan-500",
    expertise: ["AI Strategy", "Digital Transformation", "Change Management"],
  },
  {
    icon: Briefcase,
    title: "Delivery POD",
    description: "End-to-end implementation and deployment of AI solutions",
    color: "from-primary to-blue-600",
    expertise: ["Solution Architecture", "Implementation", "Integration"],
  },
  {
    icon: BookOpen,
    title: "Training POD",
    description: "Comprehensive training programs for AI adoption and upskilling",
    color: "from-accent to-emerald-500",
    expertise: ["AI Training", "Workshops", "Certification Programs"],
  },
  {
    icon: Lightbulb,
    title: "Innovation POD",
    description: "Research and development of cutting-edge AI technologies",
    color: "from-purple-500 to-pink-500",
    expertise: ["R&D", "Prototyping", "Innovation Labs"],
  },
  {
    icon: Target,
    title: "Optimization POD",
    description: "Performance tuning and optimization of AI systems",
    color: "from-orange-500 to-red-500",
    expertise: ["Performance Tuning", "Cost Optimization", "Scalability"],
  },
  {
    icon: Rocket,
    title: "Growth POD",
    description: "Accelerate business growth with AI-powered insights and strategies",
    color: "from-indigo-500 to-blue-400",
    expertise: ["Growth Strategy", "Market Analysis", "AI-Driven Insights"],
  },
];

export const HaiPODs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pods"
      className="py-32 px-6 md:px-20 bg-card/30 relative overflow-hidden"
    >
      {/* 3D Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{
            rotateZ: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] border border-accent/10 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-6"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
              HaiPODs
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Specialized Teams,
            <br />
            <span className="text-gradient">Exceptional Results</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Product-Oriented Delivery teams bring focused expertise to every engagement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pods.map((pod, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 },
              }}
              className="group relative perspective-1000"
            >
              <div className="relative p-8 bg-background border border-primary/30 rounded-2xl h-full overflow-hidden transform-gpu preserve-3d">
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    background: [
                      `linear-gradient(0deg, transparent, transparent)`,
                      `linear-gradient(360deg, transparent, transparent)`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${pod.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                />

                <div className="relative z-10">
                  {/* 3D Icon Container */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{
                      rotateY: 360,
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${pod.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <pod.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* 3D Shadow Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${pod.color} rounded-2xl blur-xl opacity-50`}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {pod.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {pod.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {pod.expertise.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 bg-gradient-to-r ${pod.color} bg-opacity-10 text-xs font-medium rounded-full border border-primary/20`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* 3D Floating Particles */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary rounded-full"
                        animate={{
                          y: [-10, -30, -10],
                          x: [0, Math.random() * 20 - 10, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Ready to work with our specialized teams?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(33, 150, 243, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Explore POD Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

