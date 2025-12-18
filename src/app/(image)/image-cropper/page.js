import ImageCropperTool from "@/components/tools/image/ImageCropperTool";
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
  title: "Free Image Cropper - Crop Photos Online | 30tools",
  description:
    "Crop images online for free. Cut photos to exact size or aspect ratio. Presets for Instagram, Facebook, YouTube, and more. Circular crop available.",
  keywords:
    "image cropper, crop image online, photo cropper, crop picture, resize and crop, circle crop, instagram crop, youtube thumbnail crop, free online cropper",
  alternates: {
    canonical: "https://30tools.com/image-cropper",
  },
  openGraph: {
    title: "Free Image Cropper - Crop Photos Online",
    description:
      "Crop images online for free. Cut photos to exact size or aspect ratio. Presets for Instagram, Facebook, YouTube, and more.",
    url: "https://30tools.com/image-cropper",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/image-cropper.jpg",
        width: 1200,
        height: 630,
        alt: "Free Image Cropper - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Cropper - Crop Photos Online",
    description:
      "Crop images online for free. Cut photos to exact size or aspect ratio. Presets for Instagram, Facebook, YouTube, and more.",
    images: ["/og-images/image-cropper.jpg"],
    creator: "@30tools",
  },
  category: "Image Tools",
};

export default function ImageCropperPage() {
  // Tool-specific data
  const toolData = {
    id: "image-cropper",
    name: "Image Cropper",
    description: "Crop and resize images online",
    category: "image",
    route: "/image-cropper",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Image Tools", url: "/image-tools" },
    { name: "Image Cropper", url: "/image-cropper" },
  ];

  // Tool features
  const features = [
    "Free-form cropping",
    "Preset aspect ratios (1:1, 16:9, etc.)",
    "Circular crop mode",
    "Rotate and flip images",
    "Zoom and pan control",
    "High-quality output",
    "No watermark",
    "Secure local processing",
  ];

  // Usage examples
  const examples = [
    {
      title: "Social Media Profile",
      description: "Create a perfect circle avatar",
      input: "Rectangular photo",
      output: "Circular profile picture",
    },
    {
      title: "YouTube Thumbnail",
      description: "Crop to 16:9 aspect ratio",
      input: "Large screenshot or photo",
      output: "1280x720 thumbnail",
    },
    {
      title: "Instagram Post",
      description: "Square crop for feed",
      input: "Portrait or landscape photo",
      output: "1:1 Square image",
    },
  ];

  // FAQ data
  const faqs = getImageToolFAQs("image-cropper");

  // Related tools
  const relatedTools = [
    {
      id: "image-resizer",
      name: "Image Resizer",
      description: "Resize images to specific dimensions",
      route: "/image-resizer",
      category: "image",
    },
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
            Free Online Image Cropper
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Crop your photos easily with our free online tool. Use preset aspect
            ratios for social media, crop to a circle, or define custom
            dimensions. Fast, secure, and easy to use.
          </p>

          <QuickActions
            toolName="Image Cropper"
            toolUrl="https://30tools.com/image-cropper"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <ImageCropperTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Cropping Examples"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="image-cropper"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Crop Images
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload Image</h3>
              <p className="text-muted-foreground text-sm">
                Drag and drop your image or click to upload. We support JPG, PNG,
                and WebP.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Select Area</h3>
              <p className="text-muted-foreground text-sm">
                Drag the handles to select the crop area or choose a preset ratio.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Crop & Download</h3>
              <p className="text-muted-foreground text-sm">
                Click "Crop" to apply changes and then download your new image.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Image Cropper FAQ"
            categoryTitle="Image Cropping"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="image-cropper"
            category="image"
            tools={relatedTools}
            title="More Image Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="image-cropper"
          toolName="Image Cropper"
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
              name: "Image Cropper",
              description:
                "Crop images online for free. Cut photos to exact size or aspect ratio. Presets for social media.",
              url: "https://30tools.com/image-cropper",
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
              screenshot: "https://30tools.com/screenshots/image-cropper.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "1240",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Crop Images Online",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload Image",
                  text: "Drag and drop your image or click to upload. We support JPG, PNG, and WebP.",
                  url: "https://30tools.com/image-cropper#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Select Area",
                  text: "Drag the handles to select the crop area or choose a preset ratio.",
                  url: "https://30tools.com/image-cropper#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Crop & Download",
                  text: "Click 'Crop' to apply changes and then download your new image.",
                  url: "https://30tools.com/image-cropper#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
