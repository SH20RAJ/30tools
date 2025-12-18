import LoremIpsumGeneratorTool from "@/components/tools/text/LoremIpsumGeneratorTool";

export const metadata = {
  title: "Lorem Ipsum Generator (2026) - Dummy Text Tool | 30Tools",
  description: "Generate Lorem Ipsum placeholder text instantly (Updated 2026). Copy & paste dummy text for web design. Customizable paragraphs, words & lists.",
  keywords: [
    "lorem ipsum generator 2026",
    "dummy text generator free",
    "placeholder text online",
    "fake text generator for design",
    "lipsum generator",
    "random text generator",
    "dummy content creator",
    "updated 2026",
    "copy paste lorem ipsum"
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/lorem-ipsum-generator",
  },
  openGraph: {
    title: "Lorem Ipsum Generator (2026) - Free Dummy Text",
    description: "⚡ Generate Lorem Ipsum placeholder text instantly! Perfect for Web & Graphic Design (Updated 2026).",
    url: "https://30tools.com/lorem-ipsum-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/lorem-ipsum-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Lorem Ipsum Generator 2026",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorem Ipsum Generator (2026) - Free Tool",
    description: "⚡ Generate Lorem Ipsum dummy text instantly. Updated 2026!",
    images: ["/og-images/lorem-ipsum-generator.jpg"],
    creator: "@30tools",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function LoremIpsumGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Lorem Ipsum Generator - Placeholder Text Creator",
    description:
      "Generate Lorem Ipsum placeholder text instantly. Customizable paragraphs, words, and sentences for web design and typesetting.",
    url: "https://30tools.com/lorem-ipsum-generator",
    applicationCategory: "WebApplication",
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
    featureList: [
      "Generate paragraphs, sentences, or words",
      "Customizable text length",
      "Classic Lorem Ipsum text",
      "Copy to clipboard",
      "HTML paragraph formatting",
      "Different text variations",
      "Real-time generation",
      "Mobile-friendly interface",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1203",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Lorem Ipsum Generator</h1>
            <p className="text-xl text-muted-foreground">
              Generate placeholder text for your designs and layouts instantly
            </p>
          </div>

          <LoremIpsumGeneratorTool />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                How to Generate Lorem Ipsum Text
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Choose Format</h3>
                  <p className="text-sm text-muted-foreground">
                    Select paragraphs, sentences, or words based on your needs
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Set Quantity</h3>
                  <p className="text-sm text-muted-foreground">
                    Specify how many paragraphs, sentences, or words you need
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Generate & Copy</h3>
                  <p className="text-sm text-muted-foreground">
                    Click generate and copy your Lorem Ipsum text instantly
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                What is Lorem Ipsum?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    📜 Historical Background
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Lorem Ipsum is placeholder text derived from a work by
                    Cicero written in 45 BC. It has been the industry standard
                    dummy text since the 1500s when an unknown printer scrambled
                    a galley of type to make a type specimen book.
                  </p>

                  <h3 className="font-medium mb-2 text-primary">
                    🎨 Design Industry Standard
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Lorem Ipsum has become the standard placeholder text in the
                    printing and typesetting industry. It's used by designers,
                    developers, and content creators worldwide for mockups and
                    prototypes.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    🔤 Why Use Lorem Ipsum?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Lorem Ipsum prevents viewers from being distracted by
                    readable content when focusing on design elements. It
                    provides a neutral text that doesn't compete with the visual
                    design for attention.
                  </p>

                  <h3 className="font-medium mb-2 text-primary">
                    ⚡ Professional Benefits
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Using Lorem Ipsum helps maintain focus on layout,
                    typography, and visual hierarchy without the distraction of
                    meaningful content. It's essential for professional design
                    workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                When to Use Lorem Ipsum Text
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    🎨 Design & Development
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Website mockups and wireframes</li>
                    <li>• Print design layouts and templates</li>
                    <li>• App prototypes and user interfaces</li>
                    <li>• Brochures, flyers, and marketing materials</li>
                    <li>• Typography testing and font selection</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    💼 Professional Use Cases
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Client presentations and proposals</li>
                    <li>• Content management system testing</li>
                    <li>• Email template design</li>
                    <li>• Publishing and editorial layouts</li>
                    <li>• E-commerce product page mockups</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Lorem Ipsum Generator FAQ
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">
                    What does Lorem Ipsum mean?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem Ipsum is scrambled Latin text from Cicero's "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil).
                    The text has been altered over centuries to be nonsensical
                    while maintaining Latin-like appearance.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    How much Lorem Ipsum text should I generate?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Generate based on your design needs: 1-2 paragraphs for
                    short content areas, 3-5 paragraphs for articles, or
                    specific word counts to match your content requirements. Our
                    generator lets you customize the exact amount.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Is Lorem Ipsum better than random text?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Lorem Ipsum has a more natural letter distribution than
                    random text, making it better for testing typography and
                    layout. It's also industry standard, so clients and
                    colleagues recognize it as placeholder text.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Can I use Lorem Ipsum for commercial projects?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! Lorem Ipsum is free to use for any purpose,
                    including commercial projects. However, remember to replace
                    it with real content before launching your final product.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Does Lorem Ipsum affect SEO?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem Ipsum should never be published on live websites as it
                    provides no SEO value and can harm search rankings. Always
                    replace placeholder text with real, valuable content before
                    going live.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Follow & Feedback</h2>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="https://x.com/sh20raj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 border rounded-lg hover:border-border hover:shadow-md transition-all group text-center"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    🐦 Follow @sh20raj
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Follow us on X (Twitter) for design tips and new tool
                    announcements.
                  </p>
                </a>
                <a
                  href="https://x.com/sh20raj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 border rounded-lg hover:border-border hover:shadow-md transition-all group text-center"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    💬 Submit Feedback
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Share your thoughts, report issues, or suggest new features.
                  </p>
                </a>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                More Design & Text Tools
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Explore our collection of design and text tools to enhance your
                creative workflow.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="/word-counter"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    📊 Word Counter
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Count words, characters, paragraphs with real-time
                    statistics.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Count Words →
                  </span>
                </a>

                <a
                  href="/text-case-converter"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    🔤 Text Case Converter
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Convert text to uppercase, lowercase, title case, and more.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Convert Text Case →
                  </span>
                </a>

                <a
                  href="/password-generator"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    🔐 Password Generator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Generate strong, secure passwords with customizable options.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Generate Password →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
