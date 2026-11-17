import { CONTACT } from "@/lib/contact";
import { Link } from "react-router-dom";
import { Mail, Phone, ShieldCheck } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
];

const Footer = () => (
  <footer className="field-navy-deep pt-16 md:pt-20 overflow-hidden">
    <div className="frame">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        <nav className="md:col-span-5 flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
          {links.map((l) => (
            <Link key={l.href} to={l.href} className="text-lg font-medium hover:underline underline-offset-4">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="md:col-span-3 flex flex-col gap-3 text-base">
          <a href="mailto:info@sibrixgroup.co.za" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
            <Mail size={16} className="shrink-0" /> info@sibrixgroup.co.za
          </a>
          <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 hover:underline underline-offset-4">
            <Phone size={16} className="shrink-0" /> {CONTACT.phoneDisplay}
          </a>
        </div>
        <p className="md:col-span-4 text-base text-paper/70 leading-relaxed">
          <span className="block text-paper font-semibold mb-2">Cape Town, South Africa</span>
          Services are available as a once-off purchase or billed monthly or annually. Custom solutions
          are available on request.
        </p>
      </div>

      {/* Data protection: a compact trust line instead of a full section on Home. Keep in step with the privacy policy. */}
      <div className="mt-14 md:mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-paper/10 pt-8 text-base text-paper/75">
        <span className="inline-flex items-center gap-2 font-semibold text-paper">
          <ShieldCheck size={18} className="text-green" aria-hidden="true" /> Data protection
        </span>
        <span>POPIA-aligned</span>
        <span>Least-privilege access</span>
        <span>Human oversight of automated decisions</span>
      </div>

      <p className="mt-10 text-base text-paper/60">© {new Date().getFullYear()} Sibrix Group (Pty) Ltd. All rights reserved.{" "}
        <Link to="/privacy" className="underline underline-offset-4 hover:text-paper">Privacy policy</Link>
      </p>
    </div>

    <p
      aria-hidden="true"
      className="mt-6 text-green font-semibold leading-[0.8] tracking-[-0.06em] text-center whitespace-nowrap select-none"
      style={{ fontSize: "clamp(5rem, 30vw, 32rem)", marginBottom: "-0.04em" }}
    >
      Sibrix
    </p>
  </footer>
);

export default Footer;
