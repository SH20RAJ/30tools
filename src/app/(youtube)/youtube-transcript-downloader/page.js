import YouTubeTranscriptDownloader from '@/components/tools/youtube/YouTubeTranscriptDownloader';

export const metadata = {
  title: "YouTube Transcript Downloader - Download Video Subtitles Free | 30tools",
  description: "Download YouTube video transcripts and subtitles in multiple formats. Extract text content from YouTube videos for free with our transcript downloader tool.",
  keywords: [
    // Primary keywords
    "youtube transcript downloader",
    "download youtube subtitles",
    "youtube captions downloader",
    "youtube transcript to text",
    
    // Long-tail keywords for SEO ranking
    "download youtube video transcript free online",
    "youtube subtitle downloader srt format",
    "extract text from youtube video automatically",
    "youtube transcript downloader multiple languages",
    "download youtube captions for accessibility",
    "youtube video to text converter online",
    "bulk youtube transcript downloader tool",
    "youtube subtitle extractor no software",
    "download youtube auto generated captions",
    "youtube transcript downloader with timestamps",
    "convert youtube video to readable text",
    "youtube subtitle downloader for research",
    "extract dialogue from youtube videos",
    "youtube transcript downloader for education",
    "download youtube video scripts free"
  ].join(", "),
  openGraph: {
    title: "Free YouTube Transcript Downloader - Download Video Subtitles",
    description: "Download YouTube video transcripts and subtitles in multiple formats. Extract text content from videos for free.",
    url: "https://30tools.com/youtube-transcript-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/youtube-transcript-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Transcript Downloader - Free Online Tool"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Transcript Downloader - Download Video Subtitles Free",
    description: "Download YouTube video transcripts and subtitles in multiple formats. Extract text content for free.",
    images: ["/og-images/youtube-transcript-downloader.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/youtube-transcript-downloader"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "YouTube Transcript Downloader",
  "description": "Free online tool to download YouTube video transcripts and subtitles in multiple formats for accessibility and research",
  "url": "https://30tools.com/youtube-transcript-downloader",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Download YouTube video transcripts",
    "Support for multiple subtitle formats",
    "Extract auto-generated captions",
    "Timestamped transcript downloads",
    "Multiple language support",
    "No software installation required"
  ]
};

export default function YouTubeTranscriptDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              YouTube Transcript Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download YouTube video transcripts and subtitles in multiple formats for free. Our YouTube transcript downloader extracts text content from videos, including auto-generated captions and manual subtitles. Perfect for researchers, students, content creators, and accessibility purposes. Get timestamped transcripts in SRT, VTT, and plain text formats.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Multiple Formats</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Timestamped Text</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ All Languages</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Research Ready</span>
            </div>
          </div>
          
          <YouTubeTranscriptDownloader />
          
          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Download YouTube Video Transcripts</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-500 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Copy Video URL</h3>
                  <p className="text-sm text-muted-foreground">Copy the YouTube video link that has captions or transcripts available</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-500 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Extract Transcript</h3>
                  <p className="text-sm text-muted-foreground">Our tool automatically detects and extracts available subtitles and transcripts</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-500 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download Text</h3>
                  <p className="text-sm text-muted-foreground">Download the transcript in your preferred format: SRT, VTT, or plain text</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Why Download YouTube Transcripts?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-blue-600">🎓 Educational Research</h3>
                  <p className="text-sm text-muted-foreground mb-4">Perfect for students, researchers, and educators who need to analyze video content, extract quotes, or create study materials from educational YouTube videos.</p>
                  
                  <h3 className="font-medium mb-2 text-blue-600">♿ Accessibility Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">Download transcripts to improve accessibility for hearing-impaired viewers or to create better captions for your own video content.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-blue-600">📝 Content Creation</h3>
                  <p className="text-sm text-muted-foreground mb-4">Extract transcripts to create blog posts, articles, or social media content based on YouTube videos. Perfect for content repurposing and SEO optimization.</p>
                  
                  <h3 className="font-medium mb-2 text-blue-600">🔍 SEO and Analysis</h3>
                  <p className="text-sm text-muted-foreground mb-4">Analyze video content for keyword research, competitor analysis, or to understand trending topics in your niche.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Supported Transcript Formats</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 text-blue-600">SRT Format</h3>
                  <p className="text-sm text-muted-foreground">Standard subtitle format with timestamps, compatible with most video players and editing software.</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 text-purple-600">VTT Format</h3>
                  <p className="text-sm text-muted-foreground">Web Video Text Tracks format, perfect for web-based video players and HTML5 videos.</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                  <h3 className="font-medium mb-2 text-green-600">Plain Text</h3>
                  <p className="text-sm text-muted-foreground">Clean text format without timestamps, ideal for reading, analysis, and content creation.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Transcript Download FAQ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Can I download transcripts from any YouTube video?</h3>
                  <p className="text-sm text-muted-foreground">You can download transcripts from videos that have captions enabled, either manually added by the creator or auto-generated by YouTube.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Are auto-generated transcripts accurate?</h3>
                  <p className="text-sm text-muted-foreground">Auto-generated transcripts are generally accurate but may contain errors, especially with technical terms, accents, or background noise. Manual captions are more accurate.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Can I get transcripts in different languages?</h3>
                  <p className="text-sm text-muted-foreground">Yes, if the video has captions in multiple languages, you can download transcripts in any available language.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">What about copyright considerations?</h3>
                  <p className="text-sm text-muted-foreground">Transcripts are for personal use, research, and accessibility. Always respect copyright laws and the video creator's rights when using transcripts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
