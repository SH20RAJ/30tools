import YouTubeIdeaGenerator from '@/components/tools/youtube/YouTubeIdeaGenerator';

export const metadata = {
  title: "Youtube Idea Generator - Free Online Tool | Professional Results",
  description: "Free youtube idea generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  keywords: "youtube idea generator, viral video ideas, youtube content ideas, video topic generator, youtube video inspiration, content creation ideas, viral youtube content, youtube niche ideas, video brainstorming tool, youtube creator ideas",
  openGraph: {
    title: "YouTube Idea Generator - Viral Video Ideas for Creators",
    description: "Generate unlimited viral YouTube video ideas based on your niche and trending topics for channel growth.",
    url: "https://30tools.com/youtube-idea-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/youtube-idea-generator.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Idea Generator Tool"
      }
    ],
    type: "website"
  },
  alternates: {
    canonical: "https://30tools.com/youtube-idea-generator"
  }
,
  twitter: {
    card: "summary_large_image",
    title: "Youtube Idea Generator - Free Online Generator | Create Instantly",
    description: "Free youtube idea generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
    images: ["/og-images/youtube-idea-generator.jpg"],
    creator: "@30tools"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "YouTube Idea Generator",
  "description": "AI-powered tool to generate viral YouTube video ideas based on niche, trending topics, and audience preferences",
  "url": "https://30tools.com/youtube-idea-generator",
  "applicationCategory": "Creative",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Niche-specific ideas",
    "Trending topic integration",
    "Viral content suggestions",
    "Multiple formats support",
    "Audience targeting",
    "SEO optimization"
  ]
};

export default function YouTubeIdeaGeneratorPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold bg-background">
                YouTube Idea Generator
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Never run out of content ideas again! Generate unlimited viral YouTube video concepts 
                tailored to your niche, audience, and current trends. Perfect for creators looking to 
                boost engagement, grow subscribers, and dominate their content calendar.
              </p>
            </div>
            
            <YouTubeIdeaGenerator />
            
            <div className="mt-12 prose prose-gray max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Unlimited Creative Content Inspiration</h2>
              <p>
                Transform your content strategy with AI-powered video idea generation that taps into current trends, 
                audience interests, and niche-specific opportunities. Our idea generator analyzes successful content 
                patterns, viral video formats, and audience engagement data to suggest video concepts that have 
                the highest potential for views, engagement, and subscriber growth.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Smart Content Strategy Features</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Niche-Specific Targeting:</strong> Generate ideas perfectly tailored to your channel's focus and expertise area</li>
                <li><strong>Trending Topic Integration:</strong> Incorporate current events, viral trends, and seasonal content opportunities</li>
                <li><strong>Multiple Format Support:</strong> Ideas for tutorials, reviews, vlogs, challenges, reactions, and educational content</li>
                <li><strong>Audience Demographics:</strong> Content suggestions based on your target viewer age, interests, and preferences</li>
                <li><strong>SEO-Optimized Titles:</strong> Video titles designed for maximum searchability and click-through rates</li>
                <li><strong>Viral Potential Analysis:</strong> Ideas ranked by their potential for viral spread and audience engagement</li>
                <li><strong>Content Calendar Planning:</strong> Organize ideas by season, events, and optimal posting schedules</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Strategic Content Planning & Channel Growth</h3>
              <p>
                Successful YouTube channels maintain consistent content flow while staying relevant and engaging. 
                Our idea generator helps you plan months ahead with content that balances evergreen topics with 
                trending themes, ensuring your channel stays discoverable while building authority in your niche. 
                The tool considers algorithm preferences, seasonal trends, and audience behavior patterns to maximize 
                your content's reach and impact.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Creative Inspiration & Trend Analysis</h3>
              <p>
                Break through creative blocks with data-driven content suggestions that combine proven formats with 
                fresh perspectives. Our generator analyzes successful videos across your niche, identifies content gaps, 
                and suggests unique angles that set your videos apart from competitors. Perfect for maintaining creative 
                momentum while ensuring your content strategy aligns with what audiences actually want to watch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
