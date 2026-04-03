import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Text Compare | Free Online Tool",
  description: "Use this free text compare to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/text-compare",
  },
};

export default function TextComparePage() {
  return (
    <ToolPlaceholderPage
      toolId="text-compare"
      title="Text Compare"
      description="Use this free text compare to get fast and reliable results with clean output."
      categoryName="Text Tools"
      categorySlug="text-tools"
    />
  );
}
