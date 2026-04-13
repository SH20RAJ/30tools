import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("privacy-policy-generator", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="privacy-policy-generator" />;
}