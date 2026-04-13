import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("rgb-to-hex-converter", "utilities");

export default function ToolPage() {
  return <PremiumToolPage toolId="rgb-to-hex-converter" />;
}