import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("percentage-calculator", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="percentage-calculator" />;
}