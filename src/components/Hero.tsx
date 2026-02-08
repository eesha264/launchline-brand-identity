import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32 md:pt-40">
      {/* Background elements removed for cleaner look */}
      <div className="absolute inset-0 bg-grid z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30 z-0" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-primary">Web Design & Development Agency</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.05] mb-6"
          >
            From Idea to Launch
            <br />
            <span className="relative inline-block">
              — Faster
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-launch-glow origin-left"
              />
            </span>
            <span className="text-primary">.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We build high-performance, SEO-ready business websites that convert visitors into customers.
            Clean code. Sharp design. Fast delivery.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#cta">
                Launch Your Website
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#work">View Work</a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}


      </div>
    </section>
  );
};

export default Hero;
