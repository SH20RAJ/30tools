import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "What Is My User Agent | Free Online Tool",
  description: "Use this free what is my user agent to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/what-is-my-user-agent",
  },
};

export default function WhatIsMyUserAgentPage() {
  return (
    <ToolPlaceholderPage
      toolId="what-is-my-user-agent"
      title="What Is My User Agent"
      description="Use this free what is my user agent to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
