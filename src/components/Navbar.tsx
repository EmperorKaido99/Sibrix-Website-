import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeMenu, ThemeSwatches } from "@/components/ThemePicker";
import { Menu, X } from "lucide-react";
import sibrixLogo from "@/assets/sibrix-group-logo.webp";

const links = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Contact", href: "/contact" },
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
        <Link to="/" className="flex items-center" aria-label="Sibrix Group home">
          <img src={sibrixLogo} alt="Sibrix Group (Pty) Ltd" className="h-9 md:h-11 w-auto" width={400} height={90} />
        </Link>

        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {links.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                `nav-link text-base font-medium hover:text-paper ${isActive ? "text-paper" : "text-paper/85"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <ThemeMenu />
          <Link to="/contact" className="btn-green py-3">
            Book a free consultation
          </Link>
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
              <NavLink
                key={l.href}
                to={l.href}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => `py-3 text-2xl font-semibold tracking-tight ${isActive ? "text-green" : ""}`}
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-green mt-6">
              Book a free consultation
            </Link>
            <ThemeSwatches />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
