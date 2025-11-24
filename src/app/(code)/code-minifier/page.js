import CodeMinifierTool from "@/components/tools/code/CodeMinifierTool";

export const metadata = {
  title: "Free Code Minifier - Minify JavaScript, CSS, HTML",
  description:
    "Professional code minifier with instant results. Free online tool for students, professionals, and businesses worldwide.",
  keywords:
    "code minifier, javascript minifier, css minifier, html minifier, code compression, minify js css html, web performance optimization",
  openGraph: {
    title: "Free Code Minifier Online - Optimize JavaScript, CSS, HTML",
    description:
      "Advanced code minification with detailed analytics. Reduce file sizes and improve website performance.",
    url: "https://30tools.com/code-minifier",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/code-minifier.jpg",
        width: 1200,
        height: 630,
        alt: "Free Code Minifier Online",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Code Minifier Online - Optimize JavaScript, CSS, HTML",
    description:
      "Minify code with industry-standard algorithms. Get detailed compression statistics.",
    images: ["/og-images/code-minifier.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/code-minifier",
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
  category: "Code Tools",
  other: {
    "application-name": "30tools",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Code Minifier - 30tools",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#000000",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Code Minifier",
  description:
    "Professional code minifier tool. Free online processing with high-quality results. No registration required, instant results.",
  url: "https://30tools.com/code-minifier",
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

export default function CodeMinifierPage() {
  return <CodeMinifierTool />;
}
