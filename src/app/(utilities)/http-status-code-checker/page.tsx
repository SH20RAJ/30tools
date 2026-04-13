import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("http-status-code-checker", "utilities");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="http-status-code-checker" />;
}