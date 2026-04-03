import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "What Is My Browser | Free Online Tool",
  description: "Use this free what is my browser to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/what-is-my-browser",
  },
};

export default function WhatIsMyBrowserPage() {
  return (
    <ToolPlaceholderPage
      toolId="what-is-my-browser"
      title="What Is My Browser"
      description="Use this free what is my browser to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
