import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("what-is-my-screen-resolution", "utilities");

export default function ToolPage() {
  return <PremiumToolPage toolId="what-is-my-screen-resolution" />;
}