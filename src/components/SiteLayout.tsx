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
  const { pathname, hash, key } = useLocation();

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
  }, [pathname]);

  // Jump to the top on a new page, or to #section (e.g. the booking section #cta) when a link has a hash.
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    return () => cancelAnimationFrame(id);
  }, [pathname, hash, key]);

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
