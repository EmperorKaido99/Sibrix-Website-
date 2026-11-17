import type { To } from "react-router-dom";
import { bookingLink } from "@/lib/booking";
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
  /** Capability areas: a short label plus what it covers. */
  examples: { icon: LucideIcon; label: string; text: string }[];
}

export const LEAD_OFFERS: Offer[] = [
  {
    id: "automation",
    title: "Business automation",
    promise: "Efficient processes that scale with your business.",
    detail:
      "We design and implement automated processes that reduce manual effort, improve accuracy and give you clear visibility of your operations, integrated with the systems you already use.",
    icon: Workflow,
    examples: [
      { icon: FileCheck2, label: "Finance and administration", text: "Quotations, invoicing and payment reminders" },
      { icon: MessagesSquare, label: "Customer enquiries", text: "Capture, routing and follow-up across web, email and WhatsApp" },
      { icon: Bot, label: "Document workflows", text: "AI-assisted processing, review and reporting" },
      { icon: Cpu, label: "Operational monitoring", text: "IoT sensors with real-time alerts for equipment, power and premises" },
      { icon: Cable, label: "Systems integration", text: "Connected sales, accounting and operational data" },
    ],
  },
  {
    id: "it-support",
    title: "IT support",
    promise: "Secure, well-managed technology.",
    detail:
      "We design, secure and maintain the technology your organisation depends on, with responsive support whenever issues arise.",
    icon: Headset,
    examples: [
      { icon: Network, label: "Networks", text: "Design, installation and security" },
      { icon: HardDrive, label: "Devices and cloud", text: "Set-up and ongoing management of devices, email and storage" },
      { icon: ShieldCheck, label: "Security", text: "Patch management, backups and endpoint protection" },
      { icon: Cctv, label: "Surveillance", text: "CCTV design and installation" },
      { icon: LifeBuoy, label: "Support", text: "Remote and on-site assistance" },
    ],
  },
];

export const EXTRAS: { id: string; title: string; detail: string; icon: LucideIcon; to: To }[] = [
  { id: "websites", title: "Website creation", detail: "Professional, search-optimised websites and e-commerce.", icon: Globe, to: "/packages#websites" },
  { id: "apps", title: "App development", detail: "Custom mobile and web applications, integrated with your systems.", icon: AppWindow, to: bookingLink("apps") },
  { id: "training", title: "Training & skills", detail: "Practical training that equips your team to use new systems with confidence.", icon: GraduationCap, to: bookingLink("training") },
];

/** "The Journey": four steps, from understanding the business to staying on after launch. */
export const JOURNEY = [
  { title: "Consult", detail: "A free 30-minute consultation to understand how your business runs and where time and money are being lost." },
  { title: "Propose", detail: "A written proposal, aligned with your business goals, setting out what we will build, what it costs and what it will save you." },
  { title: "Build", detail: "We co-create in stages alongside your team, removing bottlenecks and connecting everything to the systems you already use." },
  { title: "Support", detail: "We don't build and walk away. Your team is trained at go-live, and we keep everything secure, maintained and improving, for enduring impact." },
];
