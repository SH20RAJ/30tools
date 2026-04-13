import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("md5-generator", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="md5-generator" />;
}