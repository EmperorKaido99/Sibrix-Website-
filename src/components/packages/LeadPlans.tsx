import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { AUTOMATION_PLANS, IT_PLANS, priceLabel, type Plan } from "@/data/packages";

const PlanGrid = ({ plans, dark }: { plans: Plan[]; dark?: boolean }) => (
  <div className={`mt-12 md:mt-16 grid grid-cols-1 gap-4 lg:gap-5 ${plans.length === 3 ? "lg:grid-cols-[1fr_1.2fr_1fr]" : "md:grid-cols-2"}`}>
    {plans.map((p, i) => {
      const featured = p.featured;
      const card = featured ? (dark ? "bg-paper text-navy" : "field-navy") : dark ? "bg-paper/5 ring-1 ring-paper/15" : "bg-paper text-navy";
      const accent = featured && !dark ? "text-green" : "";
      const muted = featured ? (dark ? "text-navy/80" : "text-paper/85") : dark ? "text-paper/80" : "text-navy/85";
      return (
        <AnimateOnScroll key={p.id} delay={i * 0.08} className="h-full">
          <article className={`h-full flex flex-col p-7 sm:p-10 transition-transform duration-300 ease-out hover:-translate-y-1.5 ${card}`}>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">{p.name}</h3>
              {p.badge && <span className="bg-green px-3 py-1 text-sm font-semibold text-navy">{p.badge}</span>}
            </div>
            <p className={`mt-4 text-lg leading-relaxed ${muted}`}>{p.forWho}</p>
            <p className={`mt-6 text-2xl font-semibold tracking-tight ${accent}`}>
              {priceLabel(p.price)}
              {p.price && p.monthly && <span className="text-base font-normal opacity-70"> / month</span>}
            </p>
            {p.monthly && !p.price && <p className={`mt-1 text-sm ${muted}`}>Billed monthly</p>}
            <ul className="mt-8 mb-10 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-base">
                  <Check size={18} className={`mt-0.5 shrink-0 ${featured && !dark ? "text-green" : ""}`} />
                  <span className={f.startsWith("Everything in") ? "font-semibold" : ""}>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to={`/contact?package=${p.id}`}
              className={`${featured ? (dark ? "btn-navy" : "btn-green") : dark ? "btn-green" : "btn-navy"} w-full`}
            >
              Book a free consultation
              <ArrowRight size={18} />
            </Link>
          </article>
        </AnimateOnScroll>
      );
    })}
  </div>
);

export const AutomationPlans = () => (
  <section id="automation-plans" className="field-paper-2 section">
    <div className="frame">
      <AnimateOnScroll>
        <h2 className="heading-xl">Workflow automation</h2>
        <p className="lead mt-6 max-w-[46ch]">
          From a single workflow to integrated operations, with optional monthly care.
        </p>
      </AnimateOnScroll>
      <PlanGrid plans={AUTOMATION_PLANS} />
    </div>
  </section>
);

export const ITPlans = () => (
  <section id="it-plans" className="field-navy section">
    <div className="frame">
      <AnimateOnScroll>
        <h2 className="heading-xl">IT support</h2>
        <p className="lead mt-6 max-w-[46ch] text-paper/85">
          Professional set-up, followed by managed monthly support.
        </p>
      </AnimateOnScroll>
      <PlanGrid plans={IT_PLANS} dark />
    </div>
  </section>
);
