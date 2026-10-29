import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const pillars = [
  {
    title: "Strategy & Technology Advisory",
    detail: "Helping clients understand their technology needs and identify suitable solutions.",
  },
  {
    title: "Software & Digital Solutions",
    detail: "Developing applications, business tools and automation solutions that improve everyday operations.",
  },
  {
    title: "Smart Technology & Innovation",
    detail: "Exploring AI, the Internet of Things (IoT), intelligent monitoring and connected systems.",
  },
  {
    title: "IT Infrastructure & Support",
    detail: "Supporting networking, installations, system maintenance, cloud solutions and CCTV installations.",
  },
  {
    title: "Training & Skills Development",
    detail: "Building digital skills and exploring opportunities to make technology knowledge more accessible.",
  },
];

const AboutSection = () => (
  <section id="about" className="field-paper-2 section">
    <div className="frame">
      {/* Who we are */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
        <AnimateOnScroll className="lg:col-span-5">
          <h2 className="heading-xl max-w-[10ch]">About Sibrix Group</h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.08} className="lg:col-span-7">
          <h3 className="text-2xl font-semibold tracking-tight">Who we are</h3>
          <p className="lead mt-4">
            Sibrix Group (Pty) Ltd is a South African technology company focused on designing, developing
            and delivering practical technology solutions that help businesses and individuals work
            smarter, solve problems and embrace innovation.
          </p>
          <p className="mt-6 text-lg leading-relaxed max-w-[62ch]">
            We bring together software development, smart technology, IT infrastructure and technology
            advisory to create solutions that respond to real-world needs. Our approach is built around
            understanding each client's challenges, identifying the right technologies and delivering
            solutions that are practical, reliable and designed for growth.
          </p>
          <p className="mt-4 text-lg leading-relaxed max-w-[62ch]">
            From digital applications and automation to IoT solutions, AI-powered tools and IT
            infrastructure, we aim to bridge the gap between ideas and implementation.
          </p>
        </AnimateOnScroll>
      </div>

      {/* Vision and mission */}
      <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        <AnimateOnScroll className="bg-paper p-8 md:p-12 h-full">
          <h3 className="text-2xl font-semibold tracking-tight">Our vision</h3>
          <p className="mt-5 text-2xl md:text-[1.75rem] leading-snug tracking-tight">
            To become a trusted technology and innovation partner, helping businesses and communities use
            technology to create opportunities, improve efficiency and build a more connected future.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.08} className="field-navy p-8 md:p-12 h-full">
          <h3 className="text-2xl font-semibold tracking-tight text-gold">Our mission</h3>
          <p className="mt-5 text-2xl md:text-[1.75rem] leading-snug tracking-tight">
            To deliver accessible, well-designed and forward-thinking technology solutions that address
            real challenges, support business growth and create lasting value for our clients and
            partners.
          </p>
        </AnimateOnScroll>
      </div>

      {/* What we do */}
      <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <AnimateOnScroll className="lg:col-span-5">
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight leading-none">What we do</h3>
        </AnimateOnScroll>
        <ul className="lg:col-span-7">
          {pillars.map((p, i) => (
            <AnimateOnScroll key={p.title} delay={i * 0.06}>
              <li className="py-6 border-t border-navy/15 first:border-t-0 first:pt-0">
                <p className="text-xl md:text-2xl font-semibold tracking-tight">{p.title}</p>
                <p className="mt-2 text-lg leading-relaxed">{p.detail}</p>
              </li>
            </AnimateOnScroll>
          ))}
        </ul>
      </div>

      {/* Approach and brand promise */}
      <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
        <AnimateOnScroll className="lg:col-span-5">
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight leading-none">Our approach</h3>
          <p className="mt-6 text-lg leading-relaxed max-w-[52ch]">
            At Sibrix Group, we believe technology should serve a purpose. We focus on understanding the
            problem before choosing the solution, combining practical thinking with creativity and
            technical expertise.
          </p>
          <p className="mt-4 text-lg leading-relaxed max-w-[52ch]">
            We value collaboration, continuous learning, responsible innovation and building solutions
            that can evolve as our clients' needs change.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.08} className="lg:col-span-7 field-gold p-8 md:p-12 flex flex-col">
          <h3 className="text-2xl font-semibold tracking-tight">Our brand promise</h3>
          <p className="mt-4 text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
            Systems built right.
          </p>
          <p className="mt-8 text-lg leading-relaxed max-w-[56ch]">
            This reflects our commitment to thoughtful planning, practical implementation and solutions
            designed with purpose. Whether we are developing software, integrating smart technology or
            supporting IT infrastructure, our goal is to build systems that work for the people and
            businesses that rely on them.
          </p>
        </AnimateOnScroll>
      </div>

      {/* Building the future together */}
      <AnimateOnScroll className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-7">
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight leading-none">
            Building the future together
          </h3>
          <p className="mt-6 text-lg leading-relaxed max-w-[62ch]">
            We are building Sibrix Group around a simple idea: technology should create opportunities, not
            unnecessary complexity. We welcome opportunities to collaborate with businesses,
            organisations, investors and partners who share an interest in practical innovation and
            sustainable growth.
          </p>
        </div>
        <div className="lg:col-span-5 lg:justify-self-end">
          <p className="text-xl font-semibold tracking-tight">Let's build something meaningful together.</p>
          <a href="#cta" className="btn-navy mt-5">
            Get in touch
            <ArrowRight size={18} />
          </a>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default AboutSection;
