import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import sibrixLogo from "@/assets/sibrix-group-logo.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
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
    <header className="fixed top-0 inset-x-0 z-50 bg-navy text-paper">
      <nav className="frame flex items-center justify-between h-16 md:h-20" aria-label="Main">
        <a href="#top" className="flex items-center" aria-label="Sibrix Group home">
          <img src={sibrixLogo} alt="Sibrix Group (Pty) Ltd" className="h-9 md:h-11 w-auto" width={755} height={169} />
        </a>

        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium text-paper/85 hover:text-paper hover:underline underline-offset-4"
            >
              {l.label}
            </a>
          ))}
          <a href="#cta" className="btn-green py-3">
            Discuss a project
          </a>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-paper"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden field-navy border-t border-paper/10">
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
            <a href="#cta" onClick={() => setMobileOpen(false)} className="btn-green mt-6">
              Discuss a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
