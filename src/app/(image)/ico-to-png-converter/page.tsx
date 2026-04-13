import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("ico-to-png-converter", "image");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="ico-to-png-converter" />;
}