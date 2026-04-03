import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Roman Numerals to Number | Free Online Tool",
  description: "Use this free roman numerals to number to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/roman-numerals-to-number",
  },
};

export default function RomanNumeralsToNumberPage() {
  return (
    <ToolPlaceholderPage
      toolId="roman-numerals-to-number"
      title="Roman Numerals to Number"
      description="Use this free roman numerals to number to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
