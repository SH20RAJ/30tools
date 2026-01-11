import URLShortenerTool from "@/components/tools/utilities/URLShortenerTool";
import {
  FAQSection,
  RelatedTools,
  UserComments,
  QuickActions,
} from "@/components/seo";
import {
  GeneratorToolFeatures,
  GeneratorToolExamples,
} from "@/components/seo/GeneratorToolsHub";

export const metadata = {
  title: "Free URL Shortener (2026) - Custom Links & Analytics | 30Tools",
  description:
    "Best free URL shortener to create branded short links. Track clicks, generate QR codes, and manage your links. No sign-up required for basic use.",
  keywords: [
    "url shortener",
    "link shortener",
    "free link shortener",
    "custom url shortener",
    "branded links",
    "link tracking",
    "qr code generator",
    "bitly alternative",
    "tinyurl alternative",
    "secure url shortener"
  ].join(", "),
  openGraph: {
    title: "Free URL Shortener (2026) - Custom Links & Analytics",
    description:
      "Create short, trackable links instantly. Free URL shortener with custom aliases and QR codes.",
    url: "https://30tools.com/url-shortener",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/url-shortener.jpg",
        width: 1200,
        height: 630,
        alt: "Free URL Shortener Online",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free URL Shortener (2026)",
    description:
      "Create short, trackable links instantly. Free URL shortener with custom aliases.",
    images: ["/og-images/url-shortener.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/url-shortener",
  },
};

export default function URLShortenerPage() {
  const toolData = {
    id: "url-shortener",
    name: "URL Shortener",
    description: "Shorten and track your links",
    category: "utilities",
    route: "/url-shortener",
  };

  const features = [
    "Create Short Links Instantly",
    "Custom Aliases (Branded Links)",
    "QR Code Generation",
    "Click Analytics & Tracking",
    "No Expiration Date",
    "Edit Destination URL",
    "Bulk Shortening",
    "API Access"
  ];

  const examples = [
    {
      title: "Social Media Bio",
      description: "Clean up your profile links",
      input: "https://very-long-domain.com/user/profile/ref=123",
      output: "30t.ls/myprofile",
    },
    {
      title: "Marketing Campaigns",
      description: "Track ad performance",
      input: "Landing Page URL",
      output: "Trackable link with click stats",
    },
    {
      title: "Print Media",
      description: "QR Codes for flyers",
      input: "Event Info URL",
      output: "Short link + Scannable QR Code",
    }
  ];

  const faqs = [
    {
      question: "Do the links expire?",
      answer: "No, links created with our free URL shortener do not expire and will work indefinitely.",
    },
    {
      question: "Can I customize the back-half?",
      answer: "Yes! You can create custom aliases like '30t.ls/your-brand' to make your links memorable and professional.",
    },
    {
      question: "Is it safe?",
      answer: "Yes, we monitor all links for malware and spam. We prioritize user safety and secure redirection.",
    }
  ];

  const relatedTools = [
    {
      id: "internet-speed-test",
      name: "Internet Speed Test",
      description: "Check internet speed",
      route: "/internet-speed-test",
      category: "utilities",
    },
    {
      id: "qr-code-generator",
      name: "QR Code Generator",
      description: "Create custom QR codes",
      route: "/qr-code-generator",
      category: "image",
    },
    {
      id: "backlink-checker",
      name: "Backlink Checker",
      description: "Check backlinks",
      route: "/backlink-checker",
      category: "seo",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Free <span className="text-primary">URL Shortener</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Shorten long URLs, create branded links, and track clicks. The best free link shortener for marketers and creators.
          </p>
          <QuickActions
            toolName="URL Shortener"
            toolUrl="https://30tools.com/url-shortener"
            showBookmark={true}
            showShare={true}
          />
        </div>

        <div className="mb-20">
          <URLShortenerTool />
        </div>

        {/* Content Sections */}
        <GeneratorToolFeatures tool={toolData} features={features} />
        <GeneratorToolExamples tool={toolData} examples={examples} title="Smart Link Management" />

        <div className="mb-20">
          <FAQSection
            faqs={faqs}
            title="URL Shortener FAQ"
            categoryTitle="Link Management"
            variant="accordion"
            showSchema={true}
          />
        </div>

        <div className="mb-20">
          <RelatedTools
            currentTool="url-shortener"
            category="utilities"
            tools={relatedTools}
            title="More Tools"
          />
        </div>

        <UserComments
          toolId="url-shortener"
          toolName="URL Shortener"
          showStats={true}
          allowComments={true}
        />
      </div>
    </div>
  );
}
