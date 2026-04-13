import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("html-beautifier", "developer");

export default function ToolPage() {
  return <PremiumToolPage toolId="html-beautifier" />;
}