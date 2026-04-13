import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("keywords-suggestion-tool", "seo");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="keywords-suggestion-tool" />;
}