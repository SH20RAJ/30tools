import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("webp-to-png-converter", "image");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="webp-to-png-converter" />;
}