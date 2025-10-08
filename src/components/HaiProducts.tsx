import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap, LineChart, Shield, Cloud, Cpu } from "lucide-react";

const products = [
  {
    icon: Sparkles,
    title: "HaiAssist",
    description: "Your intelligent AI assistant for enterprise automation and decision-making.",
    features: ["Natural Language Processing", "Task Automation", "Smart Insights"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: LineChart,
    title: "HaiAnalytics",
    description: "Real-time analytics and dashboards powered by AI for data-driven decisions.",
    features: ["Predictive Analytics", "Custom Dashboards", "Data Visualization"],
    gradient: "from-primary/20 to-blue-600/20",
  },
  {
    icon: Zap,
    title: "HaiAutomate",
    description: "Intelligent automation platform to streamline your business workflows.",
    features: ["Process Automation", "Smart Workflows", "Integration Hub"],
    gradient: "from-accent/20 to-emerald-500/20",
  },
  {
    icon: Shield,
    title: "HaiSecure",
    description: "AI-powered security and compliance monitoring for enterprise systems.",
    features: ["Threat Detection", "Compliance Monitoring", "Risk Assessment"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Cloud,
    title: "HaiCloud",
    description: "Cloud-native AI infrastructure for scalable enterprise solutions.",
    features: ["Cloud Integration", "Scalable Architecture", "Multi-Cloud Support"],
    gradient: "from-indigo-500/20 to-blue-400/20",
  },
  {
    icon: Cpu,
    title: "HaiCore",
    description: "Core AI engine powering all HaiIntel products with cutting-edge models.",
    features: ["Custom ML Models", "AI Training", "Model Optimization"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export const HaiProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="products"
      className="py-32 px-6 md:px-20 bg-background relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* 3D Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f80e008_1px,transparent_1px),linear-gradient(to_bottom,#1f80e008_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] perspective-1000" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
              HaiProducts
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Intelligent Products for
            <br />
            <span className="text-gradient">Enterprise Excellence</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive suite of AI-powered products designed to transform your business operations
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 },
              }}
              className="group relative perspective-1000"
            >
              <div className="relative p-8 bg-card border border-primary/30 rounded-2xl h-full transform-gpu transition-all duration-300 preserve-3d">
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                />

                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
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
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                  >
                    <product.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <motion.div
                          className="w-1.5 h-1.5 bg-accent rounded-full mr-3"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.2,
                          }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="mt-6 flex items-center text-primary font-semibold text-sm"
                  >
                    <span>Learn More</span>
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
        </motion.div>
      </div>
    </section>
  );
};

