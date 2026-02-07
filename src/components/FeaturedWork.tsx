import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Vantage Finance",
    category: "Fintech Landing Page",
    description: "A high-converting landing page for a modern fintech startup focused on personal investing.",
    color: "#8B5CF6", // Violet
  },
  {
    title: "Meridian Health",
    category: "Healthcare Platform",
    description: "Clean, trust-building web presence for a digital health platform serving thousands of patients.",
    color: "#06b6d4", // Cyan
  },
  {
    title: "Bolt Studio",
    category: "Creative Agency",
    description: "Bold portfolio website for a design studio showcasing their work with dynamic interactions.",
    color: "#ec4899", // Pink
  },
  {
    title: "Nexus Tech",
    category: "SaaS Dashboard",
    description: "Comprehensive data visualization dashboard for enterprise analytics.",
    color: "#10b981", // Emerald
  }
];

const FeaturedWork = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="work" ref={containerRef} className="relative min-h-[125vh] bg-muted/5">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute top-24 md:top-32 text-center z-20 pointer-events-none"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">Work</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Featured <span className="text-primary">projects</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">Scroll to explore</p>
        </motion.div>

        {/* Card Container */}
        <div className="relative w-full max-w-[320px] md:max-w-[450px] aspect-[4/5] flex items-center justify-center mt-20 md:mt-0">
          {projects.map((project, i) => {
            // Center index for symmetrical spread
            const centerIndex = (projects.length - 1) / 2;
            const offset = i - centerIndex;

            // Dynamic transforms based on scroll
            // Animation completes at 0.8 scroll progress to leave some dwell time
            const rotate = useTransform(
              scrollYProgress,
              [0, 1],
              [0, offset * 12] // Reduced rotation slightly for tighter look
            );

            const x = useTransform(
              scrollYProgress,
              [0, 1],
              [0, offset * 200] // Reduced horizontal spread slightly
            );

            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [0, Math.abs(offset) * 30] // Arch effect
            );

            // Stacking Scale: start piled up, end uniform
            const scale = useTransform(scrollYProgress, [0, 1], [1 - (projects.length - 1 - i) * 0.05, 1]);

            return (
              <motion.div
                key={project.title}
                style={{
                  rotate,
                  x,
                  y,
                  scale,
                  zIndex: i
                }}
                className="absolute w-full h-full origin-bottom"
              >
                <div
                  className="w-full h-full rounded-3xl border border-white/10 bg-black/90 backdrop-blur-xl overflow-hidden flex flex-col relative group transition-all duration-500"
                  style={{
                    boxShadow: `0 0 40px -10px ${project.color}50`, // Stronger neon glow
                    borderTop: `1px solid ${project.color}80`
                  }}
                >
                  {/* Neon numbering */}
                  <div className="absolute top-6 right-8 font-display text-5xl md:text-7xl font-bold opacity-20 select-none" style={{ color: project.color }}>
                    0{i + 1}
                  </div>

                  {/* Content */}
                  <div className="mt-auto p-8 md:p-10 bg-gradient-to-t from-black via-black/90 to-transparent">
                    <span className="text-xs font-bold tracking-widest uppercase mb-3 block opacity-80" style={{ color: project.color }}>
                      {project.category}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 leading-tight transition-colors group-hover:text-white/90">{project.title}</h3>
                    <p className="text-white/60 text-sm md:text-base line-clamp-2 md:line-clamp-none mb-6">{project.description}</p>

                    <div className="flex justify-end">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer bg-white text-black hover:rotate-45" style={{ backgroundColor: project.color }}>
                        <ArrowUpRight className="text-black" size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen"
                    style={{
                      background: `radial-gradient(circle at center, ${project.color}30, transparent 70%)`
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
