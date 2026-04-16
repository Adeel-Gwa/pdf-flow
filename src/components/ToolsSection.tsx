import { useState } from "react";
import {
  Layers, Scissors, FileDown, Minimize2, FileText, Image, FileOutput,
  Type, Lock, Unlock, Stamp, RotateCcw, FileSearch, BookOpen,
  Languages, Brain, Sparkles, ScanSearch, Search, Upload
} from "lucide-react";

type Tool = { name: string; desc: string; icon: React.ElementType; color: string };

type Category = { name: string; icon: React.ElementType; color: string; tools: Tool[] };

const categories: Category[] = [
  {
    name: "Organize PDF",
    icon: Layers,
    color: "bg-primary/10 text-primary",
    tools: [
      { name: "Merge PDF", desc: "Combine multiple PDFs into one", icon: Layers, color: "text-primary" },
      { name: "Split PDF", desc: "Separate pages from your PDF", icon: Scissors, color: "text-primary" },
      { name: "Rotate PDF", desc: "Rotate PDF pages as needed", icon: RotateCcw, color: "text-primary" },
    ],
  },
  {
    name: "Optimize PDF",
    icon: Minimize2,
    color: "bg-accent/10 text-accent",
    tools: [
      { name: "Compress PDF", desc: "Reduce file size without quality loss", icon: Minimize2, color: "text-accent" },
      { name: "OCR PDF", desc: "Make scanned PDFs searchable", icon: ScanSearch, color: "text-accent" },
    ],
  },
  {
    name: "Convert to PDF",
    icon: FileDown,
    color: "bg-secondary/10 text-secondary",
    tools: [
      { name: "JPG to PDF", desc: "Convert images to PDF format", icon: Image, color: "text-secondary" },
      { name: "Word to PDF", desc: "Convert DOCX files to PDF", icon: FileText, color: "text-secondary" },
      { name: "Excel to PDF", desc: "Convert spreadsheets to PDF", icon: FileText, color: "text-secondary" },
    ],
  },
  {
    name: "Convert from PDF",
    icon: FileOutput,
    color: "bg-primary/10 text-primary",
    tools: [
      { name: "PDF to Word", desc: "Convert PDF to editable DOCX", icon: FileOutput, color: "text-primary" },
      { name: "PDF to JPG", desc: "Extract images from PDF", icon: Image, color: "text-primary" },
      { name: "PDF to Excel", desc: "Convert PDF tables to XLSX", icon: FileOutput, color: "text-primary" },
    ],
  },
  {
    name: "Edit PDF",
    icon: Type,
    color: "bg-accent/10 text-accent",
    tools: [
      { name: "Add Watermark", desc: "Stamp text or image on PDFs", icon: Stamp, color: "text-accent" },
      { name: "Edit Text", desc: "Modify text in your PDF", icon: Type, color: "text-accent" },
      { name: "Page Numbers", desc: "Add page numbers to PDF", icon: BookOpen, color: "text-accent" },
    ],
  },
  {
    name: "PDF Security",
    icon: Lock,
    color: "bg-destructive/10 text-destructive",
    tools: [
      { name: "Protect PDF", desc: "Add password protection", icon: Lock, color: "text-destructive" },
      { name: "Unlock PDF", desc: "Remove PDF password", icon: Unlock, color: "text-destructive" },
    ],
  },
  {
    name: "AI Tools",
    icon: Sparkles,
    color: "bg-secondary/10 text-secondary",
    tools: [
      { name: "AI Summarizer", desc: "Get a quick summary of your PDF", icon: Brain, color: "text-secondary" },
      { name: "Translate PDF", desc: "Translate PDF to any language", icon: Languages, color: "text-secondary" },
      { name: "AI Search", desc: "Ask questions about your PDF", icon: FileSearch, color: "text-secondary" },
    ],
  },
];

const allTools = categories.flatMap((c) => c.tools);

const ToolsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categoryNames = ["All", ...categories.map((c) => c.name)];

  const filteredTools =
    activeFilter === "All"
      ? allTools
      : categories.find((c) => c.name === activeFilter)?.tools ?? [];

  const displayTools = filteredTools.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="tools" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Powerful <span className="gradient-text">PDF Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to work with PDFs, all in one place. No
            installation, no registration.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search PDF tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoryNames.map((name) => (
            <button
              key={name}
              onClick={() => setActiveFilter(name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === name
                  ? "gradient-btn"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Tools grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayTools.map((tool, i) => (
            <div
              key={tool.name}
              className="tool-card group"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-lg bg-muted ${tool.color} transition-transform duration-300 group-hover:scale-110`}>
                  <tool.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-1">{tool.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {displayTools.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No tools found matching your search.</p>
        )}

        {/* Drag & Drop */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="border-2 border-dashed border-primary/30 rounded-2xl p-12 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
            <Upload size={40} className="mx-auto mb-4 text-primary/50 group-hover:text-primary transition-colors" />
            <p className="font-semibold text-lg mb-1">Drag & Drop your files here</p>
            <p className="text-sm text-muted-foreground">or click to browse — up to 100MB per file</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
