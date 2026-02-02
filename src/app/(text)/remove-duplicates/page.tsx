import type { Metadata } from "next";
import RemoveDuplicates from "@/components/tools/text/RemoveDuplicates";

export const metadata: Metadata = {
  title: { absolute: "Remove Duplicate Lines - Free Online Tool | 30Tools" },
  description: "Instantly remove duplicate lines from your text or list. Clean up your data with our free, secure online tool.",
  keywords: ["remove duplicates", "duplicate line remover", "deduplicate text", "clean list", "online text tool"],
};

export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Remove Duplicate Lines</h1>
        <p className="text-muted-foreground">
          Paste your text list below to automatically remove repetitive lines.
        </p>
      </div>
      <RemoveDuplicates />
    </div>
  );
}
