import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
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
import { Button } from "./ui/button";

const packages = [
  {
    name: "Starter Web Presence",
    tier: "starter",
    label: "Starter",
    description: "For small businesses that need a professional, search-friendly online presence.",
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
    label: "Business",
    badge: "Most Popular",
    description: "A complete digital operation: online sales, AI customer support and live inventory management.",
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
    label: "Enterprise",
    description: "End-to-end digital transformation with AI-driven automation, custom internal apps and business intelligence.",
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

const PREVIEW_COUNT = 6;

const PackageModal = ({ pkg, open, onOpenChange }: { pkg: Package; open: boolean; onOpenChange: (v: boolean) => void }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto bg-paper border-0">
      <DialogHeader>
        <p className="text-base font-semibold">{pkg.label}</p>
        <DialogTitle className="text-3xl font-semibold tracking-tight text-left">{pkg.name}</DialogTitle>
        <DialogDescription className="text-base leading-relaxed text-left text-navy/80">
          {pkg.description}
        </DialogDescription>
      </DialogHeader>

      <Accordion type="multiple">
        {pkg.features.map((f, i) =>
          f.detail ? (
            <AccordionItem key={i} value={`f-${i}`} className="border-border">
              <AccordionTrigger className="text-base font-medium hover:no-underline py-3 gap-3">
                <span className="flex items-center gap-3 text-left">
                  <Check size={16} className="text-navy shrink-0" />
                  {f.name}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-navy/80 text-base pl-7">
                {f.detail}
              </AccordionContent>
            </AccordionItem>
          ) : (
            <p key={i} className="pb-2 text-base font-semibold">
              {f.name}
            </p>
          )
        )}
      </Accordion>

      {pkg.expandedFeatures && (
        <div className="mt-2 bg-paper-2 p-5">
          <p className="text-base font-semibold mb-3">Included custom apps</p>
          <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
            {pkg.expandedFeatures.map((ef, i) => (
              <li key={i} className="flex items-start gap-2 text-base">
                <Check size={14} className="text-navy shrink-0 mt-1" />
                {ef}
              </li>
            ))}
          </ul>
        </div>
      )}

      <a href="#cta" onClick={() => onOpenChange(false)} className="btn-navy w-full mt-2">
        Request a Quote
        <ArrowRight size={16} />
      </a>
    </DialogContent>
  </Dialog>
);

const PackageCard = ({ pkg, index }: { pkg: Package; index: number }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const featured = pkg.highlighted;
  const preview = pkg.features.slice(0, PREVIEW_COUNT);
  const remaining = pkg.features.length - preview.length;

  return (
    <>
      <AnimateOnScroll delay={index * 0.1} className="h-full">
        <div
          className={`relative h-full flex flex-col p-7 sm:p-10 ${
            featured ? "field-navy" : "bg-paper text-navy"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <p className={`text-lg font-semibold ${featured ? "text-green" : ""}`}>{pkg.label}</p>
            {pkg.badge && (
              <span className="bg-green px-3 py-1 text-sm font-semibold text-navy">
                {pkg.badge}
              </span>
            )}
          </div>

          <h3 className="text-3xl font-semibold tracking-tight leading-tight mb-4">{pkg.name}</h3>
          <p className={`text-base leading-relaxed mb-8 ${featured ? "text-paper/85" : "text-navy/85"}`}>
            {pkg.description}
          </p>

          <div className="mb-10 flex-1">
            <ul className="space-y-3">
              {preview.map((f, i) =>
                f.detail ? (
                  <li key={i} className="flex items-start gap-3 text-base">
                    <Check size={18} className={`mt-0.5 shrink-0 ${featured ? "text-green" : "text-navy"}`} />
                    <span>{f.name}</span>
                  </li>
                ) : (
                  <li key={i} className="text-base font-semibold">
                    {f.name}
                  </li>
                )
              )}
            </ul>
            {remaining > 0 && (
              <p className={`mt-4 text-base ${featured ? "text-paper/70" : "text-navy/70"}`}>
                + {remaining} more included
              </p>
            )}
          </div>

          <div className="space-y-3">
            <a
              href="#cta"
              className={`${featured ? "btn-green" : "btn-navy"} w-full`}
            >
              Request a Quote
            </a>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="w-full py-2 text-base font-medium underline underline-offset-4 decoration-1 hover:decoration-2"
            >
              See full package details
            </button>
          </div>
        </div>
      </AnimateOnScroll>

      <PackageModal pkg={pkg} open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

const PackagesSection = () => (
  <section id="packages" className="field-paper-2 section">
    <div className="frame">
      <AnimateOnScroll className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-12 md:mb-20">
        <h2 className="heading-xl lg:col-span-7">Packages</h2>
        <p className="lead lg:col-span-5 max-w-[34ch]">
          Start with what you need today and add capability as you grow. Every package includes one
          month of post-launch support.
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch">
        {packages.map((pkg, i) => (
          <PackageCard key={pkg.tier} pkg={pkg} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default PackagesSection;
