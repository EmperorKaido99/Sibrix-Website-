import type { ReactNode } from "react";
import CTASection from "@/components/CTASection";
import { CONTACT } from "@/lib/contact";
import { COMPANY } from "@/lib/company";

/*
 * Privacy policy, written for the Protection of Personal Information Act 4 of 2013 (POPIA).
 * Plain-language policy describing how Sibrix actually works today. Have it reviewed by an attorney before relying on it,
 * and keep it in step with reality (e.g. if analytics, a contact form or new service providers are added).
 */

const EFFECTIVE = "17 November 2026";

const mail = (
  <a href={`mailto:${CONTACT.email}`} className="font-semibold underline underline-offset-4">
    {CONTACT.email}
  </a>
);
const phone = (
  <a href={CONTACT.phoneHref} className="font-semibold underline underline-offset-4">
    {CONTACT.phoneDisplay}
  </a>
);

const sections: { id: string; title: string; body: ReactNode[] }[] = [
  {
    id: "who-we-are",
    title: "1. Who we are",
    body: [
      <>
        This policy explains how {COMPANY.tradingName} (“Sibrix”, “we”, “us”), registered as {COMPANY.legalName}, registration
        number {COMPANY.registrationNumber}, collects, uses and protects personal information.
      </>,
      "We are the responsible party, as defined in POPIA, for personal information we collect through this website and when people contact us or become our clients.",
    ],
  },
  {
    id: "information-officer",
    title: "2. Our Information Officer",
    body: [
      <>
        Our Information Officer is <strong>{COMPANY.informationOfficer}</strong>, who is responsible for our compliance with POPIA and for
        dealing with any request or complaint about personal information.
      </>,
      <>
        Contact: {mail} or {phone}.
      </>,
    ],
  },
  {
    id: "scope",
    title: "3. What this policy covers",
    body: [
      "This policy applies to visitors of this website, people who contact us to book a consultation or ask a question, and the contact people at our clients and suppliers.",
      "When we build automations or support IT systems for a client, we may process personal information on that client's behalf. In that case the client remains the responsible party, and we act as their operator under POPIA (see section 8).",
    ],
  },
  {
    id: "what-we-collect",
    title: "4. Personal information we collect",
    body: [
      "Contact details you give us when you get in touch by WhatsApp, email or phone: your name, phone number, email address, business name and the content of your message.",
      "Business information about clients and prospective clients, such as company details, the names and roles of contact people, and information needed to prepare proposals, deliver projects and send invoices.",
      "Basic technical information when you visit the website, such as your IP address, browser type and the pages requested. Our hosting provider records this in server logs to keep the site running and secure.",
      "We do not ask for special personal information (such as health, religious or biometric information), and we do not knowingly collect information about children.",
    ],
  },
  {
    id: "why",
    title: "5. Why we use it",
    body: [
      "To respond to your enquiry and arrange your consultation.",
      "To prepare proposals, deliver and support the work you ask us to do, and manage our client relationship, including invoicing.",
      "To keep the website and our systems secure and working properly.",
      "To meet our legal, tax and accounting obligations.",
      "We process personal information where you have consented, where it is necessary to take steps towards or perform a contract with you, where the law requires it, or where it is in our or your legitimate interests and does not override your rights.",
    ],
  },
  {
    id: "marketing",
    title: "6. Marketing",
    body: [
      "We do not sell personal information. We will only send you marketing messages if you have asked us to or have agreed to receive them, and you can opt out at any time by telling us.",
    ],
  },
  {
    id: "sharing",
    title: "7. Who we share it with",
    body: [
      "We share personal information only when needed, with service providers who help us run the business, for example our website host (Vercel), our email provider, WhatsApp (Meta) when you message us there, and professional advisers such as accountants, where needed.",
      "We may also disclose information where the law requires it, or to protect our rights.",
      "Our service providers may only use the information to provide their service to us, and must keep it secure and confidential.",
    ],
  },
  {
    id: "operator",
    title: "8. Data we process for clients",
    body: [
      "When a project requires access to a client's systems or data, we process that information only on the client's instructions and for the purpose of the project.",
      "We access only the data the work requires, restrict access to the people delivering it, keep it confidential and secure, and return or delete it when the work ends, unless the law requires otherwise.",
      "Automations we build that make decisions about people are designed so that a person can review and approve the outcome.",
    ],
  },
  {
    id: "cross-border",
    title: "9. Information stored outside South Africa",
    body: [
      "Some of our service providers, such as our website host and WhatsApp, store or process information outside South Africa. We only use providers that are subject to laws, binding rules or agreements that give a level of protection comparable to POPIA.",
    ],
  },
  {
    id: "security",
    title: "10. How we protect it",
    body: [
      "We take reasonable technical and organisational measures to protect personal information against loss, damage and unauthorised access, including access controls, secure passwords, encryption in transit and keeping systems up to date.",
      "If we have reason to believe personal information has been accessed or acquired without authorisation, we will notify the Information Regulator and the people affected, as POPIA requires.",
    ],
  },
  {
    id: "retention",
    title: "11. How long we keep it",
    body: [
      "We keep personal information only as long as we need it for the purpose it was collected for, or as long as the law requires (for example, accounting records). Enquiries that do not lead to work are deleted once they are no longer needed.",
    ],
  },
  {
    id: "website",
    title: "12. Cookies and browser storage",
    body: [
      "This website does not use advertising or tracking cookies, and we do not run analytics that identify you.",
      "If you choose a colour theme, that choice is saved in your own browser so the site remembers it. It is not sent to us.",
    ],
  },
  {
    id: "rights",
    title: "13. Your rights",
    body: [
      "You have the right to ask whether we hold personal information about you and to request a copy of it; to ask us to correct or delete information that is inaccurate, out of date or no longer needed; to object to how we use it; and to withdraw your consent at any time.",
      <>
        To make a request, contact our Information Officer at {mail}. We may need to confirm your identity first, and we will respond within a
        reasonable time.
      </>,
      "Requests for access to records may also be made under the Promotion of Access to Information Act (PAIA), through our Information Officer.",
    ],
  },
  {
    id: "complaints",
    title: "14. Complaints",
    body: [
      <>
        If you are unhappy with how we handle your personal information, please tell us first so we can put it right. You also have the right to
        lodge a complaint with the Information Regulator (South Africa):{" "}
        <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
          inforegulator.org.za
        </a>
        .
      </>,
    ],
  },
  {
    id: "changes",
    title: "15. Changes to this policy",
    body: [
      "We may update this policy from time to time. The latest version is always on this page, with the date it took effect.",
    ],
  },
];

