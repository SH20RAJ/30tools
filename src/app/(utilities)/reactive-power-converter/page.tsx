import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("reactive-power-converter", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="reactive-power-converter" />;
}