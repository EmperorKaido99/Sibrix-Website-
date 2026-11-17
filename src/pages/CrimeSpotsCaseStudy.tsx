import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import DemoVideo from "@/components/DemoVideo";
import CTASection from "@/components/CTASection";
import { CRIMESPOTS_VIDEO } from "@/lib/media";

// Case study. Facts only from the product itself (crimespots.vercel.app) and the Work page.
// No usage numbers or outcomes until Sibrix provides real ones.
const built = [
  { title: "Live incident map", detail: "Verified incidents plotted across Cape Town, colour-coded by severity." },
  { title: "AI extraction", detail: "News reports are read by AI and turned into structured incidents with a confidence score." },
  { title: "Area rankings", detail: "Neighbourhoods ranked by recent incidents, updated hourly." },
  { title: "Ask Intel", detail: "Ask questions in plain English, like “Is Sea Point safe right now?”." },
  { title: "Alerts and reports", detail: "Residents can sign up for neighbourhood alerts and report incidents themselves." },
  { title: "Installable app", detail: "Works in the browser and installs on phones as a progressive web app." },
];

const steps = [
  { title: "Collect", detail: "Public news feeds are monitored continuously. Police advisories and community groups are on the roadmap." },
  { title: "Understand", detail: "AI reads each report, extracts what happened, where and how serious it is, and scores its confidence." },
  { title: "Show", detail: "Incidents land on the live map, the feed and the area rankings, ready to filter by time and crime type." },
];

const CrimeSpotsCaseStudy = () => (
  <>
    <PageIntro title="*CrimeSpots* Case study" lead="Real-time, AI-powered crime intelligence for Cape Town, designed, built and run by Sibrix.">
      <div className="mt-10 flex flex-wrap gap-4">
        <a href="https://crimespots.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-green">
          Visit CrimeSpots
          <ArrowUpRight size={18} />
        </a>
        <Link to="/work" className="btn-ghost-light">
          <ArrowLeft size={18} /> All work
        </Link>
      </div>
    </PageIntro>

    <section className="field-navy pb-[clamp(5rem,11vw,10rem)]">
      <div className="frame">
        <AnimateOnScroll>
          <DemoVideo {...CRIMESPOTS_VIDEO} className="aspect-[16/10]" />
        </AnimateOnScroll>
      </div>
    </section>

    <section className="field-paper section">
      <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
        <AnimateOnScroll className="lg:col-span-5">
          <h2 className="heading-xl">The problem</h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1} className="lg:col-span-7">
          <p className="lead">
            Crime news in Cape Town is spread across news sites and community groups. It is hard to see what is
            happening near you, how serious it is, and whether an area is getting better or worse.
          </p>
        </AnimateOnScroll>
      </div>
    </section>

    <section className="field-paper-2 section">
      <div className="frame">
        <AnimateOnScroll>
          <h2 className="heading-xl">What we built</h2>
        </AnimateOnScroll>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {built.map((b, i) => (
            <AnimateOnScroll key={b.title} delay={i * 0.06} className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}>
              <div className={`h-full p-8 ${i === 0 ? "field-navy" : "bg-paper"}`}>
                <h3 className="text-2xl font-semibold tracking-tight">{b.title}</h3>
                <p className={`mt-3 text-lg leading-relaxed ${i === 0 ? "text-paper/85" : "text-navy/85"}`}>{b.detail}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>

    <section className="field-navy-deep section">
      <div className="frame">
        <AnimateOnScroll>
          <h2 className="heading-xl">How it works</h2>
        </AnimateOnScroll>
        <ol className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 0.12}>
              <li className="border-t-[3px] border-green pt-8">
                <h3 className="text-3xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-paper/80 max-w-[34ch]">{s.detail}</p>
              </li>
            </AnimateOnScroll>
          ))}
        </ol>
        <AnimateOnScroll className="mt-16">
          <p className="text-paper/70 text-lg">Built with Next.js, Supabase, MapLibre and AI extraction, delivered as a PWA.</p>
        </AnimateOnScroll>
      </div>
    </section>

    <CTASection />
  </>
);

export default CrimeSpotsCaseStudy;
