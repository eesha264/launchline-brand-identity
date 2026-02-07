import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Globe, TrendingUp } from "lucide-react";

const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative">
      {/* Launch line separator */}
      <div className="launch-line max-w-xs mx-auto mb-20" />

      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">
                What We Do
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Websites that
                <br />
                <span className="text-primary">perform</span>.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We design and develop business websites and landing pages engineered for speed, SEO, and conversion. Every pixel serves a purpose. Every line of code is optimized.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  desc: "Sub-second load times with optimized code and performance-first architecture.",
                },
                {
                  icon: Globe,
                  title: "SEO Ready",
                  desc: "Built from the ground up to rank. Semantic HTML, meta optimization, and structured data.",
                },
                {
                  icon: TrendingUp,
                  title: "Conversion Focused",
                  desc: "Strategic layouts and clear CTAs designed to turn visitors into paying customers.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
