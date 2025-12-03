import Base64ImageTool from "@/components/tools/image/Base64ImageTool";
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
  title: "Base64 Image Converter - Encode & Decode Images Online | 30tools",
  description:
    "Convert images to Base64 strings or decode Base64 to images. Free online tool for developers. Supports JPG, PNG, GIF, WebP, and SVG.",
  keywords:
    "base64 image converter, image to base64, base64 to image, base64 encoder, base64 decoder, image string converter, embed image in html, data uri generator",
  alternates: {
    canonical: "https://30tools.com/base64-image",
  },
  openGraph: {
    title: "Base64 Image Converter - Encode & Decode Images Online",
    description:
      "Convert images to Base64 strings or decode Base64 to images. Free online tool for developers.",
    url: "https://30tools.com/base64-image",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/base64-image.jpg",
        width: 1200,
        height: 630,
        alt: "Base64 Image Converter - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Base64 Image Converter - Encode & Decode Images Online",
    description:
      "Convert images to Base64 strings or decode Base64 to images. Free online tool for developers.",
    images: ["/og-images/base64-image.jpg"],
    creator: "@30tools",
  },
  category: "Image Tools",
};

export default function Base64ImagePage() {
  // Tool-specific data
  const toolData = {
    id: "base64-image",
    name: "Base64 Image Converter",
    description: "Convert images to Base64 and back",
    category: "image",
    route: "/base64-image",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Image Tools", url: "/image-tools" },
    { name: "Base64 Converter", url: "/base64-image" },
  ];

  // Tool features
  const features = [
    "Image to Base64 conversion",
    "Base64 to Image decoding",
    "Copy HTML <img> code",
    "Copy CSS background code",
    "Supports all image formats",
    "Instant client-side processing",
    "Preview images instantly",
    "One-click copy to clipboard",
  ];

  // Usage examples
  const examples = [
    {
      title: "Embed in HTML",
      description: "Use images without external files",
      input: "Upload 'icon.png'",
      output: "<img src='data:image/png;base64...' />",
    },
    {
      title: "CSS Backgrounds",
      description: "Inline images in stylesheets",
      input: "Upload 'pattern.jpg'",
      output: "background-image: url('data:image/jpg;base64...');",
    },
    {
      title: "Decode Data",
      description: "View Base64 strings as images",
      input: "Paste long Base64 string",
      output: "View and download original image",
    },
  ];

  // FAQ data
  const faqs = getImageToolFAQs("base64-image");

  // Related tools
  const relatedTools = [
    {
      id: "image-converter",
      name: "Image Converter",
      description: "Convert image formats",
      route: "/image-converter",
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
      id: "image-resizer",
      name: "Image Resizer",
      description: "Resize images for web",
      route: "/image-resizer",
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
            Base64 Image Converter
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Easily convert your images to Base64 strings for use in HTML, CSS,
            and JSON. Or paste a Base64 string to decode and preview the image.
            Fast, free, and secure.
          </p>

          <QuickActions
            toolName="Base64 Converter"
            toolUrl="https://30tools.com/base64-image"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <Base64ImageTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Conversion Examples"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="base64-image"
            title="Developer Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Convert Base64 Images
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Choose Mode</h3>
              <p className="text-muted-foreground text-sm">
                Select "Image to Base64" to encode or "Base64 to Image" to decode.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload / Paste</h3>
              <p className="text-muted-foreground text-sm">
                Upload your image file or paste your Base64 string into the box.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Copy / Download</h3>
              <p className="text-muted-foreground text-sm">
                Copy the generated code snippet or download the decoded image file.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Base64 Converter FAQ"
            categoryTitle="Base64 Encoding"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="base64-image"
            category="image"
            tools={relatedTools}
            title="More Image Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="base64-image"
          toolName="Base64 Image Converter"
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
              name: "Base64 Image Converter",
              description:
                "Convert images to Base64 strings or decode Base64 to images. Free online tool for developers.",
              url: "https://30tools.com/base64-image",
              applicationCategory: "DeveloperApplication",
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
              screenshot: "https://30tools.com/screenshots/base64-image.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "856",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Convert Image to Base64",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Choose Mode",
                  text: "Select 'Image to Base64' to encode or 'Base64 to Image' to decode.",
                  url: "https://30tools.com/base64-image#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Upload / Paste",
                  text: "Upload your image file or paste your Base64 string into the box.",
                  url: "https://30tools.com/base64-image#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Copy / Download",
                  text: "Copy the generated code snippet or download the decoded image file.",
                  url: "https://30tools.com/base64-image#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
