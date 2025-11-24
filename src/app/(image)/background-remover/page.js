import BackgroundRemoverTool from "@/components/tools/image/BackgroundRemoverTool";

export const metadata = {
  title: "Background Remover - Remove Image Backgrounds Instantly",
  description:
    "Professional background remover for Process images online. Free, fast & secure image processing. No watermarks, maintains original quality.",
  keywords:
    "background remover, remove background from image, background eraser, cut out image background, transparent background, remove bg, image background removal",
  openGraph: {
    title: "Background Remover - Remove Image Backgrounds Instantly",
    description:
      "Remove backgrounds from images instantly with AI. Free background remover tool for professional results.",
    url: "https://30tools.com/background-remover",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/background-remover.jpg",
        width: 1200,
        height: 630,
        alt: "Free Background Remover Online",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Background Remover - Remove Image Backgrounds Instantly",
    description:
      "Remove backgrounds from images instantly with AI. Perfect for product photos and design projects.",
    images: ["/og-images/background-remover.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/background-remover",
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
  category: "Image Tools",
  other: {
    "application-name": "30tools",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Background Remover - 30tools",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#000000",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Background Remover",
  description:
    "Professional background remover for Process images online. Free, fast & secure image processing. No watermarks, maintains original quality.",
  url: "https://30tools.com/background-remover",
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

export default function BackgroundRemoverPage() {
  return <BackgroundRemoverTool />;
}
