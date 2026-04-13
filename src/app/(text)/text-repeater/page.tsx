import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("text-repeater", "text");

export default function ToolPage() {
  return <PremiumToolPage toolId="text-repeater" />;
}