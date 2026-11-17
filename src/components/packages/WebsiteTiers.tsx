import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { WEBSITE_TIERS, priceLabel } from "@/data/packages";

const WebsiteTiers = () => (
  <section id="websites" className="field-paper-2 section">
    <div className="frame">
      <AnimateOnScroll className="mb-12 md:mb-16">
        <h2 className="heading-xl">Website creation</h2>
        <p className="lead mt-6 max-w-[44ch]">
          Also available: three ways to get online. Every website includes one month of support after launch.
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.2fr] gap-4 lg:gap-5 items-stretch">
        {WEBSITE_TIERS.map((t, i) => (
          <AnimateOnScroll key={t.id} delay={i * 0.08} className="h-full">
            <article
              className={`h-full flex flex-col p-7 sm:p-10 transition-transform duration-300 ease-out hover:-translate-y-1.5 ${
                t.featured ? "field-navy" : "bg-paper text-navy"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-4xl font-semibold tracking-tight">{t.name}</h3>
                {t.badge && <span className="bg-green px-3 py-1 text-sm font-semibold text-navy">{t.badge}</span>}
              </div>
              <p className={`mt-4 text-lg leading-relaxed ${t.featured ? "text-paper/85" : "text-navy/85"}`}>{t.forWho}</p>
              <p className={`mt-6 text-2xl font-semibold tracking-tight ${t.featured ? "text-green" : ""}`}>{priceLabel(t.price)}</p>

              <ul className="mt-8 mb-10 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-base">
                    <Check size={18} className={`mt-0.5 shrink-0 ${t.featured ? "text-green" : "text-navy"}`} />
                    <span className={f.startsWith("Everything in") ? "font-semibold" : ""}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link to={`/contact?package=${t.id}`} className={`${t.featured ? "btn-green" : "btn-navy"} w-full`}>
                Book a free consultation
                <ArrowRight size={18} />
              </Link>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default WebsiteTiers;
