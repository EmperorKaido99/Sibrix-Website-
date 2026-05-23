import { useState } from "react";
import {
  Bot, Workflow, Smartphone, Palette, Cloud, BarChart3,
  Plug, ShieldCheck, Search, Wrench, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  { icon: Bot, title: "AI Chatbot Development", desc: "Custom-trained chatbots for businesses", detail: "We build intelligent chatbots that understand your products, services, and FAQ — providing instant 24/7 customer support and reducing your support workload." },
  { icon: Workflow, title: "Business Process Automation", desc: "RPA & intelligent workflows", detail: "Automate repetitive tasks like data entry, invoicing, and reporting. We use robotic process automation to save your team hours every week." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native & cross-platform apps", detail: "Custom mobile apps for iOS and Android that connect to your business systems, available for your team or your customers." },
  { icon: Palette, title: "UI/UX Design & Branding", desc: "Memorable digital identities", detail: "Professional design services including logo creation, brand guidelines, and user interface design that makes your business stand out." },
  { icon: Cloud, title: "Cloud Deployment & DevOps", desc: "AWS, Azure & infrastructure", detail: "We set up and manage your cloud infrastructure for reliability, speed, and security — so your apps run smoothly at any scale." },
  { icon: BarChart3, title: "Data Analytics & Dashboards", desc: "Power BI & SQL insights", detail: "Transform your business data into clear, visual dashboards that help you make better decisions with real-time insights." },
  { icon: Plug, title: "API Development & Integration", desc: "Seamless system connectivity", detail: "Connect your tools and systems together with custom APIs — from payment processors to CRMs to shipping platforms." },
  { icon: ShieldCheck, title: "Cybersecurity & Performance", desc: "Hardened, optimised systems", detail: "Security audits, performance optimisation, and ongoing monitoring to keep your digital assets safe and fast." },
  { icon: Search, title: "SEO & Digital Marketing", desc: "Visibility & growth strategies", detail: "Get found online with search engine optimisation, content strategy, and digital marketing campaigns that drive real results." },
  { icon: Wrench, title: "Maintenance & Support", desc: "Ongoing reliability & updates", detail: "Regular updates, bug fixes, and technical support to keep everything running smoothly long after launch." },
];

const AdditionalServices = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="additional" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Capabilities</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">Additional Services</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div
                onClick={() => setSelected(i)}
                className="group rounded-xl border border-border bg-card p-6 text-center card-hover hover:border-accent/30 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <s.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-heading text-sm font-semibold mb-1">{s.title}</h3>
                <p className="font-body text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  {(() => { const Icon = services[selected].icon; return <Icon size={22} className="text-accent" />; })()}
                </div>
                <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground transition-colors p-1">
                  <X size={20} />
                </button>
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{services[selected].title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{services[selected].detail}</p>
              <a href="#cta" onClick={() => setSelected(null)} className="btn-gold w-full text-center block">
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AdditionalServices;
