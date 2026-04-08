import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("youtube-title-length-checker", "youtube");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="youtube-title-length-checker" />;
}