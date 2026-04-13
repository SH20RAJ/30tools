import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("image-to-base64-converter", "image");

export default function ToolPage() {
  return <PremiumToolPage toolId="image-to-base64-converter" />;
}