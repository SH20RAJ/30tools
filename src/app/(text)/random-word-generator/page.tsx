import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("random-word-generator", "text");

export default function ToolPage() {
  return <PremiumToolPage toolId="random-word-generator" />;
}