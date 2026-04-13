import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("jpg-to-gif-converter", "image");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="jpg-to-gif-converter" />;
}