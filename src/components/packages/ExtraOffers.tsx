import { Check } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { CARE_PLANS, priceLabel } from "@/data/packages";

// Care plans: two side-by-side monthly options.
export const CarePlans = () => (
  <section id="care" className="field-paper-2 section">
    <div className="frame">
      <AnimateOnScroll>
        <h2 className="heading-xl">Website care</h2>
        <p className="lead mt-6 max-w-[46ch]">
          Monthly plans that keep your website safe and improving after launch.
        </p>
      </AnimateOnScroll>
      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        {CARE_PLANS.map((c, i) => (
          <AnimateOnScroll key={c.name} delay={i * 0.08} className="h-full">
            <article className="h-full flex flex-col bg-paper p-8 md:p-12">
              <c.icon size={28} strokeWidth={1.75} className="text-navy" aria-hidden="true" />
              <h3 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">{c.name}</h3>
              <p className="mt-3 text-lg text-navy/85">{c.forWho}</p>
              <ul className="mt-8 flex-1 space-y-3">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-base">
                    <Check size={18} className="mt-0.5 shrink-0 text-navy" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-2xl font-semibold tracking-tight">
                {priceLabel(c.price)}
                {c.price && <span className="text-base font-normal text-navy/70"> / month</span>}
              </p>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);
