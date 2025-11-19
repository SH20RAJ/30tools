import MP4ToMP3Converter from "@/components/tools/converter/MP4ToMP3Converter";

export const metadata = {
  title: "Mp4 To Mp3 Converter - Free Online Converter | Instant Conversion",
  description:
    "Convert Process instantly with our free mp4 to mp3 converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
  keywords: [
    // Primary MP4 to MP3 keywords
    "mp4 to mp3 converter",
    "convert mp4 to mp3",
    "mp4 to mp3 online",
    "mp4 audio extractor",
    "mp4 to mp3 free",
    "extract audio from mp4",
    "mp4 to mp3 converter online",
    "free mp4 to mp3 converter",
    "mp4 video to mp3 audio",
    "mp4 mp3 converter",

    // Long-tail SEO keywords
    "mp4 to mp3 converter online free",
    "convert mp4 to mp3 high quality",
    "mp4 to mp3 converter 320kbps",
    "bulk mp4 to mp3 converter",
    "mp4 to mp3 converter no watermark",
    "fast mp4 to mp3 converter",
    "mp4 to mp3 converter for pc mobile",
    "extract audio from mp4 video",
    "mp4 to mp3 converter without software",
    "professional mp4 to mp3 converter",

    // International keywords
    "convertir mp4 a mp3",
    "converter mp4 para mp3",
    "convertir mp4 en mp3",
    "تحويل mp4 الى mp3",
    "convertire mp4 in mp3",
    "chuyển đổi mp4 sang mp3",

    // Quality specific
    "mp4 to mp3 320kbps",
    "mp4 to mp3 high quality",
    "mp4 to mp3 lossless",
    "mp4 to mp3 hd audio",
    "mp4 to mp3 stereo",
  ].join(", "),
  openGraph: {
    title: "MP4 to MP3 Converter - Convert MP4 Video to MP3 Audio Free",
    description:
      "Convert MP4 video files to MP3 audio format. Extract high-quality audio from MP4 videos online.",
    url: "https://30tools.com/mp4-to-mp3",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/mp4-to-mp3-converter.jpg",
        width: 1200,
        height: 630,
        alt: "MP4 to MP3 Converter - Free Online Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP4 to MP3 Converter - Convert MP4 to Audio Free",
    description:
      "Convert MP4 video files to MP3 audio format. Free MP4 to MP3 converter tool.",
    images: ["/og-images/mp4-to-mp3-converter.jpg"],
  },
  alternates: {
    canonical: "https://30tools.com/mp4-to-mp3",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "MP4 to MP3 Converter",
  description:
    "Free online tool to convert MP4 video files to MP3 audio format with high quality output",
  url: "https://30tools.com/mp4-to-mp3",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Convert MP4 to MP3",
    "High quality audio extraction",
    "320kbps output support",
    "Fast conversion speed",
    "No software installation required",
    "Works on all devices",
    "Unlimited free conversions",
    "Privacy protected",
  ],
};

