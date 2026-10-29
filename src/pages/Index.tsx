import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AdditionalServices from "@/components/AdditionalServices";
import PackagesSection from "@/components/PackagesSection";
import ComparisonTable from "@/components/ComparisonTable";
import RetainerSection from "@/components/RetainerSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AdditionalServices />
      <PackagesSection />
      <ComparisonTable />
      <RetainerSection />
      <TeamSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
