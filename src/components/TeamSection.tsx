import { Award, GraduationCap, Linkedin } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { TEAM, initials, type TeamMember } from "@/data/team";

// "Meet the team" on About. No photos: a large initials tile in the brand colours. Each card shows name, role,
// a personal line in the person's own words, and their credentials. Data in src/data/team.ts.

const Credentials = ({ icon: Icon, title, items }: { icon: typeof Award; title: string; items?: string[] }) =>
  items && items.length > 0 ? (
    <div>
      <p className="flex items-center gap-2 text-sm font-semibold text-navy/60">
        <Icon size={16} aria-hidden="true" /> {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((q) => (
          <li key={q} className="border-l-2 border-green pl-3 text-base leading-snug">{q}</li>
        ))}
      </ul>
    </div>
  ) : null;

const MemberCard = ({ m, wide }: { m: TeamMember; wide: boolean }) => (
  <article className={`team-card group h-full bg-paper-2 ${wide ? "grid grid-cols-1 lg:grid-cols-12" : "flex flex-col"}`}>
    {/* Identity panel */}
    <div className={`field-navy relative overflow-hidden p-8 md:p-10 flex flex-col justify-between gap-10 ${wide ? "lg:col-span-5" : ""}`}>
      <span
        aria-hidden="true"
        className="team-card__mark flex h-28 w-28 items-center justify-center bg-green text-5xl font-semibold tracking-tight text-navy"
      >
        {initials(m.name)}
      </span>
      <div>
        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">{m.name}</h3>
        <p className="mt-2 text-lg text-green font-semibold">{m.role}</p>
        {m.linkedin && (
          <a
            href={m.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
          >
            <Linkedin size={18} aria-hidden="true" /> LinkedIn
            <span className="sr-only"> profile of {m.name} (opens in a new tab)</span>
          </a>
        )}
      </div>
    </div>

    {/* Line + credentials */}
    <div className={`p-8 md:p-10 flex flex-col gap-10 ${wide ? "lg:col-span-7 lg:p-14" : ""}`}>
      {m.quote && (
        <blockquote className="text-2xl md:text-3xl font-semibold leading-snug tracking-[-0.02em]">
          <span aria-hidden="true" className="text-green">“</span>
          {m.quote}
          <span aria-hidden="true" className="text-green">”</span>
        </blockquote>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Credentials icon={GraduationCap} title="Education" items={m.education} />
        <Credentials icon={Award} title="Certifications" items={m.certifications} />
      </div>
    </div>
  </article>
);

const TeamSection = () => {
  const wide = TEAM.length === 1;
  return (
    <section id="team" className="field-paper section">
      <div className="frame">
        <AnimateOnScroll>
          <h2 className="heading-xl">Meet the team</h2>
          <p className="lead mt-6 max-w-[44ch] text-navy/80">The people you work with, from the first consultation to long-term support.</p>
        </AnimateOnScroll>

        <div className={`mt-12 md:mt-16 grid grid-cols-1 gap-4 lg:gap-5 ${wide ? "" : "md:grid-cols-2 xl:grid-cols-3"}`}>
          {TEAM.map((m, i) => (
            <AnimateOnScroll key={m.name} delay={i * 0.08} className="h-full">
              <MemberCard m={m} wide={wide} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
