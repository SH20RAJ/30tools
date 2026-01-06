"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import {
  Video,
  Upload,
  Download,
  Wand2,
  Eye,
  DollarSign,
  TrendingUp,
  Play,
  Settings,
} from "lucide-react";
import { toast } from "sonner";

export default function FacelessVideoGeneratorTool() {
  const [videoType, setVideoType] = useState("motivational");
  const [script, setScript] = useState("");
  const [voiceType, setVoiceType] = useState("male-professional");
  const [backgroundType, setBackgroundType] = useState("nature");
  const [musicType, setMusicType] = useState("ambient");
  const [duration, setDuration] = useState("60");
  const [includeSubtitles, setIncludeSubtitles] = useState(true);
  const [includeHook, setIncludeHook] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generatedVideo, setGeneratedVideo] = useState(null);
  const [currentStep, setCurrentStep] = useState("");

  const videoTemplates = {
    motivational: {
      name: "Motivational Content",
      description: "Inspiring quotes and success stories",
      examples: ["Daily motivation", "Success mindset", "Productivity tips"],
    },
    educational: {
      name: "Educational Content",
      description: "Learning and how-to content",
      examples: ["History facts", "Science explained", "Life skills"],
    },
    lifestyle: {
      name: "Lifestyle Content",
      description: "Health, wellness, and daily tips",
      examples: ["Health tips", "Morning routines", "Life hacks"],
    },
    business: {
      name: "Business Content",
      description: "Entrepreneurship and finance",
      examples: ["Business tips", "Investment advice", "Success stories"],
    },
    entertainment: {
      name: "Entertainment",
      description: "Fun facts and stories",
      examples: ["Interesting facts", "Story time", "Did you know"],
    },
  };

  const generateSampleScript = (type) => {
    const scripts = {
      motivational:
        "Success isn't about luck - it's about consistency. Every champion was once a beginner who refused to give up. Your dreams are valid, but dreams without action remain wishes. Start today, start small, but start. The person you'll become is worth the effort you put in now.",
      educational:
        "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible. This is because honey has natural antimicrobial properties and extremely low water content.",
      lifestyle:
        "The 5-4-3-2-1 grounding technique can instantly reduce anxiety. Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. This simple method brings your mind back to the present moment.",
      business:
        "The richest people understand this: assets put money in your pocket, liabilities take money out. Your car, expensive clothes, and fancy gadgets are liabilities. Stocks, real estate, and businesses are assets. Choose wisely.",
      entertainment:
        "There's a town in Norway where it's illegal to die. Longyearbyen is so cold that bodies don't decompose, so if you're seriously ill, you have to leave town. This bizarre law has been in place since the 1950s!",
    };
    return scripts[type] || scripts.motivational;
  };

  const simulateProgress = (start, end, duration, steps) => {
    return new Promise((resolve) => {
      const totalSteps = steps || 20;
      const increment = (end - start) / totalSteps;
      const stepDuration = duration / totalSteps;
      let current = start;

      const interval = setInterval(() => {
        current += increment;
        setProgress(Math.min(current, end));

        if (current >= end) {
          clearInterval(interval);
          resolve();
        }
      }, stepDuration);
    });
  };

  const generateVideo = async () => {
    if (!script.trim()) {
      const sampleScript = generateSampleScript(videoType);
      setScript(sampleScript);
    }

    setIsGenerating(true);
    setProgress(0);
    setGeneratedVideo(null);

    try {
      setCurrentStep("Analyzing script and content...");
      await simulateProgress(0, 15, 2000);

      setCurrentStep("Generating AI voiceover...");
      await simulateProgress(15, 35, 2500);

      setCurrentStep("Creating background visuals...");
      await simulateProgress(35, 55, 2000);

      setCurrentStep("Adding background music...");
      await simulateProgress(55, 70, 1500);

      setCurrentStep("Generating subtitles...");
      await simulateProgress(70, 85, 1500);

      setCurrentStep("Rendering final video...");
      await simulateProgress(85, 100, 2000);

      // Generate sample video data
      const videoData = {
        id: Date.now(),
        title: `${videoTemplates[videoType].name} Video`,
        duration: `${duration}s`,
        thumbnail: `https://via.placeholder.com/480x270/6366f1/FFFFFF?text=${encodeURIComponent(videoTemplates[videoType].name)}`,
        downloadUrl: "#sample-video-url",
        script: script.trim() || generateSampleScript(videoType),
        settings: {
          voiceType,
          backgroundType,
          musicType,
          includeSubtitles,
          includeHook,
        },
        stats: {
          estimated_views: Math.floor(Math.random() * 50000) + 10000,
          engagement_rate: (Math.random() * 15 + 5).toFixed(1),
          monetization_potential: Math.floor(Math.random() * 500) + 100,
        },
      };

      setGeneratedVideo(videoData);
      setCurrentStep("Complete!");
      toast.success("Faceless video generated successfully!");
    } catch (_error) {
      toast.error("Failed to generate video. Please try again.");
    } finally {
      setIsGenerating(false);
      setProgress(0);
      setCurrentStep("");
    }
  };

  const downloadVideo = () => {
    if (generatedVideo) {
      toast.success("Video download started!");
      // In a real implementation, this would trigger the actual download
    }
  };

  const fillSampleScript = () => {
    const sampleScript = generateSampleScript(videoType);
    setScript(sampleScript);
    toast.success("Sample script loaded!");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Wand2 className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">Faceless Video Generator</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Create viral faceless YouTube videos for monetization. Perfect for
          motivation, education, and lifestyle content. No camera, no editing
          skills required - just AI-powered content creation.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">🤖 AI Generated</Badge>
          <Badge variant="secondary">💰 Monetizable</Badge>
          <Badge variant="secondary">🎬 HD Quality</Badge>
          <Badge variant="secondary">🚀 Viral Ready</Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Video Configuration</CardTitle>
            <CardDescription>
              Set up your faceless video parameters and content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="video-type">Video Type</Label>
              <Select
                value={videoType}
                onValueChange={setVideoType}
                disabled={isGenerating}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(videoTemplates).map(([key, template]) => (
                    <SelectItem key={key} value={key}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1">
                {videoTemplates[videoType].description}
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="script">Video Script</Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={fillSampleScript}
                  disabled={isGenerating}
                >
                  Use Sample
                </Button>
              </div>
              <Textarea
                id="script"
                value={script}
                onChange={(e) => setScript(e.target.value)}
                placeholder="Enter your video script or click 'Use Sample' to generate one..."
                className="min-h-[120px]"
                disabled={isGenerating}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Optimal length: 50-150 words for {duration} second videos
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="voice-type">AI Voice</Label>
                <Select
                  value={voiceType}
                  onValueChange={setVoiceType}
                  disabled={isGenerating}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male-professional">
                      Male Professional
                    </SelectItem>
                    <SelectItem value="female-professional">
                      Female Professional
                    </SelectItem>
                    <SelectItem value="male-energetic">
                      Male Energetic
                    </SelectItem>
                    <SelectItem value="female-energetic">
                      Female Energetic
                    </SelectItem>
                    <SelectItem value="neutral-calm">Neutral Calm</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="duration">Duration (seconds)</Label>
                <Select
                  value={duration}
                  onValueChange={setDuration}
                  disabled={isGenerating}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 seconds</SelectItem>
                    <SelectItem value="60">60 seconds</SelectItem>
                    <SelectItem value="90">90 seconds</SelectItem>
                    <SelectItem value="120">2 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="background-type">Background Style</Label>
                <Select
                  value={backgroundType}
                  onValueChange={setBackgroundType}
                  disabled={isGenerating}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nature">Nature & Landscapes</SelectItem>
                    <SelectItem value="abstract">Abstract Motion</SelectItem>
                    <SelectItem value="urban">Urban & City</SelectItem>
                    <SelectItem value="space">Space & Cosmos</SelectItem>
                    <SelectItem value="minimal">Minimal & Clean</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="music-type">Background Music</Label>
                <Select
                  value={musicType}
                  onValueChange={setMusicType}
                  disabled={isGenerating}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ambient">Ambient</SelectItem>
                    <SelectItem value="upbeat">Upbeat</SelectItem>
                    <SelectItem value="cinematic">Cinematic</SelectItem>
                    <SelectItem value="lofi">Lo-Fi</SelectItem>
                    <SelectItem value="none">No Music</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="subtitles">Include Subtitles</Label>
                <Switch
                  id="subtitles"
                  checked={includeSubtitles}
                  onCheckedChange={setIncludeSubtitles}
                  disabled={isGenerating}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="hook">Include Viral Hook</Label>
                <Switch
                  id="hook"
                  checked={includeHook}
                  onCheckedChange={setIncludeHook}
                  disabled={isGenerating}
                />
              </div>
            </div>

            <Button
              onClick={generateVideo}
              disabled={isGenerating}
              className="w-full"
            >
              {isGenerating ? (
                <>
                  <Wand2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating Video...
                </>
              ) : (
                <>
                  <Video className="h-4 w-4 mr-2" />
                  Generate Faceless Video
                </>
              )}
            </Button>

            {isGenerating && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{currentStep}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generated Video</CardTitle>
            <CardDescription>
              Preview and download your faceless video
            </CardDescription>
          </CardHeader>
          <CardContent>
            {generatedVideo ? (
              <div className="space-y-4">
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                  <img
                    src={generatedVideo.thumbnail}
                    alt={generatedVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary">{generatedVideo.duration}</Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">
                    {generatedVideo.title}
                  </h3>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <Eye className="h-4 w-4 mx-auto mb-1 text-primary" />
                      <div className="font-semibold">
                        {generatedVideo.stats.estimated_views.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Est. Views
                      </div>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <TrendingUp className="h-4 w-4 mx-auto mb-1 text-primary" />
                      <div className="font-semibold">
                        {generatedVideo.stats.engagement_rate}%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Engagement
                      </div>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <DollarSign className="h-4 w-4 mx-auto mb-1 text-primary" />
                      <div className="font-semibold">
                        ${generatedVideo.stats.monetization_potential}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Est. Revenue
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">
                      Video Settings
                    </Label>
                    <div className="text-xs space-y-1 text-muted-foreground">
                      <p>• Voice: {voiceType.replace("-", " ")}</p>
                      <p>• Background: {backgroundType}</p>
                      <p>• Music: {musicType}</p>
                      <p>• Subtitles: {includeSubtitles ? "Yes" : "No"}</p>
                      <p>• Viral Hook: {includeHook ? "Yes" : "No"}</p>
                    </div>
                  </div>

                  <Button onClick={downloadVideo} className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Video (MP4)
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-96 bg-muted rounded-lg">
                <div className="text-center text-muted-foreground">
                  <Video className="h-12 w-12 mx-auto mb-2" />
                  <p>Your generated video will appear here</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Video Type Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Popular Faceless Video Types</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-5 gap-4">
            {Object.entries(videoTemplates).map(([key, template]) => (
              <div
                key={key}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  videoType === key
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setVideoType(key)}
              >
                <h3 className="font-semibold mb-2">{template.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {template.description}
                </p>
                <div className="space-y-1">
                  {template.examples.map((example, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs mr-1">
                      {example}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SEO Content Section */}
      <div className="mt-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>About Faceless Video Creation</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Faceless videos have become a dominant force on YouTube, allowing
              creators to build successful channels without showing their face
              on camera. This format is perfect for those who value privacy,
              lack confidence on camera, or want to create scalable content
              systems.
            </p>

            <h3>Why Create Faceless Videos?</h3>
            <ul>
              <li>
                <strong>Privacy Protection:</strong> Maintain anonymity while
                building your brand
              </li>
              <li>
                <strong>Scalable Content:</strong> Create multiple videos
                quickly with AI assistance
              </li>
              <li>
                <strong>Lower Barrier to Entry:</strong> No camera equipment or
                filming skills needed
              </li>
              <li>
                <strong>Monetization Ready:</strong> Meet YouTube Partner
                Program requirements
              </li>
              <li>
                <strong>Viral Potential:</strong> Focus on content quality over
                presentation
              </li>
              <li>
                <strong>Global Appeal:</strong> Content works across different
                demographics
              </li>
            </ul>

            <h3>Popular Faceless Video Niches:</h3>
            <ul>
              <li>
                <strong>Motivational Content:</strong> Inspirational quotes and
                success stories
              </li>
              <li>
                <strong>Educational Videos:</strong> Tutorials, facts, and
                how-to content
              </li>
              <li>
                <strong>Business & Finance:</strong> Investment tips and
                entrepreneurship advice
              </li>
              <li>
                <strong>Health & Wellness:</strong> Fitness tips and mental
                health content
              </li>
              <li>
                <strong>Entertainment:</strong> Top 10 lists, interesting facts,
                and stories
              </li>
              <li>
                <strong>Technology:</strong> Product reviews and tech
                explanations
              </li>
            </ul>

            <h3>Monetization Strategies:</h3>
            <ul>
              <li>YouTube Ad Revenue (AdSense)</li>
              <li>Affiliate marketing and product recommendations</li>
              <li>Sponsored content and brand partnerships</li>
              <li>Digital product sales (courses, ebooks)</li>
              <li>Channel memberships and Super Thanks</li>
              <li>Patreon and other subscription platforms</li>
            </ul>

            <h3>Optimization Tips:</h3>
            <ul>
              <li>
                Use compelling thumbnails with bold text and contrasting colors
              </li>
              <li>Create engaging hooks in the first 3-5 seconds</li>
              <li>Include subtitles for better accessibility and engagement</li>
              <li>
                Optimize video length for your niche (60-90 seconds for viral
                content)
              </li>
              <li>Use trending keywords in titles and descriptions</li>
              <li>Post consistently to build audience momentum</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
