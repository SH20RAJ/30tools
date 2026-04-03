import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Whois Domain Lookup | Free Online Tool",
  description: "Use this free whois domain lookup to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/whois-domain-lookup",
  },
};

export default function WhoisDomainLookupPage() {
  return (
    <ToolPlaceholderPage
      toolId="whois-domain-lookup"
      title="Whois Domain Lookup"
      description="Use this free whois domain lookup to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
