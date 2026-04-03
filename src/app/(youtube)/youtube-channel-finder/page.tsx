import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Channel Finder | Free Online Tool",
  description: "Use this free youtube channel finder to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-channel-finder",
  },
};

export default function YoutubeChannelFinderPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-channel-finder"
      title="YouTube Channel Finder"
      description="Use this free youtube channel finder to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
