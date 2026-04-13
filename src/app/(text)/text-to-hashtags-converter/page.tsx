import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("text-to-hashtags-converter", "text");

export default function ToolPage() {
  return <PremiumToolPage toolId="text-to-hashtags-converter" />;
}