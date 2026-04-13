import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("whois-domain-lookup", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="whois-domain-lookup" />;
}