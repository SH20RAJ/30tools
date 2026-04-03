import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Channel Statistics | Free Online Tool",
  description: "Use this free youtube channel statistics to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-channel-statistics",
  },
};

export default function YoutubeChannelStatisticsPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-channel-statistics"
      title="YouTube Channel Statistics"
      description="Use this free youtube channel statistics to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
