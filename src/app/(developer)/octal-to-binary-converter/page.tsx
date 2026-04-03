import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Octal to Binary Converter | Free Online Tool",
  description: "Use this free octal to binary converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/octal-to-binary-converter",
  },
};

export default function OctalToBinaryConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="octal-to-binary-converter"
      title="Octal to Binary Converter"
      description="Use this free octal to binary converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
