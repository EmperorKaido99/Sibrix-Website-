import easyScribeLogo from "@/assets/client-easy-scribe.webp";

/*
 * REAL client testimonials only. Never invent quotes, names or figures.
 *
 * Easy Chats Projects (Pty) Ltd, about Easy Scribe (developed by Sibrix). Supplied by Sibrix on 2026-11-17 with permission
 * to publish. Wording is verbatim; the only change is the dash after "Easy Chats" rendered as a comma (site style: no em dashes).
 */
export interface Testimonial {
  /** Complete quote, shown where there is room (Work page). */
  full: string;
  /** Shorter excerpt (whole sentences only) for the landing page. */
  short: string;
  organisation: string;
  product: string;
  logo: string;
  logoAlt: string;
  challenges: string[];
}

export const TESTIMONIALS: Testimonial[] = [
  {
    full:
      "Sibrix Group (Pty) Ltd helped conceptualise Easy Scribe around the challenges we faced at Easy Chats, from time-consuming transcript editing to coordinating our team and producing consistent, client-ready documents. The platform has streamlined our workflow, improved visibility of job progress and reduced repetitive administration. This has helped us work more productively, manage costs better and strengthen our capacity to deliver profitable projects.",
    short:
      "The platform has streamlined our workflow, improved visibility of job progress and reduced repetitive administration. This has helped us work more productively, manage costs better and strengthen our capacity to deliver profitable projects.",
    organisation: "Easy Chats Projects (Pty) Ltd",
    product: "Easy Scribe",
    logo: easyScribeLogo,
    logoAlt: "Easy Scribe by Easy Chats",
    challenges: ["Time-consuming transcript editing", "Coordinating the team", "Consistent, client-ready documents"],
  },
];
