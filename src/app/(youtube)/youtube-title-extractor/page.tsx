import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Title Extractor | Free Online Tool",
  description: "Use this free youtube title extractor to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-title-extractor",
  },
};

export default function YoutubeTitleExtractorPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-title-extractor"
      title="YouTube Title Extractor"
      description="Use this free youtube title extractor to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
