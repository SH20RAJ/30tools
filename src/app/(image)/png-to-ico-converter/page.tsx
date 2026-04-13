import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("png-to-ico-converter", "image");

export default function ToolPage() {
  return <PremiumToolPage toolId="png-to-ico-converter" />;
}