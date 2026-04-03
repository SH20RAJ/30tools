import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Channel Age Checker | Free Online Tool",
  description: "Use this free youtube channel age checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-channel-age-checker",
  },
};

export default function YoutubeChannelAgeCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-channel-age-checker"
      title="YouTube Channel Age Checker"
      description="Use this free youtube channel age checker to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
