import ImageCompressorTool from "@/components/tools/image/ImageCompressorTool";
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
  title: "Free Image Compressor - Compress JPEG, PNG, WebP Online | 30tools",
  description:
    "Compress images online for free. Reduce file size of JPG, PNG, and WebP images by up to 80% without losing quality. Bulk compression supported.",
  keywords:
    "image compressor, compress image online, reduce image size, free photo compressor, jpg compressor, png compressor, webp compressor, bulk image compressor, optimize images",
  alternates: {
    canonical: "https://30tools.com/image-compressor",
  },
  openGraph: {
    title: "Free Image Compressor - Compress JPEG, PNG, WebP Online",
    description:
      "Compress images online for free. Reduce file size of JPG, PNG, and WebP images by up to 80% without losing quality.",
    url: "https://30tools.com/image-compressor",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/image-compressor.jpg",
        width: 1200,
        height: 630,
        alt: "Image Compressor - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Compressor - Compress JPEG, PNG, WebP Online",
    description:
      "Compress images online for free. Reduce file size of JPG, PNG, and WebP images by up to 80% without losing quality.",
    images: ["/og-images/image-compressor.jpg"],
    creator: "@30tools",
  },
  category: "Image Tools",
};

export default function ImageCompressorPage() {
  // Tool-specific data
  const toolData = {
    id: "image-compressor",
    name: "Image Compressor",
    description: "Compress images without losing quality",
    category: "image",
    route: "/image-compressor",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Image Tools", url: "/image-tools" },
    { name: "Image Compressor", url: "/image-compressor" },
  ];

  // Tool features
  const features = [
    "Compress JPG, PNG, WebP",
    "Reduce size by up to 80%",
    "Bulk processing supported",
    "Adjust compression quality",
    "No file size limits",
    "Secure local processing",
    "No watermarks",
    "100% Free",
  ];

  // Usage examples
  const examples = [
    {
      title: "Website Optimization",
      description: "Faster page loads",
      input: "Large Hero Image (2MB)",
      output: "Optimized WebP (200KB)",
    },
    {
      title: "Email Attachments",
      description: "Fit within limits",
      input: "High-res Photos",
      output: "Compressed JPEGs",
    },
    {
      title: "Storage Space",
      description: "Save disk space",
      input: "Photo Library",
      output: "Reduced Size Archive",
    },
  ];

  // FAQ data
  const faqs = getImageToolFAQs("image-compressor");

  // Related tools
  const relatedTools = [
    {
      id: "image-resizer",
      name: "Image Resizer",
      description: "Resize dimensions",
      route: "/image-resizer",
      category: "image",
    },
    {
      id: "image-converter",
      name: "Image Converter",
      description: "Convert formats",
      route: "/image-converter",
      category: "image",
    },
    {
      id: "background-remover",
      name: "Background Remover",
      description: "Remove backgrounds",
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
            Free Online Image Compressor
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Compress your images online for free. Reduce the file size of your
            JPG, PNG, and WebP photos by up to 80% while maintaining excellent
            visual quality.
          </p>

          <QuickActions
            toolName="Image Compressor"
            toolUrl="https://30tools.com/image-compressor"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <ImageCompressorTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Compression Results"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="image-compressor"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Compress Images
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload</h3>
              <p className="text-muted-foreground text-sm">
                Drag & drop your images or click to select files.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Adjust</h3>
              <p className="text-muted-foreground text-sm">
                Set your desired quality level to balance size and clarity.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Download</h3>
              <p className="text-muted-foreground text-sm">
                Download your compressed images individually or as a ZIP.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Image Compressor FAQ"
            categoryTitle="Compression"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="image-compressor"
            category="image"
            tools={relatedTools}
            title="More Image Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="image-compressor"
          toolName="Image Compressor"
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
              name: "Free Image Compressor",
              description:
                "Compress images online for free. Reduce file size of JPG, PNG, and WebP images by up to 80% without losing quality.",
              url: "https://30tools.com/image-compressor",
              applicationCategory: "UtilityApplication",
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
              screenshot: "https://30tools.com/screenshots/image-compressor.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "1250",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Compress Images",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload",
                  text: "Drag & drop your images or click to select files.",
                  url: "https://30tools.com/image-compressor#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Adjust",
                  text: "Set your desired quality level to balance size and clarity.",
                  url: "https://30tools.com/image-compressor#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Download your compressed images individually or as a ZIP.",
                  url: "https://30tools.com/image-compressor#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
