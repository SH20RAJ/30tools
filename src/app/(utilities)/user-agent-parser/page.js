import UserAgentParserTool from "@/components/tools/utilities/UserAgentParserTool";

export const metadata = {
  title: "Online User Agent Parser - Analyze Browser Information | 30tools",
  description:
    "Parse and analyze user agent strings online. Get detailed browser, OS, and device information from any user agent string with our free parser tool.",
  keywords: [
    "user agent parser",
    "user agent parser online",
    "free user agent parser",
    "user agent parser tool",
    "online user agent parser free",
    "professional user agent parser",
    "user agent parser online tool",
    "best user agent parser free",
    "user agent parser web app",
    "user agent parser utility",
    "online tool",
    "free utility",
    "web application",
  ],
  openGraph: {
    title: "Online User Agent Parser - Analyze Browser Information | 30tools",
    description:
      "Parse and analyze user agent strings online. Get detailed browser, OS, and device information from any user agent string with our free parser tool.",
    type: "website",
    url: "https://30tools.com/user-agent-parser",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online User Agent Parser - Analyze Browser Information | 30tools",
    description:
      "Parse and analyze user agent strings online. Get detailed browser, OS, and device information from any user agent string with our free parser tool.",
  },
  canonical: "https://30tools.com/user-agent-parser",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "User Agent Parser",
  description:
    "Professional user agent parser tool. Free online processing with high-quality results. No registration required, instant results.",
  url: "https://30tools.com/user-agent-parser",
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

export default function UserAgentParserPage() {
  return <UserAgentParserTool />;
}
