import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Domain Age Checker | Free Online Tool",
  description: "Use this free domain age checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/domain-age-checker",
  },
};

export default function DomainAgeCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="domain-age-checker"
      title="Domain Age Checker"
      description="Use this free domain age checker to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
