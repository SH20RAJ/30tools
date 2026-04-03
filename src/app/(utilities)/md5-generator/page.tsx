import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "MD5 Generator | Free Online Tool",
  description: "Use this free md5 generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/md5-generator",
  },
};

export default function Md5GeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="md5-generator"
      title="MD5 Generator"
      description="Use this free md5 generator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
