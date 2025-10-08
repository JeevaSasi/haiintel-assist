import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Cloud, Cpu, Boxes, GitBranch } from "lucide-react";

const techCategories = [
  {
    category: "AI & Machine Learning",
    icon: Cpu,
    technologies: [
      { name: "TensorFlow", logo: "🧠" },
      { name: "PyTorch", logo: "🔥" },
      { name: "scikit-learn", logo: "📊" },
      { name: "Hugging Face", logo: "🤗" },
      { name: "OpenAI", logo: "⚡" },
      { name: "LangChain", logo: "🔗" },
    ],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    technologies: [
      { name: "AWS", logo: "☁️" },
      { name: "Azure", logo: "🌐" },
      { name: "Google Cloud", logo: "🌩️" },
      { name: "Kubernetes", logo: "⚓" },
      { name: "Docker", logo: "🐳" },
      { name: "Terraform", logo: "🏗️" },
    ],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  },
  {
    category: "Data Engineering",
    icon: Database,
    technologies: [
      { name: "Apache Spark", logo: "⚡" },
      { name: "Airflow", logo: "🌊" },
      { name: "Snowflake", logo: "❄️" },
      { name: "PostgreSQL", logo: "🐘" },
      { name: "MongoDB", logo: "🍃" },
      { name: "Redis", logo: "🔴" },
    ],
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
  {
    category: "Development",
    icon: Code2,
    technologies: [
      { name: "Python", logo: "🐍" },
      { name: "TypeScript", logo: "📘" },
      { name: "React", logo: "⚛️" },
      { name: "Node.js", logo: "💚" },
      { name: "FastAPI", logo: "⚡" },
      { name: "GraphQL", logo: "🔷" },
    ],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    category: "MLOps & DevOps",
    icon: GitBranch,
    technologies: [
      { name: "MLflow", logo: "📈" },
      { name: "Kubeflow", logo: "🔄" },
      { name: "Jenkins", logo: "🤖" },
      { name: "GitLab CI/CD", logo: "🦊" },
      { name: "Prometheus", logo: "📊" },
      { name: "Grafana", logo: "📉" },
    ],
    gradient: "from-indigo-500 via-violet-500 to-purple-500",
  },
  {
    category: "Data Visualization",
    icon: Boxes,
    technologies: [
      { name: "Tableau", logo: "📊" },
      { name: "Power BI", logo: "📈" },
      { name: "D3.js", logo: "📉" },
      { name: "Plotly", logo: "📊" },
      { name: "Looker", logo: "👁️" },
      { name: "Superset", logo: "🚀" },
    ],
    gradient: "from-pink-500 via-rose-500 to-red-500",
  },
];

export const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="techstack"
      className="py-32 px-6 md:px-20 bg-card/30 relative overflow-hidden"
    >
      {/* Animated 3D Grid Background */}
      <div className="absolute inset-0 perspective-1000">
        <motion.div
          animate={{
            rotateX: [0, 10, 0],
            rotateY: [0, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#1f80e010_2px,transparent_2px),linear-gradient(to_bottom,#1f80e010_2px,transparent_2px)] bg-[size:3rem_3rem] transform-gpu"
        />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {["🚀", "⚡", "🔥", "💡", "🎯", "🌟", "⭐", "✨", "🔮", "🎨"][i]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -360 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
              Tech Stack
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Powered by
            <br />
            <span className="text-gradient">Cutting-Edge Technology</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage the most advanced technologies to build robust, scalable AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
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
                {/* Animated Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* 3D Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl`}
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
                  {/* Category Icon with 3D Animation */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{
                      rotateY: 360,
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
                    {category.category}
                  </h3>

                  {/* Technology Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: index * 0.1 + techIndex * 0.05,
                          type: "spring",
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.2 },
                        }}
                        className="relative group/tech"
                      >
                        <div className="p-3 bg-card/50 border border-primary/20 rounded-lg hover:border-primary/50 transition-all cursor-pointer">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{tech.logo}</span>
                            <span className="text-xs font-medium text-muted-foreground group-hover/tech:text-foreground transition-colors">
                              {tech.name}
                            </span>
                          </div>
                        </div>

                        {/* 3D Tooltip Effect */}
                        <motion.div
                          className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full opacity-0 group-hover/tech:opacity-100 transition-opacity"
                          animate={{
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 3D Depth Lines */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`h-px bg-gradient-to-r ${category.gradient} mb-2`}
                      style={{ width: `${60 - i * 15}px` }}
                      animate={{
                        scaleX: [1, 1.2, 1],
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
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50+", label: "Technologies" },
            { value: "100%", label: "Cloud Native" },
            { value: "24/7", label: "Monitoring" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center p-6 bg-card border border-primary/30 rounded-xl"
            >
              <motion.div
                className="text-4xl font-bold text-gradient mb-2"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

