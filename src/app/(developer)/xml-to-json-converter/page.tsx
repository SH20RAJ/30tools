import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("xml-to-json-converter", "developer");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="xml-to-json-converter" />;
}