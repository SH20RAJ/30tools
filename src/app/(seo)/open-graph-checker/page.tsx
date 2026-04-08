import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("open-graph-checker", "seo");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="open-graph-checker" />;
}