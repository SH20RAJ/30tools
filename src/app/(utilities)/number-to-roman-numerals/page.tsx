import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("number-to-roman-numerals", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="number-to-roman-numerals" />;
}