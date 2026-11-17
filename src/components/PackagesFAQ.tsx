import { Plus } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { CONTACT } from "@/lib/contact";

// Every answer restates something the site already says (packages, retainer, footer,
// contact section). Do not add answers about prices, timelines or ownership until Sibrix
// confirms them.
const faqs = [
  {
    q: "What is included in every package?",
    a: "Every package includes a mobile-responsive, search-friendly website with a contact form and social media integration, plus one month of support after launch for bug fixes, minor tweaks and guidance.",
  },
  {
    q: "Can I pay monthly?",
    a: "Yes. Our services are available as a once-off purchase or billed monthly or annually. Tell us which suits you when you get in touch.",
  },
  {
    q: "What happens after the first month of support?",
    a: "You can add a monthly retainer: four hours of development and support time every month, priority response, and extra hours at our standard rate when you need more.",
  },
  {
    q: "Can you connect the tools I already use?",
    a: "Yes. We integrate payment processors, CRMs, accounting and shipping tools so your systems work as one flow.",
  },
  {
    q: "Do you build custom solutions?",
    a: "Yes. The packages are a starting point, and custom solutions are available on request.",
  },
  {
    q: "How quickly will you reply?",
    a: `Within one business day, with next steps and a quote. You can also WhatsApp or call us on ${CONTACT.phoneDisplay}.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const PackagesFAQ = () => (
  <section className="field-paper-2 section">
    <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
      <AnimateOnScroll className="lg:col-span-4">
        <h2 className="heading-xl">Questions</h2>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1} className="lg:col-span-8">
        <div className="bg-paper">
          {faqs.map((f) => (
            <details key={f.q} className="compare-group group border-t border-border first:border-t-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 md:px-8 py-6 text-lg md:text-xl font-semibold tracking-tight">
                {f.q}
                <Plus size={22} className="shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="px-6 md:px-8 pb-7 -mt-1 text-lg leading-relaxed text-navy/85 max-w-[62ch]">{f.a}</p>
            </details>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </section>
);

export default PackagesFAQ;
