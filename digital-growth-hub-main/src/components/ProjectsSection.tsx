import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const projects = [
  {
    title: "Luxe Boutique",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    description: "A full-featured online store with AI-powered product recommendations, inventory management, and seamless payment integration.",
    tech: ["React", "AI Chatbot", "Payment Gateway", "Inventory System"],
  },
  {
    title: "FinTrack Pro",
    category: "Business Automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "End-to-end financial analytics dashboard with automated invoicing, expense tracking, and real-time reporting for a mid-size enterprise.",
    tech: ["Dashboard", "Automation", "Analytics", "API Integration"],
  },
  {
    title: "MediCare Connect",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    description: "A patient management platform with appointment scheduling, telehealth integration, and automated reminders for a healthcare provider.",
    tech: ["CRM", "Scheduling", "Notifications", "HIPAA Compliant"],
  },
  {
    title: "GreenField Logistics",
    category: "AI & Automation",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    description: "AI-driven supply chain optimization with real-time tracking, automated dispatch, and predictive demand forecasting.",
    tech: ["AI Workflows", "Real-time Tracking", "Predictive Analytics"],
  },
  {
    title: "Artisan Studio",
    category: "Website",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    description: "A beautifully crafted portfolio website for a creative agency, featuring smooth animations, SEO optimization, and a custom CMS.",
    tech: ["SEO", "CMS", "Responsive", "Animations"],
  },
  {
    title: "PropVault",
    category: "Business Suite",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    description: "Property management system with tenant portals, automated rent collection, maintenance request tracking, and financial reporting.",
    tech: ["Portal", "Payments", "HR System", "Reporting"],
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Projects We've Delivered
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Real solutions built for real businesses — from sleek websites to full AI-powered enterprise systems.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group cursor-pointer rounded-lg overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
                onClick={() => setSelected(project)}
              >
                <div className="relative overflow-hidden h-40 sm:h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-body font-semibold tracking-wider uppercase text-accent">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-foreground mt-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm font-body mt-2 line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-card rounded-lg max-w-lg w-full overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-foreground/50 text-primary-foreground hover:bg-foreground/70 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6">
                <span className="text-xs font-body font-semibold tracking-wider uppercase text-accent">
                  {selected.category}
                </span>
                <h3 className="text-2xl font-heading font-bold text-foreground mt-1 mb-3">{selected.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-5">{selected.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-body px-3 py-1 rounded-full bg-accent/10 text-accent font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button className="btn-gold w-full text-center">Request Similar Project</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
