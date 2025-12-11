import ComplexityAnalyzer from "@/components/tools/developer/ComplexityAnalyzer";

export const metadata = {
  title: "Time & Space Complexity Analyzer - AI Code Analysis",
  description:
    "Professional complexity analyzer for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  keywords: [
    "complexity analyzer",
    "complexity analyzer online",
    "free complexity analyzer",
    "complexity analyzer tool",
    "online complexity analyzer free",
    "professional complexity analyzer",
    "complexity analyzer online tool",
    "best complexity analyzer free",
    "complexity analyzer web app",
    "complexity analyzer utility",
    "developer tools online",
    "coding tools free",
    "programming utilities",
    "web developer tools",
    "code formatter online",
  ],
  authors: [{ name: "30tools" }],
  creator: "30tools",
  publisher: "30tools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://30tools.com"),
  alternates: {
    canonical: "/complexity-analyzer",
  },
  openGraph: {
    title: "Time & Space Complexity Analyzer - AI-Powered Code Analysis",
    description:
      "Analyze your code's time and space complexity with AI. Get Big O notation, performance insights, and optimization suggestions for any programming language.",
    url: "/complexity-analyzer",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-complexity-analyzer.png",
        width: 1200,
        height: 630,
        alt: "Time & Space Complexity Analyzer Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Time & Space Complexity Analyzer - AI Code Analysis",
    description:
      "Analyze code complexity with AI. Get Big O notation, performance insights, and optimization suggestions.",
    images: ["/og-complexity-analyzer.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Complexity Analyzer",
  description:
    "Professional complexity analyzer for developers. Process with advanced features. Free coding tool for programmers, students & professionals.",
  url: "https://30tools.com/complexity-analyzer",
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

export default function ComplexityAnalyzerPage() {
  return <ComplexityAnalyzer />;
}
