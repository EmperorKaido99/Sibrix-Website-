/*
 * Assessment-marking case study (anonymised). No learner names, IDs or real scripts are ever shown.
 *
 * TO CONFIRM WITH SIBRIX before going live:
 *   - Fill MARKING_RESULTS with REAL figures (leave the array empty to hide the Results block).
 *   - Whether the provider / programmes may be named; until then it stays "a skills-development provider".
 */
export const MARKING_STEPS = [
  { title: "Fetch new submissions", detail: "New learner submissions are downloaded from the learning portal and filed by learner and module." },
  { title: "Load the right memo", detail: "The official memo for the module is read and turned into a structured marking guide." },
  { title: "Integrity checks", detail: "Each script is checked for copied answers, AI-pasted text and the wrong document being submitted." },
  { title: "Score every question", detail: "Answers are scored against the memo, and the qualification's pass mark and competency rules are applied." },
  { title: "Marked PDF", detail: "A marked copy is produced in the assessor's own style: ticks, comments, signature and a feedback report." },
  { title: "Tracker and report", detail: "The marking tracker spreadsheet is updated and a batch report is written." },
  { title: "Feedback returned", detail: "Marks and feedback are posted back to the portal, only after checks confirm the right learner and paper." },
];

export const MARKING_QUALIFICATIONS = ["Cybersecurity", "AI software development", "Cloud administration", "Internet of Things"];

/** Real results only, e.g. { value: "15 min", label: "per script, down from 45" }. Empty = section hidden. */
export const MARKING_RESULTS: { value: string; label: string }[] = [];
