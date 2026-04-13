import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("google-cache-checker", "seo");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="google-cache-checker" />;
}