import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("html-encoder", "developer");

export default function ToolPage() {
  return <ToolPlaceholderPage toolId="html-encoder" />;
}