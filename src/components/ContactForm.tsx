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

    const { error } = await supabase.from("contacts").insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      message: form.message,
    });

    if (error) {
      console.error("Submission error:", error.message);
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
        <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground font-body text-sm mb-4">
          Thanks for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setForm(INITIAL); setStatus("idle"); }}
          className="text-accent hover:underline font-body text-sm"
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
        <h3 className="font-heading text-xl font-bold mb-2">Something went wrong</h3>
        <p className="text-muted-foreground font-body text-sm mb-4">{errorMsg}</p>
        <Button onClick={() => setStatus("idle")} className="btn-gold">
          Try Again
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="font-body font-medium">Name *</Label>
          <Input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="font-body focus-visible:ring-accent/50 focus-visible:border-accent"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className="font-body font-medium">Email *</Label>
          <Input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="font-body focus-visible:ring-accent/50 focus-visible:border-accent"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone" className="font-body font-medium">
          Phone <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="066 404 0070"
          className="font-body focus-visible:ring-accent/50 focus-visible:border-accent"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message" className="font-body font-medium">
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
          className="font-body resize-none focus-visible:ring-accent/50 focus-visible:border-accent"
        />
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
