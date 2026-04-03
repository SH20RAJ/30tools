import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Random UUID Generator | Free Online Tool",
  description: "Use this free random uuid generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/random-uuid-generator",
  },
};

export default function RandomUuidGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="random-uuid-generator"
      title="Random UUID Generator"
      description="Use this free random uuid generator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
