import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import DemoVideo from "./DemoVideo";
import { CRIMESPOTS_VIDEO } from "@/lib/media";
import { TESTIMONIALS } from "@/data/testimonials";

// "Selected work": the client project (Easy Scribe, with the client's own words, verbatim) leads; CrimeSpots
// sits beside it. (The assessment-marking case study is parked on branch parked/assessment-marking.)
const FeaturedWork = () => {
  const client = TESTIMONIALS[0];

  return (
    <section className="field-navy section">
      <div className="frame">
        <AnimateOnScroll>
          <h2 className="heading-xl max-w-[16ch]">Selected work</h2>
        </AnimateOnScroll>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 items-stretch">
          {/* Client project: logo, then the client's words exactly as supplied */}
          <AnimateOnScroll className="h-full">
            <article
              className="client-card group relative h-full overflow-hidden bg-paper text-navy px-8 py-12 md:px-14 md:py-16 flex flex-col items-center justify-center text-center"
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
                className="client-card__logo relative h-auto w-full max-w-[400px]"
              />
              <figure className="relative mt-12 max-w-[58ch]">
                <blockquote className="text-lg md:text-xl leading-relaxed font-medium">“{client.quote}”</blockquote>
                <span aria-hidden="true" className="client-card__line mx-auto mt-8 block h-[3px] bg-green" />
                <figcaption className="mt-5 text-base font-semibold">{client.attribution}</figcaption>
              </figure>
            </article>
          </AnimateOnScroll>

            {/* Own product */}
            <AnimateOnScroll delay={0.08} className="h-full">
              <article className="h-full bg-paper/5 ring-1 ring-paper/15 flex flex-col transition-transform duration-500 hover:-translate-y-1.5">
                <DemoVideo {...CRIMESPOTS_VIDEO} className="aspect-[16/10]" />
                <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
                  <p className="font-semibold text-cyan">Our own product</p>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">CrimeSpots</h3>
                  <p className="mt-3 text-base leading-relaxed text-paper/80">
                    AI converts Cape Town news reports into verified incidents on a live map, without manual data entry.
                  </p>
                  <Link to="/work/crimespots" className="link-arrow mt-6 self-start text-paper">
                    View the case study
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
