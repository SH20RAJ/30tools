
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Video Background Remover - Free Online Tool | 30Tools" },
  description: "Free online Video Background Remover. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Video Background Remover</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
        We are currently building this tool to help you with your video background remover needs.
        <br />
        Stay tuned, it will be available soon!
      </p>
      <div className="p-8 bg-muted/30 rounded-2xl border border-border inline-block">
        <span className="text-2xl font-bold text-primary">Coming Soon 🚀</span>
      </div>
    </div>
  );
}
