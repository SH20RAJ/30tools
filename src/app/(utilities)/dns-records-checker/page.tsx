import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "DNS Records Checker | Free Online Tool",
  description: "Use this free dns records checker to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/dns-records-checker",
  },
};

export default function DnsRecordsCheckerPage() {
  return (
    <ToolPlaceholderPage
      toolId="dns-records-checker"
      title="DNS Records Checker"
      description="Use this free dns records checker to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
