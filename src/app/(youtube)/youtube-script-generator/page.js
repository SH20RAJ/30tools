import YouTubeScriptGenerator from '@/components/tools/youtube/YouTubeScriptGenerator';

export const metadata = {
  title: "Youtube Script Generator - Free Tool | 30tools",
  description: "Free youtube script generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  keywords: "ai youtube script generator, youtube script writer, video script creator, ai script generator, youtube content writer, video script maker, ai video script, youtube script template, content creation ai, viral video script generator",
  openGraph: {
    title: "AI YouTube Script Generator - Create Engaging Video Scripts",
    description: "Generate compelling YouTube video scripts with AI assistance for viral content and audience engagement.",
    url: "https://30tools.com/youtube-script-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/youtube-script-generator.jpg",
        width: 1200,
        height: 630,
        alt: "AI YouTube Script Generator Tool"
      }
    ],
    type: "website"
  },
  alternates: {
    canonical: "https://30tools.com/youtube-script-generator"
  }
,
  twitter: {
    card: "summary_large_image",
    title: "Youtube Script Generator - Free Online Tool | 30tools",
    description: "Free youtube script generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
    images: ["/og-images/youtube-script-generator.jpg"],
    creator: "@30tools"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "AI YouTube Script Generator",
  "description": "AI-powered tool to generate engaging YouTube video scripts with hooks, content structure, and call-to-actions",
  "url": "https://30tools.com/youtube-script-generator",
  "applicationCategory": "Multimedia",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "AI-powered script generation",
    "Multiple video formats",
    "Engaging hooks and intros",
    "Call-to-action optimization",
    "Content structure templates",
    "Audience targeting"
  ]
};

export default function YouTubeScriptGeneratorPage() {
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
                AI YouTube Script Generator
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Create compelling YouTube video scripts with AI assistance. Generate engaging hooks, 
                structured content, and powerful call-to-actions that capture attention, maintain viewer 
                engagement, and drive subscriptions for any type of YouTube content.
              </p>
            </div>
            
            <YouTubeScriptGenerator />
            
            <div className="mt-12 prose prose-gray max-w-none">
              <h2 className="text-2xl font-semibold mb-4">AI-Powered YouTube Content Creation</h2>
              <p>
                Transform your video ideas into professional scripts that captivate audiences and drive engagement. 
                Our AI script generator uses advanced language models trained on successful YouTube content patterns 
                to create scripts that incorporate proven storytelling techniques, audience retention strategies, 
                and conversion-optimized elements that help videos perform better in YouTube's algorithm.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Advanced Script Generation Features</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Attention-Grabbing Hooks:</strong> AI-crafted opening lines that immediately capture viewer attention and reduce bounce rates</li>
                <li><strong>Structured Content Flow:</strong> Logical progression of ideas with smooth transitions that maintain viewer engagement throughout</li>
                <li><strong>Audience-Specific Tone:</strong> Customizable writing style that matches your target demographic and niche preferences</li>
                <li><strong>SEO-Optimized Language:</strong> Natural keyword integration that improves discoverability without sounding forced</li>
                <li><strong>Call-to-Action Placement:</strong> Strategic placement of subscription prompts, like requests, and engagement drivers</li>
                <li><strong>Format-Specific Templates:</strong> Specialized structures for tutorials, reviews, vlogs, educational content, and entertainment</li>
                <li><strong>Retention Optimization:</strong> Built-in techniques to maintain viewer interest and encourage full video consumption</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Content Strategy & Audience Engagement</h3>
              <p>
                Successful YouTube scripts balance entertainment value with strategic content delivery. Our AI generator 
                incorporates proven psychological triggers, storytelling frameworks, and engagement patterns that top 
                creators use to build loyal audiences. The tool helps you craft scripts that not only inform or entertain 
                but also create emotional connections with viewers that translate into long-term channel growth.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Multi-Format Script Creation</h3>
              <p>
                Whether you're creating educational tutorials, product reviews, entertainment content, or business presentations, 
                our script generator adapts to your specific content format and audience expectations. The AI understands 
                the unique requirements of different video types and generates scripts with appropriate pacing, information 
                density, and engagement techniques optimized for each format's success metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
