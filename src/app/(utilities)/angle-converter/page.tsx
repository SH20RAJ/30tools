import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("angle-converter", "utilities");

export default function ToolPage() {
  return <PremiumToolPage toolId="angle-converter" />;
}