import { Link } from "react-router-dom";
import AnimateOnScroll from "./AnimateOnScroll";
import { TESTIMONIALS } from "@/data/testimonials";
import crimeSpotsLogo from "@/assets/product-crimespots-logo.webp";

// Home, directly under the hero: "Built by Sibrix" with the logos of real work scrolling slowly
// (one marquee per page). Each logo sits on a tile that suits it (Easy Scribe is designed for light
// backgrounds, CrimeSpots for dark). Pauses on hover; static for reduced motion (see .logo-marquee in index.css).
const LOGOS = [
  { name: "Easy Scribe by Easy Chats", src: TESTIMONIALS[0].logo, width: 1140, height: 244, to: "/work#client-work", tile: "bg-paper ring-1 ring-navy/10" },
  { name: "CrimeSpots", src: crimeSpotsLogo, width: 0, height: 0, to: "/work/crimespots", tile: "bg-[#0d0e12]" },
];

const Tile = ({ logo, hidden }: { logo: (typeof LOGOS)[number]; hidden?: boolean }) => (
  <Link
    to={logo.to}
    tabIndex={hidden ? -1 : undefined}
    aria-hidden={hidden || undefined}
    aria-label={hidden ? undefined : `${logo.name}: view the work`}
    className={`logo-tile flex h-24 w-[300px] shrink-0 items-center justify-center px-8 ${logo.tile}`}
  >
    <img src={logo.src} alt="" loading="lazy" decoding="async" className="max-h-14 w-auto max-w-full object-contain" />
  </Link>
);

const ClientStrip = () => {
  // Enough copies to fill wide screens; the track is duplicated once for a seamless loop.
  const run = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];
  return (
    <section className="field-paper-2 border-b border-navy/10" aria-label="Built by Sibrix">
      <div className="frame py-10 md:py-12 grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-6 md:gap-10">
        <AnimateOnScroll>
          <p className="text-lg font-semibold whitespace-nowrap">Built by Sibrix</p>
        </AnimateOnScroll>
        <div className="logo-marquee overflow-hidden">
          <div className="logo-marquee__track flex w-max gap-4">
            {run.map((l, i) => (
              <Tile key={`a${i}`} logo={l} hidden={i >= LOGOS.length} />
            ))}
            {run.map((l, i) => (
              <Tile key={`b${i}`} logo={l} hidden />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientStrip;
