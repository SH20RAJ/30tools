import EPUBConverter from "@/components/tools/converter/EPUBConverterTool";

export const metadata = {
  title: "EPUB Converter - Convert to EPUB Format | 30tools",
  description:
    "Convert Process instantly with our free epub converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
  keywords:
    "epub converter, ebook converter, convert to epub, ebook format, e-reader format",
  openGraph: {
    title: "EPUB Converter - Convert to EPUB Format | 30tools",
    description: "Convert documents to EPUB format for e-readers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epub Converter - Free Online Converter | Instant Conversion",
    description:
      "Convert Process instantly with our free epub converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
    images: ["/og-images/epub-converter.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/epub-converter",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Epub Converter",
  description:
    "Convert Process instantly with our free epub converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
  url: "https://30tools.com/epub-converter",
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

export default function EPUBConverterPage() {
  return <EPUBConverter />;
}
