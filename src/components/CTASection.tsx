import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { PACKAGE_LABELS } from "@/data/packages";
import AnimateOnScroll from "./AnimateOnScroll";

const nextSteps = [
  "We respond within one business day to schedule your session.",
  "We assess your current processes and systems.",
  "You receive a written proposal with scope, timeline and expected return.",
];

const BASE_MESSAGE = "Hi Sibrix, I'd like to book a free 30-minute consultation.";

// Booking panel (replaces the old contact form, per reviewer feedback: a service business should invite
// people to a free consultation, not a "send us a message for a quote" form). Visitors book by WhatsApp,
// phone or email with the message pre-written. Appears at the end of every page (there is no Contact page).
const CTASection = () => {
  const { search } = useLocation();
  const [message, setMessage] = useState(BASE_MESSAGE);

  // Clicked "Book a free consultation" on a package (?package=automation-growth#cta): mention it in the message.
  // Runs after hydration and on every navigation, so the pre-rendered links are unchanged.
  useEffect(() => {
    const pkg = new URLSearchParams(search).get("package");
    const name = pkg && PACKAGE_LABELS[pkg];
    setMessage(name ? `${BASE_MESSAGE} I'm interested in: ${name}.` : BASE_MESSAGE);
  }, [search]);

  const options = [
    {
      icon: MessageCircle,
      title: "WhatsApp us",
      detail: "Message us to arrange a time.",
      href: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`,
      external: true,
      style: "bg-green text-navy hover:bg-[hsl(160_100%_48%)]",
    },
    {
      icon: Phone,
      title: `Call ${CONTACT.phoneDisplay}`,
      detail: "Speak to us directly.",
      href: CONTACT.phoneHref,
      external: false,
      style: "bg-navy text-paper hover:bg-navy-deep",
    },
    {
      icon: Mail,
      title: "Email us",
      detail: CONTACT.email,
      href: `mailto:${CONTACT.email}?subject=${encodeURIComponent("Free consultation")}&body=${encodeURIComponent(
        `${message}\n\nA little about my business and what's slowing us down:\n\n`,
      )}`,
      external: false,
      style: "bg-paper-2 text-navy hover:bg-navy/10",
    },
  ];

  return (
    <section id="cta" className="field-navy section scroll-mt-16 md:scroll-mt-20">
      <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <AnimateOnScroll className="lg:col-span-5">
          <h2 className="heading-xl">Book a free consultation</h2>
          <p className="lead mt-6 max-w-[30ch] text-paper/85">
            A complimentary, no-obligation 30-minute session to assess your operations and identify where time and cost can be saved.
          </p>
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
            <p className="text-2xl font-semibold tracking-tight">Schedule your consultation</p>
            <ul className="mt-6 space-y-3">
              {options.map((o) => (
                <li key={o.title}>
                  <a
                    href={o.href}
                    {...(o.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`group flex items-center gap-5 p-5 sm:p-6 transition-colors duration-200 ${o.style}`}
                  >
                    <o.icon size={26} strokeWidth={1.75} className="shrink-0" aria-hidden="true" />
                    <span className="flex-1 min-w-0">
                      <span className="block text-xl font-semibold tracking-tight">{o.title}</span>
                      <span className="block text-base opacity-85 break-words">{o.detail}</span>
                    </span>
                    <ArrowUpRight size={20} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-navy/70">
              Your information is handled in line with POPIA.{" "}
              <Link to="/privacy" className="underline underline-offset-4 hover:text-navy">Privacy policy</Link>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CTASection;
