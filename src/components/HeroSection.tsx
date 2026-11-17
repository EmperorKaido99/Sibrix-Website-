import Typewriter from "./Typewriter";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import capeTown from "@/assets/cape-town-network.webp";

// Entrance animations are pure CSS (.anim-rise / .anim-settle in index.css), so they start at
// first paint instead of waiting for JavaScript. That keeps the headline (the page's Largest
// Contentful Paint) fast on slow phones. Reduced-motion visitors get no animation.
const HeroSection = () => (
  <section id="top" className="field-navy pt-28 md:pt-36 pb-[clamp(5rem,9vw,8rem)] overflow-hidden">
    <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
      <div className="lg:col-span-7">
        <p className="text-lg font-semibold text-cyan">
          <Typewriter text="Systems built right." delay={250} speed={60} repeatEvery={20000} />
        </p>
        <h1
          className="anim-rise mt-5 font-semibold text-[clamp(2.75rem,4.7vw,5.5rem)] leading-[1] tracking-[-0.035em]"
          style={{ "--d": "60ms" } as React.CSSProperties}
        >
          Technology.
          <br />
          <span className="text-green">Designed for Progress.</span>
        </h1>
        <p className="anim-rise lead mt-8 max-w-[34ch] text-paper/90" style={{ "--d": "120ms" } as React.CSSProperties}>
          We design, develop and integrate technology solutions that turn real-world challenges into
          opportunities.
        </p>
        <div className="anim-rise mt-10 flex flex-wrap items-center gap-4" style={{ "--d": "180ms" } as React.CSSProperties}>
          <Link to="/contact" className="btn-green">
            Discuss a project
            <ArrowRight size={18} />
          </Link>
          <Link to="/services" className="btn-ghost-light">
            Our services
          </Link>
        </div>
      </div>

      <figure className="anim-rise lg:col-span-5" style={{ "--d": "240ms" } as React.CSSProperties}>
        <div className="overflow-hidden aspect-[4/3] bg-navy-deep">
          <img
            src={capeTown}
            alt="Cape Town and Table Mountain at dusk, with connected network lines over the city"
            className="anim-settle w-full h-full object-cover"
            width={800}
            height={450}
            {...{ fetchpriority: "high" }}
          />
        </div>
        <figcaption className="mt-3 text-base text-paper/70">Cape Town, South Africa</figcaption>
      </figure>
    </div>
  </section>
);

export default HeroSection;
