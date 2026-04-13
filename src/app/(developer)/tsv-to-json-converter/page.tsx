import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("tsv-to-json-converter", "developer");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="tsv-to-json-converter" />;
}