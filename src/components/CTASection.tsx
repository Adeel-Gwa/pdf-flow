import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const CTASection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0" style={{ background: "var(--gradient-cta)" }} />
    <div className="blob-shape w-80 h-80 bg-primary-foreground/10 top-0 left-0" />
    <div className="blob-shape w-64 h-64 bg-primary-foreground/10 bottom-0 right-10" />

    <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
      <ScrollReveal direction="scale">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
          Simplify Your PDF Workflow Today
        </h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto text-lg mt-4">
          Join millions of users who trust PDFTools for their daily document needs.
        </p>
        <div className="pt-4">
          <Button
            size="lg"
            className="rounded-full px-10 text-base font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2"
          >
            Get Started Free <ArrowRight size={18} />
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
