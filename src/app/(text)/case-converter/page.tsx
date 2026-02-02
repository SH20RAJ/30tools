import type { Metadata } from "next";
import CaseConverter from "@/components/tools/text/CaseConverter";

export const metadata: Metadata = {
  title: { absolute: "Case Converter - Free Online Text Transformation Tool | 30Tools" },
  description: "Convert text case online instantly. Switch between UPPERCASE, lowercase, Title Case, Sentence case and more. Free, fast, and secure text tool.",
  keywords: ["case converter", "text converter", "uppercase to lowercase", "title case generator", "sentence case converter", "online text tool"],
};

export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Online Case Converter</h1>
        <p className="text-muted-foreground">
          Instantly convert text between different cases. Simply type or paste your text below.
        </p>
      </div>
      <CaseConverter />
    </div>
  );
}
