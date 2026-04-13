import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("text-to-ascii-converter", "developer");

export default function ToolPage() {
  return <PremiumToolPage toolId="text-to-ascii-converter" />;
}