const faqContent = [
  {
    question: "What makes this MP4 to MP3 converter better for Bing searchers?",
    answer:
      "We use structured data, precise headings, and step-by-step instructions so Bing and Copilot can quote accurate answers. That also means you get faster, clearer directions when you land on the page.",
  },
  {
    question: "Can I convert large MP4 files without failing?",
    answer:
      "Yes. Files up to 2GB are supported with resumable uploads, so long recordings and screen captures convert without timing out.",
  },
  {
    question: "Will the MP3 audio keep the same quality as my MP4 video?",
    answer:
      "You can pick 128, 192, 256, or 320kbps output. The converter keeps stereo separation and frequency response from the MP4 master.",
  },
  {
    question: "Is batch MP4 conversion available on every device?",
    answer:
      "Desktop, tablet, and mobile browsers can queue multiple MP4 files. Processing happens in the browser so no installer or plug-in is required.",
  },
  {
    question: "How private is the conversion process?",
    answer:
      "Files stay in the browser session. We purge temporary blobs after you download and never store credentials or source videos.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqContent.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const bingSnapshotHighlights = [
  {
    title: "Bing snippet ready",
    description:
      "Three-step workflow (upload → choose bitrate → download) is summarized above the fold so Bing can surface an instant answer.",
  },
  {
    title: "Copilot friendly data",
    description:
      "WebApplication + FAQ schema, descriptive alt text, and keyword clusters make it easy for Bing Copilot to cite the tool.",
  },
  {
    title: "User intent coverage",
    description:
      "Targets mp4 to mp3, video audio extractor, and 320kbps converter phrases that trend in Bing Webmaster Tools.",
  },
];

const relatedBingLinks = [
  { href: "/video-to-mp3-converter", label: "Video to MP3 Converter" },
  { href: "/audio-tools", label: "All Audio Tools" },
];

export default function MP4ToMP3ConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-background">
              MP4 to MP3 Converter
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Convert MP4 video files to high-quality MP3 audio format for free.
              Our specialized MP4 to MP3 converter extracts crystal-clear audio
              from your MP4 videos with up to 320kbps quality. Perfect for
              creating music libraries, extracting soundtracks, and converting
              video content to audio format. Fast, secure, and unlimited
              conversions without any software installation.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ MP4 Specialist
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ 320kbps Quality
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ Fast Processing
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ Batch Conversion
              </span>
            </div>
          </div>

          <MP4ToMP3Converter />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                How to Convert MP4 to MP3 Online
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Upload MP4 File</h3>
                  <p className="text-sm text-muted-foreground">
                    Select and upload your MP4 video file from your device
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Select Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose your preferred MP3 quality from 128kbps to 320kbps
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download MP3</h3>
                  <p className="text-sm text-muted-foreground">
                    Convert and download your MP4 as high-quality MP3 audio file
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                MP4 to MP3 Converter Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    🎵 Optimized for MP4
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Specially designed for MP4 video files. Our converter is
                    optimized to handle MP4 format efficiently, ensuring the
                    best audio extraction quality and speed.
                  </p>

                  <h3 className="font-medium mb-2 text-primary">
                    🔊 Premium Audio Quality
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Extract audio from MP4 videos with up to 320kbps quality.
                    Advanced audio processing preserves the original sound
                    fidelity for professional results.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    ⚡ Lightning Fast Speed
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our specialized MP4 processing engines convert your videos
                    to MP3 in seconds. Optimized algorithms ensure maximum speed
                    without quality loss.
                  </p>

                  <h3 className="font-medium mb-2 text-primary">
                    📦 Batch Processing
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Convert multiple MP4 files to MP3 simultaneously. Perfect
                    for processing video collections, movie soundtracks, or
                    music video libraries.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose Our MP4 to MP3 Converter?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    🎯 MP4 Specialist
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Unlike generic converters, we specialize in MP4 format. This
                    means better compatibility, faster processing, and higher
                    quality audio extraction from your MP4 videos.
                  </p>

                  <h3 className="font-medium mb-2 text-primary">
                    🔧 Advanced Audio Processing
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our advanced audio processing algorithms ensure optimal
                    audio extraction from MP4 videos, preserving stereo
                    channels, dynamic range, and frequency response.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    📊 Quality Options
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Choose from multiple quality options: 128kbps (small files),
                    192kbps (balanced), 256kbps (high quality), and 320kbps
                    (premium quality) to suit your needs.
                  </p>

                  <h3 className="font-medium mb-2 text-primary">
                    🔒 Secure Processing
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    All MP4 files are processed securely and deleted immediately
                    after conversion. Your privacy is protected with encrypted
                    file transfers and secure processing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6 border border-dashed">
              <h2 className="text-2xl font-semibold mb-4">
                Optimized Answers for Bing & Copilot
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {bingSnapshotHighlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="bg-background rounded-lg p-4 shadow-sm border"
                  >
                    <h3 className="font-semibold text-primary mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {relatedBingLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                MP4 to MP3 Converter FAQ
              </h2>
              <div className="space-y-4">
                {faqContent.map((item) => (
                  <div key={item.question}>
                    <h3 className="font-medium mb-2">{item.question}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
