import type { CSSProperties, ReactNode } from "react";

interface PageIntroProps {
  /** Page headline (the page's only h1). Words wrapped in *stars* are green; a run can span words. */
  title: string;
  lead: string;
  children?: ReactNode;
}

// Top band for inner pages: the h1 rises in word by word over a slowly drifting green glow.
// The animation is pure CSS (.word-rise / .anim-rise in index.css) so it starts at first paint,
// not after JavaScript loads; the headline is usually the page's Largest Contentful Paint.
const PageIntro = ({ title, lead, children }: PageIntroProps) => {
  let inGreen = false;
  const words = title.split(" ").map((w) => {
    if (w.startsWith("*")) inGreen = true;
    const word = { text: w.replace(/\*/g, ""), green: inGreen };
    if (w.endsWith("*")) inGreen = false;
    return word;
  });

  return (
    <section className="page-intro field-navy-deep relative overflow-hidden pt-32 md:pt-44 pb-16 md:pb-24">
      <div className="frame relative">
        <h1 className="display max-w-[16ch]">
          {words.map(({ text, green }, i) => (
            <span key={i} className="word-rise inline-block overflow-hidden align-bottom pb-[0.08em] mr-[0.22em] last:mr-0">
              <span className={`inline-block ${green ? "text-green" : ""}`} style={{ "--i": i } as CSSProperties}>
                {text}
              </span>
            </span>
          ))}
        </h1>
        <p className="anim-rise lead mt-8 max-w-[44ch] text-paper/85" style={{ "--d": "450ms" } as CSSProperties}>
          {lead}
        </p>
        {children}
      </div>
    </section>
  );
};

export default PageIntro;
