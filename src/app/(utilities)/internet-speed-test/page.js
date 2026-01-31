import InternetSpeedTestTool from "@/components/tools/utilities/InternetSpeedTestTool";
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
  title: "Internet Speed Test - Free Online Tool | Professional Results",
  description:
    "Test your internet speed instantly. Check wifi download speed, upload speed, ping, and jitter. Accurate, free, and mobile-friendly speed test tool.",
  keywords: [
    "internet speed test",
    "wifi speed test",
    "check internet speed",
    "broadband speed test",
    "ping test online",
    "upload speed check",
    "download speed test",
    "network speed test",
    "5g speed test",
    "fiber speed test"
  ].join(", "),
  openGraph: {
    title: "Internet Speed Test (2026) - Check Connection Speed",
    description:
      "Test your internet speed for free. Check download speed, upload speed, and ping latency with our accurate internet speed test tool.",
    type: "website",
    url: "https://30tools.com/internet-speed-test",
    images: [{ url: "/og-images/internet-speed-test.jpg", width: 1200, height: 630, alt: "Internet Speed Test" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Internet Speed Test (2026) - Free Connection Check",
    description:
      "Test your internet speed for free. Check download speed, upload speed, and ping latency.",
    images: ["/og-images/internet-speed-test.jpg"],
  },
  canonical: "https://30tools.com/internet-speed-test",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Internet Speed Test",
  "description": "Professional internet speed test tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/internet-speed-test",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  }
};

export default function InternetSpeedTestPage() {
  const toolData = {
    id: "internet-speed-test",
    name: "Internet Speed Test",
    description: "Check your internet connection speed",
    category: "utilities",
    route: "/internet-speed-test",
  };

  const features = [
    "Accurate Download Speed Test",
    "Upload Speed Measurement",
    "Ping & Jitter Analysis",
    "Global Server Network",
    "Works on Mobile & Desktop",
    "No App Installation Required",
    "Real-time Graphs",
    "History Tracking"
  ];

  const examples = [
    {
      title: "Streaming Quality",
      description: "Check if you can stream 4K",
      input: "Run Test",
      output: "25+ Mbps required for 4K UHD",
    },
    {
      title: "Gaming Ping",
      description: "Latency check for gamers",
      input: "Run Test",
      output: "Low ping (<20ms) is ideal for gaming",
    },
    {
      title: "Video Calls",
      description: "Zoom/Teams stability",
      input: "Run Test",
      output: "Upload speed check for clear video",
    }
  ];

  const faqs = [
    {
      question: "What is a good internet speed?",
      answer: "For general browsing, 10-25 Mbps is sufficient. For 4K streaming and gaming, aim for 50-100 Mbps or higher.",
    },
    {
      question: "Why is my upload speed lower than download?",
      answer: "Most home internet plans are asymmetrical, prioritizing download speed because users consume more content than they upload.",
    },
    {
      question: "Does this work on mobile data?",
      answer: "Yes, our speed test works on 4G, 5G, LTE, and Wi-Fi networks on all mobile devices.",
    }
  ];

  const relatedTools = [
    {
      id: "url-shortener",
      name: "URL Shortener",
      description: "Shorten long links",
      route: "/url-shortener",
      category: "utilities",
    },
    {
      id: "base64-tool",
      name: "Base64 Tool",
      description: "Encode/Decode Base64",
      route: "/base64-tool",
      category: "developer-tools",
    },
    {
      id: "jwt-decoder",
      name: "JWT Decoder",
      description: "Decode JSON Web Tokens",
      route: "/jwt-decoder",
      category: "developer-tools",
    },
  ];

  return (
        <>
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Free <span className="text-primary">Internet Speed Test</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check your broadband or mobile internet speed in seconds. Reliable measurement of download, upload, and latency.
          </p>
          <QuickActions
            toolName="Speed Test"
            toolUrl="https://30tools.com/internet-speed-test"
            showBookmark={true}
            showShare={true}
          />
        </div>

        <div className="mb-20">
          <InternetSpeedTestTool />
        </div>

        {/* Content Sections */}
        <GeneratorToolFeatures tool={toolData} features={features} />
        <GeneratorToolExamples tool={toolData} examples={examples} title="Why Test Your Speed?" />

        <div className="mb-20">
          <FAQSection
            faqs={faqs}
            title="Speed Test FAQ"
            categoryTitle="Internet Performance"
            variant="accordion"
            showSchema={true}
          />
        </div>

        <div className="mb-20">
          <RelatedTools
            currentTool="internet-speed-test"
            category="utilities"
            tools={relatedTools}
            title="More Utility Tools"
          />
        </div>

        <UserComments
          toolId="internet-speed-test"
          toolName="Internet Speed Test"
          showStats={true}
          allowComments={true}
        />
      </div>
    </div>
  
        </>
);
}
