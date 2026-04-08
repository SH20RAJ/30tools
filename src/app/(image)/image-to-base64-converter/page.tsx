import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("image-to-base64-converter", "image");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="image-to-base64-converter" />;
}