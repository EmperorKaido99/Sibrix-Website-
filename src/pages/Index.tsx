import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import HomeOverview from "@/components/HomeOverview";
import CTASection from "@/components/CTASection";

// Links from the old single-page site (e.g. sibrixgroup.co.za/#services) open the matching page.
const LEGACY_HASHES: Record<string, string> = {
  "#about": "/about",
  "#projects": "/work",
  "#services": "/services",
  "#packages": "/packages",
  "#comparison": "/packages",
  "#retainer": "/packages",
  "#cta": "/contact",
};

const Index = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const to = LEGACY_HASHES[hash];
    if (to) navigate(to, { replace: true });
  }, [hash, navigate]);

  return (
    <>
      <HeroSection />
      <HomeOverview />
      <CTASection />
    </>
  );
};

export default Index;
