import BackgroundRemoverTool from "@/components/tools/image/BackgroundRemoverTool";
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
  title: "Free Background Remover (2026) - AI Remove BG Online | 30Tools",
  description: "Remove image backgrounds automatically in seconds with AI (Updated 2026). Download transparent PNGs & high quality cutouts. Free, unlimited & secure.",
  keywords: [
    "remove background 2026", "remove bg", "bg remover", "quitar fondo", "background remover free",
    "photoroom alternative", "bg remove", "white background maker", "quitar fondo imagen",
    "removebg", "remove bg gratuit", "remove.bg free", "remove background from image",
    "hapus background", "remove bg online", "pixelcut alternative", "background remove",
    "remove bg free", "eliminar fondo", "bg remove background", "remo", "transparent background",
    "remover bg", "remove background free", "quitar fondo de imagen online", "free background remover",
    "image background remover", "background remover online", "hintergrund entfernen", "png maker",
    "background eraser", "adobe background remover", "video background remover", "erase background",
    "supprimer arrière plan", "bgremove", "ازالة خلفية الصورة", "retirar fundo de imagen online"
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/background-remover",
  },
  openGraph: {
    title: "Free Background Remover (2026) - AI Remove BG Tool",
    description: "⚡ Remove image backgrounds automatically in seconds with AI! Free & unlimited tool (Updated 2026).",
    url: "https://30tools.com/background-remover",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/background-remover.jpg",
        width: 1200,
        height: 630,
        alt: "Free Background Remover 2026 - AI Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Background Remover (2026) - AI Tool",
    description: "⚡ Remove image backgrounds automatically in seconds. Updated 2026!",
    images: ["/og-images/background-remover.jpg"],
    creator: "@30tools",
  },
  category: "Image Tools",
};

export default function BackgroundRemoverPage() {
  // Tool-specific data
  const toolData = {
    id: "background-remover",
    name: "Background Remover",
    description: "Remove image backgrounds automatically with AI",
    category: "image",
    route: "/background-remover",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Image Tools", url: "/image-tools" },
    { name: "Background Remover", url: "/background-remover" },
  ];

  // Tool features
  const features = [
    "AI-powered auto removal (remove bg ai)",
    "Instant transparent background (transparent maker)",
    "Handle complex edges (perfect background eraser)",
    "Add solid color backgrounds (white background remover)",
    "High-resolution output (hd background remover)",
    "No signup required (free online background remover)",
    "Unlimited free use (remove background for free)",
    "Secure processing (privately remove .bg)",
  ];

  // Usage examples
  const examples = [
    {
      title: "E-commerce Products",
      description: "Clean white background for listings",
      input: "Product photo with messy background",
      output: "Professional product image on white",
    },
    {
      title: "Profile Pictures",
      description: "Create professional headshots",
      input: "Selfie with distracting background",
      output: "Clean headshot with transparent/color bg",
    },
    {
      title: "Marketing Materials",
      description: "Isolate subjects for designs",
      input: "Photo of person or object",
      output: "Cutout subject ready for design",
    },
  ];

  // FAQ data
  const faqs = getImageToolFAQs("background-remover");

  // Related tools
  const relatedTools = [
    {
      id: "image-resizer",
      name: "Image Resizer",
      description: "Resize images for social media",
      route: "/image-resizer",
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Free AI Background Remover - Remove BG Online
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
            Instantly <strong>remove backgrounds from images</strong> with our advanced AI. Create <strong>transparent backgrounds</strong>, <strong>make PNGs</strong>, or add <strong>white backgrounds</strong> for product photos, portraits, and logos. 100% free, automatic, and the best <strong>remove.bg alternative</strong> for professional cutouts.
          </p>

          <QuickActions
            toolName="Background Remover"
            toolUrl="https://30tools.com/background-remover"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <BackgroundRemoverTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples
          tool={toolData}
          examples={examples}
          title="See What You Can Create"
        />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="background-remover"
            title="Loved by Designers & Sellers"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Remove Background from Image Free
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload for Background Removal</h3>
              <p className="text-muted-foreground text-sm">
                Upload your picture to <strong>delete background image</strong>. We support JPG, PNG, or WebP. Use our <strong>signature background remover</strong> for crisp results.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">AI Erase Background</h3>
              <p className="text-muted-foreground text-sm">
                Wait while the <strong>ai remove background</strong> engine detects and <strong>clears background</strong> in seconds. Better than <strong>adobe express background remover</strong>.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Download PNG Remover</h3>
              <p className="text-muted-foreground text-sm">
                Download your <strong>no background</strong> image as a <strong>png maker</strong> output or add a <strong>white background</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="Background Remover FAQ"
            categoryTitle="Background Removal"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="background-remover"
            category="image"
            tools={relatedTools}
            title="More Image Tools"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="background-remover"
          toolName="Background Remover"
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
              name: "Background Remover",
              description:
                "Remove image backgrounds automatically in seconds with AI. Download transparent PNGs.",
              url: "https://30tools.com/background-remover",
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
              screenshot:
                "https://30tools.com/screenshots/background-remover.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "3521",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Remove Background from Image",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Upload Image",
                  text: "Upload your JPG, PNG, or WebP image. Our AI works best with clear subjects.",
                  url: "https://30tools.com/background-remover#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Auto Process",
                  text: "Wait a few seconds while the AI automatically detects and removes the background.",
                  url: "https://30tools.com/background-remover#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Download your image as a transparent PNG or add a new background color.",
                  url: "https://30tools.com/background-remover#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
