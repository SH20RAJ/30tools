import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("meta-tag-generator", "seo");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="meta-tag-generator" />;
}