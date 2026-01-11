import ExifReaderTool from "@/components/tools/image/ExifReaderTool";
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
  title: "Free EXIF Reader - View Image Metadata Online | 30tools",
  description:
    "Read EXIF data from photos online. Extract camera settings, GPS location, timestamp, and other metadata from JPEG, TIFF, and RAW image files. 100% free and secure.",
  keywords:
    "exif reader, view exif data, image metadata viewer, photo metadata reader, check photo location, camera settings viewer, online exif tool, free metadata extractor, view shutter count, check image edit history, photo gps viewer",
  alternates: {
    canonical: "https://30tools.com/exif-reader",
  },
  openGraph: {
    title: "Free EXIF Reader - View Image Metadata Online",
    description:
      "Read EXIF data from photos online. Extract camera settings, GPS location, timestamp, and other metadata.",
    url: "https://30tools.com/exif-reader",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/exif-reader.jpg",
        width: 1200,
        height: 630,
        alt: "EXIF Reader - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free EXIF Reader - View Image Metadata Online",
    description:
      "Read EXIF data from photos online. Extract camera settings, GPS location, timestamp, and other metadata.",
    images: ["/og-images/exif-reader.jpg"],
    creator: "@30tools",
  },
  category: "Image Tools",
};

export default function ExifReaderPage() {
  // Tool-specific data
  const toolData = {
    id: "exif-reader",
    name: "EXIF Reader",
    description: "View hidden image metadata",
    category: "image",
    route: "/exif-reader",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Image Tools", url: "/image-tools" },
    { name: "EXIF Reader", url: "/exif-reader" },
  ];

  // Tool features
  const features = [
    "View Camera Settings (ISO, Aperture, Shutter)",
    "Extract GPS Location Data",
    "See Original Date & Time",
    "Identify Camera Model & Lens",
    "Support for JPEG, TIFF, & RAW",
    "Local Processing (Privacy Focused)",
    "No Upload Required",
    "100% Free",
  ];

  // Usage examples
  const examples = [
    {
      title: "Photographers",
      description: "Check settings",
      input: "Upload Raw Photo",
      output: "View ISO, f-stop, etc.",
    },
    {
      title: "Travelers",
      description: "Find location",
      input: "Upload Vacation Photo",
      output: "View GPS Coordinates",
    },
    {
      title: "Verification",
      description: "Check authenticity",
      input: "Upload Image",
      output: "Verify Original Date",
    },
  ];

  // FAQ data
  const faqs = getImageToolFAQs("exif-reader");

  // Related tools
  const relatedTools = [
    {
      id: "image-compressor",
      name: "Image Compressor",
      description: "Reduce file size",
      route: "/image-compressor",
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
      id: "photo-enhancer",
      name: "Photo Enhancer",
      description: "Improve quality",
      route: "/photo-enhancer",
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
            Free Online EXIF Data Reader
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Instantly view hidden metadata in your photos. Check camera settings,
            GPS location, shutter speed, and more without uploading your images
            to any server.
          </p>

          <QuickActions
            toolName="EXIF Reader"
            toolUrl="https://30tools.com/exif-reader"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <ExifReaderTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Why Read EXIF?"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="exif-reader"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to View Image Metadata
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Select Image</h3>
              <p className="text-muted-foreground text-sm">
                Click to upload or drag and drop your photo (JPEG, TIFF, etc.).
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">View Data</h3>
              <p className="text-muted-foreground text-sm">
                Instantly see camera settings, date, time, and GPS data.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Analyze</h3>
              <p className="text-muted-foreground text-sm">
                Use the information to improve your photography or verify details.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="EXIF Reader FAQ"
            categoryTitle="Metadata"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="exif-reader"
            category="image"
            tools={relatedTools}
            title="More Image Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="exif-reader"
          toolName="EXIF Reader"
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
              name: "Free EXIF Reader",
              description:
                "Read EXIF data from photos online. Extract camera settings, GPS location, timestamp, and other metadata.",
              url: "https://30tools.com/exif-reader",
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
              screenshot: "https://30tools.com/screenshots/exif-reader.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.6",
                reviewCount: "420",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to View Photo Metadata",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Select Image",
                  text: "Click to upload or drag and drop your photo (JPEG, TIFF, etc.).",
                  url: "https://30tools.com/exif-reader#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "View Data",
                  text: "Instantly see camera settings, date, time, and GPS data.",
                  url: "https://30tools.com/exif-reader#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Analyze",
                  text: "Use the information to improve your photography or verify details.",
                  url: "https://30tools.com/exif-reader#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
