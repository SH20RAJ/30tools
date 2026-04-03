import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Number to Roman Numerals | Free Online Tool",
  description: "Use this free number to roman numerals to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/number-to-roman-numerals",
  },
};

export default function NumberToRomanNumeralsPage() {
  return (
    <ToolPlaceholderPage
      toolId="number-to-roman-numerals"
      title="Number to Roman Numerals"
      description="Use this free number to roman numerals to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
