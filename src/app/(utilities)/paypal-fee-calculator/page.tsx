import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Paypal Fee Calculator | Free Online Tool",
  description: "Use this free paypal fee calculator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/paypal-fee-calculator",
  },
};

export default function PaypalFeeCalculatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="paypal-fee-calculator"
      title="Paypal Fee Calculator"
      description="Use this free paypal fee calculator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
