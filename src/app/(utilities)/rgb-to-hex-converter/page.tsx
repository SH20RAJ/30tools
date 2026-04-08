import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("rgb-to-hex-converter", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="rgb-to-hex-converter" />;
}