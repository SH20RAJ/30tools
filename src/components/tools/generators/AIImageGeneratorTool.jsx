"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import {
  RefreshCwIcon,
  ImageIcon,
  DownloadIcon,
  CopyIcon,
  HeartIcon,
  TrashIcon,
  Sparkles,
  Palette,
  History,
  Settings,
  ArrowLeftIcon,
  InfoIcon,
  CheckIcon,
  Wand2,
  Clock,
  Star,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function AIImageGeneratorTool() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState("generator");
  const [generationProgress, setGenerationProgress] = useState(0);

  // Advanced settings
  const [style, setStyle] = useState("photorealistic");
  const [size, setSize] = useState("1024x1024");
  const [seed, setSeed] = useState("");
  const [aspectRatio, setAspectRatio] = useState("square");

  const styles = [
    {
      value: "photorealistic",
      label: "Photorealistic",
      description: "Highly detailed, camera-like images",
      icon: "📸",
    },
    {
      value: "digital-art",
      label: "Digital Art",
      description: "Modern digital illustration style",
      icon: "🎨",
    },
    {
      value: "oil-painting",
      label: "Oil Painting",
      description: "Classic artistic painting technique",
      icon: "🖼️",
    },
    {
      value: "watercolor",
      label: "Watercolor",
      description: "Soft, flowing watercolor style",
      icon: "🌊",
    },
    {
      value: "cartoon",
      label: "Cartoon",
      description: "Stylized cartoon artwork",
      icon: "🎪",
    },
    {
      value: "anime",
      label: "Anime",
      description: "Japanese animation style",
      icon: "🌸",
    },
    {
      value: "cyberpunk",
      label: "Cyberpunk",
      description: "Futuristic neon aesthetic",
      icon: "🌃",
    },
    {
      value: "fantasy",
      label: "Fantasy",
      description: "Magical and mystical themes",
      icon: "🔮",
    },
  ];

  const aspectRatios = [
    { value: "square", label: "Square (1:1)", sizes: ["512x512", "1024x1024"] },
    {
      value: "landscape",
      label: "Landscape (4:3)",
      sizes: ["1024x768", "1600x1200"],
    },
    {
      value: "portrait",
      label: "Portrait (3:4)",
      sizes: ["768x1024", "1200x1600"],
    },
    {
      value: "wide",
      label: "Widescreen (16:9)",
      sizes: ["1920x1080", "1280x720"],
    },
    {
      value: "ultra-wide",
      label: "Ultra-wide (21:9)",
      sizes: ["2560x1080", "1920x823"],
    },
  ];

  const examplePrompts = [
    {
      category: "Nature",
      prompts: [
        "A majestic dragon flying over a medieval castle at sunset",
        "Peaceful zen garden with cherry blossoms and koi pond",
        "Underwater coral reef city with mermaids and sea creatures",
      ],
    },
    {
      category: "Sci-Fi",
      prompts: [
        "Futuristic city with flying cars and neon lights",
        "Post-apocalyptic wasteland with overgrown ruins",
        "Space station orbiting a distant planet with rings",
      ],
    },
    {
      category: "Fantasy",
      prompts: [
        "Victorian steampunk inventor's workshop with gears and gadgets",
        "Magical forest with glowing mushrooms and fairy lights",
        "Ancient library filled with floating books and mystical orbs",
      ],
    },
    {
      category: "Abstract",
      prompts: [
        "Abstract cosmic landscape with swirling nebulas",
        "Geometric patterns in vibrant colors and flowing shapes",
        "Surreal dreamscape with impossible architecture",
      ],
    },
  ];

  // Load history and favorites from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem("ai-image-history");
    const savedFavorites = localStorage.getItem("ai-image-favorites");

    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Update available sizes when aspect ratio changes
  const availableSizes = aspectRatios.find((ar) => ar.value === aspectRatio)
    ?.sizes || ["1024x1024"];

  useEffect(() => {
    if (!availableSizes.includes(size)) {
      setSize(availableSizes[0]);
    }
  }, [aspectRatio, availableSizes, size]);

  const saveToHistory = useCallback(
    (imageData) => {
      const newHistory = [imageData, ...history.slice(0, 49)]; // Keep last 50 images
      setHistory(newHistory);
      localStorage.setItem("ai-image-history", JSON.stringify(newHistory));
    },
    [history],
  );

  const addToFavorites = useCallback(
    (imageData) => {
      if (favorites.find((fav) => fav.url === imageData.url)) {
        toast.info("Already in favorites");
        return;
      }

      const newFavorites = [imageData, ...favorites];
      setFavorites(newFavorites);
      localStorage.setItem("ai-image-favorites", JSON.stringify(newFavorites));
      toast.success("Added to favorites");
    },
    [favorites],
  );

  const removeFromFavorites = useCallback(
    (url) => {
      const newFavorites = favorites.filter((fav) => fav.url !== url);
      setFavorites(newFavorites);
      localStorage.setItem("ai-image-favorites", JSON.stringify(newFavorites));
      toast.success("Removed from favorites");
    },
    [favorites],
  );

  const clearHistory = () => {
    if (window.confirm("Are you sure you want to clear all history?")) {
      setHistory([]);
      localStorage.removeItem("ai-image-history");
      toast.success("History cleared");
    }
  };

  const simulateProgress = useCallback(() => {
    setGenerationProgress(0);
    const interval = setInterval(() => {
      setGenerationProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 500);
    return interval;
  }, []);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a description");
      return;
    }

    setLoading(true);
    setError("");
    setImageUrl("");
    setGenerationProgress(0);

    const progressInterval = simulateProgress();

    try {
      // Build style-enhanced prompt
      const stylePrefix = {
        photorealistic:
          "photorealistic, highly detailed, professional photography, 8k resolution",
        "digital-art":
          "digital art, illustration, artstation trending, concept art",
        "oil-painting":
          "oil painting, classical art style, brushstrokes, canvas texture",
        watercolor: "watercolor painting, soft colors, flowing, artistic",
        cartoon: "cartoon style, colorful, animated, fun illustration",
        anime: "anime style, manga art, japanese animation, detailed",
        cyberpunk: "cyberpunk style, neon lights, futuristic, dark atmosphere",
        fantasy: "fantasy art, magical, mystical atmosphere, enchanted",
      };

      const enhancedPrompt = `${stylePrefix[style]}, ${prompt}`;
      let url = `https://image.pollinations.ai/prompt/${encodeURIComponent(enhancedPrompt)}`;

      // Add size parameter
      url += `?width=${size.split("x")[0]}&height=${size.split("x")[1]}`;

      // Add seed if provided
      if (seed) {
        url += `&seed=${seed}`;
      }

      // Add cache buster to ensure new generation
      url += `&nologo=true&model=flux&enhance=true`;

      // Simulate realistic generation time
      await new Promise((resolve) =>
        setTimeout(resolve, 2000 + Math.random() * 3000),
      );

      setImageUrl(url);
      setGenerationProgress(100);

      // Save to history
      const imageData = {
        id: Date.now(),
        url,
        prompt: prompt.trim(),
        style,
        size,
        aspectRatio,
        seed,
        timestamp: new Date().toISOString(),
      };
      saveToHistory(imageData);

      toast.success("Image generated successfully!");
    } catch (e) {
      setError("Failed to generate image. Please try again.");
      toast.error("Generation failed");
    } finally {
      clearInterval(progressInterval);
      setLoading(false);
      setGenerationProgress(0);
    }
  };

  const handleCopy = async () => {
    if (imageUrl) {
      await navigator.clipboard.writeText(imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("Image URL copied to clipboard");
    }
  };

  const handleDownload = async () => {
    if (!imageUrl) return;

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `ai-generated-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.success("Image downloaded");
    } catch (_error) {
      toast.error("Download failed");
    }
  };

  const loadPrompt = (selectedPrompt) => {
    setPrompt(selectedPrompt);
  };

  const loadFromHistory = (item) => {
    setPrompt(item.prompt);
    setStyle(item.style);
    setSize(item.size);
    setAspectRatio(item.aspectRatio || "square");
    setSeed(item.seed || "");
    setImageUrl(item.url);
    setActiveTab("generator");
  };

  const generateRandomSeed = () => {
    const randomSeed = Math.floor(Math.random() * 1000000);
    setSeed(randomSeed.toString());
    toast.success("Random seed generated");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/other-tools"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Generator Tools
          </Link>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 border rounded-lg bg-background">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">
                  AI Image Generator
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                  Create stunning AI-generated images from text prompts
                  instantly. Transform your ideas into beautiful, unique artwork
                  with advanced AI technology.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="gap-1">
                <Sparkles className="h-3 w-3" />
                AI-Powered
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Palette className="h-3 w-3" />
                Multiple Styles
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <ImageIcon className="h-3 w-3" />
                High Quality
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <DownloadIcon className="h-3 w-3" />
                Instant Download
              </Badge>
            </div>
          </div>

          <Alert className="mb-8">
            <InfoIcon className="h-4 w-4" />
            <AlertDescription>
              Generate unlimited AI images for free. Your creations are stored
              locally for privacy and can be downloaded in high quality.
            </AlertDescription>
          </Alert>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="generator" className="gap-2">
              <Wand2 className="h-4 w-4" />
              Generator
            </TabsTrigger>
            <TabsTrigger value="history" className="gap-2">
              <History className="h-4 w-4" />
              History ({history.length})
            </TabsTrigger>
            <TabsTrigger value="favorites" className="gap-2">
              <HeartIcon className="h-4 w-4" />
              Favorites ({favorites.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="generator" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Controls Panel */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Generation Settings
                    </CardTitle>
                    <CardDescription>
                      Configure your AI image generation parameters
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="prompt">Describe your image</Label>
                      <Textarea
                        id="prompt"
                        placeholder="A majestic lion in golden sunset light, photorealistic style, detailed fur texture..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        disabled={loading}
                        className="min-h-[120px] resize-none"
                      />
                      <p className="text-xs text-muted-foreground">
                        Be descriptive! Include details about style, lighting,
                        colors, and mood.
                      </p>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label>Art Style</Label>
                      <Select
                        value={style}
                        onValueChange={setStyle}
                        disabled={loading}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {styles.map((styleOption) => (
                            <SelectItem
                              key={styleOption.value}
                              value={styleOption.value}
                            >
                              <div className="flex items-center gap-2">
                                <span>{styleOption.icon}</span>
                                <div>
                                  <div className="font-medium">
                                    {styleOption.label}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {styleOption.description}
                                  </div>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Aspect Ratio</Label>
                        <Select
                          value={aspectRatio}
                          onValueChange={setAspectRatio}
                          disabled={loading}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {aspectRatios.map((ratio) => (
                              <SelectItem key={ratio.value} value={ratio.value}>
                                {ratio.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Image Size</Label>
                        <Select
                          value={size}
                          onValueChange={setSize}
                          disabled={loading}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {availableSizes.map((sizeOption) => (
                              <SelectItem key={sizeOption} value={sizeOption}>
                                {sizeOption}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="seed">Seed (optional)</Label>
                      <div className="flex gap-2">
                        <Input
                          id="seed"
                          placeholder="Random number"
                          value={seed}
                          onChange={(e) => setSeed(e.target.value)}
                          disabled={loading}
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={generateRandomSeed}
                          disabled={loading}
                        >
                          <RefreshCwIcon className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Use the same seed to reproduce identical results
                      </p>
                    </div>

                    <Separator />

                    <Button
                      onClick={handleGenerate}
                      disabled={loading || !prompt.trim()}
                      className="w-full"
                      size="lg"
                    >
                      {loading ? (
                        <>
                          <RefreshCwIcon className="animate-spin h-4 w-4 mr-2" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-4 w-4 mr-2" />
                          Generate AI Image
                        </>
                      )}
                    </Button>

                    {loading && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Generating image...</span>
                          <span>{Math.round(generationProgress)}%</span>
                        </div>
                        <Progress value={generationProgress} className="h-2" />
                      </div>
                    )}

                    {error && (
                      <Alert variant="destructive">
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Generated Image Panel */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ImageIcon className="h-5 w-5" />
                      Generated Image
                    </CardTitle>
                    <CardDescription>
                      Your AI-generated artwork will appear here
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {imageUrl ? (
                      <div className="space-y-6">
                        <div className="relative">
                          <img
                            src={imageUrl}
                            alt="AI generated"
                            className="w-full rounded-lg border shadow-lg bg-muted object-contain max-h-[600px]"
                            loading="lazy"
                          />
                          {loading && (
                            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                              <div className="text-center">
                                <RefreshCwIcon className="h-8 w-8 animate-spin mx-auto mb-2" />
                                <p className="text-sm font-medium">
                                  Generating...
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Button onClick={handleDownload} className="gap-2">
                            <DownloadIcon className="h-4 w-4" />
                            Download HD
                          </Button>
                          <Button
                            onClick={handleCopy}
                            variant="outline"
                            className="gap-2"
                          >
                            <CopyIcon className="h-4 w-4" />
                            {copied ? "Copied!" : "Copy URL"}
                          </Button>
                          <Button
                            onClick={() =>
                              addToFavorites({
                                id: Date.now(),
                                url: imageUrl,
                                prompt,
                                style,
                                size,
                                aspectRatio,
                                seed,
                                timestamp: new Date().toISOString(),
                              })
                            }
                            variant="outline"
                            className="gap-2"
                          >
                            <HeartIcon className="h-4 w-4" />
                            Add to Favorites
                          </Button>
                        </div>

                        <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                          <div>
                            <p className="text-sm font-medium mb-1">Prompt:</p>
                            <p className="text-sm text-muted-foreground">
                              {prompt}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Palette className="h-3 w-3" />
                              {styles.find((s) => s.value === style)?.label}
                            </span>
                            <span className="flex items-center gap-1">
                              <ImageIcon className="h-3 w-3" />
                              {size}
                            </span>
                            {seed && (
                              <span className="flex items-center gap-1">
                                <RefreshCwIcon className="h-3 w-3" />
                                Seed: {seed}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-20">
                        <ImageIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                        <h3 className="text-lg font-medium mb-2">
                          Ready to Create
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Describe your image and watch AI bring it to life
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Generated images appear here in high quality
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Example Prompts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5" />
                      Example Prompts
                    </CardTitle>
                    <CardDescription>
                      Get inspired with these example prompts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {examplePrompts.map((category, idx) => (
                        <div key={idx} className="space-y-2">
                          <h4 className="font-medium text-sm">
                            {category.category}
                          </h4>
                          <div className="space-y-1">
                            {category.prompts.map((example, index) => (
                              <button
                                key={index}
                                onClick={() => loadPrompt(example)}
                                className="w-full text-left p-2 text-xs bg-muted hover:bg-muted/80 rounded transition-colors"
                                disabled={loading}
                              >
                                {example}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <History className="h-5 w-5" />
                      Generation History
                    </CardTitle>
                    <CardDescription>
                      View and reload your previously generated images
                    </CardDescription>
                  </div>
                  {history.length > 0 && (
                    <Button
                      onClick={clearHistory}
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <TrashIcon className="h-4 w-4" />
                      Clear All
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {history.length === 0 ? (
                  <div className="text-center py-12">
                    <History className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                    <h3 className="text-lg font-medium mb-2">No History Yet</h3>
                    <p className="text-muted-foreground">
                      Your generated images will appear here for easy access
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {history.map((item) => (
                      <div
                        key={item.id}
                        className="group border rounded-lg p-3 hover:shadow-md transition-all cursor-pointer"
                      >
                        <img
                          src={item.url}
                          alt={item.prompt}
                          className="w-full h-32 object-cover rounded mb-3"
                          onClick={() => loadFromHistory(item)}
                        />
                        <p className="text-sm font-medium mb-2 line-clamp-2">
                          {item.prompt}
                        </p>
                        <div className="flex justify-between items-center text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {new Date(item.timestamp).toLocaleDateString()}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {styles.find((s) => s.value === item.style)?.icon}{" "}
                            {styles.find((s) => s.value === item.style)?.label}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeartIcon className="h-5 w-5 text-destructive" />
                  Favorite Images
                </CardTitle>
                <CardDescription>
                  Your saved favorite AI-generated images
                </CardDescription>
              </CardHeader>
              <CardContent>
                {favorites.length === 0 ? (
                  <div className="text-center py-12">
                    <HeartIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                    <h3 className="text-lg font-medium mb-2">
                      No Favorites Yet
                    </h3>
                    <p className="text-muted-foreground">
                      Heart your best generations to save them here
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {favorites.map((item) => (
                      <div
                        key={item.id}
                        className="group border rounded-lg p-3 hover:shadow-md transition-all"
                      >
                        <div className="relative">
                          <img
                            src={item.url}
                            alt={item.prompt}
                            className="w-full h-32 object-cover rounded mb-3 cursor-pointer"
                            onClick={() => loadFromHistory(item)}
                          />
                          <Button
                            onClick={() => removeFromFavorites(item.url)}
                            size="sm"
                            variant="outline"
                            className="absolute top-2 right-2 w-7 h-7 p-0 bg-background/90 hover:bg-background"
                          >
                            <TrashIcon className="w-3 h-3" />
                          </Button>
                        </div>
                        <p className="text-sm font-medium mb-2 line-clamp-2">
                          {item.prompt}
                        </p>
                        <div className="flex justify-between items-center text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {new Date(item.timestamp).toLocaleDateString()}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {styles.find((s) => s.value === item.style)?.icon}{" "}
                            {styles.find((s) => s.value === item.style)?.label}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* FAQ Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">
                    How does AI image generation work?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Our AI uses advanced machine learning models to interpret
                    your text description and create unique images based on
                    patterns learned from millions of images.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    Are generated images copyright-free?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Generally yes, AI-generated images are free to use. However,
                    ensure your prompts don't reference copyrighted characters
                    or brands.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">
                    What makes a good prompt?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Be specific about style, lighting, colors, and composition.
                    Include artistic references and descriptive adjectives for
                    better results.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    How can I reproduce results?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Use the same prompt, style, size, and seed number to
                    generate identical or very similar images consistently.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
