import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import DemoVideo from "./DemoVideo";
import { CRIMESPOTS_VIDEO } from "@/lib/media";
import { TESTIMONIALS } from "@/data/testimonials";

// "Selected work": the client project (Easy Scribe, with the client's own words) leads; CrimeSpots sits
// beside it. (The assessment-marking case study is parked on branch parked/assessment-marking.) On the Work page (`full`) the complete client quote is shown.
const FeaturedWork = ({ full = false }: { full?: boolean }) => {
  const client = TESTIMONIALS[0];
  const quote = full ? client.full : client.short.split(". ")[0].replace(/\.?$/, ".");

  return (
    <section className="field-navy section">
      <div className="frame">
        <AnimateOnScroll>
          <h2 className="heading-xl max-w-[16ch]">Selected work</h2>
        </AnimateOnScroll>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {/* Client project */}
          <AnimateOnScroll className="lg:col-span-7 h-full">
            <article className="h-full bg-paper text-navy p-8 md:p-12 flex flex-col">
              <p className="font-semibold text-navy/60">Client project</p>
              <img
                src={client.logo}
                alt={client.logoAlt}
                width={1142}
                height={242}
                loading="lazy"
                decoding="async"
                className="mt-5 h-auto w-full max-w-[260px]"
              />
              <p className="mt-6 text-lg leading-relaxed text-navy/85 max-w-[52ch]">
                A platform Sibrix conceptualised and built for Easy Chats to replace time-consuming transcript editing,
                coordinate their team and produce consistent, client-ready documents.
              </p>
              <figure className="mt-8 border-l-4 border-green pl-6">
                <blockquote className={`font-semibold tracking-[-0.01em] ${full ? "text-xl leading-relaxed" : "text-2xl md:text-[1.75rem] leading-snug"}`}>
                  “{quote}”
                </blockquote>
                <figcaption className="mt-4 text-base font-semibold">{client.organisation}</figcaption>
              </figure>
            </article>
          </AnimateOnScroll>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4 lg:gap-5">
            {/* Own product */}
            <AnimateOnScroll delay={0.08} className="h-full">
              <article className="h-full bg-paper/5 ring-1 ring-paper/15 flex flex-col">
                <DemoVideo {...CRIMESPOTS_VIDEO} className="aspect-[16/10]" />
                <div className="p-8 pt-6">
                  <p className="font-semibold text-cyan">Our own product</p>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">CrimeSpots</h3>
                  <p className="mt-3 text-base leading-relaxed text-paper/80">
                    AI converts Cape Town news reports into verified incidents on a live map, without manual data entry.
                  </p>
                  <Link to="/work/crimespots" className="link-arrow mt-6 text-paper">
                    View the case study
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
