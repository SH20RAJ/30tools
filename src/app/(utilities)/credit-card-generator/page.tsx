import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("credit-card-generator", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="credit-card-generator" />;
}