import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("website-ranking-checker", "seo");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="website-ranking-checker" />;
}