import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("currency-converter", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="currency-converter" />;
}