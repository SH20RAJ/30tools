import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("hex-to-text-converter", "developer");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="hex-to-text-converter" />;
}