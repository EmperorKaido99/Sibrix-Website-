import {
  BarChart3,
  Bot,
  Cctv,
  LifeBuoy,
  Network,
  Plug,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/*
 * Everything on the Packages page comes from this file.
 *
 * PRICES: set `price` to a string such as "From R4 500" once Sibrix confirms it.
 * Left undefined, a card shows "Price on request".
 *
 * TO CONFIRM WITH SIBRIX before going live (new in the 2026-11 restructure, not on the old site):
 *   - Launch: WhatsApp button and Google Business Profile setup
 *   - Grow: online bookings or quote requests, blog/news section
 *   - Online Store: naming PayFast, Yoco and Ozow as the payment gateways
 *   - Care plan: what is included (hosting? domain? email?) and its price
 *   - AI chatbot add-on: monthly running fee
 *   - IT & Security sold on its own (without a website)
 *   - Custom systems start with a discovery workshop (paid or free?)
 *   The FAQ in src/components/PackagesFAQ.tsx repeats some of these, so update both.
 *   Everything else restates services, features and the retainer from the previous site.
 */

export type TierId = "launch" | "grow" | "store";

export interface WebsiteTier {
  id: TierId;
  name: string;
  forWho: string;
  price?: string;
  featured?: boolean;
  badge?: string;
  features: string[];
}

export const WEBSITE_TIERS: WebsiteTier[] = [
  {
    id: "launch",
    name: "Launch",
    forWho: "A professional, search-friendly website for a small business getting online.",
    features: [
      "SEO-optimised website",
      "Mobile-responsive design",
      "Contact form and WhatsApp button",
      "Social media links",
      "Google Business Profile setup",
      "1 month post-launch support",
    ],
  },
  {
    id: "grow",
    name: "Grow",
    forWho: "For service businesses that want customers to book or request quotes online.",
    features: [
      "Everything in Launch",
      "Online bookings or quote requests",
      "Blog or news section",
      "More pages for each service you offer",
      "1 month post-launch support",
    ],
  },
  {
    id: "store",
    name: "Online Store",
    forWho: "Sell online and run stock, quotes and lay-bys from one system.",
    featured: true,
    badge: "Most popular",
    features: [
      "Everything in Grow",
      "Online store with PayFast, Yoco or Ozow payments",
      "Live stock and inventory",
      "Lay-by management",
      "Quotation system and support desk",
      "Mobile stock update app",
      "1 month post-launch support",
    ],
  },
];

/** Website comparison: true = included. Rows are grouped; keep in step with WEBSITE_TIERS. */
export const COMPARISON: { title: string; rows: { name: string; tip: string; tiers: Record<TierId, boolean> }[] }[] = [
  {
    title: "Website essentials",
    rows: [
      { name: "SEO-optimised website", tip: "Built with search best practices so customers find you on Google.", tiers: { launch: true, grow: true, store: true } },
      { name: "Mobile-responsive design", tip: "Works on phones, tablets and desktops.", tiers: { launch: true, grow: true, store: true } },
      { name: "Contact form and WhatsApp button", tip: "Two easy ways for visitors to reach you.", tiers: { launch: true, grow: true, store: true } },
      { name: "Google Business Profile setup", tip: "Show up on Google Maps and local search.", tiers: { launch: true, grow: true, store: true } },
    ],
  },
  {
    title: "Growing your business",
    rows: [
      { name: "Online bookings or quote requests", tip: "Customers book a slot or ask for a quote without calling.", tiers: { launch: false, grow: true, store: true } },
      { name: "Blog or news section", tip: "Publish updates that also help your Google ranking.", tiers: { launch: false, grow: true, store: true } },
      { name: "Page for each service", tip: "A dedicated page per service you offer.", tiers: { launch: false, grow: true, store: true } },
    ],
  },
  {
    title: "Selling online",
    rows: [
      { name: "Online store and payments", tip: "Secure checkout with local payment gateways.", tiers: { launch: false, grow: false, store: true } },
      { name: "Live stock and inventory", tip: "Real-time stock so you never oversell.", tiers: { launch: false, grow: false, store: true } },
      { name: "Lay-by management", tip: "Track lay-by payments and schedules.", tiers: { launch: false, grow: false, store: true } },
      { name: "Quotes and support desk", tip: "Send quotes and handle customer queries from your dashboard.", tiers: { launch: false, grow: false, store: true } },
      { name: "Mobile stock update app", tip: "Update stock from your phone.", tiers: { launch: false, grow: false, store: true } },
    ],
  },
];

export interface Offer {
  title: string;
  detail: string;
  icon: LucideIcon;
  price?: string;
  note?: string;
}

export const ADD_ONS: Offer[] = [
  { title: "AI chatbot", detail: "Trained on your products, services and FAQs, answering customers around the clock.", icon: Bot, note: "Setup + monthly running fee" },
  { title: "Business automation", detail: "Invoicing, scheduling, alerts and reporting handled automatically.", icon: Workflow },
  { title: "Integrations", detail: "Connect payments, CRMs, accounting and shipping tools into one flow.", icon: Plug },
  { title: "Dashboards", detail: "Power BI and SQL dashboards that turn your data into clear decisions.", icon: BarChart3 },
];

export const IT_SECURITY: Offer[] = [
  { title: "CCTV installation", detail: "Camera systems installed and configured for homes, offices and business premises.", icon: Cctv },
  { title: "Network setup", detail: "Office and site networks planned, installed and secured.", icon: Network },
  { title: "Monthly IT support", detail: "Hardware and system maintenance that keeps your IT running.", icon: Wrench },
];

export interface CarePlan {
  name: string;
  forWho: string;
  price?: string;
  features: string[];
  icon: LucideIcon;
}

export const CARE_PLANS: CarePlan[] = [
  {
    name: "Care plan",
    forWho: "Keep your website safe, fast and up to date.",
    icon: LifeBuoy,
    features: ["Software and security updates", "Regular backups", "Performance and uptime checks", "Small content changes"],
  },
  {
    name: "Development retainer",
    forWho: "A team that already knows your systems, every month.",
    icon: Wrench,
    features: ["4 hours of development and support a month", "Use it for design, fixes, updates or automations", "Priority response", "Extra hours at our standard rate"],
  },
];

export const CUSTOM_EXAMPLES = [
  "CRM",
  "HR management",
  "Project tracking",
  "Financial dashboards",
  "Supplier management",
  "AI assistants",
  "AI analytics",
  "End-to-end automation",
];

/** Used by the contact form when arriving from the picker (/contact?package=grow). */
export const PACKAGE_LABELS: Record<string, string> = {
  launch: "Launch website",
  grow: "Grow website",
  store: "Online Store",
  custom: "Custom system",
};

export const priceLabel = (price?: string) => price ?? "Price on request";
