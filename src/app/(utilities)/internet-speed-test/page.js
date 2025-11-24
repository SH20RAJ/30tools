import InternetSpeedTestTool from "@/components/tools/utilities/InternetSpeedTestTool";

export const metadata = {
  title: "Internet Speed Test - Check Upload & Download Speed | 30tools",
  description:
    "Test your internet speed for free. Check download speed, upload speed, and ping latency with our accurate internet speed test tool.",
  keywords: [
    "internet speed test",
    "internet speed test online",
    "free internet speed test",
    "internet speed test tool",
    "online internet speed test free",
    "professional internet speed test",
    "internet speed test online tool",
    "best internet speed test free",
    "internet speed test web app",
    "internet speed test utility",
    "online tool",
    "free utility",
    "web application",
  ],
  openGraph: {
    title: "Internet Speed Test - Check Upload & Download Speed | 30tools",
    description:
      "Test your internet speed for free. Check download speed, upload speed, and ping latency with our accurate internet speed test tool.",
    type: "website",
    url: "https://30tools.com/internet-speed-test",
  },
  twitter: {
    card: "summary_large_image",
    title: "Internet Speed Test - Check Upload & Download Speed | 30tools",
    description:
      "Test your internet speed for free. Check download speed, upload speed, and ping latency with our accurate internet speed test tool.",
  },
  canonical: "https://30tools.com/internet-speed-test",
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Internet Speed Test",
  description:
    "Professional internet speed test tool. Free online processing with high-quality results. No registration required, instant results.",
  url: "https://30tools.com/internet-speed-test",
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

export default function InternetSpeedTestPage() {
  return <InternetSpeedTestTool />;
}
