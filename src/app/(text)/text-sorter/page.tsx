import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("text-sorter", "text");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="text-sorter" />;
}