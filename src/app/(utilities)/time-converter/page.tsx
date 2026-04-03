import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Time Converter | Free Online Tool",
  description: "Use this free time converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/time-converter",
  },
};

export default function TimeConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="time-converter"
      title="Time Converter"
      description="Use this free time converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
