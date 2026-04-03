import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Page Size Checker | Free Online Tool",
  description: "Use this free page size checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/page-size-checker",
  },
};

export default function PageSizeCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="page-size-checker"
      title="Page Size Checker"
      description="Use this free page size checker to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
