import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("json-viewer", "developer");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="json-viewer" />;
}