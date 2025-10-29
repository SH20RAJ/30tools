import YouTubePackDownloader from '@/components/tools/youtube/YouTubePackDownloader';

export const metadata = {
  title: "YouTube Pack Downloader - 30tools",
  description: "Download complete YouTube video packages including title, description, tags, transcript, thumbnail, and metadata. All-in-one YouTube video asset downloader for content creators and marketers.",
  keywords: "youtube pack downloader, youtube video assets, youtube metadata downloader, youtube title description tags, youtube thumbnail transcript downloader, complete youtube video package, youtube content analyzer, video seo data extractor",
  openGraph: {
    title: "YouTube Pack Downloader - Download All Video Assets",
    description: "Download complete YouTube video packages with title, description, tags, transcript, and thumbnail in one click.",
    url: "https://30tools.com/youtube-pack-downloader",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/youtube-pack-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Pack Downloader Tool"
      }
    ],
    type: "website"
  },
  alternates: {
    canonical: "https://30tools.com/youtube-pack-downloader"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "YouTube Pack Downloader",
  "description": "Comprehensive tool to download all YouTube video assets including metadata, thumbnail, transcript, and SEO data",
  "url": "https://30tools.com/youtube-pack-downloader",
  "applicationCategory": "Multimedia",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Complete video metadata",
    "High-quality thumbnails",
    "Full video transcripts",
    "SEO tags extraction",
    "Batch processing",
    "Multiple export formats"
  ]
};

export default function YouTubePackDownloaderPage() {
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
                YouTube Pack Downloader
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Download complete YouTube video asset packages in one click. Extract titles, descriptions, 
                tags, transcripts, thumbnails, and metadata for content analysis, competitor research, 
                and SEO optimization. Perfect for creators and marketers.
              </p>
            </div>
            
            <YouTubePackDownloader />
            
            <div className="mt-12 prose prose-gray max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Complete YouTube Video Asset Extraction</h2>
              <p>
                Streamline your content research and analysis with our comprehensive YouTube pack downloader. 
                Extract all valuable video assets including metadata, SEO tags, thumbnails, and transcripts 
                in organized packages that save hours of manual work. Essential for competitive analysis, 
                content planning, and understanding successful video strategies in your niche.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Comprehensive Asset Collection Features</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Complete Metadata Package:</strong> Title, description, publish date, view count, and engagement metrics</li>
                <li><strong>SEO Tag Extraction:</strong> All video tags for keyword research and content optimization strategies</li>
                <li><strong>High-Quality Thumbnails:</strong> Multiple resolution thumbnails for design inspiration and analysis</li>
                <li><strong>Full Video Transcripts:</strong> Complete text content for content analysis and SEO research</li>
                <li><strong>Channel Information:</strong> Creator details, subscriber count, and channel metadata</li>
                <li><strong>Engagement Analytics:</strong> Like/dislike ratios, comment counts, and performance indicators</li>
                <li><strong>Multiple Export Formats:</strong> JSON, CSV, TXT, and organized ZIP packages for easy analysis</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Content Research & Competitive Analysis</h3>
              <p>
                Analyze successful videos in your niche to understand what works and why. Our pack downloader 
                provides all the data needed for comprehensive competitive analysis, content gap identification, 
                and trend research. Perfect for content creators, digital marketers, and SEO professionals who 
                need deep insights into YouTube content performance and optimization strategies.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Professional Content Strategy Development</h3>
              <p>
                Use extracted video assets to develop data-driven content strategies that resonate with your 
                target audience. Analyze successful titles, descriptions, and tags to optimize your own content 
                for maximum visibility and engagement. The comprehensive data packages provide everything needed 
                for informed decision-making in content creation, marketing campaigns, and audience development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
