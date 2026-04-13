import { generateToolMetadata } from "@/lib/seo-helper";
import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = generateToolMetadata("binary-to-octal-converter", "developer");

export default function ToolPage() {
  return <PremiumToolPage toolId="binary-to-octal-converter" />;
}