import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Disclaimer Generator | Free Online Tool",
  description: "Use this free disclaimer generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/disclaimer-generator",
  },
};

export default function DisclaimerGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="disclaimer-generator"
      title="Disclaimer Generator"
      description="Use this free disclaimer generator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
