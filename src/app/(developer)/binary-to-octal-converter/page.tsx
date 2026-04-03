import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Binary to Octal Converter | Free Online Tool",
  description: "Use this free binary to octal converter to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/binary-to-octal-converter",
  },
};

export default function BinaryToOctalConverterPage() {
  return (
    <ToolPlaceholderPage
      toolId="binary-to-octal-converter"
      title="Binary to Octal Converter"
      description="Use this free binary to octal converter to get fast and reliable results with clean output."
      categoryName="Developer Tools"
      categorySlug="developer-tools"
    />
  );
}
