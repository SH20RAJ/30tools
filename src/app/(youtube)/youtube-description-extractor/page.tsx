import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Description Extractor | Free Online Tool",
  description: "Use this free youtube description extractor to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-description-extractor",
  },
};

export default function YoutubeDescriptionExtractorPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-description-extractor"
      title="YouTube Description Extractor"
      description="Use this free youtube description extractor to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
