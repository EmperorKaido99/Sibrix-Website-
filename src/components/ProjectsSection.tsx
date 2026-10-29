import { ArrowUpRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import crimeSpotsImage from "@/assets/project-crimespots.png";

const featured = {
  title: "CrimeSpots",
  category: "AI web application",
  description:
    "Real-time, AI-powered crime intelligence for Cape Town. News and community reports are processed by AI into verified incidents on a live, interactive map with severity coding, area rankings and neighbourhood alerts.",
  tech: ["Next.js", "AI extraction", "Live map", "Supabase", "PWA"],
  demoUrl: "https://crimespots.vercel.app/",
};

const inDevelopment = [
  {
    title: "HikeApp",
    category: "Outdoor & adventure",
    description:
      "Discover trails, plan routes and track your hikes with offline maps, safety check-ins and a community of fellow hikers.",
  },
  {
    title: "Sibrix Fitness App",
    category: "Health & fitness",
    description:
      "A smart fitness companion with personalised training plans, progress tracking and AI-driven coaching to help you reach your goals.",
  },
  {
    title: "Sibrix Smart Farm",
    category: "AgriTech",
    description:
      "Connected farm management using sensors and AI to monitor crops, soil and livestock, automate routine tasks and boost yields.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="field-navy section">
    <div className="frame">
      <AnimateOnScroll className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
        <h2 className="heading-xl lg:col-span-7">Our work</h2>
        <p className="lead lg:col-span-5 text-paper/80 max-w-[34ch]">
          Products we design, build and run ourselves. One is live today; three more are on the way.
        </p>
      </AnimateOnScroll>

      {/* Featured: the live product */}
      <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <AnimateOnScroll className="lg:col-span-5 lg:order-1 order-2">
          <p className="text-cyan font-semibold">Live · {featured.category}</p>
          <h3 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight leading-none">{featured.title}</h3>
          <p className="mt-6 text-lg leading-relaxed text-paper/90 max-w-[46ch]">{featured.description}</p>
          <p className="mt-6 text-base text-paper/70">Built with {featured.tech.join(", ")}.</p>
          <a
            href={featured.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green mt-10"
          >
            Visit CrimeSpots
            <ArrowUpRight size={18} />
          </a>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1} className="lg:col-span-7 lg:order-2 order-1">
          <a
            href={featured.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden aspect-[4/3] bg-navy-deep"
            aria-label="Open CrimeSpots in a new tab"
          >
            <img
              src={crimeSpotsImage}
              alt="CrimeSpots area ranking and heatmap of Cape Town suburbs"
              loading="lazy"
              decoding="async"
              width={1440}
              height={900}
              className="w-full h-full object-cover object-right-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </a>
        </AnimateOnScroll>
      </div>

      {/* In development */}
      <div className="mt-24 md:mt-32">
        <AnimateOnScroll>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">In development</h3>
        </AnimateOnScroll>
        <ul className="mt-8">
          {inDevelopment.map((p, i) => (
            <AnimateOnScroll key={p.title} delay={i * 0.08}>
              <li className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-8 border-t border-paper/15">
                <p className="md:col-span-4 text-2xl md:text-3xl font-semibold tracking-tight">{p.title}</p>
                <p className="md:col-span-3 text-cyan font-medium md:pt-1.5">{p.category}</p>
                <p className="md:col-span-5 text-lg text-paper/85 leading-relaxed">{p.description}</p>
              </li>
            </AnimateOnScroll>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
