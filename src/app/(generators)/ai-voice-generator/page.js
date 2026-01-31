import AIVoiceGeneratorTool from "@/components/tools/generators/AIVoiceGeneratorTool";
import {
  BreadcrumbsEnhanced,
  FAQSection,
  ReviewSnippets,
  RelatedTools,
  UserComments,
  QuickActions,
} from "@/components/seo";
import {
  GeneratorToolFeatures,
  GeneratorToolExamples,
} from "@/components/seo/GeneratorToolsHub";
import { getGeneratorToolFAQs } from "@/constants/seo/generator-faqs";

export const metadata = {
  title: "AI Voice Generator - Free Text to Speech Tool | 30tools",
  description: "Generate Process instantly with our free ai voice generator. Professional quality results, unlimited generations. Perfect for creators, developers & businesses.",
  keywords:
    "ai voice generator, text to speech, ai audio, generate voice, speech ai, free ai voice generator, tts online, text to audio converter, realistic ai voices, voice cloning free, narrator voice generator, youtube voiceover generator",
  canonical: "https://30tools.com/ai-voice-generator",
  openGraph: {
    title: "AI Voice Generator - Free Text to Speech Tool",
    description:
      "Convert text to natural-sounding speech with AI. Enter your text and download the audio instantly.",
    url: "https://30tools.com/ai-voice-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/ai-voice-generator.jpg",
        width: 1200,
        height: 630,
        alt: "AI Voice Generator Tool - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Generator - Free Text to Speech Tool",
    description:
      "Convert text to natural-sounding speech with AI. Enter your text and download the audio instantly.",
    images: ["/og-images/ai-voice-generator.jpg"],
    creator: "@30tools",
  },
  category: "Generators",
};

export default function AIVoiceGeneratorPage() {
  // Tool-specific data
  const toolData = {
    id: "ai-voice-generator",
    name: "AI Voice Generator",
    description: "Convert text to natural-sounding speech with AI",
    category: "generators",
    route: "/ai-voice-generator",
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Generators", url: "/generators" },
    { name: "AI Voice Generator", url: "/ai-voice-generator" },
  ];

  // Tool features
  const features = [
    "Natural-sounding AI voices",
    "Multiple languages & accents",
    "Male & Female voice options",
    "Adjustable speed & pitch",
    "Instant MP3 download",
    "Unlimited text conversion",
    "Commercial use allowed",
    "No signup required",
  ];

  // Usage examples
  const examples = [
    {
      title: "YouTube Voiceover",
      description: "Narration for video content",
      input: "Text: 'Welcome to our channel! Today we're exploring...', Voice: Male (American)",
      output: "Professional quality voiceover audio file",
    },
    {
      title: "Podcast Intro",
      description: "Opening segment for podcasts",
      input: "Text: 'You are listening to The Tech Daily...', Voice: Female (British)",
      output: "Clear, engaging podcast introduction",
    },
    {
      title: "E-Learning",
      description: "Educational content narration",
      input: "Text: 'Chapter 1: Introduction to Biology...', Voice: Female (Calm)",
      output: "Easy-to-understand educational audio",
    },
  ];

  // FAQ data
  const faqs = getGeneratorToolFAQs("ai-voice-generator");

  // Related tools
  const relatedTools = [
    {
      id: "ai-image-generator",
      name: "AI Image Generator",
      description: "Create AI art from text",
      route: "/ai-image-generator",
      category: "generators",
    },
    {
      id: "text-to-speech",
      name: "Text to Speech (Pro)",
      description: "Advanced TTS Tool",
      route: "/text-to-speech",
      category: "audio",
    },
    {
      id: "youtube-video-summarizer",
      name: "Video Summarizer",
      description: "Summarize YouTube videos",
      route: "/youtube-video-summarizer",
      category: "youtube",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Breadcrumbs with Schema */}
      <div className="container mx-auto px-4 pt-6">
        <BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Free AI Voice Generator - Text to Speech Converter
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Transform your text into lifelike speech with our advanced AI voice
            generator. Choose from a variety of natural-sounding voices, accents,
            and languages. Perfect for videos, podcasts, presentations, and more.
          </p>

          <QuickActions
            toolName="AI Voice Generator"
            toolUrl="https://30tools.com/ai-voice-generator"
            showBookmark={true}
            showShare={true}
          />
        </div>

        {/* Tool Interface */}
        <div className="mb-12">
          <AIVoiceGeneratorTool />
        </div>

        {/* Key Features */}
        <GeneratorToolFeatures tool={toolData} features={features} />

        {/* Usage Examples */}
        <GeneratorToolExamples tool={toolData} examples={examples} />

        {/* User Reviews */}
        <div className="mb-12">
          <ReviewSnippets
            toolId="ai-voice-generator"
            title="What Creators Say About Our Voice Tool"
            showRatingSummary={true}
            variant="grid"
            limit={6}
          />
        </div>

        {/* How to Use Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How to Convert Text to Speech
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Enter Text</h3>
              <p className="text-muted-foreground text-sm">
                Type or paste the text you want to convert into the input box.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Select Voice</h3>
              <p className="text-muted-foreground text-sm">
                Choose your preferred language, accent, and voice gender from the
                options.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center relative">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Generate & Download</h3>
              <p className="text-muted-foreground text-sm">
                Click generate to hear the audio, then download the MP3 file for
                your project.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection
            faqs={faqs}
            title="AI Voice Generator FAQ"
            categoryTitle="Text to Speech"
            variant="accordion"
            showSchema={true}
          />
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <RelatedTools
            currentTool="ai-voice-generator"
            category="generators"
            tools={relatedTools}
            title="More Creative Generators"
          />
        </div>

        {/* User Comments */}
        <UserComments
          toolId="ai-voice-generator"
          toolName="AI Voice Generator"
          showStats={true}
          allowComments={true}
        />
      </main>

      {/* Structured Data for Tool */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "AI Voice Generator",
              description:
                "Convert text to natural-sounding speech instantly with our free AI voice generator",
              url: "https://30tools.com/ai-voice-generator",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "30tools",
                url: "https://30tools.com",
              },
              featureList: features,
              screenshot:
                "https://30tools.com/screenshots/ai-voice-generator.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "2847",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Convert Text to Speech",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Enter Text",
                  text: "Type or paste the text you want to convert into the input box.",
                  url: "https://30tools.com/ai-voice-generator#step1",
                },
                {
                  "@type": "HowToStep",
                  name: "Select Voice",
                  text: "Choose your preferred language, accent, and voice gender from the options.",
                  url: "https://30tools.com/ai-voice-generator#step2",
                },
                {
                  "@type": "HowToStep",
                  name: "Generate & Download",
                  text: "Click generate to hear the audio, then download the MP3 file for your project.",
                  url: "https://30tools.com/ai-voice-generator#step3",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
