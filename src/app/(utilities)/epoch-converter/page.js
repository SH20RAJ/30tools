import EpochConverterTool from "@/components/tools/utilities/EpochConverterTool";

export const metadata = {
  title: "Epoch Timestamp Converter - Unix Time to Date | 30tools",
  description:
    "Convert Unix timestamps to human-readable dates and vice versa. Free online epoch time converter with multiple date formats.",
  keywords:
    "epoch converter, unix timestamp, timestamp converter, epoch time, unix time converter, date to timestamp",
  openGraph: {
    title: "Epoch Timestamp Converter - Unix Time to Date | 30tools",
    description:
      "Convert Unix timestamps to dates and dates to timestamps instantly.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Epoch Converter - Free Online Converter | Instant Conversion",
    description:
      "Convert Process instantly with our free epoch converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
    images: ["/og-images/epoch-converter.jpg"],
    creator: "@30tools",
  },

  alternates: {
    canonical: "https://30tools.com/epoch-converter",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Epoch Converter",
  description:
    "Convert Process instantly with our free epoch converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
  url: "https://30tools.com/epoch-converter",
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

export default function EpochConverterPage() {
  return <EpochConverterTool />;
}
