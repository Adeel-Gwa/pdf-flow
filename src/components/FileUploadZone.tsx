import { useState, useRef, useCallback } from "react";
import { Upload, X, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ACCEPTED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];
const MAX_SIZE = 100 * 1024 * 1024; // 100MB

type FileItem = {
  file: File;
  id: string;
  progress: number;
  status: "uploading" | "done" | "error";
  error?: string;
};

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const FileUploadZone = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const simulateUpload = useCallback((item: FileItem) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setFiles((prev) =>
          prev.map((f) => (f.id === item.id ? { ...f, progress: 100, status: "done" } : f))
        );
      } else {
        setFiles((prev) =>
          prev.map((f) => (f.id === item.id ? { ...f, progress } : f))
        );
      }
    }, 200);
  }, []);

  const addFiles = useCallback(
    (incoming: FileList | File[]) => {
      const newItems: FileItem[] = [];
      Array.from(incoming).forEach((file) => {
        const id = crypto.randomUUID();
        if (!ACCEPTED_TYPES.includes(file.type)) {
          newItems.push({ file, id, progress: 0, status: "error", error: "Unsupported file type" });
          return;
        }
        if (file.size > MAX_SIZE) {
          newItems.push({ file, id, progress: 0, status: "error", error: "File exceeds 100 MB" });
          return;
        }
        const item: FileItem = { file, id, progress: 0, status: "uploading" };
        newItems.push(item);
        setTimeout(() => simulateUpload(item), 100);
      });
      setFiles((prev) => [...prev, ...newItems]);
    },
    [simulateUpload]
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
    },
    [addFiles]
  );

  const removeFile = (id: string) => setFiles((prev) => prev.filter((f) => f.id !== id));

  return (
    <div className="mt-16 max-w-2xl mx-auto space-y-4">
      <ScrollReveal>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer group ${
            dragOver
              ? "border-primary bg-primary/10 scale-[1.02]"
              : "border-primary/30 hover:border-primary/50 hover:bg-primary/5"
          }`}
        >
          <Upload
            size={40}
            className={`mx-auto mb-4 transition-colors ${
              dragOver ? "text-primary" : "text-primary/50 group-hover:text-primary"
            }`}
          />
          <p className="font-semibold text-lg mb-1">Drag & Drop your files here</p>
          <p className="text-sm text-muted-foreground">
            PDF, Word, Excel, JPG, PNG — up to 100 MB per file
          </p>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.webp"
            className="hidden"
            onChange={(e) => e.target.files && addFiles(e.target.files)}
          />
        </div>
      </ScrollReveal>

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border/50 rounded-xl p-4 flex items-center gap-4 animate-slide-up"
            >
              <div
                className={`p-2 rounded-lg ${
                  item.status === "error" ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"
                }`}
              >
                <FileText size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium truncate">{item.file.name}</p>
                  <span className="text-xs text-muted-foreground ml-2 shrink-0">
                    {formatSize(item.file.size)}
                  </span>
                </div>
                {item.status === "error" ? (
                  <div className="flex items-center gap-1 text-xs text-destructive">
                    <AlertCircle size={12} /> {item.error}
                  </div>
                ) : (
                  <div className="relative w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full transition-all duration-300"
                      style={{
                        width: `${item.progress}%`,
                        background: "var(--gradient-primary)",
                      }}
                    />
                  </div>
                )}
                {item.status === "done" && (
                  <div className="flex items-center gap-1 text-xs text-accent mt-1">
                    <CheckCircle2 size={12} /> Upload complete
                  </div>
                )}
              </div>
              <button
                onClick={() => removeFile(item.id)}
                className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploadZone;
