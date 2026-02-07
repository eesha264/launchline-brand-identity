import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import FeaturedWork from "@/components/FeaturedWork";
import WhyLaunchline from "@/components/WhyLaunchline";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
      <HowItWorks />
      <FeaturedWork />
      <WhyLaunchline />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
