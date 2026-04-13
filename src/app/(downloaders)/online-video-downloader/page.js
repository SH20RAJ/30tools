import BreadcrumbsEnhanced from "@/components/seo/BreadcrumbsEnhanced";
import FAQSection from "@/components/seo/FAQSection";

export const metadata = {
  title: "Free Online Video Downloader Online - No Signup | 30tools",
  description: "Download videos from any website for free with our online video downloader. Supports YouTube, TikTok, Instagram, Facebook, Twitter and 1000+ sites. HD quality, MP4/MP3 formats, no watermarks, no signup. Try now!",
  keywords: ["online video downloader","video downloader free","download videos from any website","youtube video downloader free","tiktok video downloader","instagram video downloader","facebook video downloader","video downloader online","free video downloader no watermark","hd video downloader","video downloader for pc","video downloader mobile","video downloader chrome","video downloader app","video to mp3 converter"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Online Video Downloader",
      alternateName: ["Universal Video Downloader", "Free Video Downloader"],
      description:
        "Free universal online video downloader supporting YouTube, TikTok, Instagram, Facebook, Twitter, and thousands of other websites. Download in HD/4K quality with no software required.",
      url: "https://30tools.com/online-video-downloader",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Download from 1000+ websites",
        "No software installation",
        "HD and 4K quality",
        "Works on all devices",
        "No login required",
        "MP3 audio extraction",
        "Fast server-side processing",
      ],
      provider: {
        "@type": "Organization",
        name: "30tools",
        url: "https://30tools.com",
      },
    },
    {
      "@type": "HowTo",
      name: "How to Download Videos for Free",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Copy Video URL",
          text: "Copy the URL of the video you want to download from YouTube, TikTok, Instagram, Facebook, or any supported platform.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Paste URL",
          text: "Paste the video URL into the input field on this page and click analyze.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Choose Quality & Download",
          text: "Select your preferred quality (up to 4K if available) and format, then click download. The file saves to your device automatically.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is this video downloader really free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, completely free. No hidden fees, no subscription, no account needed. We support the service through non-intrusive ads.",
          },
        },
        {
          "@type": "Question",
          name: "What websites are supported?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We support 1000+ websites including YouTube, TikTok, Instagram, Facebook, Twitter/X, Reddit, Pinterest, and many more. Most publicly accessible videos can be downloaded.",
          },
        },
        {
          "@type": "Question",
          name: "Can I download videos on my phone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Our downloader is fully mobile-responsive. Works on Android (Chrome) and iPhone (Safari). Videos save to your phone's downloads folder.",
          },
        },
        {
          "@type": "Question",
          name: "What quality can I download?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Available quality depends on the source. We offer all available options from 360p to 1080p HD and 4K when the source provides it. Audio extraction to MP3 (320kbps) is also supported.",
          },
        },
      ],
    },
    {
      "@type": "DefinedTerm",
      name: "Universal Video Downloader",
      definition:
        "A universal video downloader is a web-based tool that can extract and download videos from multiple video hosting platforms and social media sites using a single interface, eliminating the need for platform-specific downloaders.",
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "Video Download Terms",
        description:
          "Definitions for video downloading and streaming concepts.",
      },
    },
  ],
};

