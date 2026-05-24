import { Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 sm:py-12 bg-card">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        <div>
          <a href="#" className="font-heading text-xl font-bold gold-text">
            Sibrix
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {["Services", "Compare", "Retainer", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {[
            { Icon: Linkedin, label: "LinkedIn" },
            { Icon: Twitter, label: "Twitter" },
            { Icon: Instagram, label: "Instagram" }
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-muted-foreground font-body text-xs">
          <a href="mailto:sibusisogoodwill871@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail size={14} /> sibusisogoodwill871@gmail.com</a>
          <a href="tel:0664040070" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone size={14} /> 066 404 0070</a>
        </div>
        <p className="font-body text-xs text-muted-foreground text-center">
          Services are available as a once-off purchase or billed monthly or annually. Custom solutions are also available upon request.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
