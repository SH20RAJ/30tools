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

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Heading - H1 with primary keyword */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Free YouTube Embed Code Generator
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Create custom YouTube video embeds with advanced options. Generate responsive,
              privacy-enhanced embed codes with autoplay, loop, custom timing, and more.
            </p>
          </div>

          {/* Main Tool Component */}
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8">
            <YouTubeEmbedGenerator />
          </div>
        </div>
      </div>
    </>
  );
}
