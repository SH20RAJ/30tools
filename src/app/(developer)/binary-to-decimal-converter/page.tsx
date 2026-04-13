import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("binary-to-decimal-converter", "developer");

export default function ToolPage() {
  return <PremiumToolPage toolId="binary-to-decimal-converter" />;
}