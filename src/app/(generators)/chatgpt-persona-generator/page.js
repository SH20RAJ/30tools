import ChatGPTPersonaGeneratorTool from "@/components/tools/generators/ChatGPTPersonaGeneratorTool";

export const metadata = {
  title: "ChatGPT Persona Generator - Create AI Personalities Prompts",
  description:
    "Generate quirky ChatGPT personas and custom AI prompts. Create unique AI personalities for creative conversations, roleplay, and enhanced AI interactions.",
  keywords:
    "ChatGPT persona, AI personality generator, custom AI prompts, ChatGPT prompts, AI character generator, roleplay prompts, AI conversation starters",
  canonical: "https://30tools.com/chatgpt-persona-generator",
  openGraph: {
    title: "ChatGPT Persona Generator - Create AI Personalities",
    description:
      "Generate quirky ChatGPT personas and custom AI prompts for enhanced AI interactions and creative conversations.",
    url: "https://30tools.com/chatgpt-persona-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/chatgpt-persona-generator.jpg",
        width: 1200,
        height: 630,
        alt: "ChatGPT Persona Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Persona Generator - Create AI Personalities",
    description:
      "Generate quirky ChatGPT personas and custom AI prompts for enhanced AI interactions and creative conversations.",
    images: ["/og-images/chatgpt-persona-generator.jpg"],
    creator: "@30tools_com",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ChatGPT Persona Generator",
  description:
    "Generate quirky ChatGPT personas and custom AI prompts for enhanced AI interactions and creative conversations.",
  url: "https://30tools.com/chatgpt-persona-generator",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Quirky personality templates",
    "Custom prompt generation",
    "Personality trait combinations",
    "Export as prompt",
    "AI-powered personas",
  ],
};

export default function ChatGPTPersonaGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChatGPTPersonaGeneratorTool />
    </>
  );
}
