import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Eye, Award, BarChart3 } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Speed", description: "Launch-ready in weeks, not months. No wasted time." },
  { icon: Eye, title: "Clarity", description: "No jargon. Transparent process from brief to go-live." },
  { icon: Award, title: "Quality", description: "Production-grade code. Every project built to last." },
  { icon: BarChart3, title: "Results", description: "Designed to convert. Measured by real business impact." },
];

const WhyLaunchline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" ref={ref} className="section-padding relative">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">Why Launchline</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Built for <span className="text-primary">execution</span>.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <reason.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 glass-card rounded-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "<2s", label: "Avg. Load Time" },
                { value: "3x", label: "Conversion Lift" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyLaunchline;
