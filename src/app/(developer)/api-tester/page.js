import APITester from "@/components/tools/developer/APITesterTool";

export const metadata = {
  title: "API Tester - Test REST APIs and HTTP Requests | 30tools",
  description:
    "Professional api tester for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  keywords:
    "api tester, rest api tester, http requests, api testing, postman alternative, api client",
  openGraph: {
    title: "API Tester - Test REST APIs and HTTP Requests | 30tools",
    description: "Test REST APIs and HTTP requests online.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Api Tester - Free Developer Tool | Professional Coding",
    description:
      "Professional api tester for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
    images: ["/og-images/api-tester.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/api-tester",
  },
};

const jsonLd = {
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
