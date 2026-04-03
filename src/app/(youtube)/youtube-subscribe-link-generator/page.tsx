import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Subscribe Link Generator | Free Online Tool",
  description: "Use this free youtube subscribe link generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-subscribe-link-generator",
  },
};

export default function YoutubeSubscribeLinkGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-subscribe-link-generator"
      title="YouTube Subscribe Link Generator"
      description="Use this free youtube subscribe link generator to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
