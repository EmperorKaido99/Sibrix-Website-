import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const message = encodeURIComponent("Hi Sibrix, I'd like to discuss a project.");

// Floating click-to-chat button. Opens WhatsApp (app on phones, WhatsApp Web on desktop)
// with a short message already typed. Rendered on every page by SiteLayout.
const WhatsAppButton = () => (
  <motion.a
    href={`https://wa.me/${CONTACT.whatsapp}?text=${message}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Sibrix on WhatsApp"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className="btn-green fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 shadow-[0_10px_30px_-8px_hsl(var(--navy)/0.45)] px-4 sm:px-6"
  >
    <MessageCircle size={20} strokeWidth={2.25} className="shrink-0" />
    <span className="hidden sm:inline">WhatsApp us</span>
  </motion.a>
);

export default WhatsAppButton;
