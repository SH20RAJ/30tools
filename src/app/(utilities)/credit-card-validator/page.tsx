import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Credit Card Validator | Free Online Tool",
  description: "Use this free credit card validator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/credit-card-validator",
  },
};

export default function CreditCardValidatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="credit-card-validator"
      title="Credit Card Validator"
      description="Use this free credit card validator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
