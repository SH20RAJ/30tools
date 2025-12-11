import BackgroundRemoverTool from "@/components/tools/image/BackgroundRemoverTool";
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
import { getImageToolFAQs } from "@/constants/seo/image-faqs";

export const metadata = {
  title: "Free Background Remover - Remove BG from Images Online | 30tools",
  description:
    "Remove image backgrounds automatically in seconds with AI. Download transparent PNGs or add white backgrounds. Perfect for product photos & portraits.",
  keywords:
    "background remover, remove background, transparent background, remove bg, delete background, ai background remover, free background eraser, product photography tool, transparent png maker",
  alternates: {
    canonical: "https://30tools.com/background-remover",
  },
  openGraph: {
    title: "Free Background Remover - Remove BG from Images Online",
    description:
      "Remove image backgrounds automatically in seconds with AI. Download transparent PNGs or add white backgrounds.",
    url: "https://30tools.com/background-remover",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/background-remover.jpg",
        width: 1200,
        height: 630,
        alt: "Free Background Remover Tool - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Background Remover - Remove BG from Images Online",
    description:
      "Remove image backgrounds automatically in seconds with AI. Download transparent PNGs or add white backgrounds.",
    images: ["/og-images/background-remover.jpg"],
    creator: "@30tools",
  },
  category: "Image Tools",
};

export default function BackgroundRemoverPage() {
  // Tool-specific data
  const toolData = {
    id: "background-remover",
    name: "Background Remover",
    description: "Remove image backgrounds automatically with AI",
    category: "image",
    route: "/background-remover",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Image Tools", url: "/image-tools" },
    { name: "Background Remover", url: "/background-remover" },
  ];

  // Tool features
  const features = [
    "AI-powered auto removal",
    "Instant transparent background",
    "Handle complex edges (hair/fur)",
    "Add solid color backgrounds",
    "High-resolution output",
    "No signup required",
    "Unlimited free use",
    "Secure processing",
  ];

  // Usage examples
  const examples = [
    {
      title: "E-commerce Products",
      description: "Clean white background for listings",
      input: "Product photo with messy background",
      output: "Professional product image on white",
    },
    {
      title: "Profile Pictures",
      description: "Create professional headshots",
      input: "Selfie with distracting background",
      output: "Clean headshot with transparent/color bg",
    },
    {
      title: "Marketing Materials",
      description: "Isolate subjects for designs",
      input: "Photo of person or object",
      output: "Cutout subject ready for design",
    },
  ];

  // FAQ data
  const faqs = getImageToolFAQs("background-remover");

  // Related tools
  const relatedTools = [
    {
      id: "image-resizer",
      name: "Image Resizer",
      description: "Resize images for social media",
      route: "/image-resizer",
      category: "image",
    },
    {
      id: "image-compressor",
      name: "Image Compressor",
      description: "Reduce image file size",
      route: "/image-compressor",
      category: "image",
    },
    {
      id: "image-converter",
      name: "Image Converter",
      description: "Convert image formats",
      route: "/image-converter",
      category: "image",
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
            Free AI Background Remover
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Instantly remove backgrounds from images with our advanced AI. Create
            transparent backgrounds or add white backgrounds for product photos,
            portraits, and logos. 100% free and automatic.
          </p>

          <QuickActions
            toolName="Background Remover"
            toolUrl="https://30tools.com/background-remover"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <BackgroundRemoverTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="See What You Can Create"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="background-remover"
            title="Loved by Designers & Sellers"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Remove Backgrounds
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload Image</h3>
              <p className="text-muted-foreground text-sm">
                Upload your JPG, PNG, or WebP image. Our AI works best with clear
                subjects.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Auto Process</h3>
              <p className="text-muted-foreground text-sm">
                Wait a few seconds while the AI automatically detects and removes
                the background.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Download</h3>
              <p className="text-muted-foreground text-sm">
                Download your image as a transparent PNG or add a new background
                color.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Background Remover FAQ"
            categoryTitle="Background Removal"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="background-remover"
            category="image"
            tools={relatedTools}
            title="More Image Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="background-remover"
          toolName="Background Remover"
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
              name: "Background Remover",
              description:
                "Remove image backgrounds automatically in seconds with AI. Download transparent PNGs.",
              url: "https://30tools.com/background-remover",
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
                "https://30tools.com/screenshots/background-remover.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "3521",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Remove Background from Image",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload Image",
                  text: "Upload your JPG, PNG, or WebP image. Our AI works best with clear subjects.",
                  url: "https://30tools.com/background-remover#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Auto Process",
                  text: "Wait a few seconds while the AI automatically detects and removes the background.",
                  url: "https://30tools.com/background-remover#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Download your image as a transparent PNG or add a new background color.",
                  url: "https://30tools.com/background-remover#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
