import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Video Count Checker | Free Online Tool",
  description: "Use this free youtube video count checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-video-count-checker",
  },
};

export default function YoutubeVideoCountCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-video-count-checker"
      title="YouTube Video Count Checker"
      description="Use this free youtube video count checker to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
