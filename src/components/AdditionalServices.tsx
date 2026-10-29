import AnimateOnScroll from "./AnimateOnScroll";

const groups = [
  {
    title: "Web platforms",
    services: [
      {
        title: "Websites & e-commerce",
        detail: "Fast, search-friendly business websites and online stores with secure payments, built to work on every phone.",
      },
      {
        title: "Mobile apps",
        detail: "iOS and Android apps that connect to your business systems, for your team or your customers.",
      },
      {
        title: "UI/UX design & branding",
        detail: "Logos, brand guidelines and interface design that make your business recognisable and easy to use.",
      },
    ],
  },
  {
    title: "AI & automation",
    services: [
      {
        title: "AI chatbots",
        detail: "Assistants trained on your products, services and FAQs that answer customers around the clock.",
      },
      {
        title: "Business process automation",
        detail: "Data entry, invoicing, scheduling and reporting handled automatically, saving your team hours every week.",
      },
      {
        title: "Data analytics & dashboards",
        detail: "Power BI and SQL dashboards that turn your business data into clear, real-time decisions.",
      },
    ],
  },
  {
    title: "Systems & infrastructure",
    services: [
      {
        title: "IoT systems",
        detail: "Connected devices and sensors with real-time monitoring, from farms to facilities.",
      },
      {
        title: "Cloud deployment & DevOps",
        detail: "Reliable, secure hosting on AWS and Azure, set up and managed so your systems run at any scale.",
      },
      {
        title: "API development & integration",
        detail: "Your payment processors, CRMs, accounting and shipping tools connected into one flow.",
      },
    ],
  },
  {
    title: "Growth & care",
    services: [
      {
        title: "Cybersecurity & performance",
        detail: "Security audits, performance tuning and monitoring that keep your systems safe and fast.",
      },
      {
        title: "SEO & digital marketing",
        detail: "Search optimisation, content and campaigns that bring the right customers to you.",
      },
      {
        title: "Maintenance & support",
        detail: "Updates, fixes and technical support that keep everything running long after launch.",
      },
    ],
  },
];

const AdditionalServices = () => (
  <section id="services" className="field-paper section">
    <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
      <AnimateOnScroll className="lg:col-span-4">
        <div className="lg:sticky lg:top-32">
          <h2 className="heading-xl">What we build</h2>
          <p className="lead mt-6 max-w-[28ch]">
            One team for the whole system: the website your customers see and the automation behind it.
          </p>
          <a href="#cta" className="btn-navy mt-10">
            Discuss your project
          </a>
        </div>
      </AnimateOnScroll>

      <div className="lg:col-span-8 space-y-16 md:space-y-20">
        {groups.map((g) => (
          <div key={g.title}>
            <AnimateOnScroll>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">{g.title}</h3>
            </AnimateOnScroll>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {g.services.map((s, i) => (
                <AnimateOnScroll key={s.title} delay={i * 0.07}>
                  <h4 className="text-xl font-semibold tracking-tight">{s.title}</h4>
                  <p className="mt-3 text-base leading-relaxed text-navy/85">{s.detail}</p>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdditionalServices;
