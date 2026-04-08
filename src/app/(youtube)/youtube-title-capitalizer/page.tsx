import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("youtube-title-capitalizer", "youtube");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="youtube-title-capitalizer" />;
}