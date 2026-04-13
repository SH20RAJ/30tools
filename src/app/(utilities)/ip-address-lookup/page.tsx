import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("ip-address-lookup", "utilities");

export default function ToolPage() {
  return <PremiumToolPage toolId="ip-address-lookup" />;
}