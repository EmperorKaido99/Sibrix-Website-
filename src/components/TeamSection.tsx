import { Linkedin } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { TEAM, initials } from "@/data/team";

// "Meet the team" on About. No photos: an initials tile in the brand colours; optional details render only
// when supplied in src/data/team.ts.
const TeamSection = () => (
  <section id="team" className="field-paper section">
    <div className="frame">
      <AnimateOnScroll>
        <h2 className="heading-xl">Meet the team</h2>
        <p className="lead mt-6 max-w-[44ch] text-navy/80">The people you work with, from the first consultation to long-term support.</p>
      </AnimateOnScroll>

      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
        {TEAM.map((m, i) => (
          <AnimateOnScroll key={m.name} delay={i * 0.08} className="h-full">
            <article className="team-card group h-full bg-paper-2 p-8 md:p-10 flex flex-col">
              <div className="flex items-center gap-6">
                <span
                  aria-hidden="true"
                  className="team-card__mark flex h-24 w-24 shrink-0 items-center justify-center bg-navy text-4xl font-semibold tracking-tight text-green"
                >
                  {initials(m.name)}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{m.name}</h3>
                  <p className="mt-1 text-lg text-navy/75">{m.role}</p>
                </div>
              </div>

              {m.experience && <p className="mt-8 text-lg font-semibold">{m.experience}</p>}
              {m.bio && <p className="mt-4 text-lg leading-relaxed text-navy/85">{m.bio}</p>}
              {m.qualifications && m.qualifications.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {m.qualifications.map((q) => (
                    <li key={q} className="bg-paper px-3 py-1.5 text-sm font-medium">{q}</li>
                  ))}
                </ul>
              )}

              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-8 inline-flex items-center gap-2 self-start font-semibold underline-offset-4 hover:underline"
                >
                  <Linkedin size={18} aria-hidden="true" /> LinkedIn profile
                  <span className="sr-only"> of {m.name} (opens in a new tab)</span>
                </a>
              )}
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
