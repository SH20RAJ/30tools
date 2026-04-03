import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Comma Separator | Free Online Tool",
  description: "Use this free comma separator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/comma-separator",
  },
};

export default function CommaSeparatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="comma-separator"
      title="Comma Separator"
      description="Use this free comma separator to get fast and reliable results with clean output."
      categoryName="Text Tools"
      categorySlug="text-tools"
    />
  );
}
