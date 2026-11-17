import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { JOURNEY } from "@/data/offers";

// The client journey: six steps from a free consultation to aftercare. A green line draws
// across each step in sequence (one whileInView trigger with staggerChildren).
const ClientJourney = () => (
  <section className="field-navy-deep section">
    <div className="frame">
      <AnimateOnScroll>
        <h2 className="heading-xl max-w-[14ch]">Our approach</h2>
        <p className="lead mt-6 max-w-[44ch] text-paper/80">
          A structured engagement, from the first consultation to long-term support.
        </p>
      </AnimateOnScroll>

      <motion.ol
        className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.12 } } }}
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
            <h3 className="text-3xl font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-paper/80 max-w-[34ch]">{s.detail}</p>
          </motion.li>
        ))}
      </motion.ol>

      <AnimateOnScroll className="mt-16">
        <Link to="/contact" className="btn-green">
          Book a free consultation
          <ArrowRight size={18} />
        </Link>
      </AnimateOnScroll>
    </div>
  </section>
);

export default ClientJourney;
