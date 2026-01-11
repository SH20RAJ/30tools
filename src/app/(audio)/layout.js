import AudioToolsNavbar from "@/components/navigation/AudioToolsNavbar";
import AudioToolsFooter from "@/components/footers/AudioToolsFooter";

export const metadata = {
  title: "Audio Tools - Free AI Text to Speech & Audio Processing | 30Tools",
  description:
    "Free online audio tools: AI Text to Speech converter, audio compression, and format conversion. Generate natural voiceovers instantly.",
  keywords:
    "audio tools, text to speech, tts, ai voice generator, audio compressor, audio converter, free audio tools",
  openGraph: {
    title: "Audio Tools - Free AI Text to Speech & Audio Processing",
    description:
      "Generate natural voiceovers and process audio files for free.",
    url: "https://30tools.com/audio-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/audio-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free Audio Tools",
      },
    ],
    type: "website",
  },
};

const jsonLdSchemas = {
  collectionPage: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Online Audio Tools",
    "description": "Collection of free audio utilities including Text to Speech.",
    "url": "https://30tools.com/audio-tools",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://30tools.com/text-to-speech", "name": "Text to Speech" }
      ]
    }
  }
};

export default function AudioToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.collectionPage) }} />
      <AudioToolsNavbar />
      <main className="flex-1">{children}</main>
      <AudioToolsFooter />
    </div>
  );
}
