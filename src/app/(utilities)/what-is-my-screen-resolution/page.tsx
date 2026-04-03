import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "What Is My Screen Resolution | Free Online Tool",
  description: "Use this free what is my screen resolution to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/what-is-my-screen-resolution",
  },
};

export default function WhatIsMyScreenResolutionPage() {
  return (
    <ToolPlaceholderPage
      toolId="what-is-my-screen-resolution"
      title="What Is My Screen Resolution"
      description="Use this free what is my screen resolution to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
