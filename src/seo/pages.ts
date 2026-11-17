// One entry per page: used by the browser (document title/description) and by
// scripts/prerender.mjs (static HTML per route). Keep paths in sync with AppRoutes in App.tsx.
export const SITE_URL = "https://sibrixgroup.co.za";

export interface PageMeta {
  path: string;
  title: string;
  description: string;
}

export const PAGES: PageMeta[] = [
  {
    path: "/",
    title: "Sibrix Group | Technology. Designed for Progress.",
    description:
      "Sibrix Group designs, develops and integrates technology solutions that turn real-world challenges into opportunities. Cape Town, South Africa.",
  },
  {
    path: "/about",
    title: "About Sibrix Group | South African technology company",
    description:
      "Who we are, our vision and mission, and how Sibrix Group brings together software, smart technology, IT infrastructure and advisory.",
  },
  {
    path: "/work",
    title: "Our work: CrimeSpots and products in development | Sibrix Group",
    description:
      "Products Sibrix Group designs, builds and runs, including CrimeSpots, real-time AI crime intelligence for Cape Town.",
  },
  {
    path: "/work/crimespots",
    title: "CrimeSpots case study: AI crime intelligence for Cape Town | Sibrix Group",
    description:
      "How Sibrix designed and built CrimeSpots: AI that turns news reports into verified incidents on a live map of Cape Town, with area rankings and alerts.",
  },
  {
    path: "/services",
    title: "Services: websites, AI, automation, IoT & IT | Sibrix Group",
    description:
      "Websites and e-commerce, mobile apps, AI chatbots, automation, IoT, cloud, networking, CCTV, training and SEO for South African businesses.",
  },
  {
    path: "/packages",
    title: "Packages: Starter, Business, Enterprise | Sibrix Group",
    description:
      "Compare the Starter, E-Commerce & Business Suite and Enterprise AI & Automation packages, plus our monthly retainer.",
  },
  {
    path: "/contact",
    title: "Contact Sibrix Group | Discuss a project",
    description:
      "Tell us what you need. Email info@sibrixgroup.co.za or call (+27) 66 404 0070. We reply within one business day with next steps and a quote.",
  },
  {
    path: "/privacy",
    title: "Privacy policy | Sibrix Group",
    description:
      "How Sibrix Group collects, uses and protects personal information under POPIA, and how to exercise your rights.",
  },
];

export const NOT_FOUND: PageMeta = {
  path: "/404",
  title: "Page not found | Sibrix Group",
  description: "This page does not exist.",
};

export const metaFor = (pathname: string): PageMeta => {
  const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return PAGES.find((p) => p.path === path) ?? NOT_FOUND;
};

export const urlFor = (meta: PageMeta) => SITE_URL + (meta.path === "/" ? "/" : meta.path);
