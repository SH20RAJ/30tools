import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("octal-to-binary-converter", "developer");

export default function ToolPage() {
  return <PremiumToolPage toolId="octal-to-binary-converter" />;
}