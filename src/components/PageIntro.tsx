import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageIntroProps {
  /** Page headline (the page's only h1). Words wrapped in *stars* are green. */
  title: string;
  lead: string;
  children?: ReactNode;
}

const ease = [0.22, 1, 0.36, 1] as const;

// Top band for inner pages: the h1 rises in word by word over a slowly drifting green
// glow, so every page opens with a clear headline instead of jumping into content.
const PageIntro = ({ title, lead, children }: PageIntroProps) => {
  // "*runs on.*" marks a green run that can span several words.
  let inGreen = false;
  const words = title.split(" ").map((w) => {
    const opens = w.startsWith("*");
    const closes = w.endsWith("*");
    if (opens) inGreen = true;
    const word = { text: w.replace(/\*/g, ""), green: inGreen };
    if (closes) inGreen = false;
    return word;
  });
  return (
    <section className="page-intro field-navy-deep relative overflow-hidden pt-32 md:pt-44 pb-16 md:pb-24">
      <div className="frame relative">
        <motion.h1
          className="display max-w-[16ch]"
          initial="hidden"
          animate="shown"
          variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        >
          {words.map(({ text, green }, i) => {
            return (
              <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] mr-[0.22em] last:mr-0">
                <motion.span
                  className={`inline-block ${green ? "text-green" : ""}`}
                  variants={{ hidden: { y: "105%" }, shown: { y: 0 } }}
                  transition={{ duration: 0.9, ease }}
                >
                  {text}
                </motion.span>
              </span>
            );
          })}
        </motion.h1>
        <motion.p
          className="lead mt-8 max-w-[44ch] text-paper/85"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
        >
          {lead}
        </motion.p>
        {children}
      </div>
    </section>
  );
};

export default PageIntro;
