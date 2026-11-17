import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/components/SiteLayout";
import CTASection from "@/components/CTASection";
import Index from "./pages/Index.tsx";
import PrivacyPage from "./pages/PrivacyPage.tsx";
import CrimeSpotsCaseStudy from "./pages/CrimeSpotsCaseStudy.tsx";
import { AboutPage, PackagesPage, ServicesPage, WorkPage } from "./pages/SitePages.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

// Providers shared by the browser (main.tsx) and the build-time pre-render (entry-server.tsx).
// Each side supplies its own router: BrowserRouter in the browser, StaticRouter at build time.
export const AppShell = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </MotionConfig>
  </QueryClientProvider>
);

export const AppRoutes = () => (
  <Routes>
    <Route element={<SiteLayout />}>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/work/crimespots" element={<CrimeSpotsCaseStudy />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/packages" element={<PackagesPage />} />
      <Route path="/contact" element={<Navigate to="/#cta" replace />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route
        path="*"
        element={
          <>
            <NotFound />
            <CTASection />
          </>
        }
      />
    </Route>
  </Routes>
);

const App = () => (
  <AppShell>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppShell>
);

export default App;
