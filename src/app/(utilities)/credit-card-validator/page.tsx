import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("credit-card-validator", "utilities");

export default function ToolPage() {
  return <PremiumToolPage toolId="credit-card-validator" />;
}