import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Timestamp Link Generator | Free Online Tool",
  description: "Use this free youtube timestamp link generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-timestamp-link-generator",
  },
};

export default function YoutubeTimestampLinkGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-timestamp-link-generator"
      title="YouTube Timestamp Link Generator"
      description="Use this free youtube timestamp link generator to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
