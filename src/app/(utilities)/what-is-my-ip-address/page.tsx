import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "What Is My IP Address | Free Online Tool",
  description: "Use this free what is my ip address to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/what-is-my-ip-address",
  },
};

export default function WhatIsMyIpAddressPage() {
  return (
    <ToolPlaceholderPage
      toolId="what-is-my-ip-address"
      title="What Is My IP Address"
      description="Use this free what is my ip address to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
