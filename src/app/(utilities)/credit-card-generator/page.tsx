import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Credit Card Generator | Free Online Tool",
  description: "Use this free credit card generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/credit-card-generator",
  },
};

export default function CreditCardGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="credit-card-generator"
      title="Credit Card Generator"
      description="Use this free credit card generator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
