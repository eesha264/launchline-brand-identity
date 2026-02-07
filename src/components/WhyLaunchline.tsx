import { motion } from "framer-motion";
import { Clock, Eye, Award, BarChart3, Rocket, Shield, Users, Zap } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Speed", description: "Launch-ready in weeks, not months." },
  { icon: Eye, title: "Clarity", description: "Transparent process, no jargon." },
  { icon: Award, title: "Quality", description: "Production-grade, scalable code." },
  { icon: BarChart3, title: "Results", description: "Designed for high conversion." },
  // Extended list for better marquee length
  { icon: Rocket, title: "Growth", description: "Built to scale with your business." },
  { icon: Shield, title: "Secure", description: "Enterprise-grade security standards." },
  { icon: Users, title: "Support", description: "Dedicated post-launch support." },
  { icon: Zap, title: "Performance", description: "Blazing fast load times." },
];

const WhyLaunchline = () => {
  return (
    <section id="why" className="section-padding relative overflow-hidden bg-background">
      <div className="container mx-auto mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">Why Launchline</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Built for <span className="text-primary">execution</span>.
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full py-10">
        {/* Gradient Masks for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          {/* Animated Track - Duplicated for seamless loop */}
          <motion.div
            className="flex gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30, // Adjust speed here
            }}
            style={{ width: "max-content" }}
          >
            {/* Original + Duplicate set for seamless loop logic */}
            {[...reasons, ...reasons].map((reason, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] md:w-[350px] p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <reason.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="container mx-auto mt-16 max-w-5xl">
        <div className="glass-card rounded-2xl p-8 md:p-12 border border-white/10">
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
        </div>
      </div>
    </section>
  );
};

export default WhyLaunchline;
