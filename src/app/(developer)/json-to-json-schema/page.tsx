import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("json-to-json-schema", "developer");

export default function ToolPage() {
  return <PremiumToolPage toolId="json-to-json-schema" />;
}