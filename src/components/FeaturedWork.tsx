import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import DemoVideo from "./DemoVideo";
import { CRIMESPOTS_VIDEO } from "@/lib/media";

// Home page: the live product, shown as real footage rather than a screenshot.
const FeaturedWork = () => (
  <section className="field-navy section">
    <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
      <AnimateOnScroll className="lg:col-span-7">
        <DemoVideo {...CRIMESPOTS_VIDEO} className="aspect-[16/10]" />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1} className="lg:col-span-5">
        <p className="text-cyan font-semibold">Featured work</p>
        <h2 className="heading-xl mt-3">CrimeSpots</h2>
        <p className="mt-6 text-lg leading-relaxed text-paper/85 max-w-[42ch]">
          Real-time crime intelligence for Cape Town. AI turns news reports into verified incidents on a live
          map. Designed, built and run by Sibrix.
        </p>
        <Link to="/work/crimespots" className="btn-green mt-10">
          Read the case study
          <ArrowRight size={18} />
        </Link>
      </AnimateOnScroll>
    </div>
  </section>
);

export default FeaturedWork;
