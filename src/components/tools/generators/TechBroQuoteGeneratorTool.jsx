"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeftIcon,
  RefreshCwIcon,
  CopyIcon,
  TrendingUpIcon,
  ZapIcon,
  RocketIcon,
} from "lucide-react";
import Link from "next/link";
import SocialShareButtons from "@/components/shared/SocialShareButtons";

// Tech bro quote templates and data
const QUOTE_TEMPLATES = [
  "We're not just {action}, we're {impact} the entire {industry} ecosystem.",
  "Our {product} leverages {technology} to {action} at scale.",
  "We're building the {adjective} platform for {target_audience} to {action}.",
  "Think {comparison}, but for {industry}. We're {impact} everything.",
  "Our mission is to {action} {target_audience} through {technology}.",
  "We're creating a {adjective} future where {vision}.",
  "This isn't just {product}, it's a {adjective} revolution in {industry}.",
  "We're {impact} the way {target_audience} {action} forever.",
  "Our {technology}-powered solution will {action} the entire {industry}.",
  "We're not just another {product}, we're the {adjective} solution for {problem}.",
];

const BUZZWORDS = {
  action: [
    "disrupting",
    "revolutionizing",
    "transforming",
    "optimizing",
    "scaling",
    "innovating",
    "streamlining",
    "automating",
    "digitizing",
    "modernizing",
    "accelerating",
    "empowering",
  ],
  impact: [
    "disrupting",
    "revolutionizing",
    "transforming",
    "reshaping",
    "redefining",
    "reimagining",
    "changing",
    "evolving",
    "upgrading",
    "enhancing",
    "optimizing",
    "supercharging",
  ],
  industry: [
    "fintech",
    "healthtech",
    "edtech",
    "proptech",
    "foodtech",
    "mobility",
    "logistics",
    "e-commerce",
    "SaaS",
    "blockchain",
    "AI/ML",
    "cybersecurity",
    "sustainability",
  ],
  product: [
    "platform",
    "ecosystem",
    "solution",
    "framework",
    "infrastructure",
    "marketplace",
    "network",
    "application",
    "system",
    "tool",
    "service",
    "experience",
  ],
  technology: [
    "AI",
    "machine learning",
    "blockchain",
    "IoT",
    "cloud computing",
    "big data",
    "automation",
    "APIs",
    "microservices",
    "edge computing",
    "quantum computing",
    "AR/VR",
  ],
  adjective: [
    "game-changing",
    "revolutionary",
    "cutting-edge",
    "next-generation",
    "innovative",
    "disruptive",
    "scalable",
    "seamless",
    "intelligent",
    "data-driven",
    "user-centric",
  ],
  target_audience: [
    "millennials",
    "Gen Z",
    "enterprises",
    "SMBs",
    "creators",
    "developers",
    "consumers",
    "professionals",
    "startups",
    "investors",
    "entrepreneurs",
    "users",
  ],
  comparison: [
    "Uber",
    "Airbnb",
    "Netflix",
    "Amazon",
    "Google",
    "Facebook",
    "Tesla",
    "Spotify",
    "Instagram",
    "TikTok",
    "Slack",
    "Zoom",
  ],
  vision: [
    "everyone has access to innovation",
    "technology serves humanity",
    "data drives decisions",
    "automation enhances creativity",
    "AI augments human potential",
    "blockchain ensures transparency",
  ],
  problem: [
    "inefficiency",
    "fragmentation",
    "complexity",
    "scalability challenges",
    "user experience gaps",
    "data silos",
    "manual processes",
    "legacy systems",
  ],
};

const QUOTE_STYLES = {
  linkedin: "LinkedIn Post",
  tweet: "Twitter Thread",
  pitch: "Investor Pitch",
  interview: "Tech Interview",
  blog: "Medium Article",
};

