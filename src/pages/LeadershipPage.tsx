import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Leadership } from "@/components/Leadership";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { motion } from "framer-motion";

const LeadershipPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      
      {/* Page Hero */}
      {/* <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-12 px-6 md:px-20 bg-gradient-to-b from-background via-background to-card/50"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-gradient">Leadership</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Meet the visionary leaders driving AI innovation and business transformation
          </motion.p>
        </div>
      </motion.section> */}

      <Leadership />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default LeadershipPage;

