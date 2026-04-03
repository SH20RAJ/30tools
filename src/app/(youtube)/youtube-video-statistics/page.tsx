import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Video Statistics | Free Online Tool",
  description: "Use this free youtube video statistics to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-video-statistics",
  },
};

export default function YoutubeVideoStatisticsPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-video-statistics"
      title="YouTube Video Statistics"
      description="Use this free youtube video statistics to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
