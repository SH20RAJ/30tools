import Base64Tool from '@/components/tools/developer/Base64Tool';

export const metadata = {
  title: "Base64 Encoder/Decoder - Free Online Tool | 30tools",
  description: "Free Base64 encoder and decoder tool. Encode text and files to Base64 or decode Base64 strings. Secure, fast, and works offline.",
  keywords: "base64 encoder, base64 decoder, base64 converter, encode decode base64, developer tools",
  openGraph: {
    title: "Base64 Encoder/Decoder - Free Online Tool",
    description: "Free Base64 encoder and decoder tool for text and files.",
    url: "https://30tools.com/base64-tool",
    images: [
      {
        url: "/og-images/base64-tool.jpg",
        width: 1200,
        height: 630,
        alt: "Base64 Encoder/Decoder Tool"
      }
    ],
  },
};

export default function Base64Page() {
  return <Base64Tool />;
}
