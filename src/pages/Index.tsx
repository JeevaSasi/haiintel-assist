import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Evolution } from "@/components/Evolution";
import { WhatWeDoOriginal } from "@/components/WhatWeDoOriginal";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Evolution />
      <WhatWeDoOriginal />
      <Services />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
