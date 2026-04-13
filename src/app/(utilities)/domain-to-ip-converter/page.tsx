import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("domain-to-ip-converter", "utilities");

export default function ToolPage() {
  return <PremiumToolPage toolId="domain-to-ip-converter" />;
}