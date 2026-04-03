import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Tag Generator | Free Online Tool",
  description: "Use this free youtube tag generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-tag-generator",
  },
};

export default function YoutubeTagGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-tag-generator"
      title="YouTube Tag Generator"
      description="Use this free youtube tag generator to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
