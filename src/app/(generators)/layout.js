import GeneratorToolsNavbar from "@/components/navigation/GeneratorToolsNavbar";
import GeneratorToolsFooter from "@/components/footers/GeneratorToolsFooter";

export const metadata = {
  title: "AI Generator Tools - Free AI Content Creation Suite | 30Tools",
  description:
    "Create stunning content with our free AI generators: Text to Image, Text to Speech, and more. Unleash your creativity with artificial intelligence.",
  keywords:
    "ai generator tools, ai image generator, ai voice generator, free ai tools, content creation ai, text to speech free, text to image free",
  openGraph: {
    title: "AI Generator Tools - Free Creative Suite",
    description:
      "Create stunning content with our free AI generators: Text to Image, Text to Speech, and more.",
    url: "https://30tools.com/generator-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/generator-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free AI Generator Tools",
      },
    ],
    type: "website",
  },
};

const jsonLdSchemas = {
  collectionPage: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AI Generator Tools Collection",
    "description": "Suite of powerful free AI generator tools for images and voice.",
    "url": "https://30tools.com/generator-tools",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://30tools.com/ai-image-generator", "name": "AI Image Generator" },
        { "@type": "ListItem", "position": 2, "url": "https://30tools.com/ai-voice-generator", "name": "AI Voice Generator" }
      ]
    }
  }
};

export default function GeneratorsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.collectionPage) }} />
      <GeneratorToolsNavbar />
      <main className="flex-1">{children}</main>
      <GeneratorToolsFooter />
    </div>
  );
}
