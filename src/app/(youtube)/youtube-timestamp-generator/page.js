import YouTubeTimestampGenerator from '@/components/tools/youtube/YouTubeTimestampGenerator';

export const metadata = {
  title: "YouTube Timestamp Generator - Auto Create Chapter Timestamps | Free Video Timestamps",
  description: "Generate professional YouTube chapter timestamps automatically from video transcripts. Create perfect video chapters, bookmarks, and navigation timestamps for better viewer engagement and SEO.",
  keywords: "youtube timestamp generator, youtube chapters generator, video timestamps, youtube chapter maker, automatic timestamps, video chapter timestamps, youtube chapter creator, video bookmarks generator, timestamp maker youtube, chapter timestamps tool",
  openGraph: {
    title: "YouTube Timestamp Generator - Auto Create Chapter Timestamps",
    description: "Generate professional YouTube chapter timestamps automatically. Perfect for creating video chapters, bookmarks, and navigation timestamps.",
    url: "https://30tools.com/youtube-timestamp-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/youtube-timestamp-generator.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Timestamp Generator Tool"
      }
    ],
    type: "website"
  },
  alternates: {
    canonical: "https://30tools.com/youtube-timestamp-generator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "YouTube Timestamp Generator",
  "description": "Professional tool to automatically generate YouTube chapter timestamps from video transcripts for better navigation and SEO",
  "url": "https://30tools.com/youtube-timestamp-generator",
  "applicationCategory": "Multimedia",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Automatic timestamp generation",
    "Chapter title extraction",
    "Multiple export formats",
    "Transcript-based analysis",
    "Professional formatting",
    "Bulk processing support"
  ]
};

export default function YouTubeTimestampGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-cute">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4">
                YouTube Timestamp Generator
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Create professional YouTube chapter timestamps automatically from video transcripts. 
                Generate perfect video navigation points, improve viewer engagement, and boost your video's 
                search ranking with properly formatted timestamps and chapters.
              </p>
            </div>
            
            <YouTubeTimestampGenerator />
            
            <div className="mt-12 prose prose-gray max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Professional YouTube Chapter Timestamp Generation</h2>
              <p>
                Transform your YouTube videos with our advanced timestamp generator that automatically creates 
                chapter markers from video transcripts. This powerful tool helps content creators generate 
                precise video timestamps, chapter titles, and navigation points that significantly improve 
                viewer experience and video discoverability.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Advanced Timestamp Features</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Automatic Chapter Detection:</strong> Intelligently analyzes video transcripts to identify natural chapter breaks and topic transitions</li>
                <li><strong>Smart Title Generation:</strong> Creates compelling chapter titles based on content analysis and keyword optimization</li>
                <li><strong>Multiple Export Formats:</strong> Generate timestamps in YouTube description format, SRT files, or structured JSON data</li>
                <li><strong>Precision Timing:</strong> Accurate timestamp placement ensuring perfect chapter alignment with video content</li>
                <li><strong>SEO-Optimized Chapters:</strong> Chapter titles include relevant keywords for improved search visibility</li>
                <li><strong>Bulk Processing:</strong> Handle multiple videos simultaneously for efficient workflow management</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Why YouTube Timestamps Boost Performance</h3>
              <p>
                YouTube chapter timestamps significantly improve video performance by enhancing user experience 
                and search optimization. Videos with properly structured chapters receive higher engagement rates, 
                longer watch times, and better search rankings. Our timestamp generator ensures your chapters 
                meet YouTube's requirements while maximizing viewer retention and content discoverability.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Professional Video Chapter Creation</h3>
              <p>
                Whether you're creating educational content, tutorials, podcasts, or entertainment videos, 
                our timestamp generator helps you create professional chapter structures that viewers love. 
                The tool automatically identifies key moments, topic changes, and important segments, 
                generating timestamps that make your content more navigable and engaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
