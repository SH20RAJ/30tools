import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Text Sorter | Free Online Tool",
  description: "Use this free text sorter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/text-sorter",
  },
};

export default function TextSorterPage() {
  return (
    <ToolPlaceholderPage
      toolId="text-sorter"
      title="Text Sorter"
      description="Use this free text sorter to get fast and reliable results with clean output."
      categoryName="Text Tools"
      categorySlug="text-tools"
    />
  );
}
