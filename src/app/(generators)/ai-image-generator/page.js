import AIImageGeneratorTool from "@/components/tools/generators/AIImageGeneratorTool";
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
  title: "AI Image Generator - Free Text to Image Creator | 30tools",
  description:
    "Generate stunning AI images from text prompts instantly. Free AI art generator with professional quality results, unlimited generations. Perfect for creators, developers & businesses.",
  keywords: [
    // Primary keywords
    "ai image generator",
    "text to image ai",
    "ai art generator",
    "free ai image creator",
    "artificial intelligence image",

    // Long-tail keywords for SEO ranking
    "free ai image generator no signup",
    "text to image generator online",
    "ai art creator from text description",
    "artificial intelligence image maker",
    "generate images from text prompts",
    "ai picture generator free online",
    "text to ai art converter",
    "free ai image creation tool",
    "artificial intelligence art generator",
    "ai image generator with styles",
    "text description to image ai",
    "create ai images from text",
    "ai image maker free unlimited",
    "artificial intelligence image creator",
  ].join(", "),
  openGraph: {
    title: "Free AI Image Generator - Create Images from Text",
    description:
      "Generate stunning AI images from text prompts instantly. Free AI art generator with advanced features and styles. No signup required.",
    url: "https://30tools.com/ai-image-generator",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/ai-image-generator.jpg",
        width: 1200,
        height: 630,
        alt: "AI Image Generator - Free Text to Image Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Image Generator - Free Text to Image Creator",
    description:
      "Generate stunning AI images from text prompts instantly. Free AI art generator with advanced features and no signup required.",
    images: ["/og-images/ai-image-generator.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/ai-image-generator",
  },
  category: "Generators",
};

export default function AIImageGeneratorPage() {
  // Tool-specific data
  const toolData = {
    id: "ai-image-generator",
    name: "AI Image Generator",
    description: "Generate stunning AI images from text prompts",
    category: "generators",
    route: "/ai-image-generator",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Generators", url: "/generators" },
    { name: "AI Image Generator", url: "/ai-image-generator" },
  ];

  // Tool features
  const features = [
    "Advanced AI text-to-image generation",
    "Multiple art styles (photorealistic, digital art, anime)",
    "Custom image dimensions and sizes",
    "High-quality image downloads",
    "Image generation history tracking",
    "Seed-based reproducible results",
    "No signup or registration required",
    "Unlimited daily generations",
  ];

  // Usage examples
  const examples = [
    {
      title: "Digital Art",
      description: "Cyberpunk city concept",
      input: "Cyberpunk city street at night, neon lights, rain, futuristic cars, highly detailed, 8k",
      output: "Stunning digital artwork of a futuristic city",
    },
    {
      title: "Photorealistic",
      description: "Nature photography",
      input: "Majestic mountain landscape, sunset, lake reflection, photorealistic, 4k, cinematic lighting",
      output: "Realistic nature photograph",
    },
    {
      title: "Character Design",
      description: "Fantasy character concept",
      input: "Elf warrior princess, silver armor, magical forest background, fantasy art style, detailed face",
      output: "Detailed fantasy character illustration",
    },
  ];

  // FAQ data
  const faqs = getGeneratorToolFAQs("ai-image-generator");

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
            Free AI Image Generator - Text to Art Creator
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Transform your words into stunning visuals with our free AI image
            generator. Create art, illustrations, and realistic photos instantly
            from text descriptions. No signup required, unlimited generations.
          </p>

          <QuickActions
            toolName="AI Image Generator"
            toolUrl="https://30tools.com/ai-image-generator"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <AIImageGeneratorTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples tool={toolData} examples={examples} />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="ai-image-generator"
            title="What Artists Say About Our AI Generator"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Generate AI Images
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Enter Prompt</h3>
              <p className="text-muted-foreground text-sm">
                Describe the image you want to create in detail. Include style,
                colors, and mood.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Select Settings</h3>
              <p className="text-muted-foreground text-sm">
                Choose your preferred art style, aspect ratio, and other
                generation parameters.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Generate & Save</h3>
              <p className="text-muted-foreground text-sm">
                Click generate to create your artwork. Download high-quality
                images instantly.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="AI Image Generator FAQ"
            categoryTitle="AI Art Generation"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="ai-image-generator"
            category="generators"
            tools={relatedTools}
            title="More Creative Generators"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="ai-image-generator"
          toolName="AI Image Generator"
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
              name: "AI Image Generator",
              description:
                "Generate stunning AI images from text prompts instantly using advanced artificial intelligence",
              url: "https://30tools.com/ai-image-generator",
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
                "https://30tools.com/screenshots/ai-image-generator.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "2847",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Generate AI Images",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Enter Prompt",
                  text: "Describe the image you want to create in detail. Include style, colors, and mood.",
                  url: "https://30tools.com/ai-image-generator#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Select Settings",
                  text: "Choose your preferred art style, aspect ratio, and other generation parameters.",
                  url: "https://30tools.com/ai-image-generator#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Generate & Save",
                  text: "Click generate to create your artwork. Download high-quality images instantly.",
                  url: "https://30tools.com/ai-image-generator#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
