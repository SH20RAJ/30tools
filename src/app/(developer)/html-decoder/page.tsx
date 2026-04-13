import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("html-decoder", "developer");

export default function ToolPage() {
  return <PremiumToolPage toolId="html-decoder" />;
}