import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import crimeSpotsImage from "@/assets/project-crimespots.png";

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
    <section id="top" className="field-paper pt-28 md:pt-36 pb-[clamp(5rem,9vw,8rem)]">
      <div className="frame">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
          <motion.h1 {...rise(0)} className="display lg:col-span-8">
            Smart systems, built&nbsp;right.
          </motion.h1>
          <div className="lg:col-span-4 lg:pb-3">
            <motion.p {...rise(0.08)} className="lead max-w-[32ch]">
              Sibrix designs and builds websites, automations, IoT and AI systems for South African
              businesses, from first idea to running in production.
            </motion.p>
            <motion.div {...rise(0.16)} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#cta" className="btn-navy">
                Start a project
                <ArrowRight size={18} />
              </a>
              <a href="#projects" className="link-arrow">
                See our work
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.figure {...rise(0.24)} className="mt-12 md:mt-16">
          <div className="overflow-hidden bg-navy aspect-[4/3] md:aspect-[21/9]">
            <img
              src={crimeSpotsImage}
              alt="CrimeSpots live crime map of Cape Town, showing an incident feed, heatmap and area rankings"
              className="w-full h-full object-cover object-left-top"
              width={1440}
              height={900}
              fetchPriority="high"
            />
          </div>
          <figcaption className="mt-3 text-base text-muted-foreground">
            CrimeSpots: live crime intelligence for Cape Town, designed and built by Sibrix.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
};

export default HeroSection;
