import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import { JOURNEY } from "@/data/offers";

// "The Journey": four steps in the live "How we work" layout, each with a green line that draws across
// as it scrolls into view (one whileInView trigger with staggerChildren).
const ClientJourney = () => (
  <section className="field-navy-deep section">
    <div className="frame">
      <AnimateOnScroll>
        <h2 className="heading-xl max-w-[12ch]">The Journey</h2>
        <p className="lead mt-6 max-w-[44ch] text-paper/80">
          We start by understanding your business, build what saves you time and money, and stay with you long after
          launch.
        </p>
      </AnimateOnScroll>

      <motion.ol
        className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.15 } } }}
      >
        {JOURNEY.map((s) => (
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

export default ClientJourney;
