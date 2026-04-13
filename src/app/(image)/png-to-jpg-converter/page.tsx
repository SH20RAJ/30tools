import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("png-to-jpg-converter", "image");

export default function ToolPage() {
  return <PremiumToolPage toolId="png-to-jpg-converter" />;
}