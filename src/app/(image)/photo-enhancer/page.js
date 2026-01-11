import PhotoEnhancerTool from "@/components/tools/image/PhotoEnhancerTool";
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
  title: "Free AI Photo Enhancer - Improve Image Quality Online | 30tools",
  description:
    "Enhance photo quality instantly with AI. Fix blurry images, upscale resolution, reduce noise, and correct colors automatically. Free online tool.",
  keywords:
    "photo enhancer, ai image enhancer, fix blurry photos, upscale image, increase resolution, noise reduction, sharpen image, improve photo quality, free photo enhancer, enhance photo resolution online free, unblur image online, restore old photos online, face restoration ai",
  alternates: {
    canonical: "https://30tools.com/photo-enhancer",
  },
  openGraph: {
    title: "Free AI Photo Enhancer - Improve Image Quality Online",
    description:
      "Enhance photo quality instantly with AI. Fix blurry images, upscale resolution, reduce noise, and correct colors automatically.",
    url: "https://30tools.com/photo-enhancer",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/photo-enhancer.jpg",
        width: 1200,
        height: 630,
        alt: "Free AI Photo Enhancer - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Photo Enhancer - Improve Image Quality Online",
    description:
      "Enhance photo quality instantly with AI. Fix blurry images, upscale resolution, reduce noise, and correct colors automatically.",
    images: ["/og-images/photo-enhancer.jpg"],
    creator: "@30tools",
  },
  category: "Image Tools",
};

export default function PhotoEnhancerPage() {
  // Tool-specific data
  const toolData = {
    id: "photo-enhancer",
    name: "Photo Enhancer",
    description: "Enhance image quality with AI",
    category: "image",
    route: "/photo-enhancer",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Image Tools", url: "/image-tools" },
    { name: "Photo Enhancer", url: "/photo-enhancer" },
  ];

  // Tool features
  const features = [
    "AI-powered enhancement",
    "Fix blurry photos",
    "Upscale resolution (2x, 4x)",
    "Reduce image noise",
    "Color correction",
    "Face restoration",
    "Instant processing",
    "High-quality download",
  ];

  // Usage examples
  const examples = [
    {
      title: "Restore Old Photos",
      description: "Bring memories back to life",
      input: "Old, grainy, faded photo",
      output: "Sharp, vibrant, clear image",
    },
    {
      title: "Fix Blurry Shots",
      description: "Save out-of-focus pictures",
      input: "Blurry action shot",
      output: "Crisp, detailed photograph",
    },
    {
      title: "Upscale for Print",
      description: "Increase size without pixelation",
      input: "Small web image (500px)",
      output: "High-res print image (2000px)",
    },
  ];

  // FAQ data
  const faqs = getImageToolFAQs("photo-enhancer");

  // Related tools
  const relatedTools = [
    {
      id: "image-editor",
      name: "Image Editor",
      description: "Edit photos with filters and text",
      route: "/image-editor",
      category: "image",
    },
    {
      id: "background-remover",
      name: "Background Remover",
      description: "Remove image backgrounds automatically",
      route: "/background-remover",
      category: "image",
    },
    {
      id: "image-compressor",
      name: "Image Compressor",
      description: "Reduce image file size",
      route: "/image-compressor",
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
            Free AI Photo Enhancer
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Transform your low-quality photos into high-resolution masterpieces.
            Our AI automatically fixes blur, reduces noise, and enhances colors
            in seconds.
          </p>

          <QuickActions
            toolName="Photo Enhancer"
            toolUrl="https://30tools.com/photo-enhancer"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <PhotoEnhancerTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Enhancement Examples"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="photo-enhancer"
            title="User Success Stories"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Enhance Photos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload Photo</h3>
              <p className="text-muted-foreground text-sm">
                Select the image you want to improve. We accept JPG, PNG, and WebP.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">AI Processing</h3>
              <p className="text-muted-foreground text-sm">
                Our AI analyzes and enhances your photo automatically in seconds.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Download</h3>
              <p className="text-muted-foreground text-sm">
                Preview the result and download your enhanced, high-quality image.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Photo Enhancer FAQ"
            categoryTitle="Image Enhancement"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="photo-enhancer"
            category="image"
            tools={relatedTools}
            title="More Image Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="photo-enhancer"
          toolName="Photo Enhancer"
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
              name: "Photo Enhancer",
              description:
                "Enhance photo quality instantly with AI. Fix blurry images, upscale resolution, reduce noise.",
              url: "https://30tools.com/photo-enhancer",
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
              screenshot: "https://30tools.com/screenshots/photo-enhancer.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "1542",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Enhance Photos Online",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload Photo",
                  text: "Select the image you want to improve. We accept JPG, PNG, and WebP.",
                  url: "https://30tools.com/photo-enhancer#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "AI Processing",
                  text: "Our AI analyzes and enhances your photo automatically in seconds.",
                  url: "https://30tools.com/photo-enhancer#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Preview the result and download your enhanced, high-quality image.",
                  url: "https://30tools.com/photo-enhancer#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
