import {
  AppWindow,
  Bot,
  Cable,
  Cctv,
  Cpu,
  FileCheck2,
  GraduationCap,
  Globe,
  HardDrive,
  Headset,
  LifeBuoy,
  MessagesSquare,
  Network,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/*
 * Positioning (2026-11, after reviewer feedback): Sibrix LEADS with
 *   1. Business automation (AI and IoT are the "how", explained on the Services page)
 *   2. IT support
 * and offers three extras: website creation, app development, training.
 *
 * TO CONFIRM WITH SIBRIX before going live:
 *   - Proposal turnaround after the consultation (reviewer suggested committing to a number of days)
 *   - Consultation length (30 min) and that it is free / no obligation
 *   - IT support: on-site visits, remote support, response times
 *   - Automation and IT plan contents and prices (src/data/packages.ts)
 */

export interface Offer {
  id: string;
  title: string;
  promise: string;
  detail: string;
  icon: LucideIcon;
  examples: { icon: LucideIcon; text: string }[];
}

export const LEAD_OFFERS: Offer[] = [
  {
    id: "automation",
    title: "Business automation",
    promise: "Less manual work. Fewer errors.",
    detail:
      "We analyse how work moves through your business and automate the repetitive steps, integrated with the systems you already use.",
    icon: Workflow,
    examples: [
      { icon: FileCheck2, text: "Automated quoting, invoicing and payment follow-ups" },
      { icon: MessagesSquare, text: "Enquiry capture and routing from your website, email and WhatsApp" },
      { icon: Bot, text: "AI-assisted document processing, review and reporting" },
      { icon: Cpu, text: "IoT monitoring and alerts for equipment, power and premises" },
      { icon: Cable, text: "System integration across sales, accounting and operations" },
    ],
  },
  {
    id: "it-support",
    title: "IT support",
    promise: "Secure, dependable technology.",
    detail:
      "We design, secure and maintain the technology your team depends on, with responsive support when issues arise.",
    icon: Headset,
    examples: [
      { icon: Network, text: "Network design, installation and security" },
      { icon: HardDrive, text: "Device, email and cloud set-up and management" },
      { icon: ShieldCheck, text: "Patch management, backups and endpoint protection" },
      { icon: Cctv, text: "CCTV design and installation" },
      { icon: LifeBuoy, text: "Remote and on-site support" },
    ],
  },
];

export const EXTRAS: { id: string; title: string; detail: string; icon: LucideIcon; to: string }[] = [
  { id: "websites", title: "Website creation", detail: "Professional, search-optimised websites and e-commerce.", icon: Globe, to: "/packages#websites" },
  { id: "apps", title: "App development", detail: "Custom mobile and web applications, integrated with your systems.", icon: AppWindow, to: "/contact?package=apps" },
  { id: "training", title: "Training & skills", detail: "Practical training that equips your team to use new systems with confidence.", icon: GraduationCap, to: "/contact?package=training" },
];

/** The client journey, from the five "What we do" pillars, starting with a free consultation. */
export const JOURNEY = [
  { title: "Consultation", detail: "A complimentary 30-minute session to understand your operations and identify where time and cost are lost." },
  { title: "Proposal", detail: "A written proposal setting out the solution, its scope and the expected return." },
  { title: "Delivery", detail: "Delivered in stages with regular reviews, so the solution fits how your team works." },
  { title: "Integration", detail: "Automation, AI and IoT integrated with your existing systems." },
  { title: "IT support", detail: "Ongoing infrastructure support to keep systems secure, backed up and available." },
  { title: "Training and aftercare", detail: "Team training at go-live, with continued support as your needs evolve." },
];
