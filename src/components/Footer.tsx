import { FileText, Twitter, Github, Linkedin, Youtube } from "lucide-react";

const footerSections = [
  {
    title: "Tools",
    links: ["Merge PDF", "Split PDF", "Compress PDF", "Convert PDF", "OCR PDF"],
  },
  {
    title: "Company",
    links: ["About Us", "Blog", "Careers", "Press Kit"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact", "Status", "API"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

const socials = [
  { icon: Twitter, href: "#" },
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <div className="gradient-btn w-7 h-7 rounded-md flex items-center justify-center">
              <FileText size={14} />
            </div>
            <span className="gradient-text">PDFTools</span>
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Fast, secure, and free PDF tools for everyone.
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold text-sm mb-4">{section.title}</h4>
            <ul className="space-y-2.5">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} PDFTools. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
