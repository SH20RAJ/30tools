import type { Metadata } from "next";
import TextEncoder from "@/components/tools/text/TextEncoder";

export const metadata: Metadata = {
  title: { absolute: "Text Encoder - URL & Base64 Encode/Decode | 30Tools" },
  description: "Free online Text Encoder. Encode and decode URL strings and Base64 format instantly. Secure and fast.",
  keywords: ["text encoder", "url encoder", "url decoder", "base64 encoder", "base64 decoder"],
};

export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Text Encoder / Decoder</h1>
        <p className="text-muted-foreground">
          Easily convert text to URL-safe format or Base64 and back.
        </p>
      </div>
      <TextEncoder />
    </div>
  );
}
