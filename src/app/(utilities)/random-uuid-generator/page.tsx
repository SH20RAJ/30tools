import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("random-uuid-generator", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="random-uuid-generator" />;
}