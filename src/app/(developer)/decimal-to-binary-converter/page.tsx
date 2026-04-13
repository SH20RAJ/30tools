import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("decimal-to-binary-converter", "developer");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="decimal-to-binary-converter" />;
}