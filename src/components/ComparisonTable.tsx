import { Check, Minus } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const features = [
  { name: "SEO-optimised website", tip: "Built with search engine best practices for better Google rankings.", starter: true, business: true, enterprise: true },
  { name: "Social media integration", tip: "Connect your social media platforms directly to your website.", starter: true, business: true, enterprise: true },
  { name: "Mobile-responsive design", tip: "Looks great on phones, tablets, and desktop computers.", starter: true, business: true, enterprise: true },
  { name: "Contact form", tip: "A professional form so visitors can reach you easily.", starter: true, business: true, enterprise: true },
  { name: "E-commerce store", tip: "A full online shop where customers can browse and buy products.", starter: false, business: true, enterprise: true },
  { name: "Payment gateway", tip: "Secure online payment processing for credit cards and more.", starter: false, business: true, enterprise: true },
  { name: "AI chatbot (24/7)", tip: "An intelligent bot that answers customer questions around the clock.", starter: false, business: true, enterprise: true },
  { name: "Live stock & inventory", tip: "Real-time stock tracking so you never oversell.", starter: false, business: true, enterprise: true },
  { name: "Help & support system", tip: "A ticketing system for managing customer support queries.", starter: false, business: true, enterprise: true },
  { name: "Internal quotation system", tip: "Generate and manage quotes for clients from your dashboard.", starter: false, business: true, enterprise: true },
  { name: "Lay-by management app", tip: "Track layaway payments and schedules for customers.", starter: false, business: true, enterprise: true },
  { name: "Mobile stock update app", tip: "Update inventory on the go from your phone.", starter: false, business: true, enterprise: true },
  { name: "AI personalised journeys", tip: "Your website adapts content and recommendations per visitor.", starter: false, business: false, enterprise: true },
  { name: "Business automation", tip: "Automate invoicing, scheduling, alerts, and reporting.", starter: false, business: false, enterprise: true },
  { name: "AI workflow automation", tip: "Intelligent workflows that optimise your processes over time.", starter: false, business: false, enterprise: true },
  { name: "5 custom internal apps", tip: "CRM, HR, project tracking, finance, and supplier management apps.", starter: false, business: false, enterprise: true },
  { name: "Advanced AI assistant", tip: "Handles complex queries and supports your team internally.", starter: false, business: false, enterprise: true },
  { name: "AI analytics dashboard", tip: "Visual dashboards with AI-generated business insights.", starter: false, business: false, enterprise: true },
  { name: "Third-party integrations", tip: "Connect to accounting, logistics, and social media tools.", starter: false, business: false, enterprise: true },
  { name: "Post-launch support", tip: "One month of bug fixes, tweaks, and guidance after launch.", starter: true, business: true, enterprise: true },
];

const Cell = ({ included }: { included: boolean }) =>
  included ? (
    <Check size={18} className="text-accent mx-auto" />
  ) : (
    <Minus size={18} className="text-muted-foreground/30 mx-auto" />
  );

const ComparisonTable = () => (
  <section id="comparison" className="py-24 md:py-32 dark-section">
    <div className="container mx-auto px-6">
      <AnimateOnScroll className="text-center mb-16">
        <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Compare</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-[hsl(40,30%,95%)]">Feature Comparison</h2>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.2}>
        <TooltipProvider delayDuration={200}>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-accent/20">
                  <th className="text-left py-4 px-4 font-body text-sm text-[hsl(40,15%,60%)] uppercase tracking-wider">Feature</th>
                  <th className="text-center py-4 px-4 font-body text-sm text-[hsl(40,15%,60%)] uppercase tracking-wider">Starter</th>
                  <th className="text-center py-4 px-4 font-body text-sm uppercase tracking-wider">
                    <span className="text-accent">Business</span>
                  </th>
                  <th className="text-center py-4 px-4 font-body text-sm text-[hsl(40,15%,60%)] uppercase tracking-wider">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr key={i} className="border-b border-[hsl(220,30%,25%)] table-row-hover">
                    <td className="py-3 px-4 font-body text-sm text-[hsl(40,25%,88%)]">
                      <Tooltip>
                        <TooltipTrigger className="text-left cursor-help underline decoration-dotted decoration-[hsl(40,15%,40%)] underline-offset-4">
                          {f.name}
                        </TooltipTrigger>
                        <TooltipContent side="right" className="max-w-xs">
                          <p className="text-xs">{f.tip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </td>
                    <td className="py-3 px-4"><Cell included={f.starter} /></td>
                    <td className="py-3 px-4 bg-accent/5"><Cell included={f.business} /></td>
                    <td className="py-3 px-4"><Cell included={f.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TooltipProvider>
      </AnimateOnScroll>
    </div>
  </section>
);

export default ComparisonTable;
