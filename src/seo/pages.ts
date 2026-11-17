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
    title: "Sibrix Group | Business automation & IT support",
    description:
      "Business automation and IT support for South African organisations. We automate processes and support the technology behind them. Book a complimentary consultation.",
  },
  {
    path: "/about",
    title: "About Sibrix Group | South African technology company",
    description:
      "Who we are, our vision and mission, and how Sibrix Group helps South African businesses with business automation and IT support.",
  },
  {
    path: "/work",
    title: "Our work: automation case studies | Sibrix Group",
    description:
      "Work by Sibrix: Easy Scribe, a platform built for Easy Chats Projects, and CrimeSpots, AI crime intelligence for Cape Town.",
  },
  {
    path: "/work/crimespots",
    title: "CrimeSpots case study: AI crime map | Sibrix Group",
    description:
      "How Sibrix designed and built CrimeSpots: AI that turns news reports into verified incidents on a live map of Cape Town, with area rankings and alerts.",
  },
  {
    path: "/services",
    title: "Services: business automation & IT support | Sibrix Group",
    description:
      "Business automation with AI, IoT and integrations, and IT support: networks, devices, security, CCTV and help when things break. Plus websites, apps and training.",
  },
  {
    path: "/packages",
    title: "Packages: automation, IT support & websites | Sibrix Group",
    description:
      "Automation Starter, Growth and Care, IT setup and monthly IT support plans, plus Launch, Grow and Online Store websites and website care.",
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
