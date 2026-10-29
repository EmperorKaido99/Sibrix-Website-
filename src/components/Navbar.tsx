import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import sibrixLogo from "@/assets/sibrix-logo-trim.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#cta" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile menu when the viewport grows to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper">
      <nav className="frame flex items-center justify-between h-16 md:h-20" aria-label="Main">
        <a href="#top" className="flex items-center" aria-label="Sibrix home">
          <img src={sibrixLogo} alt="Sibrix" className="h-10 md:h-12 w-auto" width={520} height={342} />
        </a>

        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium text-navy hover:underline underline-offset-4"
            >
              {l.label}
            </a>
          ))}
          <a href="#cta" className="btn-navy py-3">
            Start a project
          </a>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden field-navy">
          <div className="frame flex flex-col py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-2xl font-semibold tracking-tight"
              >
                {l.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setMobileOpen(false)} className="btn-gold mt-6">
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
