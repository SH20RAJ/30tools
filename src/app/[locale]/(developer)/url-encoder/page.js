import URLEncoder from "@/components/tools/developer/URLEncoderTool";

export const metadata = {
  title: "URL Encoder/Decoder (2026) - Online Tool | 30Tools",
  description: "Encode & Decode URLs online instantly (Updated 2026). Convert text to percent-encoding for query parameters. Free tool for developers.",
  keywords: [
    "url encoder online",
    "url decoder 2026",
    "percent encoding tool",
    "encode url string",
    "decode uri component",
    "query parameter encoder",
    "updated 2026",
    "web developer tools"
  ].join(", "),
  openGraph: {
    title: "URL Encoder/Decoder (2026) - Free Online Tool",
    description: "⚡ Encode & Decode URLs content instantly! Handle query parameters & special characters (Updated 2026).",
    url: "https://30tools.com/url-encoder",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/url-encoder.jpg",
        width: 1200,
        height: 630,
        alt: "Free URL Encoder 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "URL Encoder/Decoder (2026) - Free Tool",
    description: "⚡ Encode and Decode URLs instantly. Updated 2026!",
    images: ["/og-images/url-encoder.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/url-encoder",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Url Encoder",
  description:
    "Professional url encoder for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  url: "https://30tools.com/url-encoder",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
};

export default function URLEncoderPage() {
  return <URLEncoder />;
}
