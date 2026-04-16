import { Zap, ShieldCheck, CloudOff, Cloud } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Process your files in seconds with our optimized cloud infrastructure.",
    color: "text-primary bg-primary/10",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    desc: "All files are encrypted and auto-deleted after 2 hours. Your data is safe.",
    color: "text-accent bg-accent/10",
  },
  {
    icon: CloudOff,
    title: "No Installation",
    desc: "Works directly in your browser. No software downloads or plugins needed.",
    color: "text-secondary bg-secondary/10",
  },
  {
    icon: Cloud,
    title: "Cloud-Based",
    desc: "Access your tools from any device, anywhere. Everything runs in the cloud.",
    color: "text-primary bg-primary/10",
  },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding bg-muted/50 relative">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Why Choose <span className="gradient-text">PDFTools</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Built for speed, security, and simplicity.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 120} direction="up">
            <div className="bg-card rounded-2xl p-6 text-center space-y-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-border/50 h-full">
              <div className={`inline-flex p-3 rounded-xl ${f.color}`}>
                <f.icon size={24} />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