const TechBroQuoteGeneratorTool = () => {
  const [generatedQuote, setGeneratedQuote] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState("linkedin");
  const [copiedQuote, setCopiedQuote] = useState(false);

  const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const generateQuote = () => {
    setIsGenerating(true);

    setTimeout(() => {
      const template = getRandomItem(QUOTE_TEMPLATES);

      let quote = template;

      // Replace placeholders with random buzzwords
      Object.keys(BUZZWORDS).forEach((category) => {
        const regex = new RegExp(`{${category}}`, "g");
        quote = quote.replace(regex, getRandomItem(BUZZWORDS[category]));
      });

      // Style the quote based on selected format
      let styledQuote = quote;

      switch (selectedStyle) {
        case "linkedin":
          styledQuote = `🚀 ${quote}\n\n#startup #innovation #tech #entrepreneur #disruption`;
          break;
        case "tweet":
          styledQuote = `🧵 THREAD: ${quote}\n\n1/7`;
          break;
        case "pitch":
          styledQuote = `"${quote}"\n\n- Slide 3 of our Series A deck`;
          break;
        case "interview":
          styledQuote = `Interviewer: "What makes your company unique?"\n\nMe: "${quote}"`;
          break;
        case "blog":
          styledQuote = `## The Future is Here\n\n${quote}\n\n*Published on Medium • 5 min read*`;
          break;
        default:
          styledQuote = quote;
      }

      setGeneratedQuote(styledQuote);
      setIsGenerating(false);
    }, 1000);
  };

  const copyQuote = async () => {
    if (generatedQuote) {
      await navigator.clipboard.writeText(generatedQuote);
      setCopiedQuote(true);
      setTimeout(() => setCopiedQuote(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/generators"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Generators
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-background">
              <TrendingUpIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-background">
                Tech Bro Quote Generator
              </h1>
              <p className="text-muted-foreground">
                Generate satirical startup quotes and tech bro buzzwords
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">🚀 Startup Buzzwords</Badge>
            <Badge variant="secondary">💼 LinkedIn Ready</Badge>
            <Badge variant="secondary">😂 Satirical Content</Badge>
            <Badge variant="secondary">📱 Social Media</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ZapIcon className="h-5 w-5" />
                  Quote Settings
                </CardTitle>
                <CardDescription>
                  Customize your tech bro quote style
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Quote Style
                  </label>
                  <Select
                    value={selectedStyle}
                    onValueChange={setSelectedStyle}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(QUOTE_STYLES).map(([key, label]) => (
                        <SelectItem key={key} value={key}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={generateQuote}
                  className="w-full bgtbd"
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCwIcon className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <RocketIcon className="mr-2 h-4 w-4" />
                      Generate Quote
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Generated Quote */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUpIcon className="h-5 w-5" />
                  Generated Tech Bro Quote
                </CardTitle>
                <CardDescription>
                  Your satirical startup quote is ready for social media
                </CardDescription>
              </CardHeader>
              <CardContent>
                {generatedQuote ? (
                  <div className="space-y-4">
                    <div className="p-6 bg-background/20 dark:to-purple-900/20 rounded-lg border-2 border-dashed border-border dark:border-border">
                      <pre className="whitespace-pre-wrap font-medium text-foreground dark:text-gray-200 leading-relaxed">
                        {generatedQuote}
                      </pre>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={copyQuote}
                        variant="outline"
                        className="flex-1"
                      >
                        <CopyIcon className="mr-2 h-4 w-4" />
                        {copiedQuote ? "Copied!" : "Copy Quote"}
                      </Button>
                      <Button onClick={generateQuote} variant="outline">
                        <RefreshCwIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <TrendingUpIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>
                      Click "Generate Quote" to create your satirical tech bro
                      quote!
                    </p>
                    <p className="text-sm mt-2">
                      Perfect for LinkedIn memes and startup parody 🚀
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ZapIcon className="h-5 w-5" />
              Pro Tips for Tech Bro Quotes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-muted/50 dark:bg-primary/20 rounded-lg">
                <h4 className="font-semibold mb-2">🎯 Perfect for Memes</h4>
                <p>
                  Use these quotes for satirical content and startup parody
                  posts
                </p>
              </div>
              <div className="p-3 bg-muted/50 dark:bg-primary/20 rounded-lg">
                <h4 className="font-semibold mb-2">📱 Social Media Ready</h4>
                <p>
                  Formatted for LinkedIn, Twitter, and other social platforms
                </p>
              </div>
              <div className="p-3 bg-muted/50 dark:bg-primary/20 rounded-lg">
                <h4 className="font-semibold mb-2">😂 Satirical Content</h4>
                <p>
                  Perfect for poking fun at startup culture and tech buzzwords
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Share */}
        <div className="mt-12">
          <SocialShareButtons
            toolName="Tech Bro Quote Generator"
            toolDescription="Generate hilarious satirical tech bro quotes and startup buzzwords! Perfect for LinkedIn memes and social media content. 🚀"
            toolUrl="https://30tools.com/tech-bro-quote-generator"
            category="generators"
          />
        </div>
      </div>
    </div>
  );
};

export default TechBroQuoteGeneratorTool;
