import type { Metadata } from "next";
import PdfCompressor from "@/components/tools/pdf/PdfCompressor";

export const metadata: Metadata = {
  title: { absolute: "PDF Compressor - Reduce File Size Online | 30Tools" },
  description: "Reduce PDF file size online for free without losing quality. Optimize documents for email and web sharing securely in your browser.",
  keywords: ["pdf compressor", "compress pdf", "reduce pdf size", "shrink pdf", "optimize pdf"],
};

export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Compress PDF File</h1>
        <p className="text-muted-foreground">
          Optimize your PDF documents to reduce file size.
        </p>
      </div>
      <PdfCompressor />
    </div>
  );
}
