import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { EXTRAS, LEAD_OFFERS } from "@/data/offers";

// Home: the two lead offers, large, then three extras as a quieter "also available" row.
const LeadOffers = () => (
  <section className="field-paper section">
    <div className="frame">
      <AnimateOnScroll>
        <h2 className="heading-xl max-w-[16ch]">Our core services</h2>
      </AnimateOnScroll>

      <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
        {LEAD_OFFERS.map((o, i) => (
          <AnimateOnScroll key={o.id} delay={i * 0.08} className="h-full">
            <article className={`h-full flex flex-col p-8 md:p-12 ${i === 0 ? "field-navy" : "bg-paper-2 text-navy"}`}>
              <span className={`inline-flex h-14 w-14 items-center justify-center ${i === 0 ? "bg-green text-navy" : "bg-navy text-paper"}`}>
                <o.icon size={26} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-8 text-4xl md:text-5xl font-semibold tracking-tight">{o.title}</h3>
              <p className={`mt-3 text-xl font-semibold ${i === 0 ? "text-green" : ""}`}>{o.promise}</p>
              <p className={`mt-4 text-lg leading-relaxed ${i === 0 ? "text-paper/85" : "text-navy/85"}`}>{o.detail}</p>
              <ul className="mt-8 flex-1 space-y-4">
                {o.examples.slice(0, 4).map((e) => (
                  <li key={e.label} className="flex items-start gap-3 text-base">
                    <e.icon size={20} strokeWidth={1.75} className={`mt-0.5 shrink-0 ${i === 0 ? "text-green" : "text-navy"}`} aria-hidden="true" />
                    <span>
                      <span className="font-semibold">{e.label}</span>
                      <span className={`block ${i === 0 ? "text-paper/75" : "text-navy/75"}`}>{e.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <Link to={`/services#${o.id}`} className={`${i === 0 ? "btn-green" : "btn-navy"} mt-10 self-start`}>
                Learn more
                <ArrowRight size={18} />
              </Link>
            </article>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll className="mt-16 md:mt-20">
        <h3 className="text-2xl font-semibold tracking-tight">Also available</h3>
      </AnimateOnScroll>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {EXTRAS.map((x, i) => (
          <AnimateOnScroll key={x.id} delay={i * 0.06} className="h-full">
            <Link to={x.to} className="group h-full flex items-start gap-4 border-t-2 border-navy/15 pt-6 hover:border-green transition-colors">
              <x.icon size={22} strokeWidth={1.75} className="mt-1 shrink-0" aria-hidden="true" />
              <span>
                <span className="block text-xl font-semibold tracking-tight group-hover:underline underline-offset-4">{x.title}</span>
                <span className="mt-1 block text-base text-navy/80">{x.detail}</span>
              </span>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default LeadOffers;
