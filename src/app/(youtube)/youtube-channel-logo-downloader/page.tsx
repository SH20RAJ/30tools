import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Channel Logo Downloader | Free Online Tool",
  description: "Use this free youtube channel logo downloader to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-channel-logo-downloader",
  },
};

export default function YoutubeChannelLogoDownloaderPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-channel-logo-downloader"
      title="YouTube Channel Logo Downloader"
      description="Use this free youtube channel logo downloader to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
