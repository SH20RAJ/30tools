import RemoveDuplicates from "@/components/tools/text/RemoveDuplicatesTool";

export const metadata = {
  title: 'Remove Duplicate Lines - Text Deduplication Tool Online | 30tools',
  description: "Professional remove duplicates to Process text instantly. Free online text tool with advanced features. Perfect for writers, students & professionals.",
  keywords: [
    // Primary high-volume keywords
    "remove duplicates",
    "duplicate remover",
    "remove duplicate lines",
    "text deduplication",
    "duplicate line remover",
    "remove duplicate text",
    "text cleaner",
    "duplicate finder",
    "remove repeated lines",
    "text dedupe",
    "remove duplicates online",
    "duplicate remover online",
    "remove duplicate lines online",
    "text deduplication online",
    "duplicate line remover online",
    "remove duplicate text online",
    "text cleaner online",
    "duplicate finder online",
    "remove repeated lines online",
    "text dedupe online",
    "line deduplicator",
    "text list cleaner",
    "remove duplicate entries",
    "unique lines only",
    "duplicate text filter",
    "text duplicate removal",
    "clean duplicate lines",
    "filter duplicate text",
    "remove redundant lines",
    "text list dedupe",

    // Long-tail keywords for SEO ranking
    "remove duplicate lines from text free online",
    "text deduplication tool with case sensitivity",
    "duplicate line remover preserve order original",
    "remove duplicate entries from list data cleaning",
    "text duplicate removal tool csv excel format",
    "bulk duplicate line remover large text files",
    "remove repeated lines keep first occurrence",
    "text dedupe tool ignore whitespace trimming",
    "duplicate finder highlight show duplicate lines",
    "remove duplicates preserve line order sequence",
    "text list cleaner remove redundant entries",
    "duplicate text filter advanced options settings",
    "remove duplicate lines case insensitive matching",
    "text deduplication tool for data analysis"
  ].join(", "),
  openGraph: {
    title: 'Remove Duplicate Lines - Text Deduplication Tool | 30tools',
    description: 'Remove duplicate lines from text instantly. Clean up data and organize text lists.',
    type: 'website',
    url: 'https://30tools.com/remove-duplicates',
    images: [
      {
        url: 'https://30tools.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Remove Duplicates Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remove Duplicate Lines - Text Deduplication Tool',
    description: 'Remove duplicate lines from text instantly. Clean up data and organize text lists.',
    images: ['https://30tools.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://30tools.com/remove-duplicates'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Remove Duplicate Lines",
  "description": "Free online tool to remove duplicate lines from text, clean data, and organize text lists",
  "url": "https://30tools.com/remove-duplicates",
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Remove duplicate lines instantly",
    "Case-sensitive and insensitive options",
    "Preserve original line order",
    "Trim whitespace before comparison",
    "Show duplicate count statistics",
    "Process large text files",
    "Export cleaned results",
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

export default function RemoveDuplicatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Remove Duplicate Lines</h1>
            <p className="text-xl text-muted-foreground">
              Clean up your text by removing duplicate lines instantly with advanced options
            </p>
          </div>

          <RemoveDuplicates />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Remove Duplicates</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Paste Your Text</h3>
                  <p className="text-sm text-muted-foreground">Enter or paste text with duplicate lines</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Configure Options</h3>
                  <p className="text-sm text-muted-foreground">Choose case sensitivity and whitespace settings</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Get Clean Results</h3>
                  <p className="text-sm text-muted-foreground">Copy the deduplicated text with unique lines only</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Deduplication Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">🎯 Smart Detection</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Case-sensitive duplicate detection</li>
                    <li>• Case-insensitive matching option</li>
                    <li>• Whitespace trimming before comparison</li>
                    <li>• Preserve original line order</li>
                    <li>• Handle empty lines intelligently</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">📊 Detailed Statistics</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Show total lines processed</li>
                    <li>• Count unique lines found</li>
                    <li>• Display duplicate lines removed</li>
                    <li>• Calculate deduplication percentage</li>
                    <li>• Real-time processing feedback</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">When to Use Duplicate Remover</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-blue-600">📋 Data Cleaning</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Clean CSV and Excel data</li>
                    <li>• Remove duplicate email addresses</li>
                    <li>• Deduplicate customer lists</li>
                    <li>• Clean survey responses</li>
                    <li>• Organize inventory lists</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-green-600">💻 Programming & Development</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Clean log files and output</li>
                    <li>• Remove duplicate URLs</li>
                    <li>• Deduplicate configuration entries</li>
                    <li>• Clean test data sets</li>
                    <li>• Process scraped data</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Deduplication Examples</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Email List Cleaning:</h3>
                  <div className="bg-muted p-3 rounded font-mono text-sm">
                    <div><strong>Before:</strong></div>
                    <div className="ml-4 mb-2">
                      john@example.com<br/>
                      jane@example.com<br/>
                      john@example.com<br/>
                      admin@example.com<br/>
                      jane@example.com
                    </div>
                    <div><strong>After:</strong></div>
                    <div className="ml-4">
                      john@example.com<br/>
                      jane@example.com<br/>
                      admin@example.com
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Product List Deduplication:</h3>
                  <div className="bg-muted p-3 rounded font-mono text-sm">
                    <div><strong>Before:</strong></div>
                    <div className="ml-4 mb-2">
                      Laptop<br/>
                      Mouse<br/>
                      Keyboard<br/>
                      laptop<br/>
                      Monitor<br/>
                      Mouse
                    </div>
                    <div><strong>After (Case Insensitive):</strong></div>
                    <div className="ml-4">
                      Laptop<br/>
                      Mouse<br/>
                      Keyboard<br/>
                      Monitor
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">More Text Processing Tools</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="/line-sorter"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">📝 Line Sorter</h3>
                  <p className="text-sm text-muted-foreground">
                    Sort text lines alphabetically or numerically in ascending/descending order.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">Sort Lines →</span>
                </a>

                <a
                  href="/text-formatter"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">✨ Text Formatter</h3>
                  <p className="text-sm text-muted-foreground">
                    Format and clean up your text with various formatting options.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">Format Text →</span>
                </a>

                <a
                  href="/word-counter"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">📊 Word Counter</h3>
                  <p className="text-sm text-muted-foreground">
                    Count words, characters, paragraphs with detailed statistics.
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