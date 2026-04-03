import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "Text Repeater | Free Online Tool",
  description: "Use this free text repeater to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/text-repeater",
  },
};

export default function TextRepeaterPage() {
  return (
    <ToolPlaceholderPage
      toolId="text-repeater"
      title="Text Repeater"
      description="Use this free text repeater to get fast and reliable results with clean output."
      categoryName="Text Tools"
      categorySlug="text-tools"
    />
  );
}
