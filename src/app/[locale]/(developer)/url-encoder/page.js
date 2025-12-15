import URLEncoder from "@/components/tools/developer/URLEncoderTool";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  Globe,
  Link,
  Lock,
  RefreshCw,
  Search
} from "lucide-react";

export const metadata = {
  title: "URL Encoder/Decoder (2026) - Online Tool | 30Tools",
  description: "Best Free URL Encoder & Decoder 2026. Put text in, get URL-safe string out. Handles special characters, query params, and foreign symbols perfectly.",
  keywords: [
    "url encoder",
    "url decoder",
    "percent encoding",
    "encode url online",
    "decode url string",
    "uri component encoder",
    "query string encoder",
    "url escaping tool",
    "web developer utility",
    "fix broken links"
  ],
  authors: [{ name: "30Tools Team" }],
  creator: "30Tools",
  publisher: "30Tools",
  alternates: {
    canonical: "https://30tools.com/url-encoder",
  },
  openGraph: {
    title: "URL Encoder/Decoder (2026) - Free Online Tool",
    description: "⚡ Encode & Decode URLs content instantly! Handle query parameters & special characters safely. Updated 2026.",
    url: "https://30tools.com/url-encoder",
    siteName: "30Tools",
    type: "website",
    images: [
      {
        url: "/og-images/url-encoder.jpg",
        width: 1200,
        height: 630,
        alt: "Free URL Encoder 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "URL Encoder/Decoder (2026) - Free Tool",
    description: "⚡ Encode and Decode URLs instantly. Updated 2026!",
    images: ["/og-images/url-encoder.jpg"],
    creator: "@30tools",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "URL Encoder/Decoder",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Encode text to URL-safe format",
      "Decode URL-encoded strings",
      "Handle special characters",
      "Support for UTF-8",
      "Free and unlimited use"
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do URLs need encoding?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "URLs can only be sent over the Internet using the ASCII character set. If a URL contains characters outside the ASCII set (like spaces or special symbols), the URL has to be converted into a valid ASCII format."
        }
      },
      {
        "@type": "Question",
        "name": "What is Percent-Encoding?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Percent-encoding is a mechanism for encoding information in a Uniform Resource Identifier (URI). Characters are replaced by a '%' followed by their two-digit hexadecimal value."
        }
      },
      {
        "@type": "Question",
        "name": "Is this tool secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all encoding and decoding is done instantly in your browser using JavaScript. No data is sent to our servers."
        }
      }
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Encode a URL",
    "description": "Step-by-step guide to encode or decode text for URLs.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter Text",
        "text": "Type or paste the text you want to process in the input box.",
        "image": "https://30tools.com/og-images/url-encoder.jpg",
        "url": "https://30tools.com/url-encoder#step1"
      },
      {
        "@type": "HowToStep",
        "name": "Select Mode",
        "text": "Choose 'Encode' to convert to URL format, or 'Decode' to revert it.",
        "url": "https://30tools.com/url-encoder#step2"
      },
      {
        "@type": "HowToStep",
        "name": "Copy",
        "text": "Copy the result from the output box.",
        "url": "https://30tools.com/url-encoder#step3"
      }
    ]
  }
};

export default function URLEncoderPage() {
  const features = [
    {
      icon: <RefreshCw className="w-5 h-5 text-amber-500" />,
      title: "Two-Way Conversion",
      description: "Seamlessly switch between Encoding and Decoding modes with a single click.",
    },
    {
      icon: <Lock className="w-5 h-5 text-emerald-500" />,
      title: "Secure Processing",
      description: "Everything happens in your browser. Sensitive query parameters never leave your device.",
    },
    {
      icon: <Globe className="w-5 h-5 text-blue-500" />,
      title: "UTF-8 Support",
      description: "Accurately handles foreign characters, emojis, and special symbols.",
    },
    {
      icon: <Link className="w-5 h-5 text-violet-500" />,
      title: "URL Safe",
      description: "Ensures your strings are perfectly formatted for use in browsers and API requests.",
    },
  ];

  const steps = [
    { title: "Input Text", desc: "Paste your string." },
    { title: "Convert", desc: "Encode or Decode." },
    { title: "Use It", desc: "Copy safe URL." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }}
      />

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            URL <span className="text-primary">Encoder/Decoder</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The easiest way to encode or decode URLs online. Ensure your links work perfectly everywhere.
          </p>
        </div>

        <div className="mb-20">
          <URLEncoder />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((f, i) => (
            <div key={i} className="bg-card/50 hover:bg-card p-6 rounded-2xl border border-border/50 transition-all duration-200">
              <div className="bg-background w-10 h-10 rounded-xl flex items-center justify-center shadow-sm mb-4 border border-border/50">
                {f.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* How To */}
        <section className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-20 border border-border/50">
          <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 -translate-y-1/2" />
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-background p-6 rounded-2xl border border-border/50 transition-transform hover:scale-105 duration-300 shadow-sm w-full md:w-1/3 z-10">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {jsonLdSchemas.faq.mainEntity.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-border/50">
                <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary">
                  {faq.name}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.acceptedAnswer.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Content Block for SEO */}
        <article className="prose dark:prose-invert max-w-none mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Mastering URL Encoding</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Fix Broken Links</h3>
              <p className="text-muted-foreground">
                Sending a URL with spaces or special characters often breaks the link when clicked in emails or chat apps. Encoding ensures the link remains intact and clickable, no matter where you share it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Safe API Requests</h3>
              <p className="text-muted-foreground">
                When passing parameters in GET requests, values must be properly escaped. Neglecting this can cause your API calls to fail or your data to be misinterpreted by the server. Always encode your query parameters!
              </p>
            </div>
          </div>
        </article>

      </div>
    </>
  );
}
