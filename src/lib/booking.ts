import type { Path } from "react-router-dom";

/**
 * Every page ends with the booking section (<CTASection />, id="cta"), so there is no separate Contact page.
 * "Book a free consultation" buttons link to that section on the CURRENT page; an optional package id is
 * passed as ?package=… so the pre-written WhatsApp/email message mentions it. SiteLayout scrolls to the hash.
 */
export const bookingLink = (pkg?: string): Partial<Path> => ({
  search: pkg ? `?package=${encodeURIComponent(pkg)}` : "",
  hash: "#cta",
});
