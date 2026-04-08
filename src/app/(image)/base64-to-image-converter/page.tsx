import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("base64-to-image-converter", "image");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="base64-to-image-converter" />;
}