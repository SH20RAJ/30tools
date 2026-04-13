import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("decimal-to-hex-converter", "developer");

export default function ToolPage() {
  return <PremiumToolPage toolId="decimal-to-hex-converter" />;
}