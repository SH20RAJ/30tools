
import type { Metadata } from "next";
import PdfProtector from "@/components/tools/pdf/PdfProtector";

export const metadata: Metadata = {
  title: { absolute: "PDF Password Protector - Encrypt PDF Online | 30Tools" },
  description: "Secure your PDF files with a password instantly using our free online tool. Encrypt documents directly in your browser without uploading.",
  keywords: ["pdf protector", "encrypt pdf", "password protect pdf", "secure pdf", "add password to pdf"],
};

export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Protect PDF with Password</h1>
        <p className="text-muted-foreground">
          Encrypt your important PDF documents with top-level security. 
          <br />
          Files are processed locally in your browser for maximum privacy.
        </p>
      </div>
      <PdfProtector />
    </div>
  );
}
