import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AdditionalServices from "@/components/AdditionalServices";
import WebsiteTiers from "@/components/packages/WebsiteTiers";
import { AddOns, CarePlans, CustomBand, ITSecurity } from "@/components/packages/ExtraOffers";
import ComparisonTable from "@/components/ComparisonTable";
import CTASection from "@/components/CTASection";
import ProcessSection from "@/components/ProcessSection";
import PageIntro from "@/components/PageIntro";
import PackagePicker from "@/components/PackagePicker";
import PackagesFAQ from "@/components/PackagesFAQ";

// Each page reuses the existing sections unchanged; every page ends with the contact form.

export const AboutPage = () => (
  <>
    <PageIntro title="Bridging ideas and *implementation.*" lead="A South African technology company built around practical, reliable solutions." />
    <AboutSection />
    <CTASection />
  </>
);

export const WorkPage = () => (
  <>
    <PageIntro title="Products we build *and run.*" lead="One is live today. Three more are on the way." />
    <ProjectsSection />
    <CTASection />
  </>
);

export const ServicesPage = () => (
  <>
    <PageIntro title="Everything a business *runs on.*" lead="Six practices, one team. Pick one service or let us run the whole stack." />
    <AdditionalServices />
    <ProcessSection />
    <CTASection />
  </>
);

export const PackagesPage = () => (
  <>
    <PageIntro title="Start where *you are.*" lead="Websites, add-ons, IT and security, care plans and custom systems. Pay once, monthly or annually." />
    <WebsiteTiers />
    <PackagePicker />
    <AddOns />
    <ITSecurity />
    <CarePlans />
    <CustomBand />
    <ComparisonTable />
    <PackagesFAQ />
    <CTASection />
  </>
);

export const ContactPage = () => <CTASection asPage />;
