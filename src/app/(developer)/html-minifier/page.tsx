import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("html-minifier", "developer");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="html-minifier" />;
}