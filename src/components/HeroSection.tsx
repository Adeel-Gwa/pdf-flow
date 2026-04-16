import { Upload, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative blobs */}
      <div className="blob-shape w-96 h-96 bg-primary -top-20 -left-20" />
      <div className="blob-shape w-72 h-72 bg-secondary top-40 right-10" />
      <div className="blob-shape w-60 h-60 bg-accent bottom-10 left-1/3" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Free & Secure PDF Tools
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              All-in-One PDF Tools –{" "}
              <span className="gradient-text">Fast, Secure & Free</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Merge, split, compress, convert, and edit PDFs effortlessly. Trusted
              by millions — no installation, no signup required.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-btn rounded-full px-8 text-base gap-2">
                Start Using Tools <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-base gap-2 border-primary/30 hover:bg-primary/5"
              >
                <Upload size={18} /> Upload File
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> No signup needed
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> 100% free
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> SSL encrypted
              </span>
            </div>
          </div>

          <div className="hidden lg:flex justify-center animate-float">
            <img
              src={heroImg}
              alt="PDF tools illustration"
              width={800}
              height={600}
              className="w-full max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
