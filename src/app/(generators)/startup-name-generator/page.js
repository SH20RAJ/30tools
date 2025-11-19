import StartupNameGeneratorTool from "@/components/tools/generators/StartupNameGeneratorTool";
import {
  BreadcrumbsEnhanced,
  FAQSection,
  ReviewSnippets,
  RelatedTools,
  ToolFeatures,
  UserComments,
  QuickActions,
} from "@/components/seo";
import {
  GeneratorToolFeatures,
  GeneratorToolExamples,
} from "@/components/seo/GeneratorToolsHub";
import { getGeneratorToolFAQs } from "@/constants/seo/generator-faqs";

export const metadata = {
  title: "Startup Name Generator - Free Online Generator | Create Instantly",
  description:
    "Free startup name generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  keywords:
    "startup name generator, business name generator, company name generator, ai name generator, startup names, business names, company names, domain name generator, brand name generator, tech startup names, ai startup name generator free, tech startup name ideas generator, creative business name generator, startup company name generator, indie hacker name generator, saas startup name generator, unicorn startup name ideas, business name generator with domain",
  openGraph: {
    title: "Free AI Startup Name Generator - Creative Business Names",
    description:
      "Generate trendy startup names with AI. Perfect for indie hackers, entrepreneurs & YC applicants. Creative business names with domain suggestions.",
    url: "https://30tools.com/startup-name-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/startup-name-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Startup Name Generator Tool - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Startup Name Generator - Creative Business Names",
    description:
      "Generate trendy startup names loved by indie hackers and VCs. Perfect for your next unicorn! 🦄",
    images: ["/og-images/startup-name-generator.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/startup-name-generator",
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

export default function StartupNameGeneratorPage() {
  // Tool-specific data
  const toolData = {
    id: "startup-name-generator",
    name: "AI Startup Name Generator",
    description: "Generate trendy startup names with AI",
    category: "generators",
    route: "/startup-name-generator",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Generators", url: "/generators" },
    { name: "Startup Name Generator", url: "/startup-name-generator" },
  ];

  // Tool features
  const features = [
    "AI-powered name generation",
    "Industry-specific suggestions",
    "Domain availability hints",
    "Trending name patterns",
    "Save favorite names",
    "Tech & SaaS focused",
    "Startup-friendly styles",
    "Brandable suggestions",
  ];

  // Usage examples
  const examples = [
    {
      title: "Tech Startup",
      description: "Modern tech company names",
      input: "AI, productivity, software",
      output: "Synthflow, Nexusly, Cognitech, Elevio",
    },
    {
      title: "SaaS Platform",
      description: "Software-as-a-Service company names",
      input: "analytics, dashboard, insights",
      output: "Datarise, Metrify, Dashly, Insightful",
    },
    {
      title: "Fintech Startup",
      description: "Financial technology company names",
      input: "payments, banking, finance",
      output: "Payflux, Fintopia, Walletly, Creditech",
    },
  ];

  // FAQ data
  const faqs = getGeneratorToolFAQs("startup-name-generator");

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
      id: "fake-chat-generator",
      name: "Fake Chat Generator",
      description: "Create realistic chat screenshots",
      route: "/fake-chat-generator",
      category: "generators",
    },
    {
      id: "ai-image-generator",
      name: "AI Image Generator",
      description: "Generate images from text",
      route: "/ai-image-generator",
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
            Free AI Startup Name Generator - Creative Business Names
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Generate trendy startup names with AI. Perfect for indie hackers,
            entrepreneurs & YC applicants. Creative business names with domain
            suggestions. Tech, SaaS & startup focused for the modern ecosystem.
          </p>

          <QuickActions
            toolName="Startup Name Generator"
            toolUrl="https://30tools.com/startup-name-generator"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <StartupNameGeneratorTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples tool={toolData} examples={examples} />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="startup-name-generator"
            title="What Entrepreneurs Say About Our Name Generator"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Startup Name Generator FAQ"
            categoryTitle="Business Name Generation"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="startup-name-generator"
            category="generators"
            tools={relatedTools}
            title="More Creative Generators"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="startup-name-generator"
          toolName="Startup Name Generator"
          showStats={true}
          allowComments={true}
        />
      </main>

      {/* Structured Data for Tool */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "AI Startup Name Generator",
            description:
              "Generate trendy startup names with AI. Perfect for indie hackers and entrepreneurs",
            url: "https://30tools.com/startup-name-generator",
            applicationCategory: "BusinessApplication",
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
              "https://30tools.com/screenshots/startup-name-generator.jpg",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "2156",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />
    </div>
  );
}
