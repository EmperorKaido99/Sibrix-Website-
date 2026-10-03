import { motion } from "framer-motion";
import { ExternalLink, Clock, Dumbbell, Sprout, type LucideIcon } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import crimeSpotsImage from "@/assets/project-crimespots.png";

type Project = {
  title: string;
  category: string;
  image?: string;
  icon?: LucideIcon;
  description: string;
  tech: string[];
  demoUrl?: string;
  comingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "CrimeSpots",
    category: "AI Web Application",
    image: crimeSpotsImage,
    description:
      "Real-time, AI-powered crime intelligence for Cape Town. News and community reports are processed by AI into verified incidents on a live, interactive map with severity coding, area rankings and neighbourhood alerts.",
    tech: ["Next.js", "AI Extraction", "Live Map", "Supabase", "PWA"],
    demoUrl: "https://crimespots.vercel.app/",
  },
  {
    title: "Sibrix Fit",
    category: "Health & Fitness",
    icon: Dumbbell,
    description:
      "A smart fitness companion with personalised training plans, progress tracking and AI-driven coaching to help you reach your goals.",
    tech: ["Mobile App", "AI Coaching", "Progress Tracking"],
    comingSoon: true,
  },
  {
    title: "Sibrix Smart Farm",
    category: "AgriTech",
    icon: Sprout,
    description:
      "Connected farm management using sensors and AI to monitor crops, soil and livestock, automate routine tasks and boost yields.",
    tech: ["IoT Sensors", "AI Insights", "Automation", "Dashboard"],
    comingSoon: true,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <AnimateOnScroll>
        <div className="text-center mb-16">
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Projects
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Real products built by Sibrix — try CrimeSpots live today, with more on the way.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <AnimateOnScroll key={project.title} delay={i * 0.1}>
            <motion.div
              whileHover={project.comingSoon ? undefined : { y: -6 }}
              className="group h-full flex flex-col rounded-lg overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-40 sm:h-48">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-left-top transition-transform duration-500 will-change-transform group-hover:scale-105"
                  />
                ) : (
                  project.icon && (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
                      <project.icon className="w-16 h-16 text-accent/80" strokeWidth={1.5} />
                    </div>
                  )
                )}
                {project.comingSoon && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-body font-semibold tracking-wider uppercase shadow">
                    <Clock className="w-3.5 h-3.5" />
                    Coming Soon
                  </span>
                )}
                {project.demoUrl && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-body font-semibold tracking-wider uppercase shadow">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-body font-semibold tracking-wider uppercase text-accent">
                  {project.category}
                </span>
                <h3 className="text-lg font-heading font-bold text-foreground mt-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm font-body mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-body px-3 py-1 rounded-full bg-accent/10 text-accent font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full inline-flex items-center justify-center gap-2"
                    >
                      View Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full py-3 rounded-md border border-border text-muted-foreground font-body text-sm font-semibold cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
