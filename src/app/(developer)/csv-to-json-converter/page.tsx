import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("csv-to-json-converter", "developer");

export default function ToolPage() {
  return <PremiumToolPage toolId="csv-to-json-converter" />;
}