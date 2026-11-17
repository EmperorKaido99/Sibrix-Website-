import CTASection from "@/components/CTASection";
import { CONTACT } from "@/lib/contact";

// POPIA privacy notice for the website. Plain-language draft: have it reviewed before
// relying on it, and fill in the registered Information Officer (see RELEASE_NOTES.md).
const sections = [
  {
    title: "Who we are",
    body: [
      "Sibrix Group (Pty) Ltd (“Sibrix”, “we”) is a South African technology company based in Cape Town. We are the responsible party for the personal information collected through this website, under the Protection of Personal Information Act 4 of 2013 (POPIA).",
    ],
  },
  {
    title: "What we collect",
    body: [
      "When you contact us on WhatsApp, by email or by phone to book a consultation, we receive the details you share with us there, such as your name, number, email address and message.",
      "Our hosting provider keeps basic technical logs (such as IP address and browser type) to keep the website running and secure. We do not use advertising or tracking cookies.",
    ],
  },
  {
    title: "Why we use it",
    body: [
      "We use your details only to reply to your enquiry, prepare a proposal or quote, and deliver and support any work you ask us to do. We do not sell your information or use it for unrelated marketing without your consent.",
    ],
  },
  {
    title: "Where it is stored and who sees it",
    body: [
      "Emails reach our business mailbox, hosted by our email provider in South Africa. WhatsApp messages are handled through WhatsApp.",
      "The website is hosted by Vercel, which may process basic technical data outside South Africa. We only use providers that protect personal information to a standard comparable to POPIA.",
      "Only Sibrix staff who need your details to help you can access them.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "We keep enquiry details for as long as we need them to respond and, if you become a client, for the duration of our work together and any period the law requires. After that we delete them.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "You may ask us what personal information we hold about you, ask us to correct or delete it, or object to how we use it. Email us and we will respond within a reasonable time.",
      "If you are unhappy with how we handle your information, you may complain to the Information Regulator (South Africa) at inforeg.org.za.",
    ],
  },
];

const PrivacyPage = () => (
  <>
  <section className="field-paper section">
    <div className="frame max-w-[920px]">
      <h1 className="heading-xl pt-8 md:pt-12">Privacy policy</h1>
      <p className="lead mt-6 text-navy/80">How Sibrix Group collects and protects your personal information.</p>
      <p className="mt-4 text-base text-navy/70">Last updated: 17 November 2026</p>

      <div className="mt-14 md:mt-20 space-y-12">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{s.title}</h2>
            {s.body.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-lg leading-relaxed max-w-[68ch]">
                {p}
              </p>
            ))}
          </div>
        ))}

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contact us</h2>
          <p className="mt-4 text-lg leading-relaxed max-w-[68ch]">
            For any privacy question or request, contact our Information Officer at{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-semibold underline underline-offset-4">
              {CONTACT.email}
            </a>{" "}
            or{" "}
            <a href={CONTACT.phoneHref} className="font-semibold underline underline-offset-4">
              {CONTACT.phoneDisplay}
            </a>
            .
          </p>

        </div>
      </div>
    </div>
  </section>
  <CTASection />
  </>
);

export default PrivacyPage;
