import type { Metadata } from "next";
import PdfSplitter from "@/components/tools/pdf/PdfSplitter";

export const metadata: Metadata = {
  title: { absolute: "PDF Splitter - Extract Pages from PDF Online | 30Tools" },
  description: "Split PDF files into separate pages or extracting specific page ranges. Free, fast, and secure online PDF splitter.",
  keywords: ["pdf splitter", "split pdf", "extract pdf pages", "separate pdf pages", "cut pdf"],
};

export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Split PDF Files</h1>
        <p className="text-muted-foreground">
          Extract pages or split your PDF into multiple documents.
        </p>
      </div>
      <PdfSplitter />
    </div>
  );
}
