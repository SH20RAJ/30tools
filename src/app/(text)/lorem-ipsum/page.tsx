import type { Metadata } from "next";
import LoremIpsumGenerator from "@/components/tools/text/LoremIpsumGenerator";

export const metadata: Metadata = {
  title: { absolute: "Lorem Ipsum Generator - Free Placeholder Text | 30Tools" },
  description: "Generate Lorem Ipsum placeholder text instantly. Customize paragraphs, sentences, or words. Free developer tool.",
  keywords: ["lorem ipsum generator", "dummy text generator", "placeholder text", "filler text", "design tool"],
};

export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Lorem Ipsum Generator</h1>
        <p className="text-muted-foreground">
          Quickly generate filler text for your specialized projects.
        </p>
      </div>
      <LoremIpsumGenerator />
    </div>
  );
}
