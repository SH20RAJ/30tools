import ImageToolsNavbar from "@/components/navigation/ImageToolsNavbar";
import ImageToolsFooter from "@/components/footers/ImageToolsFooter";
import {
  OPEN_GRAPH_DEFAULTS,
  TWITTER_DEFAULTS,
} from "@/constants/seo/metadata-templates";

export const metadata = {
  title: "Image Tools - Free AI Photo Editor, Converter & Enhancer | 30Tools",
  description:
    "Free online image tools: Remove backgrounds, resize photos, convert formats, generate logos, and enhance quality with AI. No signup required.",
  keywords:
    "image tools, background remover, photo enhancer, image converter, image resizer, logo generator, free photo editor online, ai image tools",
  openGraph: {
    ...OPEN_GRAPH_DEFAULTS,
    title: "Image Tools - Free AI Photo Editing Suite",
    description:
      "Edit, convert, and enhance your photos with our free AI-powered tools.",
    url: "https://30tools.com/image-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/image-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free Image Tools Collection",
      },
    ],
    type: "website",
  },
  twitter: {
    ...TWITTER_DEFAULTS,
    title: "Image Tools - Free AI Photo Editing Suite",
    description:
      "Edit, convert, and enhance your photos with our free AI-powered tools.",
  },
};

const jsonLdSchemas = {
  collectionPage: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Online Image Tools",
    "description": "Comprehensive suite of free image editing and generation tools.",
    "url": "https://30tools.com/image-tools",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://30tools.com/background-remover", "name": "Background Remover" },
        { "@type": "ListItem", "position": 2, "url": "https://30tools.com/image-compressor", "name": "Image Compressor" },
        { "@type": "ListItem", "position": 3, "url": "https://30tools.com/image-converter", "name": "Image Converter" },
        { "@type": "ListItem", "position": 4, "url": "https://30tools.com/image-resizer", "name": "Image Resizer" },
        { "@type": "ListItem", "position": 5, "url": "https://30tools.com/photo-enhancer", "name": "Photo Enhancer" },
        { "@type": "ListItem", "position": 6, "url": "https://30tools.com/logo-generator", "name": "Logo Generator" }
      ]
    }
  }
};

export default function ImageToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.collectionPage) }} />
      <ImageToolsNavbar />
      <main className="flex-1">{children}</main>
      <ImageToolsFooter />
    </div>
  );
}
