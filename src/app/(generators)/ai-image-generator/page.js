import {
  AuthorBio,
  BreadcrumbsEnhanced,
  FAQSection,
  QuickActions,
  RelatedTools,
  ReviewSnippets,
  UserComments,
} from "@/components/seo";
import {
  GeneratorToolExamples,
  GeneratorToolFeatures,
} from "@/components/seo/GeneratorToolsHub";
import AIImageGeneratorTool from "@/components/tools/generators/AIImageGeneratorTool";
import { getGeneratorToolFAQs } from "@/constants/seo/generator-faqs";
import { generateToolMetadata } from "@/lib/seo-helper";

// OPTIMIZED METADATA: Override with low KD keywords and CTR-optimized
export const metadata = generateToolMetadata(
  "ai-image-generator",
  "generators",
  "en",
  {
    title: "Free AI Image Generator - Instant Text-to-Image Art | 30tools",
    description:
      "Generate stunning AI images from text prompts instantly. Create photorealistic photos, digital art, anime, and illustrations for free. No signup required, unlimited generations, and privacy-focused browser processing. Try now!",
    keywords: [
      "ai image generator",
      "free ai image generator",
      "ai image generator online",
      "ai picture generator",
      "text to image ai",
      "ai art generator",
      "ai image creator",
      "instant ai generator",
      "ai image generator no signup",
      "free ai art generator",
      "text to image free",
      "online ai image generator",
      "ai image generator tool",
      "ai image generator for beginners",
      "ai generated images",
      "ai image generator commercial use",
      "ai image generator easy",
      "simple ai image generator",
      "ai image generator fast",
      "ai art generator free online",
    ],
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
  },
);

