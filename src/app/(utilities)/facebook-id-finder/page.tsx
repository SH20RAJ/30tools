import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("facebook-id-finder", "utilities");

export default function ToolPage() {
  return <PremiumToolPage toolId="facebook-id-finder" />;
}