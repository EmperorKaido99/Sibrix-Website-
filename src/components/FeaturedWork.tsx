import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import DemoVideo from "./DemoVideo";
import { CRIMESPOTS_VIDEO } from "@/lib/media";
import { MARKING_STEPS } from "@/data/caseStudies";

// Home: proof first. Lead case study is the assessment-marking automation; CrimeSpots
// (AI automation in a live product) sits beside it with its video.
const FeaturedWork = () => (
  <section className="field-navy section">
    <div className="frame">
      <AnimateOnScroll>
        <h2 className="heading-xl max-w-[16ch]">Selected work</h2>
      </AnimateOnScroll>

      <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
        <AnimateOnScroll className="lg:col-span-7 h-full">
          <article className="h-full bg-paper text-navy p-8 md:p-12 flex flex-col">
            <p className="font-semibold text-navy/70">Case study · Skills development</p>
            <h3 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Assessment marking, automated</h3>
            <p className="mt-4 text-lg leading-relaxed text-navy/85 max-w-[52ch]">
              A skills-development provider's assessment process was entirely manual. We automated it end to end, with the
              assessor retaining final sign-off on every result.
            </p>
            <ol className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 flex-1">
              {MARKING_STEPS.slice(0, 6).map((s, i) => (
                <li key={s.title} className="flex gap-3 text-base">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center bg-green text-sm font-semibold text-navy">{i + 1}</span>
                  {s.title}
                </li>
              ))}
            </ol>
            <Link to="/work/assessment-marking" className="btn-navy mt-10 self-start">
              Read the case study
              <ArrowRight size={18} />
            </Link>
          </article>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1} className="lg:col-span-5 h-full">
          <article className="h-full flex flex-col">
            <DemoVideo {...CRIMESPOTS_VIDEO} className="aspect-[16/10]" />
            <div className="pt-6">
              <p className="text-cyan font-semibold">Our own product</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight">CrimeSpots</h3>
              <p className="mt-3 text-lg leading-relaxed text-paper/85">
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
  </section>
);

export default FeaturedWork;
