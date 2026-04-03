import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Screen Resolution Simulator | Free Online Tool",
  description: "Use this free screen resolution simulator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/screen-resolution-simulator",
  },
};

export default function ScreenResolutionSimulatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="screen-resolution-simulator"
      title="Screen Resolution Simulator"
      description="Use this free screen resolution simulator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
