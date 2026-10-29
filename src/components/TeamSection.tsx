import AnimateOnScroll from "./AnimateOnScroll";
import teamSibusiso from "@/assets/team-sibusiso.jpg";
import teamMalachi from "@/assets/team-malachi.jpg";

const team = [
  {
    name: "Sibusiso Skhosana",
    role: "Founder & Lead Solutions Architect",
    bio: "Leads the design and development of intelligent systems, combining web, AI and automation to build scalable business solutions.",
    image: teamSibusiso,
    position: "object-[50%_30%]",
  },
  {
    name: "Malachi Mathins",
    role: "Full-Stack Developer & Systems Engineer",
    bio: "Builds robust, scalable applications, handling frontend, backend and system integrations to deliver reliable digital solutions.",
    image: teamMalachi,
    position: "object-[50%_55%]",
  },
];

const TeamSection = () => (
  <section id="team" className="field-paper section">
    <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
      <AnimateOnScroll className="lg:col-span-4">
        <h2 className="heading-xl">The team</h2>
        <p className="lead mt-6 max-w-[26ch]">
          You work directly with the people who design and build your system.
        </p>
      </AnimateOnScroll>

      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-8">
        {team.map((member, i) => (
          <AnimateOnScroll key={member.name} delay={i * 0.1}>
            <figure>
              <div className="overflow-hidden bg-paper-2 aspect-[4/5]">
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full object-cover grayscale contrast-[1.05] ${member.position}`}
                />
              </div>
              <figcaption className="mt-6">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{member.name}</h3>
                <p className="mt-1 text-lg font-medium text-navy/75">{member.role}</p>
                <p className="mt-4 text-base leading-relaxed max-w-[44ch]">{member.bio}</p>
              </figcaption>
            </figure>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
