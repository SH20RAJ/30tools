import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("hex-to-octal-converter", "developer");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="hex-to-octal-converter" />;
}