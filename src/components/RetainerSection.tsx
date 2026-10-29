import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const perks = [
  { title: "4 hours a month", detail: "Dedicated development and support time, every month." },
  { title: "Use it your way", detail: "Design, fixes, updates or new automations, whatever matters most that month." },
  { title: "Priority response", detail: "Retainer clients go to the front of the queue." },
  { title: "Room to grow", detail: "Need more? Additional hours are billed at our standard rate." },
];

const RetainerSection = () => (
  <section id="retainer" className="field-paper section">
    <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
      <AnimateOnScroll className="lg:col-span-5">
        <h2 className="heading-xl">Monthly retainer</h2>
        <p className="lead mt-6 max-w-[30ch]">
          Keep your website and systems improving after launch, with a team that already knows them.
        </p>
        <a href="#cta" className="btn-navy mt-10">
          Ask about a retainer
          <ArrowRight size={18} />
        </a>
      </AnimateOnScroll>

      <dl className="lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 lg:pt-3">
        {perks.map((p, i) => (
          <AnimateOnScroll key={p.title} delay={i * 0.07}>
            <dt className="text-2xl md:text-3xl font-semibold tracking-tight">{p.title}</dt>
            <dd className="mt-3 text-lg leading-relaxed">{p.detail}</dd>
          </AnimateOnScroll>
        ))}
      </dl>
    </div>
  </section>
);

export default RetainerSection;
