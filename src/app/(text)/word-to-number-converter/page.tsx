import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("word-to-number-converter", "text");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="word-to-number-converter" />;
}