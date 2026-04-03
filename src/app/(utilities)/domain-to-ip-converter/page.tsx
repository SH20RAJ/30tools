import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Domain to IP Converter | Free Online Tool",
  description: "Use this free domain to ip converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/domain-to-ip-converter",
  },
};

export default function DomainToIpConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="domain-to-ip-converter"
      title="Domain to IP Converter"
      description="Use this free domain to ip converter to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
