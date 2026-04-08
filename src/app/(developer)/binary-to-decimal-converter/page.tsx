import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("binary-to-decimal-converter", "developer");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="binary-to-decimal-converter" />;
}