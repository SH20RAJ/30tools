import ImageEditorTool from "@/components/tools/image/ImageEditorTool";
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
  title: "Free Online Image Editor - Edit Photos Instantly | 30tools",
  description:
    "Edit photos online for free. Crop, resize, add text, apply filters, and adjust colors. Professional photo editing tools in your browser.",
  keywords:
    "online image editor, photo editor, free photo editor, edit photos online, add text to image, crop image, image filters, picture editor, web based photo editor",
  alternates: {
    canonical: "https://30tools.com/image-editor",
  },
  openGraph: {
    title: "Free Online Image Editor - Edit Photos Instantly",
    description:
      "Edit photos online for free. Crop, resize, add text, apply filters, and adjust colors.",
    url: "https://30tools.com/image-editor",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/image-editor.jpg",
        width: 1200,
        height: 630,
        alt: "Free Online Image Editor - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Image Editor - Edit Photos Instantly",
    description:
      "Edit photos online for free. Crop, resize, add text, apply filters, and adjust colors.",
    images: ["/og-images/image-editor.jpg"],
    creator: "@30tools",
  },
  category: "Image Tools",
};

export default function ImageEditorPage() {
  // Tool-specific data
  const toolData = {
    id: "image-editor",
    name: "Image Editor",
    description: "Edit photos online with professional tools",
    category: "image",
    route: "/image-editor",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Image Tools", url: "/image-tools" },
    { name: "Image Editor", url: "/image-editor" },
  ];

  // Tool features
  const features = [
    "Crop, resize & rotate",
    "Professional photo filters",
    "Color adjustments (Brightness/Contrast)",
    "Add text & stickers",
    "Drawing & shapes",
    "Layer support",
    "History (Undo/Redo)",
    "No watermark",
  ];

  // Usage examples
  const examples = [
    {
      title: "Social Media Content",
      description: "Create engaging posts",
      input: "Photo + Filter + Text Caption",
      output: "Viral-ready social media post",
    },
    {
      title: "Photo Enhancement",
      description: "Fix lighting and colors",
      input: "Dull photo + Brightness/Contrast",
      output: "Vibrant, professional looking photo",
    },
    {
      title: "Meme Creation",
      description: "Add text to images",
      input: "Funny image + Text Overlay",
      output: "Custom meme ready to share",
    },
  ];

  // FAQ data
  const faqs = getImageToolFAQs("image-editor");

  // Related tools
  const relatedTools = [
    {
      id: "background-remover",
      name: "Background Remover",
      description: "Remove image backgrounds automatically",
      route: "/background-remover",
      category: "image",
    },
    {
      id: "image-resizer",
      name: "Image Resizer",
      description: "Resize images for social media",
      route: "/image-resizer",
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
            Free Online Image Editor
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            A powerful, free photo editor in your browser. Crop, resize, apply
            filters, add text, and enhance your images instantly. No account or
            installation required.
          </p>

          <QuickActions
            toolName="Image Editor"
            toolUrl="https://30tools.com/image-editor"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <ImageEditorTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Creative Possibilities"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="image-editor"
            title="What Users Are Creating"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Edit Photos Online
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload Photo</h3>
              <p className="text-muted-foreground text-sm">
                Open your image in the editor. We support JPG, PNG, and WebP.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Edit & Enhance</h3>
              <p className="text-muted-foreground text-sm">
                Use the toolbar to crop, filter, add text, or adjust colors.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Export</h3>
              <p className="text-muted-foreground text-sm">
                Save your edited masterpiece as a high-quality JPG or PNG file.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Image Editor FAQ"
            categoryTitle="Photo Editing"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="image-editor"
            category="image"
            tools={relatedTools}
            title="More Image Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="image-editor"
          toolName="Image Editor"
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
              name: "Image Editor",
              description:
                "Edit photos online for free. Crop, resize, add text, apply filters, and adjust colors.",
              url: "https://30tools.com/image-editor",
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
              screenshot: "https://30tools.com/screenshots/image-editor.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "1890",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Edit Photos Online",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload Photo",
                  text: "Open your image in the editor. We support JPG, PNG, and WebP.",
                  url: "https://30tools.com/image-editor#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Edit & Enhance",
                  text: "Use the toolbar to crop, filter, add text, or adjust colors.",
                  url: "https://30tools.com/image-editor#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Export",
                  text: "Save your edited masterpiece as a high-quality JPG or PNG file.",
                  url: "https://30tools.com/image-editor#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
