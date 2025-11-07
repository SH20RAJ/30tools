import TextDiff from "@/components/tools/text/TextDiffTool";

export const metadata = {
  title: 'Text Diff Checker - Compare Two Texts Online Free | 30tools',
  description: "Professional text diff to Process text instantly. Free online text tool with advanced features. Perfect for writers, students & professionals.",
  keywords: [
    // Primary high-volume keywords
    "text diff",
    "text comparison",
    "compare text",
    "text differences",
    "diff checker",
    "text compare",
    "text diff tool",
    "compare two texts",
    "text comparison tool",
    "diff tool",
    "text analyzer",
    "text compare online",
    "diff checker online",
    "text diff online",
    "compare text online",
    "text comparison online",
    "text differences finder",
    "text compare tool",
    "diff comparison",
    "text version compare",
    "document compare",
    "file diff",
    "text merge",

    // Long-tail keywords for SEO ranking
    "text diff checker online free no registration",
    "compare two texts side by side differences",
    "text comparison tool highlight changes additions",
    "diff checker for documents code files",
    "text compare online find differences instantly",
    "text diff tool for writers editors proofreading",
    "compare text versions track changes revisions",
    "text differences finder before after comparison",
    "text compare tool for plagiarism detection",
    "diff checker highlight additions deletions modifications",
    "text comparison online copy paste ready",
    "text diff analyzer for content review",
    "compare two documents text files online",
    "text version comparison tool free unlimited"
  ].join(", "),
  openGraph: {
    title: 'Text Diff Checker - Compare Two Texts | 30tools',
    description: 'Compare two texts and find differences.',
    type: 'website',
  },

  twitter: {
    card: "summary_large_image",
    title: "Text Diff - Free Text Tool | Professional Text Processing",
    description: "Professional text diff to Process text instantly. Free online text tool with advanced features. Perfect for writers, students & professionals.",
    images: ["/og-images/text-diff.jpg"],
    creator: "@30tools"
  },

  alternates: {
    canonical: "https://30tools.com/text-diff"
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Text Diff Checker",
  "description": "Free online tool to compare two texts and highlight differences, additions, and deletions",
  "url": "https://30tools.com/text-diff",
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Compare two texts side by side",
    "Highlight additions and deletions",
    "Show text modifications",
    "Line-by-line comparison",
    "Word-level differences",
    "Copy comparison results",
    "No file size limits",
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
  },
};

export default function TextDiffPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Text Diff Checker</h1>
            <p className="text-xl text-muted-foreground">
              Compare two texts and highlight the differences instantly
            </p>
          </div>

          <TextDiff />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Compare Texts</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-destructive/100/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-destructive font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Enter Original Text</h3>
                  <p className="text-sm text-muted-foreground">Paste your original text in the left panel</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-destructive/100/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-destructive font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Enter Modified Text</h3>
                  <p className="text-sm text-muted-foreground">Paste the modified version in the right panel</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-destructive/100/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-destructive font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">View Differences</h3>
                  <p className="text-sm text-muted-foreground">See highlighted additions, deletions, and changes</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Text Comparison Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-destructive">🔍 Advanced Comparison</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Side-by-side text comparison</li>
                    <li>• Line-by-line difference detection</li>
                    <li>• Word-level change highlighting</li>
                    <li>• Character-level precision</li>
                    <li>• Ignore whitespace options</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-destructive">✨ Visual Highlights</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Green highlighting for additions</li>
                    <li>• Red highlighting for deletions</li>
                    <li>• Blue highlighting for modifications</li>
                    <li>• Clear visual indicators</li>
                    <li>• Easy-to-read comparison format</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">When to Use Text Diff Checker</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">📝 Writing & Editing</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Compare document revisions</li>
                    <li>• Track changes in articles</li>
                    <li>• Review edited content</li>
                    <li>• Compare different versions</li>
                    <li>• Proofreading assistance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">💻 Development & Code</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Compare code versions</li>
                    <li>• Review configuration changes</li>
                    <li>• Check file modifications</li>
                    <li>• Analyze text data changes</li>
                    <li>• Debug text processing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">More Text Analysis Tools</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  href="/text-case-converter"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">🔤 Text Case Converter</h3>
                  <p className="text-sm text-muted-foreground">
                    Convert text to uppercase, lowercase, title case, and more.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">Convert Text Case →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
