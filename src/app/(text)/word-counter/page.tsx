import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Word Counter | Free Online Tool",
  description: "Use this free word counter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/word-counter",
  },
};

export default function WordCounterPage() {
  return (
    <ToolPlaceholderPage
      toolId="word-counter"
      title="Word Counter"
      description="Use this free word counter to get fast and reliable results with clean output."
      categoryName="Text Tools"
      categorySlug="text-tools"
    />
  );
}
