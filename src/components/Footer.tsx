import { Mail, Phone } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Retainer", href: "#retainer" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#cta" },
];

const Footer = () => (
  <footer className="field-navy-deep pt-16 md:pt-20 overflow-hidden">
    <div className="frame">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        <nav className="md:col-span-5 flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-lg font-medium hover:underline underline-offset-4">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="md:col-span-3 flex flex-col gap-3 text-base">
          <a href="mailto:info@sibrixgroup.co.za" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
            <Mail size={16} className="shrink-0" /> info@sibrixgroup.co.za
          </a>
          <a href="tel:+27664040070" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
            <Phone size={16} className="shrink-0" /> 066 404 0070
          </a>
        </div>
        <p className="md:col-span-4 text-base text-paper/70 leading-relaxed">
          Services are available as a once-off purchase or billed monthly or annually. Custom solutions
          are available on request.
        </p>
      </div>

      <p className="mt-16 md:mt-24 text-base text-paper/60">© {new Date().getFullYear()} Sibrix Group (Pty) Ltd. All rights reserved.</p>
    </div>

    <p
      aria-hidden="true"
      className="mt-6 text-gold font-semibold leading-[0.8] tracking-[-0.06em] text-center whitespace-nowrap select-none"
      style={{ fontSize: "clamp(5rem, 30vw, 32rem)", marginBottom: "-0.04em" }}
    >
      Sibrix
    </p>
  </footer>
);

export default Footer;
