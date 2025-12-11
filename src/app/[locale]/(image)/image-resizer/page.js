import ImageResizerTool from "@/components/tools/image/ImageResizerTool";
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
  title: "Free Image Resizer Online - Resize Photos & Images | 30tools",
  description:
    "Resize images online for free. Change dimensions, maintain aspect ratio, batch resize. Perfect for social media, web, and print.",
  keywords:
    "image resizer, resize image online, photo resizer, resize photo, image dimensions, resize pictures online, batch image resize, social media image sizes, instagram photo resizer, youtube thumbnail resizer",
  alternates: {
    canonical: "https://30tools.com/image-resizer",
  },
  openGraph: {
    title: "Free Image Resizer Online - Resize Photos & Images",
    description:
      "Resize images online for free. Change dimensions, maintain aspect ratio, batch resize. Perfect for social media, web, and print.",
    url: "https://30tools.com/image-resizer",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/image-resizer.jpg",
        width: 1200,
        height: 630,
        alt: "Free Image Resizer Tool - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Resizer Online - Resize Photos & Images",
    description:
      "Resize images online for free. Change dimensions, maintain aspect ratio, batch resize.",
    images: ["/og-images/image-resizer.jpg"],
    creator: "@30tools",
  },
  category: "Image Tools",
};

export default function ImageResizerPage() {
  // Tool-specific data
  const toolData = {
    id: "image-resizer",
    name: "Image Resizer",
    description: "Resize images online for free",
    category: "image",
    route: "/image-resizer",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Image Tools", url: "/image-tools" },
    { name: "Image Resizer", url: "/image-resizer" },
  ];

  // Tool features
  const features = [
    "Custom width and height",
    "Maintain aspect ratio",
    "Preset social media sizes",
    "Batch resize multiple images",
    "Quality preservation",
    "Percentage-based scaling",
    "Preview before download",
    "No file upload limits",
  ];

  // Usage examples (Using GeneratorToolExamples component for consistency, adapted for Image Tools)
  const examples = [
    {
      title: "Social Media Posts",
      description: "Resize for Instagram, Facebook, Twitter",
      input: "Original: 4000x3000px photo",
      output: "Resized: 1080x1080px (Instagram Square)",
    },
    {
      title: "Website Optimization",
      description: "Reduce dimensions for faster loading",
      input: "Original: 5MB High-Res Image",
      output: "Resized: 1920x1080px Web-Ready Image",
    },
    {
      title: "Email Attachments",
      description: "Shrink photos to fit email limits",
      input: "Original: 12MP Camera Photo",
      output: "Resized: 800x600px Email Friendly",
    },
  ];

  // FAQ data
  const faqs = getImageToolFAQs("image-resizer");

  // Related tools
  const relatedTools = [
    {
      id: "image-compressor",
      name: "Image Compressor",
      description: "Reduce image file size without quality loss",
      route: "/image-compressor",
      category: "image",
    },
    {
      id: "image-converter",
      name: "Image Converter",
      description: "Convert images between formats",
      route: "/image-converter",
      category: "image",
    },
    {
      id: "background-remover",
      name: "Background Remover",
      description: "Remove image backgrounds automatically",
      route: "/background-remover",
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
            Free Image Resizer - Resize Photos Online
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Easily resize your images to exact pixel dimensions or percentages.
            Perfect for social media, websites, and printing. Batch process
            multiple photos at once for free.
          </p>

          <QuickActions
            toolName="Image Resizer"
            toolUrl="https://30tools.com/image-resizer"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <ImageResizerTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples / Use Cases */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Common Resizing Use Cases"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="image-resizer"
            title="What Users Say About Our Resizer"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Resize Images
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload Images</h3>
              <p className="text-muted-foreground text-sm">
                Drag and drop your photos or click to select files from your
                device.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Set Dimensions</h3>
              <p className="text-muted-foreground text-sm">
                Enter new width/height in pixels or percentage. Choose a preset
                for social media.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Resize & Download</h3>
              <p className="text-muted-foreground text-sm">
                Click resize and download your perfectly sized images instantly.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Image Resizer FAQ"
            categoryTitle="Image Resizing"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="image-resizer"
            category="image"
            tools={relatedTools}
            title="More Image Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="image-resizer"
          toolName="Image Resizer"
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
              name: "Image Resizer",
              description:
                "Resize images online for free. Change dimensions, maintain aspect ratio, batch resize.",
              url: "https://30tools.com/image-resizer",
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
              screenshot: "https://30tools.com/screenshots/image-resizer.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "2156",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Resize Images Online",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload Images",
                  text: "Drag and drop your photos or click to select files from your device.",
                  url: "https://30tools.com/image-resizer#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Set Dimensions",
                  text: "Enter new width/height in pixels or percentage. Choose a preset for social media.",
                  url: "https://30tools.com/image-resizer#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Resize & Download",
                  text: "Click resize and download your perfectly sized images instantly.",
                  url: "https://30tools.com/image-resizer#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
