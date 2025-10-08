import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Sparkles, TrendingUp, Users, Lightbulb, Target } from "lucide-react";

const keyAreas = [
  { title: "Infrastructure Intelligence" },
  { title: "Customer Journey AI" },
  { title: "Operational Automation" },
  { title: "Risk & Compliance" },
  { title: "Digital Experience" },
  { title: "Legacy Modernization" },
];

const transformationRoles = [
  {
    icon: Target,
    title: "Strategic Business Partner",
    color: "from-orange-500 to-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation Catalyst",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Intelligence Architect",
    color: "from-blue-500 to-amber-500",
  },
  {
    icon: Users,
    title: "Value Driver",
    color: "from-blue-500 to-cyan-500",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const ctaRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <section id="services" className="py-32 px-6 md:px-20 bg-gradient-to-b from-card/30 via-background to-card/50 relative overflow-hidden">
      {/* 3D Background Effects */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(207_79%_50%_/_0.1),transparent_50%)]"
      />
      
      {/* Animated Grid Pattern */}
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, 100]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.3, 0])
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f80e01a_1px,transparent_1px),linear-gradient(to_bottom,#1f80e01a_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      {/* Floating Orbs */}
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, -300]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0])
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, 200]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.4, 0])
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Key Transformation Areas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold uppercase tracking-wider backdrop-blur-sm flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Key Areas
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            Key Transformation Areas
          </motion.h2>

          {/* Key Areas Grid */}
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {keyAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="perspective-1000"
              >
                <div className="relative p-6 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-xl hover:border-primary transition-all group transform-gpu preserve-3d">
                  {/* Hover glow */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-20 blur-sm -z-10"
                    whileHover={{ opacity: 0.3 }}
                  />
                  
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-foreground">
                      {area.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* From Delivery Manager to Transformation Co-pilot */}
        <motion.div
          ref={ctaRef}
          style={{ opacity, scale }}
          className="relative"
        >
          <div className="relative p-12 md:p-16 bg-gradient-to-br from-primary via-emerald-900 to-green-600 rounded-3xl overflow-hidden shadow-2xl">
            {/* Animated background pattern */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl md:text-4xl font-bold text-white leading-tight"
                >
                  From Delivery Manager to
                  <br />
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text">Transformation Co-pilot</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-blue-100 leading-relaxed"
                >
                  We help CIOs lead the strategic shift from traditional IT delivery to intelligence-driven business transformation, positioning them as essential partners in enterprise growth.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-600 text-gray-900 font-bold rounded-xl flex items-center gap-2 shadow-lg"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Start Your Transformation
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right - Transformation Roles */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                {transformationRoles.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50, rotateY: 30 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      scale: 1.05,
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                    className="perspective-1000"
                  >
                    <div className="relative p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/15 transition-all group transform-gpu">
                      {/* Gradient glow */}
                      <motion.div
                        className={`absolute -inset-0.5 bg-gradient-to-r ${role.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-lg -z-10`}
                        whileHover={{ opacity: 0.4 }}
                      />
                      
                      <div className="flex items-center gap-4">
                        <motion.div
                          className={`w-12 h-12 bg-gradient-to-br ${role.color} rounded-xl flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <role.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          {index % 2 === 0 && <span className="w-2 h-2 bg-[#f59e0b] rounded-full" />}
                          {role.title}
                          {index % 2 !== 0 && <span className="w-2 h-2 bg-white rounded-full" />}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
