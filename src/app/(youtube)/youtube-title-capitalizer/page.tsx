import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Youtube Video Title Capitalizer | Free Online Tool",
  description: "Use this free youtube video title capitalizer to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-title-capitalizer",
  },
};

export default function YoutubeVideoTitleCapitalizerPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-title-capitalizer"
      title="Youtube Video Title Capitalizer"
      description="Use this free youtube video title capitalizer to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
