import AnimateOnScroll from "./AnimateOnScroll";
import { TESTIMONIALS } from "@/data/testimonials";

// Work page: the Easy Scribe client card (logo + the client's words exactly as supplied), with the hover
// treatment from index.css (.client-card*): lift, cursor-following glow, logo scale, sweeping line.
const ClientWork = () => {
  const client = TESTIMONIALS[0];
  return (
    <section className="field-paper-2 section">
      <div className="frame">
        <AnimateOnScroll>
          <h2 className="heading-xl max-w-[14ch]">Client work</h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.08} className="mt-12 md:mt-16">
          <article
            className="client-card group relative mx-auto max-w-[920px] overflow-hidden bg-paper text-navy px-8 py-12 md:px-16 md:py-16 flex flex-col items-center text-center"
            onPointerMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
              e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
            }}
          >
            <span aria-hidden="true" className="client-card__glow pointer-events-none absolute inset-0" />
            <img
              src={client.logo}
              alt={client.logoAlt}
              width={1140}
              height={244}
              loading="lazy"
              decoding="async"
              className="client-card__logo relative h-auto w-full max-w-[420px]"
            />
            <figure className="relative mt-12 max-w-[62ch]">
              <blockquote className="text-lg md:text-xl leading-relaxed font-medium">“{client.quote}”</blockquote>
              <span aria-hidden="true" className="client-card__line mx-auto mt-8 block h-[3px] bg-green" />
              <figcaption className="mt-5 text-base font-semibold">{client.attribution}</figcaption>
            </figure>
          </article>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ClientWork;
