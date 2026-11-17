import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const tiles = [
  { to: "/about", title: "About Sibrix Group", detail: "Who we are, our vision and mission, and how we work.", field: "field-paper-2" },
  { to: "/work", title: "Our work", detail: "CrimeSpots is live today. Three more products are on the way.", field: "field-navy" },
  { to: "/services", title: "Services", detail: "Websites, AI, automation, IoT, IT infrastructure and training.", field: "field-navy" },
  { to: "/packages", title: "Packages", detail: "Starter, Business and Enterprise, plus a monthly retainer.", field: "field-paper-2" },
];

// Home page signposts to the other pages, in the site's existing visual language.
const HomeOverview = () => (
  <section className="field-paper section">
    <div className="frame">
      <AnimateOnScroll>
        <h2 className="heading-xl max-w-[14ch]">One team for the whole system</h2>
      </AnimateOnScroll>
      <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        {tiles.map((t, i) => (
          <AnimateOnScroll key={t.to} delay={i * 0.06} className="h-full">
            <Link
              to={t.to}
              className={`${t.field} group flex h-full min-h-[240px] flex-col justify-between p-8 md:p-12 transition-transform duration-300 ease-out hover:-translate-y-1`}
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-4 text-lg leading-relaxed max-w-[40ch] opacity-90">{t.detail}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold underline-offset-4 group-hover:underline">
                Open
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default HomeOverview;
