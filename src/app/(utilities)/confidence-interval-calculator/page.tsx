import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("confidence-interval-calculator", "utilities");

export default function ToolPage() {
  return <PremiumToolPage toolId="confidence-interval-calculator" />;
}