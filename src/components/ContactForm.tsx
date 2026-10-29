import { useState } from "react";
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

const ContactForm = () => {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Email the enquiry to the Sibrix mailbox, and keep a copy in Supabase when configured.
    const sendEmail = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
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
            message: form.message,
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
          Thanks for reaching out. We'll get back to you within one business day.
        </p>
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
    </form>
  );
};

export default ContactForm;
