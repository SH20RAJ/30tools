import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Hashtag Extractor | Free Online Tool",
  description: "Use this free youtube hashtag extractor to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-hashtag-extractor",
  },
};

export default function YoutubeHashtagExtractorPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-hashtag-extractor"
      title="YouTube Hashtag Extractor"
      description="Use this free youtube hashtag extractor to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
