import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("convert-vtt-to-srt", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="convert-vtt-to-srt" />;
}