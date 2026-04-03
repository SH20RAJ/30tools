import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Hashtag Generator | Free Online Tool",
  description: "Use this free youtube hashtag generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-hashtag-generator",
  },
};

export default function YoutubeHashtagGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-hashtag-generator"
      title="YouTube Hashtag Generator"
      description="Use this free youtube hashtag generator to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
