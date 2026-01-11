import DeveloperToolsNavbar from "@/components/navigation/DeveloperToolsNavbar";
import DeveloperToolsFooter from "@/components/footers/DeveloperToolsFooter";

export const metadata = {
  title: "Developer Tools - Free Online JSON Formatter, Base64 & JWT Decoder | 30Tools",
  description:
    "Essential free developer tools: Format JSON, Decode JWT tokens, Encode Base64, and more. Secure client-side processing for all utilities.",
  keywords:
    "developer tools, json formatter, jwt decoder, base64 encoder, hash generator, free developer utilities, online coding tools, debug jwt, validate json",
  openGraph: {
    title: "Developer Tools - Free Online Developer Utilities",
    description:
      "Essential developer tools for JSON formatting, hash generation, and more.",
    url: "https://30tools.com/developer-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/developer-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free Developer Tools Collection",
      },
    ],
    type: "website",
  },
};

const jsonLdSchemas = {
  collectionPage: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Free Developer Tools Collection",
    "description": "Essential suite of free online developer utilities for JSON, Base64, and JWT operations.",
    "url": "https://30tools.com/developer-tools",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://30tools.com/json-formatter", "name": "JSON Formatter" },
        { "@type": "ListItem", "position": 2, "url": "https://30tools.com/jwt-decoder", "name": "JWT Decoder" },
        { "@type": "ListItem", "position": 3, "url": "https://30tools.com/base64-tool", "name": "Base64 Tool" }
      ]
    }
  }
};

export default function DeveloperToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.collectionPage) }} />
      <DeveloperToolsNavbar />
      <main className="flex-1">{children}</main>
      <DeveloperToolsFooter />
    </div>
  );
}
