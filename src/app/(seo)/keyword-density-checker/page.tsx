import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("keyword-density-checker", "seo");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="keyword-density-checker" />;
}