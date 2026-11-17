import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ADD_ONS, CARE_PLANS, CUSTOM_EXAMPLES, IT_SECURITY, priceLabel } from "@/data/packages";

// Add-ons: a 4-tile grid on light background.
export const AddOns = () => (
  <section id="add-ons" className="field-paper section">
    <div className="frame">
      <AnimateOnScroll>
        <h2 className="heading-xl">Add-ons</h2>
        <p className="lead mt-6 max-w-[44ch]">Add to any website, now or later.</p>
      </AnimateOnScroll>
      <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {ADD_ONS.map((a, i) => (
          <AnimateOnScroll key={a.title} delay={i * 0.06} className="h-full">
            <article className="group h-full flex flex-col bg-paper-2 p-7 md:p-8 transition-transform duration-300 ease-out hover:-translate-y-1">
              <span className="inline-flex h-12 w-12 items-center justify-center bg-paper text-navy transition-colors duration-300 group-hover:bg-green">
                <a.icon size={22} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{a.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-navy/85">{a.detail}</p>
              <p className="mt-6 font-semibold">{priceLabel(a.price)}</p>
              {a.note && <p className="mt-1 text-sm text-navy/70">{a.note}</p>}
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

// IT & Security: services sold on their own, on a dark band with a list layout.
export const ITSecurity = () => (
  <section id="it-security" className="field-navy section">
    <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
      <AnimateOnScroll className="lg:col-span-5">
        <h2 className="heading-xl">IT & Security</h2>
        <p className="lead mt-6 max-w-[32ch] text-paper/85">
          Available on their own or alongside a website, quoted for your premises.
        </p>
        <Link to="/contact?package=it" className="btn-green mt-10">
          Discuss a project
          <ArrowRight size={18} />
        </Link>
      </AnimateOnScroll>
      <ul className="lg:col-span-6 lg:col-start-7">
        {IT_SECURITY.map((s, i) => (
          <AnimateOnScroll key={s.title} delay={i * 0.08}>
            <li className="flex gap-6 py-8 border-t border-paper/15 first:border-t-0 first:pt-0">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center bg-green text-navy">
                <s.icon size={26} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-paper/80 max-w-[44ch]">{s.detail}</p>
              </div>
            </li>
          </AnimateOnScroll>
        ))}
      </ul>
    </div>
  </section>
);

// Care plans: two side-by-side monthly options.
export const CarePlans = () => (
  <section id="care" className="field-paper-2 section">
    <div className="frame">
      <AnimateOnScroll>
        <h2 className="heading-xl">Care plans</h2>
        <p className="lead mt-6 max-w-[46ch]">
          Monthly plans that keep your website and systems improving after launch.
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

// Custom: bold green band for enterprise-scale work, no fixed promises.
export const CustomBand = () => (
  <section id="custom" className="field-green section">
    <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
      <AnimateOnScroll className="lg:col-span-7">
        <h2 className="heading-xl max-w-[14ch]">Custom systems</h2>
        <p className="lead mt-6 max-w-[44ch]">
          For larger or unusual projects we start with a discovery workshop, then quote exactly what you need.
          Examples of what we build:
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {CUSTOM_EXAMPLES.map((x) => (
            <li key={x} className="bg-navy px-4 py-2 text-base font-medium text-paper">
              {x}
            </li>
          ))}
        </ul>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1} className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
        <Link to="/contact?package=custom" className="btn-navy">
          Discuss a project
          <ArrowRight size={18} />
        </Link>
      </AnimateOnScroll>
    </div>
  </section>
);
