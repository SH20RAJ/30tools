import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("convert-to-ico", "image");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="convert-to-ico" />;
}