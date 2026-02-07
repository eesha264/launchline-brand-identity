import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Vantage Finance",
    category: "Fintech Landing Page",
    description: "A high-converting landing page for a modern fintech startup focused on personal investing.",
    color: "from-primary/10 to-primary/5",
  },
  {
    title: "Meridian Health",
    category: "Healthcare Platform",
    description: "Clean, trust-building web presence for a digital health platform serving thousands of patients.",
    color: "from-primary/8 to-primary/3",
  },
  {
    title: "Bolt Studio",
    category: "Creative Agency",
    description: "Bold portfolio website for a design studio showcasing their work with dynamic interactions.",
    color: "from-primary/12 to-primary/5",
  },
];

const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="section-padding bg-muted/30 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">Work</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-primary">projects</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:glow-accent transition-all duration-500 hover:-translate-y-1">
                {/* Project thumbnail placeholder */}
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm flex items-center justify-center">
                      <span className="font-display text-lg font-bold text-primary/40">{project.title}</span>
                    </div>
                  </div>
                  {/* Hover arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={18} className="text-primary" />
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-medium text-primary tracking-widest uppercase">{project.category}</span>
                  <h3 className="font-display text-lg font-bold mt-1 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
