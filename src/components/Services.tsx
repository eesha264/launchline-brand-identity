import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code2, Gauge, Search } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design",
    description: "Bold, clean interfaces that communicate your brand with clarity and confidence.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Modern, responsive code built with the latest frameworks for speed and reliability.",
    accent: "from-primary/15 to-primary/5",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Optimized loading, smooth interactions, and infrastructure that scales with growth.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Technical SEO baked in from day one — structured, semantic, and search-ready.",
    accent: "from-primary/15 to-primary/5",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="section-padding bg-muted/30 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">Services</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Everything you need to{" "}
            <span className="text-primary">launch</span>.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 md:p-8 h-full hover-glow transition-all duration-500 hover:-translate-y-1">
                {/* Accent gradient top */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
