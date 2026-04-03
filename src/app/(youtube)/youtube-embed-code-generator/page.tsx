import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Embed Code Generator | Free Online Tool",
  description: "Use this free youtube embed code generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-embed-code-generator",
  },
};

export default function YoutubeEmbedCodeGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-embed-code-generator"
      title="YouTube Embed Code Generator"
      description="Use this free youtube embed code generator to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
