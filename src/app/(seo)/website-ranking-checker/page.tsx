import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("website-ranking-checker", "seo");

export default function ToolPage() {
  return <PremiumToolPage toolId="website-ranking-checker" />;
}