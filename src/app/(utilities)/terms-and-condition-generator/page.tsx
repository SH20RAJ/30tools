import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("terms-and-condition-generator", "utilities");

export default function ToolPage() {
  return <PremiumToolPage toolId="terms-and-condition-generator" />;
}