import type { Metadata } from "next";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata: Metadata = {
  title: "QR Code Decoder | Free Online Tool",
  description: "Use this free qr code decoder to get fast and reliable results with clean output.",
  alternates: {
    canonical: "https://30tools.com/qr-code-decoder",
  },
};

export default function QrCodeDecoderPage() {
  return (
    <ToolPlaceholderPage
      toolId="qr-code-decoder"
      title="QR Code Decoder"
      description="Use this free qr code decoder to get fast and reliable results with clean output."
      categoryName="Utility Tools"
      categorySlug="utility-tools"
    />
  );
}
