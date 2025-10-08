import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail } from "lucide-react";

const leaders = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief AI Officer",
    bio: "Leading AI innovation with 15+ years in enterprise AI solutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "sarah.chen@haiintel.com",
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    bio: "Architecting scalable AI infrastructure for global enterprises",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "michael.rodriguez@haiintel.com",
  },
  {
    name: "Emily Thompson",
    role: "Chief Strategy Officer",
    bio: "Driving strategic AI transformation across Fortune 500 companies",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "emily.thompson@haiintel.com",
  },
  {
    name: "David Kumar",
    role: "VP of Product",
    bio: "Building next-generation AI products that transform businesses",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "david.kumar@haiintel.com",
  },
  {
    name: "Lisa Anderson",
    role: "VP of Engineering",
    bio: "Leading engineering excellence in AI and ML implementation",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "lisa.anderson@haiintel.com",
  },
  {
    name: "James Park",
    role: "Head of Innovation",
    bio: "Pioneering breakthrough AI technologies and research initiatives",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "#",
    email: "james.park@haiintel.com",
  },
];

export const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="leadership"
      className="py-32 px-6 md:px-20 bg-background relative overflow-hidden"
    >
      {/* 3D Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff8808_1px,transparent_1px),linear-gradient(to_bottom,#00ff8808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-wider px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
              Leadership
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Meet the Minds Behind
            <br />
            <span className="text-gradient">HaiIntel's Innovation</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our leadership team brings decades of combined experience in AI, technology, and business transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, z: -100, rotateX: -45 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      z: 0,
                      rotateX: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative perspective-1000"
            >
              <motion.div
                animate={{
                  rotateY: hoveredIndex === index ? 5 : 0,
                  z: hoveredIndex === index ? 50 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="relative bg-card border border-primary/30 rounded-2xl overflow-hidden h-full transform-gpu preserve-3d"
              >
                {/* Image Container with 3D Effect */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
                    animate={{
                      opacity: hoveredIndex === index ? 0.9 : 0.6,
                    }}
                  />

                  {/* 3D Floating Particles on Hover */}
                  {hoveredIndex === index && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary rounded-full"
                          initial={{
                            x: Math.random() * 100 + "%",
                            y: "100%",
                            opacity: 0,
                          }}
                          animate={{
                            y: "-20%",
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <motion.h3
                    className="text-2xl font-bold mb-2 text-foreground"
                    animate={{
                      color: hoveredIndex === index ? "hsl(207, 79%, 50%)" : "hsl(0, 0%, 100%)",
                    }}
                  >
                    {leader.name}
                  </motion.h3>

                  <p className="text-primary font-medium mb-3">{leader.role}</p>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {leader.bio}
                  </p>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-3"
                  >
                    <motion.a
                      href={leader.linkedin}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-9 h-9 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-primary" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${leader.email}`}
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-9 h-9 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Mail className="w-4 h-4 text-accent" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* 3D Depth Border Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary/0 rounded-2xl pointer-events-none"
                  animate={{
                    borderColor: hoveredIndex === index ? "hsl(207, 79%, 50%, 0.5)" : "hsl(207, 79%, 50%, 0)",
                    boxShadow:
                      hoveredIndex === index
                        ? "0 20px 60px rgba(33, 150, 243, 0.3)"
                        : "0 0 0 rgba(33, 150, 243, 0)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center p-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">Join Our Leadership Team</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent to drive AI innovation forward
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(0, 255, 136, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all"
          >
            View Careers
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

