import VideoCompressorTool from "@/components/tools/video/VideoCompressorTool";
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
import { getVideoToolFAQs } from "@/constants/seo/video-faqs";

export const metadata = {
  title: "Free Video Compressor - Reduce Video File Size by 80% | 30tools",
  description:
    "Compress videos online for free. Reduce file sizes by up to 80% without quality loss. Perfect for WhatsApp, Email, and Social Media. Fast & Secure.",
  keywords:
    "video compressor, compress video online, reduce video size, free video compressor, compress mp4, video size reducer, compress video for whatsapp, online video optimizer",
  alternates: {
    canonical: "https://30tools.com/video-compressor",
  },
  openGraph: {
    title: "Free Video Compressor - Reduce Video File Size by 80%",
    description:
      "Compress videos online for free. Reduce file sizes by up to 80% without quality loss. Perfect for WhatsApp, Email, and Social Media.",
    url: "https://30tools.com/video-compressor",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/video-compressor.jpg",
        width: 1200,
        height: 630,
        alt: "Free Video Compressor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Video Compressor - Reduce Video File Size by 80%",
    description:
      "Compress videos online for free. Reduce file sizes by up to 80% without quality loss. Perfect for WhatsApp, Email, and Social Media.",
    images: ["/og-images/video-compressor.jpg"],
    creator: "@30tools",
  },
  category: "Video Tools",
};

export default function VideoCompressorPage() {
  // Tool-specific data
  const toolData = {
    id: "video-compressor",
    name: "Video Compressor",
    description: "Reduce video file size while maintaining quality",
    category: "video",
    route: "/video-compressor",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Video Tools", url: "/video-tools" },
    { name: "Video Compressor", url: "/video-compressor" },
  ];

  // Tool features
  const features = [
    "Reduce Size by 80%",
    "No Watermark",
    "Supports MP4, AVI, MOV",
    "WhatsApp Optimized",
    "Client-Side Processing",
    "Batch Compression",
    "Secure & Private",
    "100% Free",
  ];

  // Usage examples
  const examples = [
    {
      title: "WhatsApp Sharing",
      description: "Compress for 16MB limit",
      input: "Vacation_Video.mp4 (50MB)",
      output: "Vacation_Video.mp4 (14MB)",
    },
    {
      title: "Email Attachment",
      description: "Fit within 25MB limit",
      input: "Presentation.mov (100MB)",
      output: "Presentation.mp4 (20MB)",
    },
    {
      title: "Web Optimization",
      description: "Faster loading times",
      input: "Hero_Background.mp4 (15MB)",
      output: "Hero_Background.mp4 (3MB)",
    },
  ];

  // FAQ data
  const faqs = getVideoToolFAQs("video-compressor");

  // Related tools
  const relatedTools = [
    {
      id: "video-converter",
      name: "Video Converter",
      description: "Convert video formats",
      route: "/video-converter",
      category: "video",
    },
    {
      id: "video-trimmer",
      name: "Video Trimmer",
      description: "Cut video clips",
      route: "/video-trimmer",
      category: "video",
    },
    {
      id: "video-to-gif",
      name: "Video to GIF",
      description: "Create GIFs from video",
      route: "/video-to-gif",
      category: "video",
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
            Free Online Video Compressor
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Compress your videos online for free. Reduce file size by up to 80%
            while maintaining quality. Perfect for WhatsApp, Email, and Social
            Media sharing.
          </p>

          <QuickActions
            toolName="Video Compressor"
            toolUrl="https://30tools.com/video-compressor"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <VideoCompressorTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="Why Compress Your Videos?"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="video-compressor"
            title="User Reviews"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Compress Video
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload Video</h3>
              <p className="text-muted-foreground text-sm">
                Select your MP4, AVI, or MOV file.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Choose Quality</h3>
              <p className="text-muted-foreground text-sm">
                Select compression level or target size.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Download</h3>
              <p className="text-muted-foreground text-sm">
                Save your compressed video file.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Video Compressor FAQ"
            categoryTitle="Video Optimization"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="video-compressor"
            category="video"
            tools={relatedTools}
            title="More Video Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="video-compressor"
          toolName="Video Compressor"
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
              name: "Free Video Compressor",
              description:
                "Compress videos online for free. Reduce file sizes by up to 80% without quality loss.",
              url: "https://30tools.com/video-compressor",
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
              screenshot: "https://30tools.com/screenshots/video-compressor.jpg",
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
              name: "How to Compress Video",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload Video",
                  text: "Select your MP4, AVI, or MOV file.",
                  url: "https://30tools.com/video-compressor#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Choose Quality",
                  text: "Select compression level or target size.",
                  url: "https://30tools.com/video-compressor#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Save your compressed video file.",
                  url: "https://30tools.com/video-compressor#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
