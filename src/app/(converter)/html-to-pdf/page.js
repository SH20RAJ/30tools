import HTMLToPDF from "@/components/tools/converter/HTMLToPDFTool";

export const metadata = {
  title: "HTML to PDF Converter (2026) - Save Webpage as PDF | 30Tools",
  description: "Convert webpages & HTML to PDF online (Updated 2026). Save any website as PDF document. Capture full page screenshots. Fast & Free API.",
  keywords: [
    "html to pdf converter 2026",
    "webpage to pdf online",
    "save website as pdf",
    "url to pdf converter",
    "html string to pdf",
    "updated 2026",
    "developer pdf tool",
    "convert html file to pdf"
  ].join(", "),
  openGraph: {
    title: "HTML to PDF Converter (2026) - Free Webpage Saver",
    description: "⚡ Convert any URL or HTML to PDF instantly! Save full webpages as PDF documents (Updated 2026).",
    url: "https://30tools.com/html-to-pdf",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/html-to-pdf.jpg",
        width: 1200,
        height: 630,
        alt: "Free HTML to PDF Converter 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML to PDF Converter (2026) - Save Webpages",
    description: "⚡ Convert HTML & URLs to PDF instantly. Updated 2026!",
    images: ["/og-images/html-to-pdf.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/html-to-pdf",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Html To Pdf",
  description:
    "Convert Process instantly with our free html to pdf. High-quality conversion with privacy protection. No registration required, unlimited use.",
  url: "https://30tools.com/html-to-pdf",
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

export default function HTMLToPDFPage() {
  return <HTMLToPDF />;
}
