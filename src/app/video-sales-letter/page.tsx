
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Video Sales Letter - Free Online Tool | 30Tools" },
  description: "Free online Video Sales Letter. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Video Sales Letter</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
        We are currently building this tool to help you with your video sales letter needs.
        <br />
        Stay tuned, it will be available soon!
      </p>
      <div className="p-8 bg-muted/30 rounded-2xl border border-border inline-block">
        <span className="text-2xl font-bold text-primary">Coming Soon 🚀</span>
      </div>
    </div>
  );
}
