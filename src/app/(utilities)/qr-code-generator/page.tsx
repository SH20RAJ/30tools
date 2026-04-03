import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "QR Code Generator | Free Online Tool",
  description: "Use this free qr code generator to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/qr-code-generator",
  },
};

export default function QrCodeGeneratorPage() {
  return (
    <ToolPlaceholderPage
      toolId="qr-code-generator"
      title="QR Code Generator"
      description="Use this free qr code generator to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
