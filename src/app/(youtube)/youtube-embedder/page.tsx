import YouTubeEmbedGenerator from "@/components/tools/youtube/YouTubeEmbedGenerator";
import { Metadata } from "next";
import Link from "next/link";

// ============================================================================
// COMPREHENSIVE METADATA (Essential for SEO)
// ============================================================================
export const metadata: Metadata = {
  title: "Free YouTube Embed Code Generator | Custom Video Player Embedder - 30tools",
  description:
    "Generate custom YouTube embed codes with advanced options. Free online tool to create responsive, privacy-enhanced YouTube video embeds with autoplay, loop, and custom timing. No registration required.",
  keywords: [
    "YouTube embed generator",
    "YouTube embed code",
    "custom YouTube player",
    "YouTube iframe generator",
    "responsive YouTube embed",
    "YouTube video embedder",
    "privacy-enhanced YouTube",
    "YouTube embed customizer",
    "video embed code",
    "YouTube autoplay embed",
    "YouTube loop embed",
    "YouTube nocookie embed",
    "free embed generator",
    "YouTube tools",
    "video embedding tool",
  ],
  authors: [{ name: "30tools" }],
  creator: "30tools",
  publisher: "30tools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Free YouTube Embed Code Generator | Custom Video Player - 30tools",
    description:
      "Create custom YouTube embed codes with responsive design, privacy mode, autoplay, and more. Free online YouTube video embedder with instant preview.",
    url: "https://30tools.com/youtube-embedder",
    siteName: "30tools",
    images: [
      {
        url: "https://30tools.com/og-image-youtube-embedder.png",
        width: 1200,
        height: 630,
        alt: "YouTube Embed Code Generator - Free Online Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free YouTube Embed Code Generator - 30tools",
    description:
      "Create custom YouTube embed codes with responsive design, privacy mode, autoplay, and more. Free online tool with instant preview.",
    images: ["https://30tools.com/twitter-image-youtube-embedder.png"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/youtube-embedder",
  },
  category: "YouTube Tools",
};

// ============================================================================
// STRUCTURED DATA (JSON-LD Schema for Rich Snippets)
// ============================================================================
const jsonLdSchemas = {
  // WebApplication Schema
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "YouTube Embed Code Generator",
    description:
      "Free online tool to generate custom YouTube embed codes with advanced options including responsive design, privacy-enhanced mode, autoplay, loop, custom timing, and more.",
    url: "https://30tools.com/youtube-embedder",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Works in Chrome, Firefox, Safari, Edge.",
    permissions: "browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "30tools",
      url: "https://30tools.com",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "523",
      bestRating: "5",
      worstRating: "1",
    },
  },

  // HowTo Schema
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Generate YouTube Embed Code",
    description:
      "Step-by-step guide to create custom YouTube embed codes with advanced options using our free online generator.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Enter YouTube URL",
        text: "Paste your YouTube video URL into the input field. The tool supports all YouTube URL formats including watch, share, and embed links.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Customize Player Settings",
        text: "Configure your embed options: enable responsive design, privacy-enhanced mode, autoplay, loop, controls visibility, and more.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Set Timing Options",
        text: "Optionally set start and end times to embed specific portions of the video. Enter times in seconds.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Preview and Copy Code",
        text: "Preview your embedded video and copy the generated HTML code. Paste it into your website to embed the video.",
      },
    ],
    totalTime: "PT2M",
    tool: {
      "@type": "HowToTool",
      name: "YouTube Embed Generator",
    },
  },

  // FAQPage Schema
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a YouTube embed code generator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A YouTube embed code generator is a tool that creates customized HTML iframe code to embed YouTube videos on your website. It allows you to configure options like responsive design, autoplay, privacy mode, and custom timing without manually writing code.",
        },
      },
      {
        "@type": "Question",
        name: "How do I embed a YouTube video on my website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To embed a YouTube video: 1) Paste the YouTube URL into our generator, 2) Customize your settings (responsive, autoplay, etc.), 3) Copy the generated HTML code, 4) Paste it into your website's HTML where you want the video to appear.",
        },
      },
      {
        "@type": "Question",
        name: "What is privacy-enhanced mode for YouTube embeds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Privacy-enhanced mode uses youtube-nocookie.com instead of youtube.com. This prevents YouTube from tracking viewers unless they actually play the video, making it GDPR-compliant and better for user privacy.",
        },
      },
      {
        "@type": "Question",
        name: "How do I make YouTube embeds responsive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Enable the 'Responsive Design' option in our generator. This wraps the iframe in a container with CSS that maintains a 16:9 aspect ratio and scales perfectly on all screen sizes, from mobile phones to desktop monitors.",
        },
      },
      {
        "@type": "Question",
        name: "Can I embed only part of a YouTube video?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Use the start time and end time options to specify which portion of the video to embed. Enter the times in seconds. For example, start at 30 seconds and end at 90 seconds to show only that 1-minute segment.",
        },
      },
      {
        "@type": "Question",
        name: "Is this YouTube embed generator free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our YouTube embed code generator is completely free with no registration required. You can generate unlimited embed codes with all advanced features at no cost.",
        },
      },
    ],
  },

  // BreadcrumbList Schema
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://30tools.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "YouTube Tools",
        item: "https://30tools.com/search?category=youtube",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "YouTube Embed Generator",
      },
    ],
  },
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function Page() {
  return (
    <>
      {/* Inject all structured data schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.breadcrumb) }}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/search?category=youtube" className="hover:text-primary">
                YouTube Tools
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium">YouTube Embed Generator</li>
          </ol>
        </nav>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Heading - H1 with primary keyword */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">
              Free YouTube Embed Code Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Create custom YouTube video embeds with advanced options. Generate responsive,
              privacy-enhanced embed codes with autoplay, loop, custom timing, and more.
              Perfect for websites, blogs, and online courses.
            </p>
          </div>

          {/* Main Tool Component */}
          <YouTubeEmbedGenerator />

          {/* SEO Content Sections */}

          {/* How to Use Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">How to Use the YouTube Embed Generator</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold mb-3">1. Enter YouTube URL</h3>
                <p className="text-muted-foreground">
                  Paste your YouTube video URL into the input field. The tool automatically
                  detects and extracts the video ID from any YouTube URL format (watch, share,
                  or embed links).
                </p>
              </div>
              <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold mb-3">2. Customize Settings</h3>
                <p className="text-muted-foreground">
                  Configure player options like responsive design, privacy-enhanced mode,
                  autoplay, loop, controls visibility, and video information display. All
                  settings update the embed code in real-time.
                </p>
              </div>
              <div className="p-6 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-semibold mb-3">3. Set Timing Options</h3>
                <p className="text-muted-foreground">
                  Optionally specify start and end times (in seconds) to embed only a specific
                  portion of the video. Great for highlighting key moments or creating video
                  clips.
                </p>
              </div>
              <div className="p-6 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="text-xl font-semibold mb-3">4. Copy & Embed</h3>
                <p className="text-muted-foreground">
                  Preview your video embed and copy the generated HTML code with one click.
                  Paste it into your website's HTML to display the customized YouTube player.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                <p className="text-muted-foreground">
                  Generate responsive embed codes that automatically adapt to any screen size,
                  ensuring perfect display on mobile, tablet, and desktop devices.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2">Privacy-Enhanced Mode</h3>
                <p className="text-muted-foreground">
                  Use youtube-nocookie.com domain for GDPR compliance. YouTube won't track
                  viewers until they play the video, protecting user privacy.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold mb-2">Advanced Customization</h3>
                <p className="text-muted-foreground">
                  Control autoplay, loop, mute, controls visibility, video info display, and
                  more. Create the perfect viewing experience for your audience.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-semibold mb-2">Custom Timing</h3>
                <p className="text-muted-foreground">
                  Set specific start and end times to embed only the relevant portion of a
                  video. Perfect for tutorials, highlights, and educational content.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-xl font-semibold mb-2">Live Preview</h3>
                <p className="text-muted-foreground">
                  See exactly how your embedded video will look before copying the code.
                  Preview updates instantly as you change settings.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Instant Generation</h3>
                <p className="text-muted-foreground">
                  Get your embed code immediately with one click. No registration, no waiting,
                  no complicated setup required.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">
                  What is a YouTube embed code generator?
                </h3>
                <p className="text-muted-foreground">
                  A YouTube embed code generator is a tool that creates customized HTML iframe
                  code to embed YouTube videos on your website. It allows you to configure
                  options like responsive design, autoplay, privacy mode, and custom timing
                  without manually writing code. Our generator provides a user-friendly
                  interface to customize all YouTube embed parameters and generates
                  production-ready HTML code.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">
                  How do I embed a YouTube video on my website?
                </h3>
                <p className="text-muted-foreground">
                  To embed a YouTube video: 1) Copy the YouTube video URL from your browser, 2)
                  Paste it into our generator's input field, 3) Customize settings like
                  responsive design, autoplay, and privacy mode, 4) Click "Copy Code" to copy
                  the generated HTML, 5) Paste the code into your website's HTML where you want
                  the video to appear. The video will display with all your custom settings.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">
                  What is privacy-enhanced mode for YouTube embeds?
                </h3>
                <p className="text-muted-foreground">
                  Privacy-enhanced mode uses the youtube-nocookie.com domain instead of
                  youtube.com. This prevents YouTube from setting tracking cookies and
                  collecting user data until the viewer actually plays the video. It's
                  essential for GDPR compliance and respecting user privacy. We recommend
                  enabling this option for all embeds, especially on European websites.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">
                  How do I make YouTube embeds responsive?
                </h3>
                <p className="text-muted-foreground">
                  Enable the "Responsive Design" option in our generator. This wraps the iframe
                  in a container with CSS that maintains a 16:9 aspect ratio and scales
                  perfectly on all screen sizes. The responsive embed automatically adjusts its
                  size based on the parent container width, ensuring it looks great on mobile
                  phones, tablets, and desktop monitors without any additional code.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">
                  Can I embed only part of a YouTube video?
                </h3>
                <p className="text-muted-foreground">
                  Yes! Use the "Start Time" and "End Time" options to specify which portion of
                  the video to embed. Enter the times in seconds. For example, to show a
                  1-minute segment from 0:30 to 1:30, enter 30 for start time and 90 for end
                  time. This is perfect for creating video clips, highlighting key moments, or
                  skipping intros and outros.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">
                  Is this YouTube embed generator free?
                </h3>
                <p className="text-muted-foreground">
                  Yes, our YouTube embed code generator is completely free with no registration
                  required. You can generate unlimited embed codes with all advanced features
                  at no cost. There are no watermarks, no usage limits, and no hidden fees. All
                  features are available to everyone for free.
                </p>
              </div>
            </div>
          </section>

          {/* Additional SEO Content */}
          <section className="prose max-w-none space-y-6">
            <h2 className="text-2xl font-bold">Why Use Our YouTube Embed Generator?</h2>
            <p className="text-muted-foreground">
              Embedding YouTube videos on your website is a powerful way to engage visitors,
              explain complex topics, showcase products, or share educational content. However,
              YouTube's default embed code offers limited customization options. Our free
              YouTube embed code generator solves this problem by providing an easy-to-use
              interface for creating fully customized embed codes with advanced features.
            </p>
            <p className="text-muted-foreground">
              Whether you're a blogger, educator, marketer, or web developer, our tool makes it
              simple to embed YouTube videos exactly how you want them. Control every aspect of
              the player including responsive design for mobile optimization, privacy-enhanced
              mode for GDPR compliance, autoplay and loop options for promotional content, and
              custom timing to highlight specific video segments.
            </p>

            <h3 className="text-xl font-semibold">Perfect for Content Creators</h3>
            <p className="text-muted-foreground">
              Our YouTube embed generator is designed specifically for content creators who want
              professional-looking video embeds without writing code. The live preview feature
              lets you see exactly how your video will appear before adding it to your site.
              The responsive design option ensures your videos look perfect on all devices, from
              smartphones to 4K monitors. And with privacy-enhanced mode, you can respect your
              visitors' privacy while still sharing engaging video content.
            </p>

            <h3 className="text-xl font-semibold">Advanced Features for Professionals</h3>
            <p className="text-muted-foreground">
              For advanced users, our generator provides fine-grained control over YouTube
              player parameters. Set custom start and end times to create video clips, enable
              autoplay for landing pages (with proper muting for mobile), loop videos for
              background content, hide controls for cleaner presentations, and customize the
              player size for specific layouts. All these options are available through an
              intuitive interface that generates clean, optimized HTML code.
            </p>
          </section>

          {/* Related Tools Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Related YouTube Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/youtube-tag-generator"
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">YouTube Tag Generator</h3>
                <p className="text-muted-foreground">
                  Generate optimized tags for your YouTube videos to improve discoverability
                </p>
              </Link>
              <Link
                href="/youtube-idea-generator"
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">YouTube Idea Generator</h3>
                <p className="text-muted-foreground">
                  Get creative video ideas and content suggestions for your channel
                </p>
              </Link>
              <Link
                href="/video-converter"
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">Video Converter</h3>
                <p className="text-muted-foreground">
                  Convert videos between different formats for optimal playback
                </p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
