import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import DemoVideo from "@/components/DemoVideo";
import CTASection from "@/components/CTASection";
import { caseBySlug, type CaseStudy } from "@/data/cases";

// One layout for every case study (structure modelled on consulting case studies):
// header → what was needed / how we helped → the positive change → engagement overview → the solution
// → benefits → making a difference → related work → booking section.

const Prose = ({ paras, className = "" }: { paras: string[]; className?: string }) => (
  <div className={`space-y-5 text-lg leading-relaxed max-w-[64ch] ${className}`}>
    {paras.map((p) => (
      <p key={p.slice(0, 32)}>{p}</p>
    ))}
  </div>
);

const SplitSection = ({ title, children, tone }: { title: string; children: React.ReactNode; tone: string }) => (
  <section className={`${tone} section`}>
    <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
      <AnimateOnScroll className="lg:col-span-4">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-none">{title}</h2>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.08} className="lg:col-span-8">
        {children}
      </AnimateOnScroll>
    </div>
  </section>
);

const CaseStudyPage = ({ slug }: { slug: string }) => {
  const c = caseBySlug(slug) as CaseStudy;
  const related = c.related.map(caseBySlug).filter(Boolean) as CaseStudy[];

  return (
    <>
      {/* Header: logo, headline, subline */}
      <section className="page-intro field-navy-deep relative overflow-hidden pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="frame relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="anim-rise text-base font-semibold text-green" style={{ "--d": "0ms" } as React.CSSProperties}>
              Case study · {c.client}
            </p>
            <h1 className="anim-rise heading-xl mt-5 max-w-[18ch]" style={{ "--d": "80ms" } as React.CSSProperties}>
              {c.headline}
            </h1>
            <p className="anim-rise lead mt-6 max-w-[48ch] text-paper/85" style={{ "--d": "160ms" } as React.CSSProperties}>
              {c.subline}
            </p>
            <div className="anim-rise mt-10 flex flex-wrap gap-4" style={{ "--d": "240ms" } as React.CSSProperties}>
              {c.link && (
                <a href={c.link.href} target="_blank" rel="noopener noreferrer" className="btn-green">
                  {c.link.label}
                  <ArrowUpRight size={18} />
                </a>
              )}
              <Link to="/work" className="btn-ghost-light">
                <ArrowLeft size={18} /> All work
              </Link>
            </div>
          </div>
          <div className="anim-rise lg:col-span-5" style={{ "--d": "200ms" } as React.CSSProperties}>
            <div className={`${c.logoTile} flex aspect-[16/9] items-center justify-center p-10 md:p-14`}>
              <img src={c.logo} alt={c.logoAlt} className="h-auto max-h-28 w-auto max-w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* What was needed / How we helped */}
      <section className="field-paper section">
        <div className="frame grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What was needed</h2>
            <Prose paras={c.needed} className="mt-6 text-navy/85" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.08}>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">How we helped</h2>
            <Prose paras={c.helped} className="mt-6 text-navy/85" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* The positive change */}
      <section className="field-navy section">
        <div className="frame">
          <AnimateOnScroll>
            <h2 className="heading-xl">The positive change</h2>
          </AnimateOnScroll>
          <ul className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {c.change.map((item, i) => (
              <AnimateOnScroll key={item} delay={i * 0.05}>
                <li className="flex items-start gap-4 border-t border-paper/15 pt-6 text-xl font-medium">
                  <Check size={24} className="mt-0.5 shrink-0 text-green" aria-hidden="true" />
                  {item}
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
      </section>

      <SplitSection title="Engagement overview" tone="field-paper-2">
        <Prose paras={c.overview} className="text-navy/85" />
      </SplitSection>

      <SplitSection title="The solution" tone="field-paper">
        <Prose paras={c.solution} className="text-navy/85" />
        {c.tech && (
          <ul className="mt-8 flex flex-wrap gap-2">
            {c.tech.map((t) => (
              <li key={t} className="bg-paper-2 px-4 py-2 text-base font-medium">{t}</li>
            ))}
          </ul>
        )}
        {c.video && (
          <div className="mt-10">
            <DemoVideo {...c.video} className="aspect-[16/10]" />
          </div>
        )}
      </SplitSection>

      <SplitSection title="Benefits of the change" tone="field-paper-2">
        <Prose paras={c.benefits} className="text-navy/85" />
      </SplitSection>

      {/* Making a difference */}
      <section className="field-green section">
        <div className="frame">
          <AnimateOnScroll>
            <h2 className="heading-xl">Making a difference</h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.08} className="mt-10 md:mt-14">
            {c.difference.quote ? (
              <figure className="max-w-[60ch]">
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">“{c.difference.quote}”</blockquote>
                <figcaption className="mt-6 text-lg font-semibold">{c.difference.attribution}</figcaption>
              </figure>
            ) : (
              <p className="lead max-w-[48ch]">{c.difference.text}</p>
            )}
          </AnimateOnScroll>
        </div>
      </section>

      {/* Related work */}
      {related.length > 0 && (
        <section className="field-paper section">
          <div className="frame">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Related work</h2>
            </AnimateOnScroll>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
              {related.map((r) => (
                <AnimateOnScroll key={r.slug}>
                  <Link to={`/work/${r.slug}`} className="group flex items-center gap-6 bg-paper-2 p-6 transition-transform duration-300 hover:-translate-y-1">
                    <span className={`${r.logoTile} flex h-20 w-36 shrink-0 items-center justify-center p-3`}>
                      <img src={r.logo} alt="" className="max-h-12 w-auto max-w-full object-contain" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold text-navy/60">{r.client}</span>
                      <span className="mt-1 block text-xl font-semibold tracking-tight">{r.headline}</span>
                    </span>
                    <ArrowRight size={20} className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
};

export default CaseStudyPage;
