import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("convert-vtt-to-srt", "utilities");

export default function ToolPage() {
  return <PremiumToolPage toolId="convert-vtt-to-srt" />;
}