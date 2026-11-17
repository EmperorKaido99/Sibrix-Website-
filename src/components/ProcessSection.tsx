import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    title: "Discover",
    detail: "We listen first: your goals, the tools you use today and what is getting in the way. You get a clear proposal and quote.",
  },
  {
    title: "Design",
    detail: "We plan the system and design the screens with you, so you can see how it will work before we build it.",
  },
  {
    title: "Build",
    detail: "We develop, test and launch in stages, and keep you updated as each part comes together.",
  },
  {
    title: "Support",
    detail: "Every launch includes a month of support. Add a monthly retainer if you want us to keep improving it.",
  },
];

// "How we work": four steps, each with a line that draws across as it scrolls into view.
const ProcessSection = () => (
  <section className="field-navy-deep section">
    <div className="frame">
      <AnimateOnScroll>
        <h2 className="heading-xl max-w-[12ch]">How we work</h2>
        <p className="lead mt-6 max-w-[40ch] text-paper/80">
          From the first conversation to long after launch, you always know what happens next.
        </p>
      </AnimateOnScroll>

      {/* One trigger for the whole list; the lines then draw in sequence via staggerChildren. */}
      <motion.ol
        className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.15 } } }}
      >
        {steps.map((s) => (
          <motion.li
            key={s.title}
            className="relative pt-8"
            variants={{ hidden: { opacity: 0, y: 20 }, shown: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              aria-hidden="true"
              className="absolute top-0 left-0 h-[3px] w-full origin-left bg-green"
              variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1 } }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-paper/80 max-w-[34ch]">{s.detail}</p>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  </section>
);

export default ProcessSection;
