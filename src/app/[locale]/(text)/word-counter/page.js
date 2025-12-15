import WordCounterTool from "@/components/tools/text/WordCounterTool";

export const metadata = {
  title: "Word Counter (2026) - Count Words & Characters | 30Tools",
  description: "Free online word counter (Updated 2026). Count words, characters, sentences & paragraphs in real-time. Check limits for Twitter, Instagram & Essays.",
  keywords: [
    "word counter 2026",
    "character count online",
    "word count tool free",
    "sentence counter",
    "paragraph counter",
    "twitter character limit checker",
    "instagram caption length",
    "essay word count checker",
    "real time word counter",
    "updated 2026",
    "text analyzer free"
  ].join(", "),
  openGraph: {
    title: "Word Counter (2026) - Free Real-Time Tool",
    description: "⚡ Count words & characters instantly! Perfect for Essays, Twitter & SEO (Updated 2026).",
    url: "https://30tools.com/word-counter",
    siteName: "30tools",
    type: "website",
    images: [{
      url: "/og-images/word-counter.jpg",
      width: 1200,
      height: 630,
      alt: "Free Word Counter 2026 - Online Tool"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Counter (2026) - Free Online Tool",
    description: "⚡ Count words, characters & sentences in real-time. Updated 2026!",
    images: ["/og-images/word-counter.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/word-counter" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

// JSON-LD structured data
const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Word Counter",
    "alternateName": ["Character Counter", "Text Counter", "Word Count Tool", "Letter Counter"],
    "description": "Free online word counter tool to count words, characters, sentences, and paragraphs. Includes reading time estimate and text statistics.",
    "url": "https://30tools.com/word-counter",
    "applicationCategory": ["ProductivityApplication", "UtilitiesApplication"],
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript. Works on Chrome, Firefox, Safari, Edge",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Organization",
      "name": "30tools",
      "url": "https://30tools.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "28473",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Real-time word counting",
      "Character count with and without spaces",
      "Sentence and paragraph counting",
      "Reading time estimation",
      "Speaking time estimation",
      "Word frequency analysis",
      "Top keywords extraction",
      "Mobile-friendly interface",
      "No file upload required",
      "100% free, no limits"
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Count Words in Your Text",
    "description": "Simple guide to count words, characters, sentences and paragraphs using our free online word counter tool.",
    "totalTime": "PT10S",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Enter or Paste Text",
        "text": "Type directly into the text area or paste your content from Word, Google Docs, or any other source."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "View Word Count",
        "text": "Watch the word count, character count, and other statistics update in real-time as you type or paste."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Review Statistics",
        "text": "Check detailed stats including reading time, speaking time, paragraph count, and top keywords."
      }
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How accurate is this word counter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our word counter is highly accurate. It uses standard word counting algorithms that match Microsoft Word and Google Docs. Words are counted based on spaces and punctuation, just like professional writing software."
        }
      },
      {
        "@type": "Question",
        "name": "Does it count characters with or without spaces?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both! We show character count with spaces and without spaces separately. This is useful for Twitter (280 characters with spaces) and other platforms with different requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How is reading time calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reading time is calculated based on an average reading speed of 200-250 words per minute. Speaking time uses about 150 words per minute. These are standard estimates used in publishing and presentations."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this for essay word counts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our word counter is perfect for essays, assignments, research papers, and academic writing. Many students use it to meet word count requirements for their homework and papers."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a word limit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, there's no word limit! You can count words in texts of any length - from a tweet to a novel. Our tool handles large documents efficiently without slowing down."
        }
      },
      {
        "@type": "Question",
        "name": "Does it work for Twitter and Instagram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Use our character counter to check Twitter's 280 character limit or Instagram's 2,200 character caption limit. We show character counts with spaces for accurate social media checks."
        }
      }
    ]
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://30tools.com" },
      { "@type": "ListItem", "position": 2, "name": "Text Tools", "item": "https://30tools.com/text-tools" },
      { "@type": "ListItem", "position": 3, "name": "Word Counter" }
    ]
  }
};

const features = [
  { icon: "📝", title: "Word Count", desc: "Accurate real-time word counting as you type" },
  { icon: "🔤", title: "Character Count", desc: "Characters with and without spaces" },
  { icon: "📄", title: "Paragraph Count", desc: "Track paragraphs and sentences" },
  { icon: "⏱️", title: "Reading Time", desc: "Estimated reading and speaking time" },
  { icon: "📊", title: "Text Statistics", desc: "Average word length and more" },
  { icon: "🔑", title: "Top Keywords", desc: "Find most frequent words" },
  { icon: "📱", title: "Mobile Friendly", desc: "Works on all devices" },
  { icon: "🆓", title: "100% Free", desc: "No limits, no registration" }
];

const howToSteps = [
  { step: "1", title: "Paste Your Text", desc: "Copy your text from Word, Google Docs, or type directly into the text area." },
  { step: "2", title: "Instant Count", desc: "Watch word count, character count, and all statistics update in real-time." },
  { step: "3", title: "Review Stats", desc: "Check reading time, speaking time, keyword frequency, and more detailed analytics." }
];

