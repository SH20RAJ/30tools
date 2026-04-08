import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("csv-to-json-converter", "developer");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="csv-to-json-converter" />;
}