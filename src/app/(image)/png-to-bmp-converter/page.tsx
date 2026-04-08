import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("png-to-bmp-converter", "image");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="png-to-bmp-converter" />;
}