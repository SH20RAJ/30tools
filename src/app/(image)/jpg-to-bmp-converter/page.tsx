import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("jpg-to-bmp-converter", "image");

export default function ToolPage() {
  return <PremiumToolPage toolId="jpg-to-bmp-converter" />;
}