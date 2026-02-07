import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Plan",
    description: "We learn your business, define goals, and map out the perfect website strategy.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description: "Custom mockups built around your brand — modern, clean, and conversion-ready.",
  },
  {
    icon: Code,
    step: "03",
    title: "Build",
    description: "Pixel-perfect development with clean code, fast load times, and responsive design.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description: "Final QA, deployment, and handover. Your site goes live, fast and friction-free.",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">Process</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            How <span className="text-primary">Launchline</span> works.
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical launch line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-primary/60 to-primary/30 hidden sm:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                  i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 top-1" />

                {/* Content card */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"} pl-12 sm:pl-0`}>
                  <div className="glass-card rounded-2xl p-6 hover:glow-accent transition-all duration-500">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <step.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-primary tracking-widest">{step.step}</span>
                        <h3 className="font-display text-xl font-bold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
