import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Remove Line Breaks | Free Online Tool",
  description: "Use this free remove line breaks to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/remove-line-breaks",
  },
};

export default function RemoveLineBreaksPage() {
  return (
    <ToolPlaceholderPage
      toolId="remove-line-breaks"
      title="Remove Line Breaks"
      description="Use this free remove line breaks to get fast and reliable results with clean output."
      categoryName="Text Tools"
      categorySlug="text-tools"
    />
  );
}
