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
  title: "JPG to PDF Converter Online (2026) - Images to PDF Free | 30Tools",
  description: "Best free online jpg to pdf converter to combine multiple images into one PDF document. convert image to pdf free (Updated 2026) with high quality output.",
  keywords: [
    "jpg to pdf converter 2026", "convert image to pdf free", "combine photos to pdf",
    "jpeg to pdf online", "png to pdf converter", "image to pdf high quality",
    "photos to pdf maker", "smallpdf jpg to pdf", "ilovepdf jpg to pdf", "best image to pdf"
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/jpg-to-pdf",
  },
  openGraph: {
    title: "JPG to PDF Converter (2026) - Free Image to PDF Tool",
    description: "⚡ Convert Images (JPG, PNG) to PDF online! Combine photos into one document free (Updated 2026).",
    url: "https://30tools.com/jpg-to-pdf",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/jpg-to-pdf.jpg",
        width: 1200,
        height: 630,
        alt: "JPG to PDF Converter 2026 - Free Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to PDF Converter (2026) - Free Tool",
    description: "⚡ Convert JPG/PNG images to PDF online. Updated 2026!",
    images: ["/og-images/jpg-to-pdf.jpg"],
    creator: "@30tools",
  },
  category: "PDF Tools",
};

export default function JpgToPdfPage() {
  // Tool-specific data
  const toolData = {
    id: "jpg-to-pdf",
    name: "JPG to PDF",
    description: "Convert images to PDF documents",
    category: "pdf",
    route: "/jpg-to-pdf",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "PDF Tools", url: "/pdf-tools" },
    { name: "JPG to PDF", url: "/jpg-to-pdf" },
  ];

  // Tool features
  const features = [
    "Convert JPG, PNG, WebP & More",
    "Combine Multiple Images",
    "Custom Page Sizes (A4, Letter)",
    "Adjustable Margins & Orientation",
    "Drag & Drop Reordering",
    "High Quality Output",
    "100% Secure Client-Side Processing",
    "No Watermarks",
  ];

  // Usage examples
  const examples = [
    {
      title: "Photo Albums",
      description: "Create a digital photo album",
      input: "50 Vacation Photos (JPG)",
      output: "Vacation_Album.pdf",
    },
    {
      title: "Document Scanning",
      description: "Combine scanned pages",
      input: "Page1.jpg + Page2.jpg + Page3.jpg",
      output: "Scanned_Document.pdf",
    },
    {
      title: "Portfolios",
      description: "Showcase your work",
      input: "Design1.png + Design2.png",
      output: "Design_Portfolio.pdf",
    },
  ];

  // FAQ data
  const faqs = getPdfToolFAQs("jpg-to-pdf");

  // Related tools
  const relatedTools = [
    {
      id: "pdf-merger",
      name: "PDF Merger",
      description: "Combine multiple PDFs",
      route: "/pdf-merger",
      category: "pdf",
    },
    {
      id: "png-to-pdf",
      name: "PNG to PDF",
      description: "Convert PNG images to PDF",
      route: "/png-to-pdf",
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
            Free JPG to PDF Converter
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Convert your images to PDF documents instantly. Combine multiple JPG,
            PNG, or WebP files into a single PDF with custom layouts. Secure,
            fast, and free.
          </p>

          <QuickActions
            toolName="JPG to PDF"
            toolUrl="https://30tools.com/jpg-to-pdf"
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
          title="Ways to Use JPG to PDF"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="jpg-to-pdf"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Convert Images to PDF
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload Images</h3>
              <p className="text-muted-foreground text-sm">
                Select or drag and drop your JPG, PNG, or other image files.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Customize</h3>
              <p className="text-muted-foreground text-sm">
                Reorder images, choose page size, orientation, and margins.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Convert</h3>
              <p className="text-muted-foreground text-sm">
                Click "Convert to PDF" and download your new document.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="JPG to PDF FAQ"
            categoryTitle="Image to PDF Conversion"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="jpg-to-pdf"
            category="pdf"
            tools={relatedTools}
            title="More PDF Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="jpg-to-pdf"
          toolName="JPG to PDF"
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
              name: "Free JPG to PDF Converter",
              description:
                "Convert JPG, PNG, and other images to PDF online for free. Combine multiple images into one PDF.",
              url: "https://30tools.com/jpg-to-pdf",
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
              screenshot: "https://30tools.com/screenshots/jpg-to-pdf.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "1100",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Convert Images to PDF",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload Images",
                  text: "Select or drag and drop your JPG, PNG, or other image files.",
                  url: "https://30tools.com/jpg-to-pdf#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Customize",
                  text: "Reorder images, choose page size, orientation, and margins.",
                  url: "https://30tools.com/jpg-to-pdf#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Convert",
                  text: "Click 'Convert to PDF' and download your new document.",
                  url: "https://30tools.com/jpg-to-pdf#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