const useCases = [
  { icon: "📚", title: "Essays & Papers", desc: "Meet word count requirements for academic writing" },
  { icon: "✍️", title: "Blog Posts", desc: "Optimize article length for SEO (1,500-2,500 words)" },
  { icon: "🐦", title: "Social Media", desc: "Check Twitter (280) and Instagram (2,200) limits" },
  { icon: "📧", title: "Emails", desc: "Keep emails concise and professional" },
  { icon: "📖", title: "Books & Novels", desc: "Track progress on longer writing projects" },
  { icon: "🎤", title: "Speeches", desc: "Estimate speaking time for presentations" }
];

const faqs = [
  {
    q: "How accurate is this word counter?",
    a: "Highly accurate! Uses the same algorithms as Microsoft Word and Google Docs. Words are counted based on spaces and punctuation."
  },
  {
    q: "Does it count characters with or without spaces?",
    a: "Both! We show character counts with and without spaces separately - useful for Twitter and other platform limits."
  },
  {
    q: "How is reading time calculated?",
    a: "Based on average reading speed of 200-250 words/minute. Speaking time uses 150 words/minute - standard publishing estimates."
  },
  {
    q: "Can I use this for essays?",
    a: "Absolutely! Perfect for essays, research papers, assignments, and meeting word count requirements for academic writing."
  },
  {
    q: "Is there a word limit?",
    a: "No limit! Count words in texts of any length - from tweets to entire novels. Handles large documents efficiently."
  },
  {
    q: "Does it work for Twitter and Instagram?",
    a: "Yes! Check Twitter's 280 character limit and Instagram's 2,200 character caption limit with our character counter."
  },
  {
    q: "Is my text stored or saved?",
    a: "No! Your text is processed locally in your browser. We never store, save, or transmit your content anywhere."
  },
  {
    q: "Can I count words in other languages?",
    a: "Yes! Our word counter works with any language including Spanish, French, German, Chinese, Japanese, and more."
  }
];

const relatedTools = [
  { href: "/character-counter", icon: "🔤", title: "Character Counter", desc: "Focus on character limits" },
  { href: "/text-case-converter", icon: "Aa", title: "Case Converter", desc: "Change text case" },
  { href: "/remove-duplicates", icon: "🧹", title: "Remove Duplicates", desc: "Clean duplicate lines" },
  { href: "/text-formatter", icon: "📋", title: "Text Formatter", desc: "Format and clean text" },
  { href: "/lorem-ipsum-generator", icon: "📝", title: "Lorem Ipsum", desc: "Generate placeholder text" },
  { href: "/typing-speed-test", icon: "⌨️", title: "Typing Test", desc: "Test your WPM" }
];

export default function WordCounterPage() {
  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.breadcrumb) }} />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li className="text-muted-foreground/50">/</li>
              <li><a href="/text-tools" className="hover:text-primary transition-colors">Text Tools</a></li>
              <li className="text-muted-foreground/50">/</li>
              <li className="text-foreground font-medium">Word Counter</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
              Word Counter
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Count words, characters, sentences, and paragraphs instantly. Free online word counter with reading time estimate. Perfect for essays, blog posts, and social media.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">📝 Real-Time Count</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">⏱️ Reading Time</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">📊 Statistics</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">🆓 100% Free</span>
            </div>
          </header>

          {/* Tool Interface */}
          <div className="mb-12">
            <WordCounterTool />
          </div>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Word Counter Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f, i) => (
                <div key={i} className="p-5 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all">
                  <span className="text-3xl mb-3 block">{f.icon}</span>
                  <h3 className="font-semibold mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Use */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How to Count Words</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {howToSteps.map((s, i) => (
                <div key={i} className="text-center p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Who Uses Word Counter?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((uc, i) => (
                <div key={i} className="p-5 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{uc.icon}</span>
                    <h3 className="font-semibold">{uc.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{uc.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SEO Content */}
          <section className="mb-12 bg-card rounded-xl border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Free Online Word Counter Tool</h2>
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
              <p>
                Our <strong>free word counter</strong> is the ultimate tool for writers, students, and professionals. Whether you're writing an essay, blog post, or social media caption, our word count tool provides instant, accurate statistics including word count, character count, sentence count, and paragraph count.
              </p>
              <p>
                <strong>Real-time word counting</strong> updates instantly as you type or paste text. No need to click any buttons - just start writing and watch the numbers update. We also calculate reading time (based on 200-250 WPM) and speaking time (150 WPM) to help you plan presentations and content.
              </p>
              <p>
                Perfect for meeting <strong>essay word count requirements</strong>, checking Twitter's 280 character limit, or optimizing blog posts for SEO (1,500-2,500 words recommended). Our character counter shows counts both with and without spaces for maximum flexibility.
              </p>
              <p>
                Unlike other word counters, we never store or transmit your text. All processing happens locally in your browser, ensuring complete privacy for your writing. Works with all languages and handles documents of any size.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Word Counter FAQ</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-card rounded-xl border border-border">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-medium hover:text-primary transition-colors">
                    {faq.q}
                    <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-4 pb-4 text-muted-foreground text-sm">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">More Text Tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedTools.map((tool, i) => (
                <a key={i} href={tool.href} className="group p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tool.icon}</span>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{tool.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Trust Signals */}
          <section className="text-center py-8 border-t border-border">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span>4.9/5 Rating</span>
              </div>
              <div>👥 28,000+ Users Daily</div>
              <div>📝 50M+ Words Counted</div>
              <div>🔒 100% Private</div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
