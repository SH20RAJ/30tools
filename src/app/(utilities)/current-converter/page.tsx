import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("current-converter", "utilities");

export default function ToolPage() {
  return <PremiumToolPage toolId="current-converter" />;
}