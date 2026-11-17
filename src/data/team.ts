/*
 * The people behind Sibrix (reviewer: showing who is behind the company is key for credibility).
 * FACTS ONLY, supplied by the person. Optional fields render only when filled in.
 * No photos for now: each person gets an initials tile; add `photo` later without changing the layout.
 */
export interface TeamMember {
  name: string;
  role: string;
  /** One line, e.g. "8 years in software development and IT infrastructure". */
  experience?: string;
  /** 2–3 sentences. */
  bio?: string;
  qualifications?: string[];
  linkedin?: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Sibusiso Skhosana",
    role: "Founder & Director",
    linkedin: "https://www.linkedin.com/in/sibusiso-skhosana-445185250/",
    // TO ADD (from Sibusiso): experience, bio, qualifications.
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
