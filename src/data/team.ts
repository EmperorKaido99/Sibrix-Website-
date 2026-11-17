/*
 * The people behind Sibrix (reviewer: showing who is behind the company is key for credibility).
 * FACTS ONLY, supplied by the person. Optional fields render only when filled in.
 * No photos for now: each person gets an initials tile; add a photo later without changing the layout.
 * No bio paragraphs (by request): name, role, a personal line in their own words, and credentials.
 */
export interface TeamMember {
  name: string;
  role: string;
  /** A personal line, in the person's own words. */
  quote?: string;
  education?: string[];
  certifications?: string[];
  linkedin?: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Sibusiso Skhosana",
    role: "Founder & Director",
    quote: "I solve problems and make life easier for myself.",
    // Credentials from Sibusiso's LinkedIn profile (2026-11-17). Current certifications only:
    // Azure Data Engineer Associate and Power BI Data Analyst Associate expired in Feb 2026.
    education: ["BSc Honours, Computer Science (University of the Western Cape)", "BSc, Computer Science & Information Systems (University of the Western Cape)"],
    certifications: ["Microsoft Certified: AI Business Professional", "Microsoft Certified: Azure Fundamentals", "Automation Anywhere: RPA Essentials"],
    linkedin: "https://www.linkedin.com/in/sibusiso-skhosana-445185250/",
  },
];

export const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
