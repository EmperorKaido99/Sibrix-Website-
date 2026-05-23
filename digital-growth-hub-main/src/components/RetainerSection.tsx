import { Clock, Zap, Shield, Plus } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { Card, CardContent } from "./ui/card";

const perks = [
  { icon: Clock, label: "4 hours/month development & support" },
  { icon: Zap, label: "Flexible usage — design, fixes, updates, automation" },
  { icon: Shield, label: "Priority response" },
  { icon: Plus, label: "Additional hours at standard rate" },
];

const RetainerSection = () => (
  <section id="retainer" className="py-24 md:py-32 bg-muted/50">
    <div className="container mx-auto px-6">
      <AnimateOnScroll>
        <Card className="max-w-4xl mx-auto border-border shadow-lg">
          <CardContent className="p-10 md:p-14">
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <div className="flex-1">
                <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Ongoing Support</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Flexible Monthly Retainer
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-8">
                  Keep your digital products evolving with dedicated monthly hours for development, design, and support.
                </p>

                <ul className="space-y-4">
                  {perks.map((p, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <p.icon size={18} className="text-accent" />
                      </div>
                      <span className="font-body text-sm text-foreground">{p.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-28 h-28 rounded-full border-2 border-accent/30 flex items-center justify-center">
                  <Clock size={40} className="text-accent animate-pulse" />
                </div>
                <a href="#cta" className="btn-gold whitespace-nowrap">
                  Learn More
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimateOnScroll>
    </div>
  </section>
);

export default RetainerSection;
