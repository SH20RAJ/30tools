import FakeChatGeneratorTool from '@/components/tools/generators/FakeChatGeneratorTool';

export const metadata = {
  title: "Fake Chat Generator - Free Online Generator | Create Instantly",
  description: "Create realistic fake chat screenshots for WhatsApp, Instagram DM, iMessage, and Discord. Perfect for memes, content creation, and social media.",
  keywords: "fake chat generator, whatsapp fake chat, instagram dm generator, imessage generator, fake text messages, chat screenshot maker",
  canonical: "https://30tools.com/fake-chat-generator",
  openGraph: {
    title: "Fake Chat Generator - Create Viral Chat Screenshots",
    description: "Create realistic fake chat screenshots for WhatsApp, Instagram, iMessage, and Discord. Perfect for memes and viral content!",
    url: "https://30tools.com/fake-chat-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/fake-chat-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Fake Chat Generator Tool - 30tools"
      },
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fake Chat Generator - Create Viral Chat Screenshots",
    description: "Create realistic fake chat screenshots for memes and viral content! 📱💬",
    images: ["/og-images/fake-chat-generator.jpg"],
    creator: '@30tools'
  },
};

export default function FakeChatGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Fake Chat Generator - Chat Screenshot Creator",
    "description": "Create realistic fake chat screenshots for WhatsApp, Instagram DM, iMessage, and Discord. Perfect for memes, content creation, and social media.",
    "url": "https://30tools.com/fake-chat-generator",
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "30tools",
      "url": "https://30tools.com"
    },
    "featureList": [
      "WhatsApp chat simulation",
      "Instagram DM interface",
      "iMessage design",
      "Discord chat style",
      "Custom contact names",
      "Profile picture upload",
      "Timestamp control",
      "Read receipts toggle",
      "Export as image",
      "Mobile-responsive design"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FakeChatGeneratorTool />
    </>
  );
}