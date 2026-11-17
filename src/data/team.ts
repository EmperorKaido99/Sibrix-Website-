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
    // Source: Sibusiso's LinkedIn profile (read 2026-11-17). Only current certifications are listed;
    // Azure Data Engineer Associate and Power BI Data Analyst Associate expired in Feb 2026.
    experience: "Computer Science graduate specialising in automation, data, AI and cloud.",
    bio: "Sibusiso founded Sibrix to help South African businesses automate repetitive work and run dependable IT. His background spans robotic process automation, as an RPA developer at the Samsung Future Innovation Lab, and data analytics with SQL, Excel and Power BI. He also trains and mentors learners on IT learnership programmes, which shapes how Sibrix approaches training and handover.",
    qualifications: [
      "BSc Honours, Computer Science (UWC)",
      "BSc, Computer Science & Information Systems (UWC)",
      "Microsoft Certified: AI Business Professional",
      "Microsoft Certified: Azure Fundamentals",
      "Automation Anywhere: RPA Essentials",
    ],
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
