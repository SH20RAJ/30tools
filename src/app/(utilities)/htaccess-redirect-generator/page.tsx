import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("htaccess-redirect-generator", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="htaccess-redirect-generator" />;
}