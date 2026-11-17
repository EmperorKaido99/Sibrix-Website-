import { bookingLink } from "@/lib/booking";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Cable, Cpu } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { EXTRAS, LEAD_OFFERS } from "@/data/offers";

const [automation, itSupport] = LEAD_OFFERS;

const howWeAutomate = [
  { icon: Bot, title: "AI", detail: "Processes documents, emails, forms and customer queries, and generates reports." },
  { icon: Cpu, title: "IoT", detail: "Sensors on equipment, power supply and premises that trigger alerts or actions." },
  { icon: Cable, title: "Integration", detail: "Connects your existing platforms so data is captured once and shared reliably." },
];

// Services page: the two lead offers in depth, then the three extras.
const ServicesDetail = () => (
  <>
    <section id="automation" className="field-paper section">
      <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <AnimateOnScroll className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <span className="inline-flex h-14 w-14 items-center justify-center bg-green text-navy">
              <automation.icon size={26} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h2 className="heading-xl mt-8">{automation.title}</h2>
            <p className="mt-4 text-2xl font-semibold tracking-tight">{automation.promise}</p>
            <p className="lead mt-6 max-w-[36ch]">{automation.detail}</p>
            <Link to={bookingLink("automation")} className="btn-navy mt-10">
              Book a free consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </AnimateOnScroll>
        <div className="lg:col-span-7 space-y-14">
          <div>
            <AnimateOnScroll>
              <h3 className="text-3xl font-semibold tracking-tight">Typical engagements</h3>
            </AnimateOnScroll>
            <ul className="mt-8 space-y-4">
              {automation.examples.map((e, i) => (
                <AnimateOnScroll key={e.label} delay={i * 0.05}>
                  <li className="flex gap-5 bg-paper-2 p-6">
                    <e.icon size={24} strokeWidth={1.75} className="mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-lg leading-relaxed">
                      <span className="block font-semibold">{e.label}</span>
                      <span className="block text-navy/80">{e.text}</span>
                    </span>
                  </li>
                </AnimateOnScroll>
              ))}
            </ul>
          </div>
          <div>
            <AnimateOnScroll>
              <h3 className="text-3xl font-semibold tracking-tight">Technology we apply</h3>
            </AnimateOnScroll>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {howWeAutomate.map((h, i) => (
                <AnimateOnScroll key={h.title} delay={i * 0.06} className="h-full">
                  <div className="h-full field-navy p-7">
                    <h.icon size={24} strokeWidth={1.75} className="text-green" aria-hidden="true" />
                    <h4 className="mt-5 text-2xl font-semibold tracking-tight">{h.title}</h4>
                    <p className="mt-3 text-base leading-relaxed text-paper/85">{h.detail}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="it-support" className="field-navy section">
      <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <AnimateOnScroll className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <span className="inline-flex h-14 w-14 items-center justify-center bg-green text-navy">
              <itSupport.icon size={26} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h2 className="heading-xl mt-8">{itSupport.title}</h2>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-green">{itSupport.promise}</p>
            <p className="lead mt-6 max-w-[36ch] text-paper/85">{itSupport.detail}</p>
            <Link to={bookingLink("it")} className="btn-green mt-10">
              Book a free consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </AnimateOnScroll>
        <ul className="lg:col-span-7">
          {itSupport.examples.map((e, i) => (
            <AnimateOnScroll key={e.label} delay={i * 0.06}>
              <li className="flex gap-6 py-7 border-t border-paper/15 first:border-t-0 first:pt-0">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-paper/10 text-green">
                  <e.icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-lg leading-relaxed pt-1">
                  <span className="block text-xl font-semibold">{e.label}</span>
                  <span className="block text-paper/80">{e.text}</span>
                </span>
              </li>
            </AnimateOnScroll>
          ))}
        </ul>
      </div>
    </section>

    <section className="field-paper-2 section">
      <div className="frame">
        <AnimateOnScroll>
          <h2 className="heading-xl">Also available</h2>
          <p className="lead mt-6 max-w-[44ch]">On their own, or as part of a bigger automation project.</p>
        </AnimateOnScroll>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {EXTRAS.map((x, i) => (
            <AnimateOnScroll key={x.id} delay={i * 0.06} className="h-full">
              <Link to={x.to} className="group h-full flex flex-col bg-paper p-8 transition-transform duration-300 hover:-translate-y-1">
                <x.icon size={26} strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{x.title}</h3>
                <p className="mt-3 flex-1 text-lg text-navy/85">{x.detail}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold group-hover:underline underline-offset-4">
                  Find out more <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ServicesDetail;
