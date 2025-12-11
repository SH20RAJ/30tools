import ExcuseGeneratorTool from "@/components/tools/generators/ExcuseGeneratorTool";
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
  title: "Excuse Generator - Creative Funny Excuses for Any Situation",
  description:
    "Generate creative and funny excuses for work, school, social events, and family situations. AI-powered excuse maker with believability levels.",
  keywords:
    "excuse generator, funny excuses, creative excuses, excuse maker, work excuses, school excuses, social excuses, late for work excuse, homework excuse, cancel plans excuse, random excuse generator, best excuses for being late, believable excuses generator",
  canonical: "https://30tools.com/excuse-generator",
  openGraph: {
    title: "Excuse Generator - Creative & Funny Excuses",
    description:
      "Generate creative and funny excuses for any situation! Perfect for work, school, and social events. 😅",
    url: "https://30tools.com/excuse-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/excuse-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Excuse Generator Tool - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Excuse Generator - Creative & Funny Excuses",
    description:
      "Generate creative and funny excuses for any situation! Perfect for when you need a good excuse 😅",
    images: ["/og-images/excuse-generator.jpg"],
    creator: "@30tools",
  },
  category: "Generators",
};

export default function ExcuseGeneratorPage() {
  // Tool-specific data
  const toolData = {
    id: "excuse-generator",
    name: "Excuse Generator",
    description: "Generate creative and funny excuses for any situation",
    category: "generators",
    route: "/excuse-generator",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Generators", url: "/generators" },
    { name: "Excuse Generator", url: "/excuse-generator" },
  ];

  // Tool features
  const features = [
    "Work, School & Social categories",
    "Adjustable believability levels",
    "AI-powered creativity",
    "Instant generation",
    "Copy to clipboard",
    "Random mode",
    "Funny & Serious options",
    "Mobile friendly",
  ];

  // Usage examples
  const examples = [
    {
      title: "Late for Work",
      description: "Professional yet believable excuse",
      input: "Category: Work, Level: High",
      output:
        "My alarm clock reset itself due to a power surge overnight and didn't go off.",
    },
    {
      title: "Canceling Plans",
      description: "Polite way to get out of social events",
      input: "Category: Social, Level: Medium",
      output:
        "I think I ate something bad for lunch and I'm not feeling well enough to go out.",
    },
    {
      title: "Homework Not Done",
      description: "Classic student excuse",
      input: "Category: School, Level: Low (Funny)",
      output:
        "My dog didn't eat my homework, but he did drool on it so much it became illegible.",
    },
  ];

  // FAQ data
  const faqs = getGeneratorToolFAQs("excuse-generator");

  // Related tools
  const relatedTools = [
    {
      id: "fake-chat-generator",
      name: "Fake Chat Generator",
      description: "Create realistic chat screenshots",
      route: "/fake-chat-generator",
      category: "generators",
    },
    {
      id: "aesthetic-bio-generator",
      name: "Aesthetic Bio Generator",
      description: "Create viral social media bios",
      route: "/aesthetic-bio-generator",
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
            Free Excuse Generator - Funny & Believable Excuses
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Generate creative, funny, or believable excuses for work, school,
            social events, and family situations. AI-powered excuse maker tailored
            to your specific needs. Never get caught without an excuse again!
          </p>

          <QuickActions
            toolName="Excuse Generator"
            toolUrl="https://30tools.com/excuse-generator"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <ExcuseGeneratorTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples tool={toolData} examples={examples} />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="excuse-generator"
            title="What Users Say About Our Excuse Maker"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Generate the Perfect Excuse
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Select Category</h3>
              <p className="text-muted-foreground text-sm">
                Choose the situation you need an excuse for: Work, School,
                Social, or Family.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Set Believability</h3>
              <p className="text-muted-foreground text-sm">
                Decide if you want a serious, plausible excuse or something
                funny and ridiculous.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Generate</h3>
              <p className="text-muted-foreground text-sm">
                Click generate to get instant options. Keep clicking until you
                find the one that works!
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Excuse Generator FAQ"
            categoryTitle="Excuse Generation"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="excuse-generator"
            category="generators"
            tools={relatedTools}
            title="More Creative Generators"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="excuse-generator"
          toolName="Excuse Generator"
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
              name: "Excuse Generator",
              description:
                "Generate creative and funny excuses for work, school, social events, and family situations",
              url: "https://30tools.com/excuse-generator",
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
                "https://30tools.com/screenshots/excuse-generator.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.6",
                reviewCount: "1245",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Generate an Excuse",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Select Category",
                  text: "Choose the situation you need an excuse for: Work, School, Social, or Family.",
                  url: "https://30tools.com/excuse-generator#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Set Believability",
                  text: "Decide if you want a serious, plausible excuse or something funny and ridiculous.",
                  url: "https://30tools.com/excuse-generator#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Generate",
                  text: "Click generate to get instant options. Keep clicking until you find the one that works!",
                  url: "https://30tools.com/excuse-generator#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
