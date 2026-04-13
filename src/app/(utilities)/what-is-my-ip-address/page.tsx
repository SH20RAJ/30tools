import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("what-is-my-ip-address", "utilities");

export default function ToolPage() {
  return <PremiumToolPage toolId="what-is-my-ip-address" />;
}