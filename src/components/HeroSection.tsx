import { motion } from "framer-motion";
import { ArrowRight, Bot, Cloud, Globe, Cpu } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Web Platforms",
    description: "Business websites, e-commerce stores and customer portals.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Chatbots, workflow automation and AI-driven insights.",
  },
  {
    icon: Cpu,
    title: "IoT Systems",
    description: "Connected devices, sensors and real-time monitoring.",
  },
  {
    icon: Cloud,
    title: "Cloud & Integrations",
    description: "Secure hosting, APIs and links to the tools you already use.",
  },
];

const stats = [
  { value: "150+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "24/7", label: "Support" },
];

const HeroSection = () => (
  <section className="relative bg-background border-b border-border">
    <div className="container mx-auto px-4 sm:px-6 pt-32 sm:pt-36 lg:pt-44 pb-16 lg:pb-24">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left column: text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-span-7"
        >
          <p className="font-body text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-6">
            Software &amp; Systems Engineering
          </p>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-foreground">
            Smart systems,
            <br />
            built right.
          </h1>

          <p className="font-body text-base sm:text-lg max-w-xl mb-10 leading-relaxed text-muted-foreground">
            We design and build websites, business automations, IoT solutions and AI-driven
            systems that help organisations work smarter and scale with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#cta" className="btn-gold inline-flex items-center justify-center gap-2">
              Start a Project
              <ArrowRight size={16} />
            </a>
            <a href="#packages" className="btn-outline-gold inline-flex items-center justify-center">
              View Services
            </a>
          </div>

          <dl className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-4 max-w-md">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-2xl sm:text-3xl font-bold text-foreground">{s.value}</dd>
                <dd className="font-body text-xs text-muted-foreground mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Right column: capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-span-5"
        >
          <div className="rounded-xl border border-border bg-card shadow-sm">
            <div className="px-6 py-4 border-b border-border">
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                What we deliver
              </p>
            </div>
            <ul className="divide-y divide-border">
              {capabilities.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-4 px-6 py-5">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <Icon size={18} className="text-accent" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-sm text-foreground">{title}</p>
                    <p className="font-body text-sm text-muted-foreground mt-0.5 leading-relaxed">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
