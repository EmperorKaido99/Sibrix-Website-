import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import { MARKING_QUALIFICATIONS, MARKING_RESULTS, MARKING_STEPS } from "@/data/caseStudies";

// Anonymised case study. See src/data/caseStudies.ts for what still needs confirming.
const MarkingCaseStudy = () => (
  <>
    <PageIntro
      title="Assessment marking, *automated.*"
      lead="How we automated the marking of learner assessments for a skills-development provider, with the assessor still in control."
    >
      <div className="mt-10 flex flex-wrap gap-4">
        <Link to="/contact" className="btn-green">Book a free consultation</Link>
        <Link to="/work" className="btn-ghost-light">
          <ArrowLeft size={18} /> All work
        </Link>
      </div>
    </PageIntro>

    <section className="field-paper section">
      <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
        <AnimateOnScroll className="lg:col-span-5">
          <h2 className="heading-xl">The problem</h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1} className="lg:col-span-7">
          <p className="lead">
            Every learner submission had to be downloaded, compared with the official memo question by question, scored,
            commented on, turned into a signed marked copy, logged in a tracker and returned on the portal.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-navy/85 max-w-[60ch]">
            Done by hand, that is hours of repetitive work per batch, and consistency suffers when the same assessor marks
            hundreds of scripts.
          </p>
        </AnimateOnScroll>
      </div>
    </section>

    <section className="field-paper-2 section">
      <div className="frame">
        <AnimateOnScroll>
          <h2 className="heading-xl">What we automated</h2>
        </AnimateOnScroll>
        <ol className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {MARKING_STEPS.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 0.05} className="h-full">
              <li className={`h-full p-8 ${i === MARKING_STEPS.length - 1 ? "field-navy" : "bg-paper"}`}>
                <span className="inline-flex h-8 w-8 items-center justify-center bg-green font-semibold text-navy">{i + 1}</span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className={`mt-3 text-lg leading-relaxed ${i === MARKING_STEPS.length - 1 ? "text-paper/85" : "text-navy/85"}`}>{s.detail}</p>
              </li>
            </AnimateOnScroll>
          ))}
        </ol>
        <AnimateOnScroll className="mt-12">
          <p className="text-lg text-navy/80">
            One setup, four qualifications: {MARKING_QUALIFICATIONS.join(", ")}.
          </p>
        </AnimateOnScroll>
      </div>
    </section>

    <section className="field-navy-deep section">
      <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
        <AnimateOnScroll className="lg:col-span-5">
          <h2 className="heading-xl max-w-[12ch]">The assessor stays in control</h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1} className="lg:col-span-7">
          <ul className="space-y-5">
            {[
              "Every result is reviewed and signed off by the assessor of record.",
              "Nothing is posted until checks confirm it is the right learner and the right paper.",
              "Anything that doesn't match is set aside for a person to look at, not guessed.",
              "Learner names and scripts are never shown publicly. This case study is anonymised.",
            ].map((t) => (
              <li key={t} className="flex gap-4 text-lg leading-relaxed">
                <Check size={22} className="mt-1 shrink-0 text-green" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </AnimateOnScroll>
      </div>
    </section>

    {MARKING_RESULTS.length > 0 && (
      <section className="field-green section">
        <div className="frame">
          <h2 className="heading-xl">Results</h2>
          <dl className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {MARKING_RESULTS.map((r) => (
              <div key={r.label}>
                <dt className="sr-only">{r.label}</dt>
                <dd className="text-6xl font-semibold tracking-tight">{r.value}</dd>
                <dd className="mt-2 text-lg">{r.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    )}

    <CTASection />
  </>
);

export default MarkingCaseStudy;
