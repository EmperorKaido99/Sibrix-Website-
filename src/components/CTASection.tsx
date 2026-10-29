import AnimateOnScroll from "./AnimateOnScroll";
import ContactForm from "./ContactForm";

const CTASection = () => (
  <section id="cta" className="field-navy section">
    <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
      <AnimateOnScroll className="lg:col-span-5">
        <h2 className="heading-xl">Start a project</h2>
        <p className="lead mt-6 max-w-[30ch] text-paper/85">
          Tell us what you need. We reply within one business day with next steps and a quote.
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
              <a href="tel:+27664040070" className="text-xl md:text-2xl font-semibold hover:underline underline-offset-4">
                066 404 0070
              </a>
            </dd>
          </div>
        </dl>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.1} className="lg:col-span-6 lg:col-start-7">
        <div className="bg-paper text-navy p-6 sm:p-10">
          <ContactForm />
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default CTASection;
