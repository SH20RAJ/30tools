import type { Metadata } from "next";
import PdfReader from "@/components/tools/pdf/PdfReader";

export const metadata: Metadata = {
  title: { absolute: "PDF Reader - View PDF Files Online | 30Tools" },
  description: "View PDF files directly in your browser with our free online PDF Reader. No software installation required. Secure and fast.",
  keywords: ["pdf reader", "view pdf online", "pdf viewer", "open pdf", "read pdf"],
};

export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 min-h-screen flex flex-col">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Online PDF Reader</h1>
        <p className="text-muted-foreground">
          Open and view PDF files instantly in your browser.
        </p>
      </div>
      <PdfReader />
    </div>
  );
}
