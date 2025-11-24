import MarkdownToHtmlTool from "@/components/tools/code/MarkdownToHtmlTool";

export const metadata = {
  title: "Markdown to HTML Converter - Convert Markdown Online",
  description:
    "Professional markdown to html with instant results. Free online tool for students, professionals, and businesses worldwide.",
  keywords:
    "markdown to html, convert markdown to html, markdown html converter, markdown online tool, markdown parser, markdown to html free",
  openGraph: {
    title: "Free Markdown to HTML Converter - Convert Markdown Online",
    description:
      "Convert Markdown text to HTML instantly. Paste your Markdown, click convert, and copy or download the result.",
    url: "https://30tools.com/markdown-to-html",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/markdown-to-html.jpg",
        width: 1200,
        height: 630,
        alt: "Free Markdown to HTML Converter",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Markdown to HTML Converter - Convert Markdown Online",
    description: "Convert Markdown to HTML instantly. No signup required.",
    images: ["/og-images/markdown-to-html.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/markdown-to-html",
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
    "apple-mobile-web-app-title": "Markdown to HTML - 30tools",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#000000",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Markdown To Html",
  description:
    "Professional markdown to html tool. Free online processing with high-quality results. No registration required, instant results.",
  url: "https://30tools.com/markdown-to-html",
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

export default function MarkdownToHtmlPage() {
  return <MarkdownToHtmlTool />;
}
