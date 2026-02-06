import type { Metadata } from "next";
import PdfMerger from "@/components/tools/pdf/PdfMerger";

export const metadata: Metadata = {
  title: { absolute: "PDF Merger - Combine PDF Files Online | 30Tools" },
  description: "Merge multiple PDF files into one document instantly. Free online PDF combiner. No file upload required, 100% secure.",
  keywords: ["pdf merger", "combine pdf", "merge pdf files", "pdf joiner", "pdf combiner"],
};

export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Merge PDF Files</h1>
        <p className="text-muted-foreground">
          Combine multiple PDF documents into a single file. Drag and drop to reorder.
        </p>
      </div>
      <PdfMerger />
    </div>
  );
}
