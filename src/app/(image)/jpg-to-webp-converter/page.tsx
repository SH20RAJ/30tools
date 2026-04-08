import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("jpg-to-webp-converter", "image");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="jpg-to-webp-converter" />;
}