import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Tag Extractor | Free Online Tool",
  description: "Use this free youtube tag extractor to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-tag-extractor",
  },
};

export default function YoutubeTagExtractorPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-tag-extractor"
      title="YouTube Tag Extractor"
      description="Use this free youtube tag extractor to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
