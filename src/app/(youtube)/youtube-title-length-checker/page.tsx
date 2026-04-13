import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("youtube-title-length-checker", "youtube");

export default function ToolPage() {
  return <PremiumToolPage toolId="youtube-title-length-checker" />;
}