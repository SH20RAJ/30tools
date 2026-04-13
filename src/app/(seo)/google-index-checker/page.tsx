import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("google-index-checker", "seo");

export default function ToolPage() {
  return <PremiumToolPage toolId="google-index-checker" />;
}