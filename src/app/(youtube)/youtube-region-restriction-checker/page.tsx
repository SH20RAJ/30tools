import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("youtube-region-restriction-checker", "youtube");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="youtube-region-restriction-checker" />;
}