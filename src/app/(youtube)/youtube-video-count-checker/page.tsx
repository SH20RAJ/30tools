import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("youtube-video-count-checker", "youtube");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="youtube-video-count-checker" />;
}