import { CONTACT } from "@/lib/contact";
import AnimateOnScroll from "./AnimateOnScroll";
import ContactForm from "./ContactForm";

const nextSteps = [
  "We reply within one business day to book a time.",
  "In 30 minutes we look at how you work and where you lose time or money.",
  "You get a written proposal showing what we would build and what it saves you.",
];

// On the Contact page this is the page's main heading (h1); elsewhere it is a section (h2).
const CTASection = ({ asPage = false }: { asPage?: boolean }) => {
  const Heading = asPage ? "h1" : "h2";
  return (
  <section id="cta" className={`field-navy section ${asPage ? "pt-32 md:pt-44" : ""}`}>
    <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
      <AnimateOnScroll className="lg:col-span-5">
        <Heading className="heading-xl">Book a free consultation</Heading>
        <p className="lead mt-6 max-w-[30ch] text-paper/85">
          A free, no-obligation 30-minute conversation about where your business loses time or money.
        </p>
        <dl className="mt-12 space-y-6">
          <div>
            <dt className="text-base text-paper/70">Email</dt>
            <dd>
              <a
                href="mailto:info@sibrixgroup.co.za"
                className="text-xl md:text-2xl font-semibold hover:underline underline-offset-4"
              >
                info@sibrixgroup.co.za
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-base text-paper/70">Phone</dt>
            <dd>
              <a href={CONTACT.phoneHref} className="text-xl md:text-2xl font-semibold hover:underline underline-offset-4">
                {CONTACT.phoneDisplay}
              </a>
            </dd>
          </div>
        </dl>
        <div className="mt-12 border-t border-paper/15 pt-8">
          <p className="text-base text-paper/70">What happens next</p>
          <ol className="mt-4 space-y-3">
            {nextSteps.map((s, i) => (
              <li key={s} className="flex gap-4 text-lg">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center bg-green text-sm font-semibold text-navy">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.1} className="lg:col-span-6 lg:col-start-7">
        <div className="bg-paper text-navy p-6 sm:p-10">
          <ContactForm />
        </div>
      </AnimateOnScroll>
    </div>
  </section>
  );
};

export default CTASection;
