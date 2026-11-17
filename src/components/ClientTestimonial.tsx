import AnimateOnScroll from "./AnimateOnScroll";
import { TESTIMONIALS } from "@/data/testimonials";

// Client proof near the top of the page (reviewer: testimonials should lead on the landing page).
const ClientTestimonial = ({ full = false }: { full?: boolean }) => {
  const t = TESTIMONIALS[0];
  return (
    <section className="field-paper py-[clamp(4rem,8vw,7rem)] border-b border-navy/10">
      <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <AnimateOnScroll className="lg:col-span-4">
          <p className="text-base font-semibold text-navy/60">Client</p>
          <img src={t.logo} alt={t.logoAlt} width={1142} height={242} loading="lazy" decoding="async" className="mt-4 h-auto w-full max-w-[300px]" />
          <ul className="mt-8 space-y-2 text-base text-navy/75">
            {t.challenges.map((c) => (
              <li key={c} className="border-l-2 border-green pl-3">{c}</li>
            ))}
          </ul>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1} className="lg:col-span-8">
          <figure>
            <blockquote className={`font-semibold tracking-[-0.02em] ${full ? "text-[clamp(1.3rem,2.1vw,1.85rem)] leading-[1.35]" : "text-[clamp(1.4rem,2.4vw,2.1rem)] leading-[1.3]"}`}>
              “{full ? t.full : t.short}”
            </blockquote>
            <figcaption className="mt-8 text-lg">
              <span className="font-semibold">{t.organisation}</span>
              <span className="text-navy/70"> · on {t.product}, developed by Sibrix</span>
            </figcaption>
          </figure>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ClientTestimonial;
