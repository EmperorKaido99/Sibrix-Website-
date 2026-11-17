import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesDetail from "@/components/ServicesDetail";
import FeaturedWork from "@/components/FeaturedWork";
import ClientWork from "@/components/ClientWork";
import ClientJourney from "@/components/ClientJourney";
import DataTrust from "@/components/DataTrust";
import WebsiteTiers from "@/components/packages/WebsiteTiers";
import { AutomationPlans, ITPlans } from "@/components/packages/LeadPlans";
import { CarePlans } from "@/components/packages/ExtraOffers";
import ComparisonTable from "@/components/ComparisonTable";
import CTASection from "@/components/CTASection";
import PageIntro from "@/components/PageIntro";
import PackagesFAQ from "@/components/PackagesFAQ";

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
    <PageIntro title="Start where *you are.*" lead="Automation and IT support plans first, plus websites and website care. Pay once, monthly or annually." />
    <AutomationPlans />
    <ITPlans />
    <WebsiteTiers />
    <CarePlans />
    <ComparisonTable />
    <PackagesFAQ />
    <CTASection />
  </>
);

