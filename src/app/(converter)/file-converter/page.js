import FileConverter from "@/components/tools/converter/FileConverterTool";

export const metadata = {
  title: "Universal File Converter - Convert Any File Format | 30tools",
  description:
    "Convert Process instantly with our free file converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
  keywords:
    "file converter, universal converter, format converter, file format, convert files",
  openGraph: {
    title: "Universal File Converter - Convert Any File Format | 30tools",
    description: "Convert files between various formats automatically.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "File Converter - Free Online Converter | Instant Conversion",
    description:
      "Convert Process instantly with our free file converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
    images: ["/og-images/file-converter.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/file-converter",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "File Converter",
  description:
    "Convert Process instantly with our free file converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
  url: "https://30tools.com/file-converter",
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

export default function FileConverterPage() {
  return <FileConverter />;
}
