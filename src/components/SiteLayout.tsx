import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { metaFor, urlFor } from "@/seo/pages";

const setAttr = (selector: string, attr: string, value: string) => {
  document.head.querySelector(selector)?.setAttribute(attr, value);
};

// Shared frame for every page. Also keeps the title, description and canonical URL
// in step with the route during in-browser navigation (the pre-rendered HTML of each
// page already has its own values).
const SiteLayout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const meta = metaFor(pathname);
    document.title = meta.title;
    setAttr('meta[name="description"]', "content", meta.description);
    setAttr('meta[property="og:title"]', "content", meta.title);
    setAttr('meta[property="og:description"]', "content", meta.description);
    setAttr('meta[name="twitter:title"]', "content", meta.title);
    setAttr('meta[name="twitter:description"]', "content", meta.description);
    setAttr('link[rel="canonical"]', "href", urlFor(meta));
    setAttr('meta[property="og:url"]', "content", urlFor(meta));
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SiteLayout;
