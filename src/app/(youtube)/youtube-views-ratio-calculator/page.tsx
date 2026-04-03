import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Views Ratio Calculator | Free Online Tool",
  description: "Use this free youtube views ratio calculator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-views-ratio-calculator",
  },
};

export default function YoutubeViewsRatioCalculatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-views-ratio-calculator"
      title="YouTube Views Ratio Calculator"
      description="Use this free youtube views ratio calculator to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
