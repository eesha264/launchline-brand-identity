import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery",
    description: "We dive deep into your brand, goals, and audience to map out a strategic flight path.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description: "Crafting a visual identity that captures your essence. Modern, clean, and distinct.",
  },
  {
    icon: Code,
    step: "03",
    title: "Development",
    description: "Building the engine. Pixel-perfect code, lightning-fast performance, and rock-solid SEO.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description: "Final pre-flight checks and liftoff. We ensure a smooth deployment and handover.",
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="process" ref={containerRef} className="section-padding relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-32"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">Process</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            The flight <span className="text-primary">plan</span>.
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated SVG Path for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] hidden md:block">
            <div className="absolute inset-0 bg-white/5 w-full h-full" /> {/* Track */}
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-launch-glow to-primary origin-top shadow-[0_0_15px_rgba(var(--primary),0.6)]"
            />
          </div>

          {/* Mobile Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-white/5 md:hidden">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute top-0 left-0 w-full h-full bg-primary origin-top"
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, i) => {
              return (
                <ProcessStep
                  key={i}
                  step={step}
                  index={i}
                  progress={scrollYProgress}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted for cleaner animation logic
const ProcessStep = ({ step, index, progress }) => {
  // Determine when this specific step is "active" based on scroll progress
  // We divide the scroll range (0-1) into chunks for each step
  const rangeStart = index * 0.25;
  const rangeEnd = rangeStart + 0.25;

  // Create a local active state transform
  const opacity = useTransform(progress, [rangeStart, rangeStart + 0.1], [0.3, 1]);
  const scale = useTransform(progress, [rangeStart, rangeStart + 0.1], [0.95, 1]);
  const glow = useTransform(progress, [rangeStart, rangeStart + 0.1], ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 30px rgba(var(--primary),0.3)"]);

  // Check if even or odd for layout
  const isEven = index % 2 === 0;

  return (
    <motion.div
      style={{ opacity, scale }}
      className={`relative flex items-center md:gap-16 gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Center Node on the Line */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border border-white/20 z-20 overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ opacity: useTransform(progress, [rangeStart, rangeStart + 0.05], [0, 1]) }}
          className="w-full h-full bg-primary shadow-[0_0_10px_rgba(var(--primary),1)]"
        />
      </div>

      {/* Content Card */}
      <div className="flex-1 pl-20 md:pl-0">
        <motion.div
          className={`glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500`}
          style={{ boxShadow: glow }}
        >
          {/* Number Watermark */}
          <div className="absolute -right-4 -top-4 text-9xl font-display font-bold text-white/5 pointer-events-none select-none">
            {step.step}
          </div>

          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
              <step.icon size={24} />
            </div>
            <h3 className="text-2xl font-bold font-display mb-3">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        </motion.div>
      </div>

      {/* Empty Spacer to balance the grid */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}

export default HowItWorks;
