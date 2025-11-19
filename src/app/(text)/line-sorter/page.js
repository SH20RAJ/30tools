import LineSorter from "@/components/tools/text/LineSorterTool";

export const metadata = {
  title: "Line Sorter - Free Text Tool | Professional Text Processing",
  description:
    "Sort text lines alphabetically, numerically, or by length. Ascending/descending order with advanced sorting options. Free online line sorting tool.",
  keywords: [
    // Primary high-volume keywords
    "line sorter",
    "sort lines",
    "text sorter",
    "alphabetical sorter",
    "sort text lines",
    "line organizer",
    "text line sorter",
    "sort lines alphabetically",
    "sort lines numerically",
    "text line organizer",
    "line sorter online",
    "sort lines online",
    "text sorter online",
    "alphabetical sorter online",
    "sort text lines online",
    "line organizer online",
    "text line sorter online",
    "sort lines alphabetically online",
    "sort lines numerically online",
    "text line organizer online",
    "line sorting tool",
    "text sorting tool",
    "alphabetical sorting",
    "numerical sorting",
    "line arrangement",
    "text arrangement",
    "sort by length",
    "reverse sort",
    "ascending sort",
    "descending sort",

    // Long-tail keywords for SEO ranking
    "sort text lines alphabetically ascending descending",
    "line sorter tool numerical alphabetical length",
    "sort list items alphabetically online free",
    "text line sorting tool case sensitive insensitive",
    "sort lines by length shortest longest order",
    "alphabetical line sorter preserve duplicates",
    "numerical line sorting integer decimal numbers",
    "sort text lines ascending descending order",
    "line organizer tool for data cleaning lists",
    "sort multiple lines text alphabetically numerically",
    "text sorting tool csv data list organization",
    "line sorter with reverse order option",
    "sort lines by custom criteria length alphabet",
    "text line arrangement tool free online unlimited",
  ].join(", "),
  openGraph: {
    title:
      "Line Sorter - Sort Text Lines Alphabetically & Numerically | 30tools",
    description:
      "Sort text lines alphabetically, numerically, or by length with advanced options.",
    type: "website",
    url: "https://30tools.com/line-sorter",
    images: [
      {
        url: "https://30tools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Line Sorter Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Line Sorter - Sort Text Lines Alphabetically & Numerically",
    description:
      "Sort text lines alphabetically, numerically, or by length with advanced options.",
    images: ["https://30tools.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://30tools.com/line-sorter",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Line Sorter",
  description:
    "Free online tool to sort text lines alphabetically, numerically, or by length with advanced sorting options",
  url: "https://30tools.com/line-sorter",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Sort lines alphabetically",
    "Sort lines numerically",
    "Sort by line length",
    "Ascending and descending order",
    "Case-sensitive and insensitive sorting",
    "Remove duplicates while sorting",
    "Preserve empty lines option",
    "Privacy protected - no data stored",
  ],
  author: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
  publisher: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
};

export default function LineSorterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Line Sorter</h1>
            <p className="text-xl text-muted-foreground">
              Sort text lines alphabetically, numerically, or by length with
              advanced options
            </p>
          </div>

          <LineSorter />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Sort Lines</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Enter Text Lines</h3>
                  <p className="text-sm text-muted-foreground">
                    Paste or type your text with multiple lines
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Choose Sort Options</h3>
                  <p className="text-sm text-muted-foreground">
                    Select sorting method and order preferences
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Get Sorted Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Copy the organized lines in your desired order
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Sorting Methods</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    🔤 Alphabetical Sorting
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Sort lines A-Z or Z-A</li>
                    <li>• Case-sensitive or insensitive</li>
                    <li>• Natural language sorting</li>
                    <li>• Unicode character support</li>
                    <li>• Preserve special characters</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    🔢 Numerical Sorting
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Sort numbers 1-100 or 100-1</li>
                    <li>• Handle decimal numbers</li>
                    <li>• Mixed text and numbers</li>
                    <li>• Natural number ordering</li>
                    <li>• Scientific notation support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    📏 Length Sorting
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Sort by character count</li>
                    <li>• Shortest to longest</li>
                    <li>• Longest to shortest</li>
                    <li>• Group by similar lengths</li>
                    <li>• Consider or ignore spaces</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                When to Use Line Sorter
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    📋 Data Organization
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Organize customer lists</li>
                    <li>• Sort product catalogs</li>
                    <li>• Arrange employee directories</li>
                    <li>• Order inventory items</li>
                    <li>• Clean CSV data columns</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    💻 Development & Content
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Sort CSS properties</li>
                    <li>• Organize import statements</li>
                    <li>• Arrange configuration files</li>
                    <li>• Sort bibliography entries</li>
                    <li>• Organize todo lists</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Sorting Examples</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">
                      Alphabetical Sort (A-Z):
                    </h3>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <div>
                        <strong>Before:</strong>
                      </div>
                      <div className="ml-4 mb-2">
                        Zebra
                        <br />
                        Apple
                        <br />
                        Monkey
                        <br />
                        Banana
                      </div>
                      <div>
                        <strong>After:</strong>
                      </div>
                      <div className="ml-4">
                        Apple
                        <br />
                        Banana
                        <br />
                        Monkey
                        <br />
                        Zebra
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">
                      Numerical Sort (1-100):
                    </h3>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <div>
                        <strong>Before:</strong>
                      </div>
                      <div className="ml-4 mb-2">
                        100
                        <br />
                        5<br />
                        25
                        <br />3
                      </div>
                      <div>
                        <strong>After:</strong>
                      </div>
                      <div className="ml-4">
                        3<br />
                        5<br />
                        25
                        <br />
                        100
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">
                      Length Sort (Short to Long):
                    </h3>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <div>
                        <strong>Before:</strong>
                      </div>
                      <div className="ml-4 mb-2">
                        Very long sentence here
                        <br />
                        Hi
                        <br />
                        Medium length
                        <br />
                        Short
                      </div>
                      <div>
                        <strong>After:</strong>
                      </div>
                      <div className="ml-4">
                        Hi
                        <br />
                        Short
                        <br />
                        Medium length
                        <br />
                        Very long sentence here
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">
                      Reverse Alphabetical (Z-A):
                    </h3>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <div>
                        <strong>Before:</strong>
                      </div>
                      <div className="ml-4 mb-2">
                        Apple
                        <br />
                        Banana
                        <br />
                        Cherry
                        <br />
                        Date
                      </div>
                      <div>
                        <strong>After:</strong>
                      </div>
                      <div className="ml-4">
                        Date
                        <br />
                        Cherry
                        <br />
                        Banana
                        <br />
                        Apple
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                More Text Organization Tools
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="/remove-duplicates"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    🗑️ Remove Duplicates
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Remove duplicate lines from text lists and data.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Remove Duplicates →
                  </span>
                </a>

                <a
                  href="/text-formatter"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    ✨ Text Formatter
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Format and clean up your text with various options.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Format Text →
                  </span>
                </a>

                <a
                  href="/word-counter"
                  className="block p-4 border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary">
                    📊 Word Counter
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Count words, characters, and lines with statistics.
                  </p>
                  <span className="text-xs text-primary mt-2 inline-block">
                    Count Words →
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
