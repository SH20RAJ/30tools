import AestheticBioGeneratorTool from "@/components/tools/generators/AestheticBioGeneratorTool";
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
import { getGeneratorToolFAQs } from "@/constants/seo/generator-faqs";

export const metadata = {
  title: "Instagram Font Generator (2026) - Aesthetic & Stylish Text | 30Tools",
  description: "Generate stylish Instagram fonts, aesthetic bios, and cool text for your profile. 100+ free insta fonts to copy and paste. Works for bio, captions & comments.",
  keywords: [
    "instagram font generator", "insta fonts", "aesthetic fonts for instagram",
    "instagram text generator", "stylish text generator", "font changer for instagram",
    "cool instagram fonts", "ig fonts copy and paste", "aesthetic text generator",
    "instagram bio fonts", "cursive font generator", "bold text generator instagram"
  ].join(", "),
  openGraph: {
    title: "Instagram Font Generator - Aesthetic & Stylish Text",
    description: "⚡ Generate 100+ aesthetic fonts for Instagram! Copy and paste stylish text for your bio and captions.",
    url: "https://30tools.com/instagram-font-generator",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/instagram-font-generator.jpg", width: 1200, height: 630, alt: "Instagram Font Generator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Font Generator - Stylish Fonts Free",
    description: "⚡ Create aesthetic fonts for Instagram bio and captions instantly!",
    images: ["/og-images/instagram-font-generator.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/instagram-font-generator" },
  robots: { index: true, follow: true }
};

export default function InstagramFontGeneratorPage() {
  const toolData = {
    id: "instagram-font-generator",
    name: "Instagram Font Generator",
    description: "Generate stylish and aesthetic fonts for your Instagram bio, captions, and comments",
    category: "generators",
    route: "/instagram-font-generator",
  };

  const breadcrumbs = [
    { name: "Generators", url: "/generators" },
    { name: "Instagram Font Generator", url: "/instagram-font-generator" },
  ];

  const features = [
    "100+ weird and stylish fonts",
    "Copy and paste to Instagram",
    "Works for Bio, Captions & Stories",
    "Aesthetic symbols included",
    "Instant font preview",
    "Mobile friendly",
    "Zero ads font generator"
  ];

  const examples = [
    {
      title: "Cursive & Script",
      description: "Elegant fonts for sophisticated bios",
      input: "Instagram Queen",
      output: "𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶 𝓠𝓾𝓮𝓮𝓷\nℐ𝓃𝓈𝓉𝒶ℊ𝓇𝒶𝓂 𝒬𝓊ℯℯ𝓃"
    },
    {
      title: "Bold & Strong",
      description: "Stand out in comments",
      input: "Follow Me",
      output: "𝐅𝐨𝐥𝐥𝐨𝐰 𝐌𝐞\n𝗙𝗼𝗹𝗹𝗼𝘄 𝗠𝗲"
    },
    {
      title: "Aesthetic Spaces",
      description: "Clean and minimalist look",
      input: "vibes",
      output: "ｖｉｂｅｓ\n v i b e s"
    }
  ];

  const faqs = [
    {
      question: "How to change font on Instagram bio?",
      answer: "Type your text in our Instagram Font Generator, choose a style you like, copy it, and paste it into your Instagram profile bio settings."
    },
    {
      question: "Are these fonts free to use?",
      answer: "Yes, all fonts generated are unicode characters which are free to use on Instagram, Twitter, TikTok, and other social platforms."
    },
    {
      question: "Can I use these fonts in Instagram Stories?",
      answer: "Absolutely! You can copy the stylish text and paste it directly into your Instagram Stories text tool."
    }
  ];

  const relatedTools = [
    { id: "aesthetic-bio-generator", name: "Aesthetic Bio Generator", description: "Generate full aesthetic bios", route: "/aesthetic-bio-generator", category: "generators" },
    { id: "instagram-hashtag-generator", name: "Instagram Hashtag Generator", description: "Find viral hashtags", route: "/instagram-hashtag-generator", category: "generators" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-6">
        <BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Instagram Font Generator (Copy & Paste)</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Create <strong>aesthetic fonts for Instagram</strong> in seconds. Use our <strong>insta fonts</strong> tool to make your bio, captions, and comments stand out with stylish text and symbols.
          </p>
          <QuickActions toolName="Instagram Font Generator" toolUrl="https://30tools.com/instagram-font-generator" showBookmark={true} showShare={true} />
        </div>

        <div className="mb-12">
          <AestheticBioGeneratorTool />
        </div>

        <GeneratorToolFeatures tool={toolData} features={features} />
        <GeneratorToolExamples tool={toolData} examples={examples} />

        <div className="mb-12">
          <ReviewSnippets toolId="instagram-font-generator" title="User Reviews" showRatingSummary={true} variant="grid" limit={6} />
        </div>

        <div className="mb-12">
          <FAQSection faqs={faqs} title="Instagram Fonts FAQ" categoryTitle="Fonts & Text" variant="accordion" showSchema={true} />
        </div>

        <RelatedTools currentTool="instagram-font-generator" category="generators" tools={relatedTools} title="More Instagram Tools" />
        <UserComments toolId="instagram-font-generator" toolName="Instagram Font Generator" showStats={true} allowComments={true} />
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Instagram Font Generator",
          "description": "Generate stylish unicode fonts for Instagram bio and captions.",
          "url": "https://30tools.com/instagram-font-generator",
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })
      }} />
    </div>
  );
}
