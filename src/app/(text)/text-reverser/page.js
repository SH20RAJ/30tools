import TextReverser from "@/components/tools/text/TextReverserTool";

export const metadata = {
  title: 'Text Reverser - Reverse Text & Words Online Free | 30tools',
  description: "Professional text reverser to Process text instantly. Free online text tool with advanced features. Perfect for writers, students & professionals.",
  keywords: [
    // Primary high-volume keywords
    "text reverser",
    "reverse text",
    "text flipper",
    "backwards text",
    "mirror text",
    "flip text",
    "reverse string",
    "text mirror",
    "reverse words",
    "backwards text generator",
    "text reverser online",
    "reverse text online",
    "flip text online",
    "backwards text online",
    "mirror text online",
    "reverse words online",
    "text flipper online",
    "string reverser",
    "reverse text generator",
    "flip words",
    "text manipulation",
    "reverse characters",
    "backwards generator",
    "mirror writing",
    "reverse order",
    "flip characters",
    "word reverser",
    "character reverser",
    "text backwards",
    "reverse sentence",

    // Long-tail keywords for SEO ranking
    "reverse text characters online free tool",
    "flip text backwards mirror writing generator",
    "reverse word order sentence backwards online",
    "text reverser tool free no registration limit",
    "backwards text generator for social media posts",
    "reverse string characters programming development tool",
    "mirror text effect generator for creative writing",
    "flip text upside down backwards online free",
    "reverse text order words sentences paragraphs",
    "backwards text converter copy paste ready",
    "text manipulation tool reverse characters words",
    "reverse writing generator mirror text effect",
    "flip text backwards for creative content design",
    "backwards text tool for coding programming practice"
  ].join(", "),
  openGraph: {
    title: 'Text Reverser - Reverse Text & Words Online | 30tools',
    description: 'Reverse text characters, flip words, or reverse word order instantly.',
    type: 'website',
    url: 'https://30tools.com/text-reverser',
    images: [
      {
        url: 'https://30tools.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Text Reverser Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Text Reverser - Reverse Text & Words Online',
    description: 'Reverse text characters, flip words, or reverse word order instantly.',
    images: ['https://30tools.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://30tools.com/text-reverser'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Text Reverser",
  "description": "Free online tool to reverse text characters, flip words, and manipulate text order instantly",
  "url": "https://30tools.com/text-reverser",
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Reverse text characters instantly",
    "Flip word order in sentences",
    "Reverse entire text blocks",
    "Character-by-character reversal",
    "Word-by-word reversal",
    "Copy reversed text easily",
    "No character limits",
    "Privacy protected - no data stored"
  ],
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  }
};

export default function TextReverserPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Text Reverser</h1>
            <p className="text-xl text-muted-foreground">
              Reverse text characters, flip words, or change text order instantly
            </p>
          </div>

          <TextReverser />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Reverse Text</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Enter Your Text</h3>
                  <p className="text-sm text-muted-foreground">Type or paste the text you want to reverse</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Choose Reverse Type</h3>
                  <p className="text-sm text-muted-foreground">Select character reversal or word order reversal</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Copy Results</h3>
                  <p className="text-sm text-muted-foreground">Get your reversed text and copy it instantly</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Text Reversal Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">🔄 Character Reversal</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Reverse each character in the text</li>
                    <li>• Mirror writing effect</li>
                    <li>• Maintain spaces and punctuation</li>
                    <li>• Perfect for creative content</li>
                    <li>• Instant character-by-character flip</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">📝 Word Order Reversal</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Reverse word order in sentences</li>
                    <li>• Keep words intact and readable</li>
                    <li>• Maintain punctuation placement</li>
                    <li>• Great for linguistic exercises</li>
                    <li>• Preserve word structure</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">When to Use Text Reverser</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">🎨 Creative Writing</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Create mirror writing effects</li>
                    <li>• Generate backwards text for art</li>
                    <li>• Design unique social media posts</li>
                    <li>• Create puzzles and games</li>
                    <li>• Artistic text arrangements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">💻 Programming & Development</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Test string reversal algorithms</li>
                    <li>• Debug text processing code</li>
                    <li>• Practice programming exercises</li>
                    <li>• Validate text manipulation functions</li>
                    <li>• Create test data for applications</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Text Reversal Examples</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Character Reversal Example:</h3>
                  <div className="bg-muted p-3 rounded font-mono text-sm">
                    <div><strong>Original:</strong> Hello World!</div>
                    <div><strong>Reversed:</strong> !dlroW olleH</div>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Word Order Reversal Example:</h3>
                  <div className="bg-muted p-3 rounded font-mono text-sm">
                    <div><strong>Original:</strong> The quick brown fox</div>
                    <div><strong>Reversed:</strong> fox brown quick The</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">More Text Manipulation Tools</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="/text-case-converter"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">🔤 Text Case Converter</h3>
                  <p className="text-sm text-muted-foreground">
                    Convert text to uppercase, lowercase, title case, and more.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">Convert Text Case →</span>
                </a>

                <a
                  href="/text-formatter"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">✨ Text Formatter</h3>
                  <p className="text-sm text-muted-foreground">
                    Format and clean up your text with various options.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">Format Text →</span>
                </a>

                <a
                  href="/word-counter"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">📊 Word Counter</h3>
                  <p className="text-sm text-muted-foreground">
                    Count words, characters, paragraphs with real-time statistics.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">Count Words →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}