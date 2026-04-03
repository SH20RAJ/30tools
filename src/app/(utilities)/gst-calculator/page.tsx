import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "GST Calculator | Free Online Tool",
  description: "Use this free gst calculator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/gst-calculator",
  },
};

export default function GstCalculatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="gst-calculator"
      title="GST Calculator"
      description="Use this free gst calculator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
