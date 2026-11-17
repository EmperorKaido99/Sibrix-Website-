import easyScribeLogo from "@/assets/client-easy-scribe.webp";
import crimeSpotsLogo from "@/assets/product-crimespots-logo.webp";
import { TESTIMONIALS } from "@/data/testimonials";
import { CRIMESPOTS_VIDEO } from "@/lib/media";

/*
 * Case studies, in a consulting-style structure: what was needed → how we helped → the positive change →
 * engagement overview → the solution → benefits → making a difference → related work.
 *
 * FACTS ONLY. Every statement must come from the client, the live product or Sibrix. Never invent features,
 * technology, timelines or figures. Leave optional fields out until they are confirmed.
 *
 * EASY SCRIBE, TO CONFIRM WITH SIBRIX: what the platform does (main features), the technology used, when it went live,
 * any measurable results (time saved, turnaround, volume), and a screenshot that Easy Chats is happy to publish.
 */
export interface CaseStudy {
  slug: string;
  name: string;
  client: string;
  logo: string;
  logoAlt: string;
  /** Tile behind the logo so it reads correctly (light logos need dark tiles and vice versa). */
  logoTile: string;
  headline: string;
  subline: string;
  needed: string[];
  helped: string[];
  change: string[];
  overview: string[];
  solution: string[];
  tech?: string[];
  video?: typeof CRIMESPOTS_VIDEO;
  benefits: string[];
  difference: { quote?: string; attribution?: string; text?: string };
  link?: { href: string; label: string };
  related: string[];
}

const easyScribeQuote = TESTIMONIALS[0];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "easy-scribe",
    name: "Easy Scribe",
    client: "Easy Chats Projects (Pty) Ltd",
    logo: easyScribeLogo,
    logoAlt: "Easy Scribe by Easy Chats",
    logoTile: "bg-paper",
    headline: "Streamlining transcript production for Easy Chats",
    subline: "A platform co-created with Easy Chats around the challenges its team faced every day.",
    needed: [
      "Easy Chats needed to reduce time-consuming transcript editing, coordinate its team more effectively and produce consistent, client-ready documents.",
    ],
    helped: [
      "Sibrix worked closely with Easy Chats to identify the bottlenecks, co-create Easy Scribe around them, then design and build the platform the team now uses every day.",
    ],
    change: [
      "A streamlined workflow",
      "Improved visibility of job progress",
      "Reduced repetitive administration",
      "A more productive way of working",
      "Better cost management",
      "Stronger capacity to deliver profitable projects",
    ],
    overview: [
      "Easy Chats produces transcripts and client documents. Editing transcripts was time-consuming, and coordinating the team's work took considerable effort.",
      "At the same time, every document delivered to a client needed to be consistent and client-ready.",
    ],
    solution: [
      "Sibrix started from the challenges the Easy Chats team described (transcript editing, team coordination and document consistency) and conceptualised Easy Scribe around them.",
      "Easy Scribe gives the team one platform with clear visibility of job progress, and reduces the repetitive administration around each job.",
    ],
    benefits: [
      "Easy Scribe has changed how the Easy Chats team works day to day: work moves through a streamlined process, progress on every job is visible, and repetitive administration has been reduced.",
      "For the business, the value is tangible: working more productively, managing costs better and having the capacity to deliver more profitable projects.",
    ],
    difference: { quote: easyScribeQuote.quote, attribution: easyScribeQuote.attribution },
    related: ["crimespots"],
  },
  {
    slug: "crimespots",
    name: "CrimeSpots",
    client: "Sibrix product",
    logo: crimeSpotsLogo,
    logoAlt: "CrimeSpots",
    logoTile: "bg-[#0d0e12]",
    headline: "Turning scattered crime news into live, verified intelligence",
    subline: "Real-time, AI-powered crime intelligence for Cape Town, designed, built and run by Sibrix.",
    needed: [
      "Crime news in Cape Town is spread across news sites and community groups. Residents had no single, reliable view of what was happening near them, how serious it was, or whether an area was getting better or worse.",
    ],
    helped: [
      "Sibrix designed, built and runs CrimeSpots: an AI pipeline that reads public news reports, turns them into structured incidents and shows them on a live map with area rankings and alerts.",
    ],
    change: [
      "Verified incidents on a live map of Cape Town",
      "Severity coding and confidence scores on every incident",
      "Area rankings, updated hourly",
      "Plain-English questions through Ask Intel",
      "Neighbourhood alerts and community reporting",
      "Installable on phones as a progressive web app",
    ],
    overview: [
      "Information about crime in Cape Town reaches people in fragments: a news article here, a community group message there. None of it is in one place, and none of it shows the bigger picture of an area over time.",
      "The aim was to make that information usable: one live view of what is happening, how serious it is and where, without anyone having to collect and type it in by hand.",
    ],
    solution: [
      "Public news feeds are monitored continuously. AI reads each report, extracts what happened, where and how serious it is, and scores its confidence.",
      "Incidents land on the live map, the feed and the area rankings, ready to filter by time and crime type. Police advisories and community groups are on the roadmap as further sources.",
    ],
    tech: ["Next.js", "Supabase", "MapLibre", "AI extraction", "Progressive web app"],
    video: CRIMESPOTS_VIDEO,
    benefits: [
      "Residents get one place to see what is happening across the city, with each incident placed on the map and rated for severity.",
      "Because collection and extraction are automated, the map stays current without manual data entry. It is the same principle Sibrix applies for clients: automate the manual steps, and the impact is enduring.",
    ],
    difference: {
      text: "CrimeSpots is live today. Open it to see incidents across Cape Town on the map in real time.",
    },
    link: { href: "https://crimespots.vercel.app/", label: "Visit CrimeSpots" },
    related: ["easy-scribe"],
  },
];

export const caseBySlug = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
