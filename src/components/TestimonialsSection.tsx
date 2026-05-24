import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, Luxe Boutique",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "They transformed our entire online presence. The AI chatbot alone increased our customer engagement by 40%. Absolutely world-class service.",
  },
  {
    name: "David Chen",
    role: "Operations Director, GreenField Logistics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The automation suite they built saved us over 20 hours a week. Our supply chain runs smoother than ever and the analytics dashboard is incredibly insightful.",
  },
  {
    name: "Amara Osei",
    role: "Founder, Artisan Studio",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Beautiful design, blazing fast, and the SEO results speak for themselves. We went from page 5 to page 1 on Google within two months.",
  },
  {
    name: "James Thornton",
    role: "Managing Director, PropVault",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The property management system they delivered is phenomenal. Our tenants love the portal and our admin workload dropped by 60%.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="dark-section py-24">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Don't just take our word for it — hear from the businesses we've helped grow.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-secondary/50 backdrop-blur-sm border border-border/20 rounded-lg p-8 md:p-10 text-center"
            >
              <Quote className="w-10 h-10 text-accent/30 mx-auto mb-6" />
              <p className="text-base sm:text-lg md:text-xl font-body leading-relaxed mb-6 sm:mb-8 text-cream/90">
                "{testimonials[current].text}"
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                loading="lazy"
                decoding="async"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mx-auto mb-3 object-cover border-2 border-accent/30"
              />
              <p className="font-heading font-bold text-lg">{testimonials[current].name}</p>
              <p className="text-muted-foreground font-body text-sm">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-accent/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
