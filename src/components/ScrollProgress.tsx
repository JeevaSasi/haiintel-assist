import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left z-[60]"
        style={{ scaleX }}
      />
      
      {/* Top Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none z-[59]"
        style={{ opacity: scrollYProgress }}
      />
    </>
  );
};

