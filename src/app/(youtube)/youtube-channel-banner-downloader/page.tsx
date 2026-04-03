import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Channel Banner Downloader | Free Online Tool",
  description: "Use this free youtube channel banner downloader to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-channel-banner-downloader",
  },
};

export default function YoutubeChannelBannerDownloaderPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-channel-banner-downloader"
      title="YouTube Channel Banner Downloader"
      description="Use this free youtube channel banner downloader to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
