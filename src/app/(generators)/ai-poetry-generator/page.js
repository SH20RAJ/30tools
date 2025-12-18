import AIPoetryGeneratorTool from "@/components/tools/generators/AIPoetryGeneratorTool";
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
  title: "AI Poetry Generator - Free Poem Maker | 30tools",
  description:
    "Generate beautiful, original poems instantly with our free AI poetry generator. Create Haikus, Sonnets, Rhyming Couplets & more. Perfect for gifts & creative writing.",
  keywords:
    "ai poetry generator, poem generator, ai poem writer, generate poem, poetry ai, free ai poetry generator, haiku generator, sonnet generator, rhyming poem maker, love poem generator, funny poem generator, creative writing tool, instant poetry maker",
  canonical: "https://30tools.com/ai-poetry-generator",
  openGraph: {
    title: "AI Poetry Generator - Free Poem Maker",
    description:
      "Create original poems on any topic with AI. Enter a theme or mood and get a unique poem instantly.",
    url: "https://30tools.com/ai-poetry-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/ai-poetry-generator.jpg",
        width: 1200,
        height: 630,
        alt: "AI Poetry Generator Tool - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Poetry Generator - Free Poem Maker",
    description:
      "Create original poems on any topic with AI. Enter a theme or mood and get a unique poem instantly.",
    images: ["/og-images/ai-poetry-generator.jpg"],
    creator: "@30tools",
  },
  category: "Generators",
};

export default function AIPoetryGeneratorPage() {
  // Tool-specific data
  const toolData = {
    id: "ai-poetry-generator",
    name: "AI Poetry Generator",
    description: "Generate beautiful poems with AI",
    category: "generators",
    route: "/ai-poetry-generator",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Generators", url: "/generators" },
    { name: "AI Poetry Generator", url: "/ai-poetry-generator" },
  ];

  // Tool features
  const features = [
    "Multiple poetic styles (Haiku, Sonnet, Free Verse)",
    "Mood selection (Romantic, Funny, Sad)",
    "Custom topics & themes",
    "Adjustable poem length",
    "Rhyme scheme options",
    "Instant generation",
    "Copy to clipboard",
    "Unique results every time",
  ];

  // Usage examples
  const examples = [
    {
      title: "Love Poem",
      description: "Romantic sonnet for a partner",
      input: "Topic: Love, Mood: Romantic, Style: Sonnet",
      output:
        "My heart beats fast when you are near,\nA melody of love so sweet and clear...",
    },
    {
      title: "Nature Haiku",
      description: "Simple nature observation",
      input: "Topic: Spring, Mood: Peaceful, Style: Haiku",
      output: "Green leaves start to grow\nSunlight warms the gentle earth\nLife begins anew",
    },
    {
      title: "Funny Limerick",
      description: "Humorous short poem",
      input: "Topic: Cat, Mood: Funny, Style: Limerick",
      output:
        "There once was a cat named Lou,\nWho didn't know what to do...",
    },
  ];

  // FAQ data
  const faqs = getGeneratorToolFAQs("ai-poetry-generator");

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
      id: "excuse-generator",
      name: "Excuse Generator",
      description: "Generate creative funny excuses",
      route: "/excuse-generator",
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
            Free AI Poetry Generator - Write Poems Instantly
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Unleash your inner poet with our AI poetry generator. Create
            beautiful, funny, or deep poems on any topic in seconds. Choose from
            styles like Haiku, Sonnet, and Free Verse. Perfect for gifts, cards,
            and creative inspiration.
          </p>

          <QuickActions
            toolName="AI Poetry Generator"
            toolUrl="https://30tools.com/ai-poetry-generator"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <AIPoetryGeneratorTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples tool={toolData} examples={examples} />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="ai-poetry-generator"
            title="What Writers Say About Our Poem Maker"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Generate a Poem
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Enter Topic</h3>
              <p className="text-muted-foreground text-sm">
                Type in the subject of your poem (e.g., "Love", "Nature", "My
                Dog").
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Choose Style & Mood</h3>
              <p className="text-muted-foreground text-sm">
                Select a poetic form (like Haiku or Sonnet) and the desired
                emotional tone.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Generate</h3>
              <p className="text-muted-foreground text-sm">
                Click generate to create your unique poem. Copy it to share or
                edit it further.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="AI Poetry Generator FAQ"
            categoryTitle="Poetry Generation"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="ai-poetry-generator"
            category="generators"
            tools={relatedTools}
            title="More Creative Generators"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="ai-poetry-generator"
          toolName="AI Poetry Generator"
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
              name: "AI Poetry Generator",
              description:
                "Generate beautiful, original poems instantly with our free AI poetry generator",
              url: "https://30tools.com/ai-poetry-generator",
              applicationCategory: "EntertainmentApplication",
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
                "https://30tools.com/screenshots/ai-poetry-generator.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "3120",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Generate a Poem with AI",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Enter Topic",
                  text: "Type in the subject of your poem (e.g., 'Love', 'Nature', 'My Dog').",
                  url: "https://30tools.com/ai-poetry-generator#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Choose Style & Mood",
                  text: "Select a poetic form (like Haiku or Sonnet) and the desired emotional tone.",
                  url: "https://30tools.com/ai-poetry-generator#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Generate",
                  text: "Click generate to create your unique poem. Copy it to share or edit it further.",
                  url: "https://30tools.com/ai-poetry-generator#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
