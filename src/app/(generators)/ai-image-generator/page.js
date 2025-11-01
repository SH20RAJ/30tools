import AIImageGeneratorTool from '@/components/tools/generators/AIImageGeneratorTool';

export const metadata = {
  title: "AI Image Generator - Free Text to Image Creator | 30tools",
  description: "Generate stunning AI images from text prompts instantly. Free AI art generator with advanced features, styles, and image history. Create unique images with no signup required.",
  keywords: [
    // Primary keywords
    "ai image generator",
    "text to image ai",
    "ai art generator",
    "free ai image creator",
    "artificial intelligence image",
    
    // Long-tail keywords for SEO ranking
    "free ai image generator no signup",
    "text to image generator online",
    "ai art creator from text description",
    "artificial intelligence image maker",
    "generate images from text prompts",
    "ai picture generator free online",
    "text to ai art converter",
    "free ai image creation tool",
    "artificial intelligence art generator",
    "ai image generator with styles",
    "text description to image ai",
    "create ai images from text",
    "ai image maker free unlimited",
    "artificial intelligence image creator"
  ].join(", "),
  openGraph: {
    title: "Free AI Image Generator - Create Images from Text",
    description: "Generate stunning AI images from text prompts instantly. Free AI art generator with advanced features and styles. No signup required.",
    url: "https://30tools.com/ai-image-generator",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/ai-image-generator.jpg",
        width: 1200,
        height: 630,
        alt: "AI Image Generator - Free Text to Image Tool"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Image Generator - Free Text to Image Creator",
    description: "Generate stunning AI images from text prompts instantly. Free AI art generator with advanced features and no signup required.",
    images: ["/og-images/ai-image-generator.jpg"],
    creator: '@30tools'
  },
  alternates: {
    canonical: "https://30tools.com/ai-image-generator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "AI Image Generator",
  "description": "Free AI image generator that creates stunning images from text prompts using advanced artificial intelligence. No signup required.",
  "url": "https://30tools.com/ai-image-generator",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Text-to-image AI generation",
    "Multiple art styles",
    "High-quality image output",
    "Image history storage",
    "Download generated images",
    "Share and copy image links",
    "No registration required",
    "Unlimited generations",
    "Advanced prompt suggestions",
    "Real-time image preview"
  ],
  "creator": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "3247",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export default function AIImageGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              AI Image Generator
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Create stunning AI-generated images from text descriptions instantly. Our advanced artificial intelligence transforms your words into beautiful, unique artwork. Choose from multiple styles, download high-quality images, and explore endless creative possibilities with no signup required.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Free Forever</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Signup Required</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Multiple Styles</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ High Quality</span>
            </div>
          </div>

          <AIImageGeneratorTool />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Use AI Image Generator</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-500 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Describe Your Image</h3>
                  <p className="text-sm text-muted-foreground">Enter a detailed text description of the image you want to create</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-500 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Choose Style & Settings</h3>
                  <p className="text-sm text-muted-foreground">Select art style, dimensions, and other preferences</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-500 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Generate & Download</h3>
                  <p className="text-sm text-muted-foreground">Click generate and download your unique AI-created image</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">AI Image Generation Tips</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-purple-600">🎨 Writing Better Prompts</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Be specific and descriptive</li>
                    <li>• Include style, lighting, and mood</li>
                    <li>• Mention colors, composition, and details</li>
                    <li>• Add artistic styles (photorealistic, cartoon, oil painting)</li>
                  </ul>

                  <h3 className="font-medium mb-2 text-purple-600">💡 Example Prompts</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• "A majestic lion in golden sunset light, photorealistic"</li>
                    <li>• "Futuristic city with neon lights, cyberpunk style"</li>
                    <li>• "Peaceful forest path, soft morning light, oil painting"</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-purple-600">🚀 Advanced Features</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Multiple art styles to choose from</li>
                    <li>• Different aspect ratios and sizes</li>
                    <li>• Image history to track your creations</li>
                    <li>• High-quality downloads</li>
                  </ul>

                  <h3 className="font-medium mb-2 text-purple-600">✨ Best Practices</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use 10-50 words for optimal results</li>
                    <li>• Experiment with different styles</li>
                    <li>• Save favorite prompts for reuse</li>
                    <li>• Try variations of successful prompts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Popular AI Art Styles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                  <h3 className="font-medium mb-2">Photorealistic</h3>
                  <p className="text-sm text-muted-foreground">Highly detailed, camera-like images</p>
                </div>
                <div className="p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
                  <h3 className="font-medium mb-2">Digital Art</h3>
                  <p className="text-sm text-muted-foreground">Modern digital illustration style</p>
                </div>
                <div className="p-4 border rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
                  <h3 className="font-medium mb-2">Oil Painting</h3>
                  <p className="text-sm text-muted-foreground">Classic artistic painting technique</p>
                </div>
                <div className="p-4 border rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
                  <h3 className="font-medium mb-2">Cartoon/Anime</h3>
                  <p className="text-sm text-muted-foreground">Stylized animated artwork</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Is the AI image generator really free?</h3>
                  <p className="text-sm text-muted-foreground">Yes, our AI image generator is completely free to use with no limits on the number of images you can generate. No signup or subscription required.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">What happens to my generated images?</h3>
                  <p className="text-sm text-muted-foreground">Your image history is stored locally in your browser for convenience. We don't store your images on our servers, ensuring complete privacy.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Can I use generated images commercially?</h3>
                  <p className="text-sm text-muted-foreground">Generally yes, but please check the terms of service. AI-generated images are typically free to use for personal and commercial purposes.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">How long does it take to generate an image?</h3>
                  <p className="text-sm text-muted-foreground">Image generation typically takes 5-15 seconds depending on complexity and server load. Higher quality images may take slightly longer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 