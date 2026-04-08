import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("voltage-converter", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="voltage-converter" />;
}