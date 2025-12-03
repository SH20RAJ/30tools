import FakeChatGeneratorTool from "@/components/tools/generators/FakeChatGeneratorTool";
import {
  BreadcrumbsEnhanced,
  FAQSection,
  ReviewSnippets,
  RelatedTools,
  UserComments,
  QuickActions,
} from "@/components/seo";
import {
  GeneratorToolFeatures,
  GeneratorToolExamples,
} from "@/components/seo/GeneratorToolsHub";
import { getGeneratorToolFAQs } from "@/constants/seo/generator-faqs";

export const metadata = {
  title: "Fake Chat Generator - Free Online Generator | Create Instantly",
  description:
    "Create realistic fake chat screenshots for WhatsApp, Instagram DM, iMessage, and Discord. Perfect for memes, content creation, and social media.",
  keywords:
    "fake chat generator, whatsapp fake chat, instagram dm generator, imessage generator, fake text messages, chat screenshot maker, discord fake chat, fake conversation maker, social media chat generator, prank chat generator, meme maker chat, fake dm generator, ios chat generator, android chat generator",
  canonical: "https://30tools.com/fake-chat-generator",
  openGraph: {
    title: "Fake Chat Generator - Create Viral Chat Screenshots",
    description:
      "Create realistic fake chat screenshots for WhatsApp, Instagram, iMessage, and Discord. Perfect for memes and viral content!",
    url: "https://30tools.com/fake-chat-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/fake-chat-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Fake Chat Generator Tool - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fake Chat Generator - Create Viral Chat Screenshots",
    description:
      "Create realistic fake chat screenshots for memes and viral content! 📱💬",
    images: ["/og-images/fake-chat-generator.jpg"],
    creator: "@30tools",
  },
  category: "Generators",
};

export default function FakeChatGeneratorPage() {
  // Tool-specific data
  const toolData = {
    id: "fake-chat-generator",
    name: "Fake Chat Generator",
    description: "Create realistic fake chat screenshots for social media",
    category: "generators",
    route: "/fake-chat-generator",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Generators", url: "/generators" },
    { name: "Fake Chat Generator", url: "/fake-chat-generator" },
  ];

  // Tool features
  const features = [
    "WhatsApp, Instagram, iMessage & Discord styles",
    "Realistic interface design",
    "Custom contact names & photos",
    "Control message timestamps",
    "Read receipts & status indicators",
    "Dark & Light mode support",
    "High-quality image export",
    "Emoji support",
  ];

  // Usage examples
  const examples = [
    {
      title: "Viral Meme",
      description: "Funny conversation for social media",
      input: "WhatsApp Style",
      output: "Realistic WhatsApp chat screenshot with custom messages",
    },
    {
      title: "Marketing Story",
      description: "Customer testimonial simulation",
      input: "Instagram DM Style",
      output: "Authentic looking Instagram Direct Message conversation",
    },
    {
      title: "Prank Chat",
      description: "Joke conversation with a celebrity",
      input: "iMessage Style",
      output: "Convincing iPhone message thread screenshot",
    },
  ];

  // FAQ data
  const faqs = getGeneratorToolFAQs("fake-chat-generator");

  // Related tools
  const relatedTools = [
    {
      id: "aesthetic-bio-generator",
      name: "Aesthetic Bio Generator",
      description: "Create viral social media bios",
      route: "/aesthetic-bio-generator",
      category: "generators",
    },
    {
      id: "startup-name-generator",
      name: "Startup Name Generator",
      description: "Generate creative business names",
      route: "/startup-name-generator",
      category: "generators",
    },
    {
      id: "ai-voice-generator",
      name: "AI Voice Generator",
      description: "Convert text to natural speech",
      route: "/ai-voice-generator",
      category: "generators",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Breadcrumbs with Schema */}
      <div className="container mx-auto px-4 pt-6">
        <BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Free Fake Chat Generator - WhatsApp, Instagram, iMessage
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Create realistic fake chat screenshots for WhatsApp, Instagram DM,
            iMessage, and Discord. Perfect for memes, storytelling, and viral
            social media content. Customize every detail instantly.
          </p>

          <QuickActions
            toolName="Fake Chat Generator"
            toolUrl="https://30tools.com/fake-chat-generator"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <FakeChatGeneratorTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples tool={toolData} examples={examples} />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="fake-chat-generator"
            title="What Creators Say About Our Chat Maker"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Create a Fake Chat
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Choose Platform</h3>
              <p className="text-muted-foreground text-sm">
                Select the app interface you want to simulate: WhatsApp,
                Instagram, iMessage, or Discord.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Customize Details</h3>
              <p className="text-muted-foreground text-sm">
                Set contact name, profile picture, time, battery level, and other
                status bar details.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Add Messages</h3>
              <p className="text-muted-foreground text-sm">
                Type messages for both sender and receiver to build your
                conversation, then download the image.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Fake Chat Generator FAQ"
            categoryTitle="Chat Simulation"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="fake-chat-generator"
            category="generators"
            tools={relatedTools}
            title="More Creative Generators"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="fake-chat-generator"
          toolName="Fake Chat Generator"
          showStats={true}
          allowComments={true}
        />
      </main>

      {/* Structured Data for Tool */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Fake Chat Generator",
              description:
                "Create realistic fake chat screenshots for WhatsApp, Instagram DM, iMessage, and Discord",
              url: "https://30tools.com/fake-chat-generator",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "30tools",
                url: "https://30tools.com",
              },
              featureList: features,
              screenshot:
                "https://30tools.com/screenshots/fake-chat-generator.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "1893",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Create a Fake Chat Screenshot",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Choose Platform",
                  text: "Select the app interface you want to simulate: WhatsApp, Instagram, iMessage, or Discord.",
                  url: "https://30tools.com/fake-chat-generator#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Customize Details",
                  text: "Set contact name, profile picture, time, battery level, and other status bar details.",
                  url: "https://30tools.com/fake-chat-generator#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Add Messages",
                  text: "Type messages for both sender and receiver to build your conversation, then download the image.",
                  url: "https://30tools.com/fake-chat-generator#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
