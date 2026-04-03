import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Channel ID Extractor | Free Online Tool",
  description: "Use this free youtube channel id extractor to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-channel-id-extractor",
  },
};

export default function YoutubeChannelIdExtractorPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-channel-id-extractor"
      title="YouTube Channel ID Extractor"
      description="Use this free youtube channel id extractor to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
