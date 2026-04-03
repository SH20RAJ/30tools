import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "YouTube Money Calculator | Free Online Tool",
  description: "Use this free youtube money calculator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/youtube-money-calculator",
  },
};

export default function YoutubeMoneyCalculatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="youtube-money-calculator"
      title="YouTube Money Calculator"
      description="Use this free youtube money calculator to get fast and reliable results with clean output."
      categoryName="YouTube Tools"
      categorySlug="youtube-tools"
    />
  );
}
