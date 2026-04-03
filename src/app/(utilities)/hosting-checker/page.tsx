import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Hosting Checker | Free Online Tool",
  description: "Use this free hosting checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/hosting-checker",
  },
};

export default function HostingCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="hosting-checker"
      title="Hosting Checker"
      description="Use this free hosting checker to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
