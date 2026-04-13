import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("paypal-fee-calculator", "utilities");

export default function ToolPage() {
  return <PremiumToolPage toolId="paypal-fee-calculator" />;
}