export default async function OnlineVideoDownloaderPage({ searchParams }) {
  const params = await searchParams;
  const _lang = params.lang || "en";
  const toolData = {
  "id": "online-video-downloader",
  "name": "Online Video Downloader",
  "description": "Download videos from any website for free with our online video downloader. Supports YouTube, TikTok, Instagram, Facebook, Twitter and 1000+ sites. HD quality, MP4/MP3 formats, no watermarks.",
  "category": "downloaders",
  "route": "/online-video-downloader",
  "features": [
    "Support 1000+ Video Sharing Sites",
    "HD, Full HD, 4K Quality Downloads",
    "Multiple Formats: MP4, MP3, WEBM, MOV",
    "No Watermarks or Branding",
    "Batch Download Multiple Videos",
    "High-Speed Downloads",
    "100% Free - No Hidden Costs",
    "No Account or Registration Needed",
    "Privacy-Preserving: Browser-Based",
    "Unlimited Usage, No Quotas",
    "Regularly Updated Site Support",
    "Clean, Ad-Light Interface"
  ],
  "benefits": [
    "Watch videos offline without internet connection",
    "Save educational tutorials and courses for later",
    "Create personal video libraries and archives",
    "Download content from platforms without native download",
    "Convert videos to audio (MP3) for listening offline",
    "Preserve memories from social media platforms"
  ],
  "useCases": [
    "Students downloading lecture videos for study",
    "Travelers saving videos for offline entertainment",
    "Content creators archiving their own videos",
    "Researchers collecting video data for analysis",
    "Teachers preparing offline classroom materials",
    "Professionals saving training videos",
    "Families preserving personal video memories",
    "Marketers saving competitor ad videos"
  ],
  "faqs": [
    {
      "question": "What is an online video downloader?",
      "answer": "An online video downloader is a web-based tool that extracts video files from various video-sharing platforms like YouTube, TikTok, Instagram, Facebook, and Twitter. It fetches the direct video URL and lets you download the file to your device in various formats and qualities."
    },
    {
      "question": "Is this online video downloader really free?",
      "answer": "Yes! 30Tools provides a completely free video downloader with no hidden costs, subscriptions, or usage limits. Download unlimited videos from supported sites without creating an account. 100% free forever."
    },
    {
      "question": "How do I download a video from any website?",
      "answer": "1. Copy the video URL from your browser's address bar or share button. 2. Paste the link into our downloader input field. 3. Our tool detects available formats and qualities. 4. Select your preferred format (MP4, MP3, etc.) and quality (HD, 4K). 5. Click download to save the file."
    },
    {
      "question": "Which websites are supported?",
      "answer": "We support 1000+ video platforms including YouTube, TikTok, Instagram, Facebook, Twitter/X, Vimeo, Dailymotion, Twitch, Rumble, Pinterest, and many more. Our tool automatically detects if a site is supported when you paste the URL."
    },
    {
      "question": "What video quality and formats are available?",
      "answer": "Available qualities depend on the source platform: up to 4K Ultra HD, 1080p Full HD, 720p, 480p, etc. Formats include MP4 (video), MP3 (audio-only), WEBM, MOV, and more. We offer the best available quality for that source video."
    },
    {
      "question": "Can I download YouTube videos as MP3?",
      "answer": "Yes! When downloading from YouTube or similar platforms, you can choose MP3 audio-only format. This extracts the audio track and saves it as a high-quality MP3 file perfect for music or podcasts."
    },
    {
      "question": "Is it legal to download videos from these platforms?",
      "answer": "Downloading videos for personal offline use is generally acceptable. However, redistributing, reuploading, or using downloaded content commercially without permission violates copyright laws and platform terms of service. Always respect creators' rights."
    },
    {
      "question": "Are there any usage limits or daily caps?",
      "answer": "None whatsoever. Download as many videos as you want, whenever you want. We don't track your usage or impose artificial limits. Our service is truly unlimited and free."
    },
    {
      "question": "Is my data secure when using this downloader?",
      "answer": "Absolutely. The entire process runs in your browser. We do not store the URLs you submit, the videos you download, or any personal data. Your download activities remain completely private and secure."
    },
    {
      "question": "Why can't I download a certain video?",
      "answer": "Some videos cannot be downloaded due to: platform restrictions (e.g., age-restricted, private, or deleted videos), DRM protection (Netflix, Amazon Prime), geographic restrictions, or the platform simply not being supported yet. We constantly expand our supported sites."
    },
    {
      "question": "What if the video is age-restricted or private?",
      "answer": "Age-restricted or private videos require authentication and cannot be accessed by our tool due to privacy and legal restrictions. Only publicly available videos can be downloaded."
    },
    {
      "question": "Can I download entire playlists or channels?",
      "answer": "Our current version downloads individual videos. For bulk downloads of playlists or channels, you can paste each video URL sequentially. Batch download capabilities for full playlists may be available in the future."
    },
    {
      "question": "Do downloaded videos contain watermarks?",
      "answer": "No. We fetch the direct source video file without any overlays or branding. Some platforms may already embed watermarks in their source files (e.g., TikTok), which we cannot remove, but we don't add our own."
    },
    {
      "question": "What devices and browsers are supported?",
      "answer": "Our tool works on any modern browser (Chrome, Firefox, Safari, Edge) across Windows, macOS, Linux, Android, and iOS. The responsive design ensures a great experience on desktop, tablet, and mobile."
    },
    {
      "question": "How fast are the downloads?",
      "answer": "Download speed depends on your internet connection and the source platform's server speed. Our extraction process is instant, but actual file download speed is determined by your network. We don't throttle or limit speeds."
    }
  ],
  "howTo": {
    "name": "How to Download Videos Online",
    "steps": [
      {
        "name": "Copy the Video Link",
        "text": "Open the video you want to download on its platform (YouTube, TikTok, Instagram, etc.). Copy the full URL from your browser's address bar or use the platform's Share → Copy Link feature.",
        "url": "https://30tools.com/online-video-downloader#step1",
        "image": "https://30tools.com/images/video-dl-step1.jpg"
      },
      {
        "name": "Paste the URL",
        "text": "Navigate to 30Tools Online Video Downloader. Paste the copied URL into the input field. Our system will verify the link is valid and fetch all available download options (formats and qualities).",
        "url": "https://30tools.com/online-video-downloader#step2",
        "image": "https://30tools.com/images/video-dl-step2.jpg"
      },
      {
        "name": "Choose Format & Download",
        "text": "Select your preferred format (MP4 video, MP3 audio, etc.) and quality (4K, 1080p, 720p, etc.). Click the download button, and the file will begin downloading to your device. Save it to your desired folder.",
        "url": "https://30tools.com/online-video-downloader#step3",
        "image": "https://30tools.com/images/video-dl-step3.jpg"
      }
    ]
  }
};

  // Breadcrumbs
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Downloaders", url: "/all-downloaders" },
    { name: "Online Video Downloader", url: "/online-video-downloader" },
  ];

  // Benefits array (6 items)
  const benefits = [
    {
      icon: "🌐",
      title: "1000+ Supported Platforms",
      description:
        "Download from YouTube, TikTok, Instagram, Facebook, Twitter, Reddit, Pinterest, and hundreds more. One tool for all your video needs.",
    },
    {
      icon: "📹",
      title: "Ultra HD Quality",
      description:
        "Download in the highest quality available. Supports up to 4K resolution and 320kbps MP3 audio extraction.",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Our optimized servers process downloads quickly. Most videos are ready to download in seconds.",
    },
    {
      icon: "📱",
      title: "Cross-Platform",
      description:
        "Works on any device with a browser - Android, iPhone, Windows, Mac, Linux, Chromebook. No app needed.",
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description:
        "No account creation, no personal data collection. Videos are processed securely and not stored.",
    },
    {
      icon: "🖼️",
      title: "No Watermarks",
      description:
        "Download clean videos without any watermarks, logos, or branding interfering with your content.",
    },
  ];

  // Use Cases array
  const useCases = [
    {
      category: "Content Archiving",
      description:
        "Save and organize important video content for personal or professional reference.",
      examples: [
        "Download educational tutorials for offline study",
        "Archive important news segments or documentaries",
        "Save personal videos from social media",
        "Create offline video collections",
      ],
    },
    {
      category: "Content Creation",
      description:
        "Gather video content for editing, remixing, or creating new works.",
      examples: [
        "Download reference footage for video projects",
        "Extract clips for social media content",
        "Save background videos for presentations",
        "Collect B-roll for video editing",
      ],
    },
    {
      category: "Social Media Management",
      description: "Download and repurpose content across multiple platforms.",
      examples: [
        "Download own content from multiple platforms",
        "Save viral videos for inspiration",
        "Extract audio for podcasts or reels",
        "Download competitor ad videos for analysis",
      ],
    },
    {
      category: "Entertainment",
      description: "Build your personal offline library of favorite videos.",
      examples: [
        "Download music videos and concerts",
        "Save favorite TikToks and Reels",
        "Download movies and shows (where permitted)",
        "Save gaming clips and streams",
      ],
    },
  ];

  // Comparisons
  const comparisons = [
    {
      tool: "youtube-dl (CLI)",
      pros: ["Open source", "Extremely powerful", "Batch processing"],
      cons: [
        "Requires technical expertise",
        "Command line only",
        "Needs Python installation",
      ],
      ourAdvantage:
        "Simple web interface accessible to everyone. No installation or technical knowledge required.",
    },
    {
      tool: "4K Video Downloader",
      pros: ["Desktop app", "High quality", "Batch downloads"],
      cons: ["Paid software", "Windows/Mac only", "Watermarks in free version"],
      ourAdvantage:
        "Completely free forever, works on mobile devices, no watermarks, no limitations.",
    },
    {
      tool: "OnlineVideoConverter",
      pros: ["Multiple formats", "Conversion tools", "Browser-based"],
      cons: ["Slow processing", "File size limits", "Intrusive ads"],
      ourAdvantage:
        "Faster servers, cleaner interface, no file size limits, and better quality preservation.",
    },
    {
      tool: "SaveFrom.net",
      pros: ["Long established", "Wide support", "Bookmarklet"],
      cons: ["Cluttered ads", "Poor UI/UX", "Shady download buttons"],
      ourAdvantage:
        "Clean, modern design with clear download options and no deceptive ads.",
    },
  ];

  // Related tools (6 downloaders)
  const relatedTools = [
    {
      id: "youtube-to-mp3",
      name: "YouTube to MP3",
      description: "Convert YouTube videos to audio MP3 files",
      route: "/youtube-to-mp3",
      category: "downloaders",
    },
    {
      id: "instagram-downloader",
      name: "Instagram Downloader",
      description: "Download Instagram photos, reels, and stories",
      route: "/instagram-downloader",
      category: "downloaders",
    },
    {
      id: "tiktok-downloader",
      name: "TikTok Downloader",
      description: "Save TikTok videos without watermarks",
      route: "/tiktok-downloader",
      category: "downloaders",
    },
    {
      id: "facebook-video-downloader",
      name: "Facebook Video Downloader",
      description: "Download videos from Facebook and Reels",
      route: "/facebook-video-downloader",
      category: "downloaders",
    },
    {
      id: "twitter-video-downloader",
      name: "Twitter Video Downloader",
      description: "Save Twitter videos and GIFs easily",
      route: "/twitter-video-downloader",
      category: "downloaders",
    },
    {
      id: "reddit-video-downloader",
      name: "Reddit Video Downloader",
      description: "Download Reddit videos with audio",
      route: "/reddit-video-downloader",
      category: "downloaders",
    },
  ];

  // Featured definition
  const featuredDefinition = {
    term: "Universal Video Downloader",
    definition:
      "A universal video downloader is a web-based application that can extract and download video content from multiple video hosting platforms and social media networks through a single unified interface. Unlike platform-specific tools that only work with one service, universal downloaders support hundreds or thousands of sites, eliminating the need for multiple specialized downloaders and making it easy to save videos from anywhere on the web.",
    source: "Media Technology Standards",
  };

  return (
    <>
      {/* Enhanced JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
          {/* Breadcrumbs */}
          <BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />

          {/* Hero Section */}
          <section className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Free <span className="text-primary">Video Downloader</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Download videos from YouTube, TikTok, Instagram, Facebook,
              Twitter, and 1000+ websites instantly. HD/4K quality, no software
              needed, completely free forever.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
                ✅ Free Forever
              </span>
              <span className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
                ⚡ Instant Results
              </span>
              <span className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
                🌐 1000+ Sites
              </span>
              <span className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
                📱 Works on All Devices
              </span>
            </div>
            <div className="flex justify-center gap-3 pt-2">
              <QuickActions
                toolName="Online Video Downloader"
                toolUrl="https://30tools.com/online-video-downloader"
                showBookmark={true}
                showShare={true}
              />
            </div>
          </section>

          {/* Featured Definition Block */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎬</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">
                    What is a Universal Video Downloader?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {featuredDefinition.definition}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    Source: {featuredDefinition.source}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tool Interface */}
          <section className="mb-20">
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8">
              <UniversalVideoDownloader title="Online Video Downloader" />
            </div>
          </section>

          {/* How It Works - 3 Step Section */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                How to Download Videos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Download any video in 3 simple steps
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Copy Video URL",
                  description:
                    "Copy the video link from YouTube, TikTok, Instagram, Facebook, or any supported platform.",
                  icon: "📋",
                },
                {
                  step: "2",
                  title: "Paste & Analyze",
                  description:
                    "Paste the URL in the input box above and click the download button.",
                  icon: "🔍",
                },
                {
                  step: "3",
                  title: "Download",
                  description:
                    "Select your preferred quality and format, then download to your device.",
                  icon: "💾",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-center space-y-4 p-6 bg-card rounded-xl border border-border"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-primary">
                      Step {item.step}
                    </span>
                    <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Grid */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Why Use Our Video Downloader?
              </h2>
              <p className="text-muted-foreground">
                Features that make us the best choice
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">
                      {benefit.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Value Proposition Section */}
          <section className="mb-20">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                  Download Videos Without Limits
                </h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Stop jumping between different downloaders for different
                      platforms. Our universal downloader handles 1000+
                      websites, all in one clean interface. No software
                      installation, no registration, completely free forever.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Download HD & 4K videos with audio",
                        "Extract audio to MP3 (320kbps)",
                        "No watermarks or quality loss",
                        "Works on mobile and desktop",
                        "Private, secure, no tracking",
                        "Unlimited downloads, no daily caps",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card rounded-xl border border-border p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      ∞
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Unlimited Downloads
                    </p>
                    <div className="text-3xl font-bold mb-2">$0</div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Lifetime Cost
                    </p>
                    <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                      100% Free Forever
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Use Cases</h2>
              <p className="text-muted-foreground">
                How people use our video downloader daily
              </p>
            </div>
            <div className="space-y-8">
              {useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-xl border border-border p-6 md:p-8"
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">
                      {useCase.category}
                    </h3>
                    <p className="text-muted-foreground">
                      {useCase.description}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {useCase.examples.map((example, exIdx) => (
                      <div
                        key={exIdx}
                        className="bg-muted/30 rounded-lg p-4 text-sm"
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-primary text-lg">→</span>
                          <span>{example}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                How We Compare
              </h2>
              <p className="text-muted-foreground">
                Why choose 30tools over other downloaders
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-xl border border-border">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">Tool</th>
                    <th className="text-left p-4 font-semibold">Pros</th>
                    <th className="text-left p-4 font-semibold">Cons</th>
                    <th className="text-left p-4 font-semibold">
                      Our Advantage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comp, idx) => (
                    <tr key={idx} className="border-b last:border-0">
                      <td className="p-4 font-semibold">{comp.tool}</td>
                      <td className="p-4">
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {comp.pros.map((pro, i) => (
                            <li key={i}>{pro}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-4">
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {comp.cons.map((con, i) => (
                            <li key={i}>{con}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-4 text-sm text-green-600 dark:text-green-400 font-medium">
                        {comp.ourAdvantage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mb-20">
            <FAQSection
              faqs={toolData?.faqs || []}
              title="Frequently Asked Questions"
              categoryTitle="Video Downloading"
              variant="accordion"
              showSchema={true}
            />
          </section>

          {/* Related Tools */}
          <section className="mb-20">
            <RelatedTools
              currentTool="online-video-downloader"
              category="downloaders"
              tools={relatedTools}
              title="More Video Downloaders"
            />
          </section>
        </div>
      </div>
    </>
  );
}
