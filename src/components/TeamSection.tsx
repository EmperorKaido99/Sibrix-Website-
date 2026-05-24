import { Lightbulb, Code } from "lucide-react";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import teamSibusiso from "@/assets/team-sibusiso.jpg";
import teamMalachi from "@/assets/team-malachi.jpg";

const team = [
  {
    name: "Sibusiso Skhosana",
    role: "Founder & Lead Solutions Architect",
    bio: "Leads the design and development of intelligent systems, combining web, AI, and automation to build scalable business solutions.",
    image: teamSibusiso,
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    name: "Malachi Mathins",
    role: "Full-Stack Developer & Systems Engineer",
    bio: "Builds robust and scalable applications, handling frontend, backend, and system integrations to deliver reliable digital solutions.",
    image: teamMalachi,
    icon: <Code className="w-5 h-5" />,
  },
];

const TeamSection = () => (
  <section id="team" className="py-24 px-6 bg-background">
    <div className="container mx-auto max-w-5xl">
      <AnimateOnScroll>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Meet the Team
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-6">
            The people building smart digital solutions.
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-24 bg-accent/40" />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <div className="h-px w-24 bg-accent/40" />
          </div>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-3xl mx-auto mb-14">
        {team.map((member, i) => (
          <AnimateOnScroll key={member.name} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl overflow-hidden bg-primary shadow-lg"
            >
              {/* Image area */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 w-10 h-10 rounded-lg bg-accent/90 flex items-center justify-center text-accent-foreground">
                  {member.icon}
                </div>
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  width={512}
                  height={640}
                  className="w-full h-72 object-cover object-top"
                />
                {/* Gold dot divider */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-accent border-2 border-primary z-10" />
              </div>

              {/* Info area */}
              <div className="p-6 pt-5 text-center">
                <h3 className="text-xl font-heading font-bold text-primary-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-body font-medium mb-3">
                  {member.role}
                </p>
                {/* Second gold dot */}
                <div className="flex justify-center mb-3">
                  <div className="w-2 h-2 rounded-full bg-accent/60" />
                </div>
                <p className="text-primary-foreground/70 text-sm font-body leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll>
        <div className="text-center">
          <a
            href="#cta"
            className="inline-block px-10 py-3 rounded-md border-2 border-accent text-foreground font-body font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-accent/10 hover:shadow-[0_0_20px_-5px_hsl(var(--gold)/0.2)]"
          >
            Work With Us
          </a>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default TeamSection;
