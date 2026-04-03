import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Description Generator | Free Online Tool",
  description: "Use this free youtube description generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-description-generator",
  },
};

export default function YoutubeDescriptionGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-description-generator"
      title="YouTube Description Generator"
      description="Use this free youtube description generator to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
