import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Redirect Checker | Free Online Tool",
  description: "Use this free redirect checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/redirect-checker",
  },
};

export default function RedirectCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="redirect-checker"
      title="Redirect Checker"
      description="Use this free redirect checker to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
