import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "JavaScript DeObfuscator | Free Online Tool",
  description: "Use this free javascript deobfuscator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/javascript-deobfuscator",
  },
};

export default function JavascriptDeobfuscatorPage() {
  return (
    <ToolPlaceholderPage
      toolId="javascript-deobfuscator"
      title="JavaScript DeObfuscator"
      description="Use this free javascript deobfuscator to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
