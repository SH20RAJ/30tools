import AestheticBioGeneratorTool from "@/components/tools/generators/AestheticBioGeneratorTool";
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
  title: "Aesthetic Bio Generator - Free Online Tool | Professional Results",
  description:
    "Free aesthetic bio generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  keywords:
    "aesthetic bio generator, instagram bio generator, twitter bio generator, tiktok bio generator, social media bio, cute bio generator, aesthetic text generator, bio ideas generator, profile bio creator, emoji bio generator, aesthetic bio generator for instagram free, cute bio generator with emojis, aesthetic twitter bio ideas generator, tiktok bio generator aesthetic themes, social media bio creator online, instagram bio maker with fonts, aesthetic profile bio generator, viral bio generator for social media",
  openGraph: {
    title: "Free Aesthetic Bio Generator - Instagram, Twitter, TikTok Bios",
    description:
      "Generate aesthetic bios for Instagram, Twitter & TikTok with emojis, fonts & themes. Perfect for influencers and viral profiles.",
    url: "https://30tools.com/aesthetic-bio-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/aesthetic-bio-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Aesthetic Bio Generator Tool - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Aesthetic Bio Generator - Instagram, Twitter, TikTok Bios",
    description:
      "Generate aesthetic bios with emojis and themes for Instagram, Twitter, and TikTok. Perfect for viral profiles!",
    images: ["/og-images/aesthetic-bio-generator.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/aesthetic-bio-generator",
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
  category: "Generators",
};

export default function AestheticBioGeneratorPage() {
  // Tool-specific data
  const toolData = {
    id: "aesthetic-bio-generator",
    name: "Aesthetic Bio Generator",
    description:
      "Generate aesthetic bios for Instagram, Twitter, and TikTok with emojis and themes",
    category: "generators",
    route: "/aesthetic-bio-generator",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Generators", url: "/generators" },
    { name: "Aesthetic Bio Generator", url: "/aesthetic-bio-generator" },
  ];

  // Tool features
  const features = [
    "6 aesthetic themes (soft, dark, vintage, etc.)",
    "AI-powered bio suggestions",
    "Platform-specific optimization",
    "Emoji and symbol integration",
    "Copy to clipboard",
    "Character count optimization",
    "Trending bio styles",
    "Instant generation",
  ];

  // Usage examples
  const examples = [
    {
      title: "Soft Girl Aesthetic",
      description: "Perfect for Instagram influencers and lifestyle accounts",
      input: "coffee lover, sunset chaser",
      output:
        "☁️ coffee lover ☁️\n🌸 sunset chaser 🌸\n✨ living my best life ✨",
    },
    {
      title: "Dark Academia",
      description: "Sophisticated and intellectual vibes",
      input: "book lover, writer",
      output: "📚 lost in stories\n🖋️ weaving words\n🌙 midnight musings",
    },
    {
      title: "Minimalist",
      description: "Clean and simple aesthetic",
      input: "photographer, traveler",
      output: "photographer.\ntraveler.\ndreamer.",
    },
  ];

  // FAQ data
  const faqs = getGeneratorToolFAQs("aesthetic-bio-generator");

  // Related tools
  const relatedTools = [
    {
      id: "startup-name-generator",
      name: "Startup Name Generator",
      description: "Generate creative business names",
      route: "/startup-name-generator",
      category: "generators",
    },
    {
      id: "fake-chat-generator",
      name: "Fake Chat Generator",
      description: "Create realistic chat screenshots",
      route: "/fake-chat-generator",
      category: "generators",
    },
    {
      id: "ai-poetry-generator",
      name: "AI Poetry Generator",
      description: "Generate beautiful poems with AI",
      route: "/ai-poetry-generator",
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
            Free Aesthetic Bio Generator - Instagram, Twitter, TikTok Bios
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Generate aesthetic bios for Instagram, Twitter & TikTok with emojis,
            fonts & themes. 6 aesthetic styles, AI-powered suggestions. Perfect
            for influencers, Gen Z & viral profiles that stand out.
          </p>

          <QuickActions
            toolName="Aesthetic Bio Generator"
            toolUrl="https://30tools.com/aesthetic-bio-generator"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <AestheticBioGeneratorTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples tool={toolData} examples={examples} />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="aesthetic-bio-generator"
            title="What Users Say About Our Bio Generator"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Create an Aesthetic Bio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Enter Your Text</h3>
              <p className="text-muted-foreground text-sm">
                Type your current bio, keywords, or a short description of
                yourself into the input box.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Choose Style</h3>
              <p className="text-muted-foreground text-sm">
                Select from our curated aesthetic themes like Soft Girl, Dark
                Academia, or Minimalist.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Copy & Paste</h3>
              <p className="text-muted-foreground text-sm">
                Click to copy your favorite bio design and paste it directly to
                Instagram, TikTok, or Twitter.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Aesthetic Bio Generator FAQ"
            categoryTitle="Social Media Bio Creation"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="aesthetic-bio-generator"
            category="generators"
            tools={relatedTools}
            title="More Creative Generators"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="aesthetic-bio-generator"
          toolName="Aesthetic Bio Generator"
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
              name: "Aesthetic Bio Generator",
              description:
                "Generate aesthetic bios for Instagram, Twitter, and TikTok with emojis and themes",
              url: "https://30tools.com/aesthetic-bio-generator",
              applicationCategory: "SocialNetworkingApplication",
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
                "https://30tools.com/screenshots/aesthetic-bio-generator.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "3247",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Generate an Aesthetic Bio",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Enter your bio text",
                  text: "Type your current bio or keywords into the input field.",
                  url: "https://30tools.com/aesthetic-bio-generator#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Select a theme",
                  text: "Choose from various aesthetic themes like Soft, Dark, or Vintage.",
                  url: "https://30tools.com/aesthetic-bio-generator#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Generate and Copy",
                  text: "Click generate and copy your favorite aesthetic bio to your clipboard.",
                  url: "https://30tools.com/aesthetic-bio-generator#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
