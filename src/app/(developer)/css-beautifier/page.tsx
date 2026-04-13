import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("css-beautifier", "developer");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="css-beautifier" />;
}