import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Title Generator | Free Online Tool",
  description: "Use this free youtube title generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-title-generator",
  },
};

export default function YoutubeTitleGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-title-generator"
      title="YouTube Title Generator"
      description="Use this free youtube title generator to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
