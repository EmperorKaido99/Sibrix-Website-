import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AdditionalServices from "@/components/AdditionalServices";
import PackagesSection from "@/components/PackagesSection";
import ComparisonTable from "@/components/ComparisonTable";
import RetainerSection from "@/components/RetainerSection";
import CTASection from "@/components/CTASection";
import ProcessSection from "@/components/ProcessSection";

// Each page reuses the existing sections unchanged; every page ends with the contact form.

export const AboutPage = () => (
  <>
    <AboutSection />
    <CTASection />
  </>
);

export const WorkPage = () => (
  <>
    <ProjectsSection />
    <CTASection />
  </>
);

export const ServicesPage = () => (
  <>
    <AdditionalServices />
    <ProcessSection />
    <CTASection />
  </>
);

export const PackagesPage = () => (
  <>
    <PackagesSection />
    <ComparisonTable />
    <RetainerSection />
    <CTASection />
  </>
);

export const ContactPage = () => <CTASection />;
