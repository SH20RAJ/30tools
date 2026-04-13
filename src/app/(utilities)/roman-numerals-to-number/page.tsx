import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("roman-numerals-to-number", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="roman-numerals-to-number" />;
}