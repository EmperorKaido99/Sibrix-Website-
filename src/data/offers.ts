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
 *   1. Workflow automation (built with AI and IoT where it helps)
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
    title: "Workflow automation",
    promise: "Stop doing the same admin by hand.",
    detail:
      "We find the repetitive work in your business and build systems that do it for you, using AI and IoT where it helps, connected to the tools you already use.",
    icon: Workflow,
    examples: [
      { icon: FileCheck2, text: "Quotes become invoices, and overdue invoices get reminders, automatically" },
      { icon: MessagesSquare, text: "Website and WhatsApp enquiries land in one place and alert the right person" },
      { icon: Bot, text: "AI that reads, checks and sorts documents, forms and reports" },
      { icon: Cpu, text: "IoT sensors that watch generators, fridges, tanks or equipment and alert you" },
      { icon: Cable, text: "Your store, accounting and spreadsheets sharing data, so nobody re-types it" },
    ],
  },
  {
    id: "it-support",
    title: "IT support",
    promise: "Keep your business running.",
    detail:
      "We set up, secure and look after the technology your team relies on every day, and fix it fast when something goes wrong.",
    icon: Headset,
    examples: [
      { icon: Network, text: "Office Wi-Fi and networks planned, installed and secured" },
      { icon: HardDrive, text: "Laptops, printers, email accounts and cloud storage set up properly" },
      { icon: ShieldCheck, text: "Updates, backups, antivirus and access control" },
      { icon: Cctv, text: "CCTV installed and configured for offices and premises" },
      { icon: LifeBuoy, text: "Help when something breaks, remotely or on site" },
    ],
  },
];

export const EXTRAS: { id: string; title: string; detail: string; icon: LucideIcon; to: string }[] = [
  { id: "websites", title: "Website creation", detail: "Fast, search-friendly websites and online stores.", icon: Globe, to: "/packages#websites" },
  { id: "apps", title: "App development", detail: "Mobile and web apps connected to your business systems.", icon: AppWindow, to: "/contact?package=apps" },
  { id: "training", title: "Training & skills", detail: "Hands-on training so your team can run what we build.", icon: GraduationCap, to: "/contact?package=training" },
];

/** The client journey, from the five "What we do" pillars, starting with a free consultation. */
export const JOURNEY = [
  { title: "Free consultation", detail: "30 minutes, no obligation. We learn how you work and where you lose time or money." },
  { title: "Proposal", detail: "A written proposal: what we will build, what it will do, and what it saves you." },
  { title: "Build together", detail: "We build in stages and check in with you, so it fits how your team really works." },
  { title: "Automate & connect", detail: "AI, IoT and integrations wired into your existing tools." },
  { title: "IT support", detail: "We keep the systems behind it running, secure and backed up." },
  { title: "Training & aftercare", detail: "Your team learns to use it, and we stay on hand when you need us." },
];
