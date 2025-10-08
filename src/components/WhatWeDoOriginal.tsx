import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Network, Boxes, Workflow, Star, Stars, BrainCircuit, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Models & Architectures",
    description: "Design end-to-end systems with AI embedded at every layer—data, decisions, workflows.",
    features: ["System Integration", "Data Pipelines", "Workflow Intelligence"],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
  },
  {
    icon: BrainCircuit,
    title: "Continuous Learning Systems",
    description: "Architect adaptive systems that get smarter with every transaction and interaction.",
    features: ["Adaptive Models", "Real-time Learning", "Performance Optimization"],
    gradient: "from-blue-500 via-blue-600 to-teal-500",
  },
  {
    icon: Shield,
    title: "CIO-Centric AI Integration",
    description: "AI solutions that plug into existing systems — with governance, controls, and context built in.",
    features: ["Governance Framework", "Security Controls", "Compliance Ready"],
    gradient: "from-teal-500 via-emerald-500 to-blue-500",
  },
  {
    icon: Workflow,
    title: "Intelligence HaiPODs",
    description: "Cross-functional teams that combine domain leaders and AI engineers to deliver outcome-tied engagements.",
    features: ["Expert Teams", "Rapid Deployment", "Measurable Outcomes"],
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
];

export const WhatWeDoOriginal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              {/* replace image  tag with lucide icon */}
              <Stars className="w-5 h-5" />
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
           What We Do
            
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto"
          >
           We transform enterprise architecture through intelligence-first design, creating systems that learn, adapt, and deliver measurable <span className="text-gradient">business outcomes</span>.
          </motion.p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                scale: 0,
                rotateY: index % 2 === 0 ? -90 : 90,
              }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1,
                rotateY: 0,
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.6 + index * 0.15,
                type: "spring",
                stiffness: 60
              }}
              whileHover={{
                scale: 1.03,
                rotateY: 3,
                rotateX: 3,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="relative p-8 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl hover:border-primary/60 transition-all duration-500 h-full transform-gpu preserve-3d overflow-hidden">
                {/* Animated Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.5 }}
                />

                {/* 3D Glow */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-40 blur-2xl -z-10`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + index * 0.15 + idx * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`px-3 py-1 bg-gradient-to-r ${service.gradient} bg-opacity-10 text-xs font-medium rounded-full border border-primary/20 backdrop-blur-sm`}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -20 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm font-semibold">Explore Solution</span>
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
          className="mt-20 text-center"
        >
          {/* <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="">
              See All Solutions
            </button>
          </motion.div> */}

          {/* create a 6xl card with 2 rows of text and a button and slide effects to text and button */}
          <div className="bg-gradient-to-r from-black  via-gray-900 to-emerald-900 text-white font-bold rounded-xl shadow-2xl hover:shadow-primary/50 transition-all p-10  flex flex-col justify-center items-center">
            <h4 className="text-4xl mb-6">Ready to embed intelligence into your enterprise architecture?</h4>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl mb-6"
            >
              Discover how our Intelligence HaiPODs can transform your business operations
            </motion.p>
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="px-8 py-4 bg-gradient-to-tr from-orange-100 to-white text-black font-bold rounded-xl shadow-2xl hover:shadow-primary/50 transition-all flex items-center justify-center gap-2"
            >
              <Brain className="w-4 h-4" />
              Explore HaiPods
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

