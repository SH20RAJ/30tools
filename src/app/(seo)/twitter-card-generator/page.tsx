import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("twitter-card-generator", "seo");

export default function ToolPage() {
  return <PremiumToolPage toolId="twitter-card-generator" />;
}