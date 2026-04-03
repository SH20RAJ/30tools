import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Terms And Condition Generator | Free Online Tool",
  description: "Use this free terms and condition generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/terms-and-condition-generator",
  },
};

export default function TermsAndConditionGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="terms-and-condition-generator"
      title="Terms And Condition Generator"
      description="Use this free terms and condition generator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
