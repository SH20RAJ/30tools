import type { Metadata } from "next";
import ImagesToPdf from "@/components/tools/pdf/ImagesToPdf";

export const metadata: Metadata = {
  title: { absolute: "Images to PDF Converter - JPG/PNG to PDF | 30Tools" },
  description: "Convert your images to PDF online for free. Combine multiple JPG or PNG photos into a single PDF document securely in your browser.",
  keywords: ["images to pdf", "jpg to pdf", "png to pdf", "photo to pdf", "convert images to pdf"],
};

export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Convert Images to PDF</h1>
        <p className="text-muted-foreground">
          Combine your photos into a single PDF document. Drag and drop to reorder.
        </p>
      </div>
      <ImagesToPdf />
    </div>
  );
}
