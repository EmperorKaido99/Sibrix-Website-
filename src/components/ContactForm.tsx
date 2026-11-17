import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL: FormState = { name: "", email: "", phone: "", message: "" };

const NEEDS = ["Website", "Online store", "AI & automation", "IoT", "IT & CCTV", "Training"];
const PACKAGE_NAMES: Record<string, string> = {
  starter: "Starter Web Presence",
  business: "E-Commerce & Business Suite",
  enterprise: "Full AI & Automation Enterprise",
};

const ContactForm = () => {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);

  // Arriving from the package picker (/contact?package=business): start the message for them.
  // Runs after hydration so the pre-rendered form is unchanged.
  useEffect(() => {
    const pkg = new URLSearchParams(window.location.search).get("package");
    const name = pkg && PACKAGE_NAMES[pkg];
    if (name) setForm((f) => (f.message ? f : { ...f, message: `I'm interested in the ${name} package.\n\n` }));
  }, []);

  const toggleNeed = (n: string) =>
    setNeeds((cur) => (cur.includes(n) ? cur.filter((x) => x !== n) : [...cur, n]));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const message = needs.length ? `Interested in: ${needs.join(", ")}\n\n${form.message}` : form.message;
    const payload = { ...form, message };

    // Email the enquiry to the Sibrix mailbox, and keep a copy in Supabase when configured.
    const sendEmail = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.ok)
      .catch((err) => {
        console.error("Email submission error:", err);
        return false;
      });

    const saveRecord = supabase
      ? supabase
          .from("contacts")
          .insert({
            name: form.name,
            email: form.email,
            phone: form.phone || null,
            message: payload.message,
          })
          .then(({ error }) => {
            if (error) console.error("Database submission error:", error.message);
            return !error;
          })
      : Promise.resolve(false);

    const [emailed, saved] = await Promise.all([sendEmail, saveRecord]);

    if (!emailed && !saved) {
      setErrorMsg("Something went wrong. Please try again or email us directly.");
      setStatus("error");
      return;
    }

    setStatus("success");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <CheckCircle className="w-14 h-14 text-navy mx-auto mb-4" />
        <h3 className="text-3xl font-semibold tracking-tight mb-2">Message sent</h3>
        <p className="text-navy/80 text-base mb-4">
          Thanks for reaching out. Here is what happens next:
        </p>
        <ol className="mx-auto mb-6 max-w-sm space-y-2 text-left text-base">
          <li><strong>1.</strong> We reply within one business day.</li>
          <li><strong>2.</strong> We talk through what you need.</li>
          <li><strong>3.</strong> You get a clear proposal and quote.</li>
        </ol>
        <button
          onClick={() => { setForm(INITIAL); setStatus("idle"); }}
          className="underline underline-offset-4 font-medium text-base"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  if (status === "error") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Something went wrong</h3>
        <p className="text-muted-foreground font-body text-sm mb-4">{errorMsg}</p>
        <Button onClick={() => setStatus("idle")} className="btn-navy h-auto rounded-none">
          Try Again
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-base font-medium">Name *</Label>
          <Input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="h-12 bg-white text-base focus-visible:ring-navy focus-visible:ring-offset-0"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-base font-medium">Email *</Label>
          <Input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="h-12 bg-white text-base focus-visible:ring-navy focus-visible:ring-offset-0"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone" className="text-base font-medium">
          Phone <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="082 123 4567"
          className="h-12 bg-white text-base focus-visible:ring-navy focus-visible:ring-offset-0"
        />
      </div>

      <fieldset className="space-y-2.5">
        <legend className="text-base font-medium">
          What do you need? <span className="text-muted-foreground font-normal">(optional)</span>
        </legend>
        <div className="flex flex-wrap gap-2 pt-1">
          {NEEDS.map((n) => {
            const on = needs.includes(n);
            return (
              <button
                key={n}
                type="button"
                aria-pressed={on}
                onClick={() => toggleNeed(n)}
                className={`px-4 py-2 text-base font-medium transition-colors duration-200 ${
                  on ? "bg-navy text-paper" : "bg-paper-2 text-navy hover:bg-navy/10"
                }`}
              >
                {n}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="space-y-1.5">
        <Label htmlFor="message" className="text-base font-medium">
          Tell us about your project *
        </Label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="What do you need? (e.g., website, e-commerce store, automation, mobile app...)"
          className="bg-white text-base resize-none focus-visible:ring-navy focus-visible:ring-offset-0"
        />
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="btn-green w-full h-auto rounded-none disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </Button>
      <p className="text-sm text-navy/70 leading-relaxed">
        We use your details only to reply to your enquiry. See our{" "}
        <Link to="/privacy" className="underline underline-offset-4 hover:text-navy">privacy policy</Link>.
      </p>
    </form>
  );
};

export default ContactForm;
