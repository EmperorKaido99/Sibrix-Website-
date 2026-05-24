import AnimateOnScroll from "./AnimateOnScroll";
import ContactForm from "./ContactForm";
import { Card, CardContent } from "./ui/card";

const CTASection = () => (
  <section id="cta" className="py-16 md:py-24 dark-section">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* Left - Text */}
        <AnimateOnScroll className="text-center lg:text-left">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">Let's Talk</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[hsl(40,30%,95%)]">
            Ready to grow your business digitally?
          </h2>
          <p className="font-body text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 text-[hsl(40,15%,70%)]">
            Fill out the form and we'll get back to you within 24 hours. Or reach us directly:
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 text-[hsl(40,15%,70%)] font-body text-sm">
            <a href="mailto:sibusisogoodwill871@gmail.com" className="hover:text-accent transition-colors">
              sibusisogoodwill871@gmail.com
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:0664040070" className="hover:text-accent transition-colors">
              066 404 0070
            </a>
          </div>
        </AnimateOnScroll>

        {/* Right - Form */}
        <AnimateOnScroll delay={0.1}>
          <Card className="border-border/20 shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);

export default CTASection;
