import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("text-repeater", "text");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="text-repeater" />;
}