import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Random Word Generator | Free Online Tool",
  description: "Use this free random word generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/random-word-generator",
  },
};

export default function RandomWordGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="random-word-generator"
      title="Random Word Generator"
      description="Use this free random word generator to get fast and reliable results with clean output."
      categoryName="Text Tools"
      categorySlug="text-tools"
    />
  );
}