const PrivacyPage = () => (
  <>
    <section className="field-paper section">
      <div className="frame max-w-[920px]">
        <h1 className="heading-xl pt-8 md:pt-12">Privacy policy</h1>
        <p className="lead mt-6 text-navy/80">
          How {COMPANY.tradingName} collects, uses and protects personal information, in line with the Protection of Personal Information Act
          (POPIA).
        </p>
        <p className="mt-4 text-base text-navy/70">Effective: {EFFECTIVE}</p>

        {/* Company and Information Officer summary */}
        <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 bg-paper-2 p-6 md:p-8 text-base">
          <div>
            <dt className="text-navy/60">Responsible party</dt>
            <dd className="mt-1 font-semibold">{COMPANY.tradingName}</dd>
            <dd className="text-navy/80">Registered as {COMPANY.legalName}</dd>
            <dd className="text-navy/80">Registration number {COMPANY.registrationNumber}</dd>
          </div>
          <div>
            <dt className="text-navy/60">Registered office</dt>
            {COMPANY.registeredOffice.map((line) => (
              <dd key={line} className="mt-1 first-of-type:mt-1">{line}</dd>
            ))}
          </div>
          <div>
            <dt className="text-navy/60">Information Officer</dt>
            <dd className="mt-1 font-semibold">{COMPANY.informationOfficer}</dd>
          </div>
          <div>
            <dt className="text-navy/60">Privacy enquiries</dt>
            <dd className="mt-1">{mail}</dd>
            <dd>{phone}</dd>
          </div>
        </dl>

        {/* Contents */}
        <nav aria-label="Contents" className="mt-10">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-base">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="underline underline-offset-4 decoration-navy/30 hover:decoration-navy">
                  {s.title.replace(/^\d+\.\s*/, "")}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-14 md:mt-16 space-y-12">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{s.title}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-4 text-lg leading-relaxed max-w-[68ch]">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTASection />
  </>
);

export default PrivacyPage;
