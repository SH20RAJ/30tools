import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("youtube-channel-banner-downloader", "youtube");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="youtube-channel-banner-downloader" />;
}