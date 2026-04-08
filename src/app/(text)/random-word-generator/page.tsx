import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("random-word-generator", "text");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="random-word-generator" />;
}