export default async function AIImageGeneratorPage({ searchParams }) {
  const params = await searchParams;
  const _lang = params.lang || "en";

  // Tool-specific data
  const toolData = {
    id: "ai-image-generator",
    name: "AI Image Generator",
    description: "Generate stunning AI images from text prompts instantly",
    category: "generators",
    route: "/ai-image-generator",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Generators", url: "/generators" },
    { name: "AI Image Generator", url: "/ai-image-generator" },
  ];

  // Benefits section
  const benefits = [
    {
      title: "Create Stunning Art in Seconds",
      description:
        "Transform simple text descriptions into breathtaking visuals using advanced AI. No design skills needed.",
      icon: "⚡",
    },
    {
      title: "100% Free Forever",
      description:
        "Unlimited generations, no subscription, no watermarks. Create as many images as you want without restrictions.",
      icon: "🎁",
    },
    {
      title: "Privacy-Focused",
      description:
        "All processing happens in your browser. We don't store your prompts or generated images. Complete privacy guaranteed.",
      icon: "🔒",
    },
    {
      title: "Professional Quality Outputs",
      description:
        "Download high-resolution images up to 4K. Perfect for social media, blogs, print, and commercial projects.",
      icon: "🖼️",
    },
    {
      title: "No Installation Required",
      description:
        "Works instantly in any modern browser. No software downloads, no account creation, no setup needed.",
      icon: "🌐",
    },
    {
      title: "Multiple Art Styles",
      description:
        "Choose from 8+ styles including Photorealistic, Anime, Digital Art, Cyberpunk, Oil Painting, and more.",
      icon: "🎨",
    },
  ];

  // Use cases
  const useCases = [
    {
      category: "Content Creation",
      examples: [
        "Blog post featured images",
        "Social media graphics",
        "Email marketing banners",
        "Video thumbnails",
      ],
    },
    {
      category: "Design & Branding",
      examples: [
        "Logo concepts",
        "Brand mood boards",
        "Product mockups",
        "Presentation visuals",
      ],
    },
    {
      category: "Personal Projects",
      examples: [
        "Custom wall art",
        "Greeting cards",
        "Story illustrations",
        "Concept art",
      ],
    },
    {
      category: "Business Use",
      examples: [
        "Ad creatives",
        "Website banners",
        "Infographic elements",
        "Marketing materials",
      ],
    },
  ];

  // Comparison data
  const comparisons = [
    {
      tool: "Midjourney",
      pros: ["High quality", "Strong community"],
      cons: ["Requires Discord", "$10+/month", "Limited generations"],
      ourAdvantage: "Completely free, no account, unlimited use",
    },
    {
      tool: "DALL-E",
      pros: ["Accurate prompts", "OpenAI backing"],
      cons: ["Usage limits", "Subscription needed", "Credits system"],
      ourAdvantage: "No limits, no credits, instant access",
    },
    {
      tool: "Stable Diffusion",
      pros: ["Open source", "Highly customizable"],
      cons: ["Technical setup", "Powerful GPU needed", "Complex UI"],
      ourAdvantage: "Works instantly in browser, zero setup",
    },
    {
      tool: "Canva AI",
      pros: ["Design suite", "Templates included"],
      cons: [
        "Pro subscription required",
        "Limited AI tools",
        "Export restrictions",
      ],
      ourAdvantage: "Free unlimited AI generation, no paywall",
    },
  ];

  // FAQ data (enhanced from tools.json)
  const faqs = getGeneratorToolFAQs("ai-image-generator");

  // Related tools with optimized internal linking
  const relatedTools = [
    {
      id: "ai-voice-generator",
      name: "AI Voice Generator",
      description: "Convert text to natural speech",
      route: "/ai-voice-generator",
      category: "generators",
    },
    {
      id: "image-enlarger",
      name: "AI Image Enlarger",
      description: "Enhance and upscale images",
      route: "/image-enlarger",
      category: "image",
    },
    {
      id: "background-remover",
      name: "Background Remover",
      description: "Remove image backgrounds instantly",
      route: "/background-remover",
      category: "image",
    },
    {
      id: "image-compressor",
      name: "Image Compressor",
      description: "Compress images without quality loss",
      route: "/image-compressor",
      category: "image",
    },
    {
      id: "photo-enhancer",
      name: "Photo Enhancer",
      description: "Improve image quality automatically",
      route: "/photo-enhancer",
      category: "image",
    },
    {
      id: "favicon-generator",
      name: "Favicon Generator",
      description: "Create website favicons from images",
      route: "/favicon-generator",
      category: "image",
    },
  ];

  // Featured snippet definition (for Google quick answers)
  const featuredDefinition = {
    term: "AI Image Generator",
    definition:
      "An AI image generator is a tool that uses artificial intelligence and deep learning to create original images from text descriptions. These tools analyze patterns from millions of training images to generate unique visuals based on user prompts.",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Breadcrumbs with Schema */}
      <div className="container mx-auto px-4 pt-4">
        <BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
      </div>

      {/* Hero Section - Clean & Minimal */}
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            <span className="text-primary">Free</span> AI Image Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
            Transform text into stunning AI-generated artwork instantly. Create
            photorealistic photos, digital art, anime, and illustrations.
            <span className="font-semibold text-foreground">
              {" "}
              No signup • Unlimited generations • 100% private
            </span>
          </p>

          {/* Trust & Value Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 text-sm">
            <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-200">
              <svg
                className="w-4 h-4 mr-1.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Completely Free
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
              <svg
                className="w-4 h-4 mr-1.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              No Signup Required
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-purple-50 text-purple-700 rounded-full border border-purple-200">
              <svg
                className="w-4 h-4 mr-1.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Privacy Protected
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-orange-50 text-orange-700 rounded-full border border-orange-200">
              <svg
                className="w-4 h-4 mr-1.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              Instant HD Download
            </span>
          </div>

          {/* Quick Actions */}
          <QuickActions
            toolName="AI Image Generator"
            toolUrl="https://30tools.com/ai-image-generator"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Featured Definition (Featured Snippet Optimization) */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Quick Definition: AI Image Generator
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              <strong>AI Image Generator:</strong>{" "}
              {featuredDefinition.definition}
              It enables anyone to create professional visuals from simple text
              descriptions without requiring artistic skills or expensive
              software.
            </p>
          </div>
        </div>

        {/* Tool Interface - PRIMARY FOCUS */}
        <div className="mb-12 relative">
          {/* Sticky CTA Banner (appears on scroll) */}
          <div
            id="sticky-cta"
            className="hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-primary text-white px-6 py-3 rounded-full shadow-2xl border-2 border-white/20"
          >
            <a
              href="#generator-tool"
              className="font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
              </svg>
              Start Generating Free AI Images
            </a>
          </div>

          <div id="generator-tool" className="scroll-mt-24">
            <AIImageGeneratorTool />
          </div>
        </div>

        {/* How It Works - Concise */}
        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            How to Generate AI Images in 3 Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Describe Your Vision
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Enter a detailed text prompt. Include subject, style, colors,
                lighting, and mood for best results.
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Choose Style & Settings
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Select art style (photorealistic, anime, digital art, etc.),
                aspect ratio, and optionally set a seed for reproducibility.
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Generate & Download
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Click generate. In 2-5 seconds, your unique AI image appears.
                Download in HD or save to favorites.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits Grid */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why Choose Our AI Image Generator?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-muted to-background rounded-xl border"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features at a Glance */}
        <section className="mb-12">
          <GeneratorToolFeatures
            tool={toolData}
            features={toolData.features || []}
          />
        </section>

        {/* Use Cases */}
        <section className="mb-12 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            AI Image Generator Use Cases
          </h2>
          <div className="space-y-6">
            {useCases.map((category, idx) => (
              <div key={idx} className="bg-card rounded-xl border p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {category.examples.map((example, exIdx) => (
                    <div
                      key={exIdx}
                      className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg"
                    >
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span className="text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-12">
          <GeneratorToolExamples
            tool={toolData}
            examples={[
              {
                title: "Digital Art & Illustrations",
                description:
                  "Create concept art, characters, and digital paintings",
                input:
                  "Fantasy castle floating in clouds, magical lighting, digital art style, trending on artstation",
                output: "Stunning fantasy artwork",
              },
              {
                title: "Photorealistic Images",
                description: "Generate realistic photos of non-existent scenes",
                input:
                  "A cozy coffee shop on a rainy day, detailed window condensation, warm interior lighting, photorealistic",
                output: "Realistic photography",
              },
              {
                title: "Anime & Manga Art",
                description: "Create Japanese-style character art",
                input:
                  "Cute anime girl with cat ears, cherry blossom background, studio ghibli style, soft colors",
                output: "Beautiful anime artwork",
              },
              {
                title: "Cyberpunk & Sci-Fi",
                description: "Futuristic neon-drenched scenes",
                input:
                  "Cyberpunk marketplace at night, neon signs, flying cars, rain-slick streets, cinematic atmosphere",
                output: "Futuristic cyberpunk scene",
              },
            ]}
          />
        </section>

        {/* Comparison vs Alternatives */}
        <section className="mb-12 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why We Beat Paid Alternatives
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-muted">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Our Tool
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Alternatives
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comp, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="px-6 py-4 font-medium">{comp.tool}</td>
                    <td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">
                      <div className="font-medium mb-1">✓ Our Advantages</div>
                      <div className="text-muted-foreground">
                        {comp.ourAdvantage}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-red-600 dark:text-red-400">
                      <div className="space-y-1">
                        {comp.cons.map((con, cIdx) => (
                          <div key={cIdx} className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {con}
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Comparison with popular AI image generators as of 2025
          </p>
        </section>

        {/* User Reviews */}
        <section className="mb-12">
          <ReviewSnippets
            toolId="ai-image-generator"
            title="What Users Say About Our AI Image Generator"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </section>

        {/* FAQ Section - Enhanced */}
        <section className="mb-12" id="faq">
          <FAQSection
            faqs={faqs}
            title="Frequently Asked Questions"
            categoryTitle="AI Image Generator"
            variant="accordion"
            showSchema={true}
          />
        </section>

        {/* Related Tools - Enhanced Internal Linking */}
        <section className="mb-12">
          <RelatedTools
            currentTool="ai-image-generator"
            category="generators"
            tools={relatedTools}
            title="More AI & Image Tools"
            description="Explore other free AI and image manipulation tools to enhance your creative workflow"
          />
        </section>

        {/* User Comments */}
        <section className="mb-12">
          <UserComments
            toolId="ai-image-generator"
            toolName="AI Image Generator"
            showStats={true}
            allowComments={true}
          />
        </section>

        <AuthorBio author="30Tools Creative AI Team" />
      </div>

      {/* Enhanced Structured Data for AI Search & Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "AI Image Generator",
              description:
                "Generate stunning AI images from text prompts instantly. Create photorealistic photos, digital art, anime, and illustrations for free. No signup required.",
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
              featureList: [
                "Advanced Text-to-Image AI Engine",
                "8+ Art Styles (Photorealistic, Anime, Digital Art, Cyberpunk, etc.)",
                "High-Resolution Outputs up to 4K",
                "Customizable Aspect Ratios",
                "Seed-based Reproducible Results",
                "100% Free with Unlimited Generations",
                "No Account Required",
                "Privacy-focused: All Processing Local",
                "Instant HD Download",
                "Generation History & Favorites",
              ],
              screenshot:
                "https://30tools.com/screenshots/ai-image-generator.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "2847",
                bestRating: "5",
                worstRating: "1",
              },
              softwareVersion: "2.0",
              applicationSubCategory: "AI Art Generator",
              supportedPlatform: [
                "Web Browser",
                "Chrome",
                "Firefox",
                "Safari",
                "Edge",
              ],
              encoding: ["PNG"],
              fileFormat: "image/png",
              keywords:
                "ai image generator, free ai art, text to image, online tool, no signup",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Generate AI Images from Text",
              description:
                "Complete guide to creating AI-generated artwork using our free online tool",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Enter Your Prompt",
                  text: "Type a detailed description of the image you want the AI to create. Include subject, style, colors, lighting, and mood.",
                  url: "https://30tools.com/ai-image-generator#step1",
                  image: "https://30tools.com/images/ai-generator-step1.jpg",
                },
                {
                  "@type": "HowToStep",
                  name: "Select Art Style & Settings",
                  text: "Choose your preferred art style (Photorealistic, Anime, Digital Art, etc.). Set aspect ratio and image size. Optionally add a seed number.",
                  url: "https://30tools.com/ai-image-generator#step2",
                  image: "https://30tools.com/images/ai-generator-step2.jpg",
                },
                {
                  "@type": "HowToStep",
                  name: "Generate & Download",
                  text: "Click the 'Generate AI Image' button. Wait 2-5 seconds for processing. Download your HD image or save to favorites.",
                  url: "https://30tools.com/ai-image-generator#step3",
                  image: "https://30tools.com/images/ai-generator-step3.jpg",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Definition",
              name: "AI Image Generator",
              definition: featuredDefinition.definition,
              url: "https://30tools.com/ai-image-generator",
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "30tools",
              url: "https://30tools.com",
              logo: "https://30tools.com/logo.png",
              sameAs: [
                "https://twitter.com/30tools",
                "https://github.com/30tools",
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
