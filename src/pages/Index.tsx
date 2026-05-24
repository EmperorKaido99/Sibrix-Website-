import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import ComparisonTable from "@/components/ComparisonTable";
import ProjectsSection from "@/components/ProjectsSection";
import RetainerSection from "@/components/RetainerSection";
import AdditionalServices from "@/components/AdditionalServices";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Index = () => (
  <ThemeProvider>
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PackagesSection />
      <ComparisonTable />
      <ProjectsSection />
      <RetainerSection />
      <AdditionalServices />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  </ThemeProvider>
);

export default Index;
