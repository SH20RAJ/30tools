import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JavaScript Obfuscator | Free Online Tool",
  description: "Use this free javascript obfuscator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/javascript-obfuscator",
  },
};

export default function JavascriptObfuscatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="javascript-obfuscator"
      title="JavaScript Obfuscator"
      description="Use this free javascript obfuscator to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
