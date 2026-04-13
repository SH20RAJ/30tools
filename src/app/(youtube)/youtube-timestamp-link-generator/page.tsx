import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("youtube-timestamp-link-generator", "youtube");

export default function ToolPage() {
  return <PremiumToolPage toolId="youtube-timestamp-link-generator" />;
}