import type { Metadata } from "next";
import TextReverser from "@/components/tools/text/TextReverser";

export const metadata: Metadata = {
  title: { absolute: "Text Reverser - Free Online Tool | 30Tools" },
  description: "Reverse text, words, or lines instantly with our free online Text Reverser tool. Simple, fast, and secure.",
  keywords: ["text reverser", "reverse text", "reverse words", "backwards text generator", "online text tool"],
};

export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Text Reverser</h1>
        <p className="text-muted-foreground">
          Reverse your text, words, or standard lines instantly.
        </p>
      </div>
      <TextReverser />
    </div>
  );
}
