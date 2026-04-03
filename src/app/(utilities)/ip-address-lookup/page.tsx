import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "IP Address Lookup | Free Online Tool",
  description: "Use this free ip address lookup to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/ip-address-lookup",
  },
};

export default function IpAddressLookupPage() {
  return (
    <ToolPlaceholderPage
      toolId="ip-address-lookup"
      title="IP Address Lookup"
      description="Use this free ip address lookup to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
