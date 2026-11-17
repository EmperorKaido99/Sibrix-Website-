import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesDetail from "@/components/ServicesDetail";
import FeaturedWork from "@/components/FeaturedWork";
import ClientJourney from "@/components/ClientJourney";
import DataTrust from "@/components/DataTrust";
import WebsiteTiers from "@/components/packages/WebsiteTiers";
import { AutomationPlans, ITPlans } from "@/components/packages/LeadPlans";
import { CarePlans } from "@/components/packages/ExtraOffers";
import ComparisonTable from "@/components/ComparisonTable";
import CTASection from "@/components/CTASection";
import PageIntro from "@/components/PageIntro";
import PackagePicker from "@/components/PackagePicker";
import PackagesFAQ from "@/components/PackagesFAQ";

// Positioning: lead with workflow automation and IT support; websites, apps and training are "also available".

export const AboutPage = () => (
  <>
    <PageIntro title="Bridging ideas and *implementation.*" lead="A South African technology company focused on workflow automation and IT support." />
    <AboutSection />
    <CTASection />
  </>
);

export const WorkPage = () => (
  <>
    <PageIntro title="Automation we build *and run.*" lead="Real systems doing real work, and the products we are building next." />
    <FeaturedWork />
    <section className="field-navy pb-[clamp(5rem,11vw,10rem)]">
      <ProjectsSection inDevelopmentOnly />
    </section>
    <CTASection />
  </>
);

export const ServicesPage = () => (
  <>
    <PageIntro title="Automation and IT support, *built right.*" lead="We automate the work that slows you down and keep the technology behind it running." />
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
    <PackagePicker />
    <WebsiteTiers />
    <CarePlans />
    <ComparisonTable />
    <PackagesFAQ />
    <CTASection />
  </>
);

export const ContactPage = () => <CTASection asPage />;
