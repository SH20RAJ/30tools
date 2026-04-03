import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "FAQ Schema Generator | Free Online Tool",
  description: "Use this free faq schema generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/faq-schema-generator",
  },
};

export default function FaqSchemaGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="faq-schema-generator"
      title="FAQ Schema Generator"
      description="Use this free faq schema generator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
