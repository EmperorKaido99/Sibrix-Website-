import easyScribeLogo from "@/assets/client-easy-scribe.webp";

/*
 * REAL client testimonials only. Never invent quotes, names or figures.
 *
 * Easy Chats Projects (Pty) Ltd, about Easy Scribe (developed by Sibrix). Supplied by Sibrix on 2026-11-17 with permission
 * to publish. Shown EXACTLY as supplied, including punctuation (the site's no-em-dash rule does not apply to client quotes).
 */
export interface Testimonial {
  quote: string;
  attribution: string;
  logo: string;
  logoAlt: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sibrix Group (Pty) Ltd helped conceptualise Easy Scribe around the challenges we faced at Easy Chats—from time-consuming transcript editing to coordinating our team and producing consistent, client-ready documents. The platform has streamlined our workflow, improved visibility of job progress and reduced repetitive administration. This has helped us work more productively, manage costs better and strengthen our capacity to deliver profitable projects.",
    attribution: "— Easy Chats Projects (Pty) Ltd",
    logo: easyScribeLogo,
    logoAlt: "Easy Scribe by Easy Chats",
  },
];
