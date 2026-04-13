import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("server-status-checker", "utilities");

export default function ToolPage() {
  return <PremiumToolPage toolId="server-status-checker" />;
}