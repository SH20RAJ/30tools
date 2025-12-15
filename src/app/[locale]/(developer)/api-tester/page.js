import APITester from "@/components/tools/developer/APITesterTool";

export const metadata = {
  title: "API Tester (2026) - Online REST Client | 30Tools",
  description: "Test REST APIs & HTTP requests online free (Updated 2026). Send GET, POST, PUT, DELETE requests. Lightweight Postman alternative.",
  keywords: [
    "api tester online",
    "rest api client free",
    "http request tool",
    "send api requests online",
    "postman alternative web",
    "curl online tester",
    "updated 2026",
    "debug api endpoint"
  ].join(", "),
  openGraph: {
    title: "API Tester (2026) - Free Online REST Client",
    description: "⚡ Test API endpoints instantly! Send HTTP requests (GET, POST) directly from browser (Updated 2026).",
    url: "https://30tools.com/api-tester",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/api-tester.jpg",
        width: 1200,
        height: 630,
        alt: "Free API Tester 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "API Tester (2026) - Free REST Client",
    description: "⚡ Test APIs instantly in your browser. Updated 2026!",
    images: ["/og-images/api-tester.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/api-tester",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Api Tester",
  description:
    "Professional api tester for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  url: "https://30tools.com/api-tester",
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

export default function APITesterPage() {
  return <APITester />;
}
