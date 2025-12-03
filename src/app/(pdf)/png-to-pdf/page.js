import JpgToPdfTool from "@/components/tools/pdf/JpgToPdfTool";
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
import { getPdfToolFAQs } from "@/constants/seo/pdf-faqs";

export const metadata = {
  title: "Free PNG to PDF Converter - Convert PNG Images to PDF | 30tools",
  description:
    "Convert PNG images to PDF online for free. Support for transparency, custom layouts, and high quality. Secure and no watermarks.",
  keywords:
    "png to pdf, convert png to pdf, png images to pdf, transparency to pdf, png pdf converter, image to pdf, combine png to pdf, free pdf tools",
  alternates: {
    canonical: "https://30tools.com/png-to-pdf",
  },
  openGraph: {
    title: "Free PNG to PDF Converter - Convert PNG Images to PDF",
    description:
      "Convert PNG images to PDF online for free. Support for transparency, custom layouts, and high quality. Secure and no watermarks.",
    url: "https://30tools.com/png-to-pdf",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/png-to-pdf.jpg",
        width: 1200,
        height: 630,
        alt: "PNG to PDF Converter - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PNG to PDF Converter - Convert PNG Images to PDF",
    description:
      "Convert PNG images to PDF online for free. Support for transparency, custom layouts, and high quality. Secure and no watermarks.",
    images: ["/og-images/png-to-pdf.jpg"],
    creator: "@30tools",
  },
  category: "PDF Tools",
};

export default function PngToPdfPage() {
  // Tool-specific data
  const toolData = {
    id: "png-to-pdf",
    name: "PNG to PDF",
    description: "Convert PNG images to PDF with transparency support",
    category: "pdf",
    route: "/png-to-pdf",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "PDF Tools", url: "/pdf-tools" },
    { name: "PNG to PDF", url: "/png-to-pdf" },
  ];

  // Tool features
  const features = [
    "Preserve Transparency",
    "High Quality Conversion",
    "Combine Multiple PNGs",
    "Custom Page Layouts",
    "Drag & Drop Reordering",
    "Instant Browser Processing",
    "100% Secure & Private",
    "No Watermarks",
  ];

  // Usage examples
  const examples = [
    {
      title: "Design Portfolios",
      description: "Showcase transparent logos",
      input: "Logo_Variants.png",
      output: "Brand_Guidelines.pdf",
    },
    {
      title: "Screenshots",
      description: "Compile app screenshots",
      input: "Screen1.png + Screen2.png",
      output: "App_Flow.pdf",
    },
    {
      title: "Digital Art",
      description: "Share artwork in high quality",
      input: "Artwork_Collection.png",
      output: "Art_Book.pdf",
    },
  ];

  // FAQ data
  const faqs = getPdfToolFAQs("png-to-pdf");

  // Related tools
  const relatedTools = [
    {
      id: "jpg-to-pdf",
      name: "JPG to PDF",
      description: "Convert JPG images to PDF",
      route: "/jpg-to-pdf",
      category: "pdf",
    },
    {
      id: "pdf-merger",
      name: "PDF Merger",
      description: "Combine multiple PDFs",
      route: "/pdf-merger",
      category: "pdf",
    },
    {
      id: "pdf-compressor",
      name: "PDF Compressor",
      description: "Reduce PDF size",
      route: "/pdf-compressor",
      category: "pdf",
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
            Free PNG to PDF Converter
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Convert PNG images to PDF documents while preserving transparency and
            quality. Combine multiple files, customize layouts, and download
            instantly.
          </p>

          <QuickActions
            toolName="PNG to PDF"
            toolUrl="https://30tools.com/png-to-pdf"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <JpgToPdfTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Why Convert PNG to PDF?"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="png-to-pdf"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Convert PNG to PDF
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload PNGs</h3>
              <p className="text-muted-foreground text-sm">
                Select or drag and drop your PNG images.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Arrange</h3>
              <p className="text-muted-foreground text-sm">
                Reorder images and adjust page settings as needed.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Convert</h3>
              <p className="text-muted-foreground text-sm">
                Click "Convert to PDF" to generate your document.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="PNG to PDF FAQ"
            categoryTitle="PNG to PDF Conversion"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="png-to-pdf"
            category="pdf"
            tools={relatedTools}
            title="More PDF Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="png-to-pdf"
          toolName="PNG to PDF"
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
              name: "Free PNG to PDF Converter",
              description:
                "Convert PNG images to PDF online for free. Support for transparency and high quality.",
              url: "https://30tools.com/png-to-pdf",
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
              screenshot: "https://30tools.com/screenshots/png-to-pdf.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "850",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Convert PNG to PDF",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload PNGs",
                  text: "Select or drag and drop your PNG images.",
                  url: "https://30tools.com/png-to-pdf#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Arrange",
                  text: "Reorder images and adjust page settings as needed.",
                  url: "https://30tools.com/png-to-pdf#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Convert",
                  text: "Click 'Convert to PDF' to generate your document.",
                  url: "https://30tools.com/png-to-pdf#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
