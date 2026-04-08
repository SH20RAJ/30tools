import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("json-to-csv-converter", "developer");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="json-to-csv-converter" />;
}