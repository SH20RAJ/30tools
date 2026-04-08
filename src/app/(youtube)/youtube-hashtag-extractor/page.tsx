import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("youtube-hashtag-extractor", "youtube");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="youtube-hashtag-extractor" />;
}