import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";
export const metadata = generateToolMetadata("digital-converter", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="digital-converter" />;
}