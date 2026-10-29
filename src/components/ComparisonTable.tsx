import { Check, Minus } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const groups = [
  {
    title: "Website essentials",
    features: [
      { name: "SEO-optimised website", tip: "Built with search engine best practices for better Google rankings.", starter: true, business: true, enterprise: true },
      { name: "Social media integration", tip: "Connect your social media platforms directly to your website.", starter: true, business: true, enterprise: true },
      { name: "Mobile-responsive design", tip: "Looks great on phones, tablets, and desktop computers.", starter: true, business: true, enterprise: true },
      { name: "Contact form", tip: "A professional form so visitors can reach you easily.", starter: true, business: true, enterprise: true },
    ],
  },
  {
    title: "E-commerce & operations",
    features: [
      { name: "E-commerce store", tip: "A full online shop where customers can browse and buy products.", starter: false, business: true, enterprise: true },
      { name: "Payment gateway", tip: "Secure online payment processing for credit cards and more.", starter: false, business: true, enterprise: true },
      { name: "AI chatbot (24/7)", tip: "An intelligent bot that answers customer questions around the clock.", starter: false, business: true, enterprise: true },
      { name: "Live stock & inventory", tip: "Real-time stock tracking so you never oversell.", starter: false, business: true, enterprise: true },
      { name: "Help & support system", tip: "A ticketing system for managing customer support queries.", starter: false, business: true, enterprise: true },
      { name: "Internal quotation system", tip: "Generate and manage quotes for clients from your dashboard.", starter: false, business: true, enterprise: true },
      { name: "Lay-by management app", tip: "Track layaway payments and schedules for customers.", starter: false, business: true, enterprise: true },
      { name: "Mobile stock update app", tip: "Update inventory on the go from your phone.", starter: false, business: true, enterprise: true },
    ],
  },
  {
    title: "AI & automation",
    features: [
      { name: "AI personalised journeys", tip: "Your website adapts content and recommendations per visitor.", starter: false, business: false, enterprise: true },
      { name: "Business automation", tip: "Automate invoicing, scheduling, alerts, and reporting.", starter: false, business: false, enterprise: true },
      { name: "AI workflow automation", tip: "Intelligent workflows that optimise your processes over time.", starter: false, business: false, enterprise: true },
      { name: "5 custom internal apps", tip: "CRM, HR, project tracking, finance, and supplier management apps.", starter: false, business: false, enterprise: true },
      { name: "Advanced AI assistant", tip: "Handles complex queries and supports your team internally.", starter: false, business: false, enterprise: true },
      { name: "AI analytics dashboard", tip: "Visual dashboards with AI-generated business insights.", starter: false, business: false, enterprise: true },
      { name: "Third-party integrations", tip: "Connect to accounting, logistics, and social media tools.", starter: false, business: false, enterprise: true },
    ],
  },
  {
    title: "Support",
    features: [
      { name: "Post-launch support", tip: "One month of bug fixes, tweaks, and guidance after launch.", starter: true, business: true, enterprise: true },
    ],
  },
];

const tiers = [
  { key: "starter", label: "Starter" },
  { key: "business", label: "Business", featured: true },
  { key: "enterprise", label: "Enterprise" },
] as const;

const Cell = ({ included, featured }: { included: boolean; featured?: boolean }) => (
  <td className={`py-3.5 px-2 sm:px-4 text-center ${featured ? "bg-accent/[0.06]" : ""}`}>
    {included ? (
      <Check size={18} className="text-accent mx-auto" aria-label="Included" />
    ) : (
      <Minus size={16} className="text-muted-foreground/40 mx-auto" aria-label="Not included" />
    )}
  </td>
);

const ComparisonTable = () => (
  <section id="comparison" className="py-20 md:py-28 dark-section">
    <div className="container mx-auto px-4 sm:px-6">
      <AnimateOnScroll className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
        <p className="font-body text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">Compare</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[hsl(40,30%,95%)]">
          Compare packages
        </h2>
        <p className="font-body text-base sm:text-lg leading-relaxed text-[hsl(40,15%,70%)]">
          See exactly what is included at each level.
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.1}>
        <div className="max-w-5xl mx-auto rounded-xl bg-card text-card-foreground shadow-xl overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left py-4 sm:py-5 pl-4 sm:pl-6 pr-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Feature
                </th>
                {tiers.map((t) => (
                  <th
                    key={t.key}
                    scope="col"
                    className={`w-[18%] sm:w-[16%] py-4 sm:py-5 px-2 sm:px-4 text-center font-body text-xs sm:text-sm font-semibold ${
                      "featured" in t ? "bg-accent/[0.06] text-foreground" : "text-foreground"
                    }`}
                  >
                    {t.label}
                    {"featured" in t && (
                      <span className="hidden sm:block mt-1 font-normal text-[11px] text-accent">Most popular</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            {groups.map((g) => (
              <tbody key={g.title}>
                <tr className="bg-muted/60">
                  <th
                    scope="colgroup"
                    colSpan={4}
                    className="text-left py-2.5 px-4 sm:px-6 font-body text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70"
                  >
                    {g.title}
                  </th>
                </tr>
                {g.features.map((f) => (
                  <tr key={f.name} className="border-t border-border first:border-t-0">
                    <th scope="row" className="text-left font-normal py-3.5 pl-4 sm:pl-6 pr-2">
                      <span className="block font-body text-sm text-foreground">{f.name}</span>
                      <span className="hidden md:block font-body text-xs text-muted-foreground mt-0.5">{f.tip}</span>
                    </th>
                    <Cell included={f.starter} />
                    <Cell included={f.business} featured />
                    <Cell included={f.enterprise} />
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default ComparisonTable;
