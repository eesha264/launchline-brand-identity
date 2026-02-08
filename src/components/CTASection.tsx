import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" ref={ref} className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-display">
            Ready to{" "}
            <span className="relative inline-block">
              launch
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-launch-glow" />
            </span>
            ?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Let's build something fast, sharp, and unforgettable.
            Your next website is one conversation away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="text-base px-10 py-6">
              Start Your Project
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
              Book Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
