// One entry per page: used by the browser (document title/description) and by
// scripts/prerender.mjs (static HTML per route). Keep paths in sync with AppRoutes in App.tsx.
export const SITE_URL = "https://www.sibrixgroup.co.za";

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
    title: "Our work: CrimeSpots and more | Sibrix Group",
    description:
      "Products Sibrix Group designs, builds and runs, including CrimeSpots, real-time AI crime intelligence for Cape Town.",
  },
  {
    path: "/work/crimespots",
    title: "CrimeSpots case study: AI crime map | Sibrix Group",
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
    title: "Packages: websites, IT & security, care plans | Sibrix Group",
    description:
      "Launch, Grow and Online Store websites, AI and automation add-ons, CCTV and IT support, monthly care plans and custom systems.",
  },
  {
    path: "/contact",
    title: "Contact Sibrix Group | Discuss a project",
    description:
      "Tell us what you need. Email info@sibrixgroup.co.za or call (+27) 60 960 9830. We reply within one business day with next steps and a quote.",
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
