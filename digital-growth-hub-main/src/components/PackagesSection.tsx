import { useState } from "react";
import { Check, Star, Info } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const packages = [
  {
    name: "Starter Web Presence",
    tier: "starter",
    description: "Perfect for small businesses looking to establish a professional online presence with essential features.",
    features: [
      { name: "SEO-optimised website", detail: "Your website will be built with search engine best practices so customers can find you on Google." },
      { name: "Social media integration (1 platform)", detail: "We connect one social media platform (e.g. Facebook or Instagram) directly to your website." },
      { name: "Mobile-responsive design", detail: "Your site will look and work great on phones, tablets, and desktops." },
      { name: "Contact form", detail: "A professional contact form so visitors can easily reach you." },
      { name: "1 month post-launch support", detail: "We provide bug fixes, minor tweaks, and guidance for one month after going live." },
    ],
    highlighted: false,
  },
  {
    name: "E-Commerce & Business Suite",
    tier: "business",
    badge: "Most Popular",
    description: "A complete digital business solution with online sales, AI support, and inventory management built in.",
    features: [
      { name: "Everything in Starter, plus:", detail: "" },
      { name: "Full e-commerce store with payment gateway", detail: "A fully functional online shop where customers can browse products and pay securely." },
      { name: "AI chatbot (24/7, connected to backend)", detail: "An intelligent chatbot that answers customer questions around the clock, connected to your business data." },
      { name: "Live stock & inventory backend", detail: "Real-time stock tracking so you always know what's available and never oversell." },
      { name: "Help & support system", detail: "A built-in ticketing system for customer support queries." },
      { name: "Internal quotation system", detail: "Generate and manage quotes for clients directly from your dashboard." },
      { name: "Lay-by management app", detail: "Track layaway payments and schedules for customers." },
      { name: "Mobile stock update app", detail: "Update your inventory on the go from your phone." },
      { name: "1 month post-launch support", detail: "We provide bug fixes, minor tweaks, and guidance for one month after going live." },
    ],
    highlighted: true,
  },
  {
    name: "Full AI & Automation Enterprise",
    tier: "enterprise",
    description: "The ultimate digital transformation package — AI-driven automation, custom apps, and deep business intelligence.",
    features: [
      { name: "Everything in Business Suite, plus:", detail: "" },
      { name: "AI-powered personalised user journeys", detail: "Your website adapts to each visitor, showing relevant content and recommendations." },
      { name: "End-to-end business automation", detail: "Automate invoicing, scheduling, alerts, and reporting to save time and reduce errors." },
      { name: "AI workflow automation", detail: "Intelligent workflows that learn from your processes and optimise them over time." },
      { name: "5 custom internal business apps", detail: "Tailored apps for your team — CRM, HR, project tracking, finance, and supplier management." },
      { name: "Advanced AI chatbot + assistant", detail: "A powerful AI assistant that handles complex queries and supports your team internally." },
      { name: "AI insights & analytics dashboard", detail: "Visual dashboards with AI-generated insights to help you make smarter decisions." },
      { name: "Third-party integrations", detail: "Connect to accounting, logistics, and social media tools you already use." },
      { name: "1 month post-launch support", detail: "We provide bug fixes, minor tweaks, and guidance for one month after going live." },
    ],
    expandedFeatures: [
      "CRM system",
      "HR management system",
      "Project tracking dashboard",
      "Financial analytics dashboard",
      "Supplier management system",
      "Invoicing, scheduling, alerts & reporting",
      "Accounting, logistics & social media integrations",
    ],
    highlighted: false,
  },
];

type Package = typeof packages[0];

const PackageModal = ({ pkg, open, onOpenChange }: { pkg: Package; open: boolean; onOpenChange: (v: boolean) => void }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto bg-card border-border">
      <DialogHeader>
        <div className="flex items-center gap-3 mb-1">
          {pkg.badge && (
            <Badge className="gold-gradient text-accent-foreground font-body text-xs font-bold tracking-wider uppercase gap-1">
              <Star size={10} fill="currentColor" /> {pkg.badge}
            </Badge>
          )}
        </div>
        <DialogTitle className="font-heading text-2xl font-bold text-left">{pkg.name}</DialogTitle>
        <DialogDescription className="font-body text-sm leading-relaxed text-left">
          {pkg.description}
        </DialogDescription>
      </DialogHeader>

      <Accordion type="multiple" className="space-y-1">
        {pkg.features.map((f, i) =>
          f.detail ? (
            <AccordionItem key={i} value={`f-${i}`} className="border-border/50">
              <AccordionTrigger className="text-sm font-body hover:no-underline py-3 gap-3">
                <span className="flex items-center gap-2 text-left">
                  <Check size={14} className="text-accent shrink-0" />
                  {f.name}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pl-6">
                {f.detail}
              </AccordionContent>
            </AccordionItem>
          ) : (
            <div key={i} className="py-3 text-sm font-body text-accent font-semibold">
              {f.name}
            </div>
          )
        )}
      </Accordion>

      {pkg.expandedFeatures && (
        <div className="mt-4 border-t border-border pt-4">
          <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-3">Included custom apps:</p>
          <ul className="space-y-2">
            {pkg.expandedFeatures.map((ef, i) => (
              <li key={i} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                <Check size={12} className="text-accent shrink-0" />
                {ef}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Button asChild className="btn-gold w-full mt-2">
        <a href="#cta" onClick={() => onOpenChange(false)}>
          Request Service
        </a>
      </Button>
    </DialogContent>
  </Dialog>
);

const PackageCard = ({ pkg, index }: { pkg: Package; index: number }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AnimateOnScroll delay={index * 0.15} className={`${pkg.highlighted ? "md:-mt-4 md:mb-4" : ""}`}>
        <div
          onClick={() => setModalOpen(true)}
          className={`relative rounded-xl p-8 card-hover border transition-all duration-500 h-full flex flex-col cursor-pointer group ${
            pkg.highlighted
              ? "bg-card border-accent gold-glow"
              : "bg-card border-border hover:border-accent/30"
          }`}
        >
          {pkg.badge && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="gold-gradient text-accent-foreground font-body text-xs font-bold tracking-wider uppercase gap-1 px-4 py-1">
                <Star size={12} fill="currentColor" /> {pkg.badge}
              </Badge>
            </div>
          )}

          <h3 className="font-heading text-2xl font-bold mb-2 mt-2">{pkg.name}</h3>
          <p className="font-body text-xs text-muted-foreground mb-6">{pkg.description}</p>

          <ul className="space-y-3 flex-1">
            {pkg.features.slice(0, 5).map((f, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-sm">
                {f.name.includes("Everything") ? (
                  <span className="text-accent font-semibold">{f.name}</span>
                ) : (
                  <>
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f.name}</span>
                  </>
                )}
              </li>
            ))}
            {pkg.features.length > 5 && (
              <li className="font-body text-xs text-accent flex items-center gap-1">
                <Info size={12} />
                +{pkg.features.length - 5} more features — click to explore
              </li>
            )}
          </ul>

          <div className="mt-6 text-center">
            <span className={`inline-block ${pkg.highlighted ? "btn-gold" : "btn-outline-gold"} group-hover:shadow-lg`}>
              View Details
            </span>
          </div>
        </div>
      </AnimateOnScroll>

      <PackageModal pkg={pkg} open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

const PackagesSection = () => (
  <section id="packages" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <AnimateOnScroll className="text-center mb-16">
        <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Our Packages</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">
          Service Packages
        </h2>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
        {packages.map((pkg, i) => (
          <PackageCard key={pkg.tier} pkg={pkg} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default PackagesSection;
