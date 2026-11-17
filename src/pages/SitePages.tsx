import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesDetail from "@/components/ServicesDetail";
import FeaturedWork from "@/components/FeaturedWork";
import ClientWork from "@/components/ClientWork";
import ClientJourney from "@/components/ClientJourney";
import CTASection from "@/components/CTASection";
import PageIntro from "@/components/PageIntro";
import PackagesFAQ from "@/components/PackagesFAQ";
import PackagesExplorer from "@/components/packages/PackagesExplorer";

// Positioning: lead with business automation and IT support; websites, apps and training are "also available".

export const AboutPage = () => (
  <>
    <PageIntro title="Bridging ideas and *implementation.*" lead="A South African technology company focused on business automation and IT support." />
    <AboutSection />
    <CTASection />
  </>
);

export const WorkPage = () => (
  <>
    <PageIntro title="Products we build *and run.*" lead="Our own products, platforms built for clients, and what is coming next." />
    <FeaturedWork />
    <ClientWork />
    <section className="field-navy section">
      <ProjectsSection inDevelopmentOnly />
    </section>
    <CTASection />
  </>
);

export const ServicesPage = () => (
  <>
    <PageIntro title="Automation and IT support, *built right.*" lead="Business automation and IT support from one accountable partner." />
    <ServicesDetail />
    <ClientJourney />
    <CTASection />
  </>
);

export const PackagesPage = () => (
  <>
    <PageIntro title="Start where *you are.*" lead="Business automation, IT support and websites. Pay once, monthly or annually." />
    <PackagesExplorer />
    <PackagesFAQ />
    <CTASection />
  </>
);

