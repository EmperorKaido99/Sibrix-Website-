import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import capeTown from "@/assets/cape-town-network.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section id="top" className="field-navy pt-28 md:pt-36 pb-[clamp(5rem,9vw,8rem)] overflow-hidden">
      <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.p {...rise(0)} className="text-lg font-semibold text-cyan">
            Systems built right.
          </motion.p>
          <motion.h1 {...rise(0.06)} className="mt-5 font-semibold text-[clamp(2.75rem,4.7vw,5.5rem)] leading-[1] tracking-[-0.035em]">
            Technology.
            <br />
            <span className="text-green">Designed for Progress.</span>
          </motion.h1>
          <motion.p {...rise(0.12)} className="lead mt-8 max-w-[34ch] text-paper/90">
            We design, develop and integrate technology solutions that turn real-world challenges into
            opportunities.
          </motion.p>
          <motion.div {...rise(0.18)} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#cta" className="btn-green">
              Discuss a project
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-ghost-light">
              Our services
            </a>
          </motion.div>
        </div>

        <motion.figure {...rise(0.24)} className="lg:col-span-5">
          <div className="overflow-hidden aspect-[4/3] bg-navy-deep">
            <img
              src={capeTown}
              alt="Cape Town and Table Mountain at dusk, with connected network lines over the city"
              className="w-full h-full object-cover"
              width={800}
              height={450}
              fetchPriority="high"
            />
          </div>
          <figcaption className="mt-3 text-base text-paper/70">Cape Town, South Africa</figcaption>
        </motion.figure>
      </div>
    </section>
  );
};

export default HeroSection;
