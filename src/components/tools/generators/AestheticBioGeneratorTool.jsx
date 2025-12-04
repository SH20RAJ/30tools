"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  ArrowLeftIcon,
  CopyIcon,
  RefreshCwIcon,
  SparklesIcon,
  DownloadIcon,
  ShareIcon,
  HeartIcon,
  StarIcon,
  MoonIcon,
  SunIcon,
  FlowerIcon,
} from "lucide-react";
import Link from "next/link";
import SocialShareButtons from "@/components/shared/SocialShareButtons";

const AESTHETIC_THEMES = {
  cute: {
    name: "🌸 Cute & Kawaii",
    emojis: ["🌸", "🎀", "💕", "🦄", "🌙", "⭐", "💖", "🍓", "🧸", "🌺"],
    fonts: ["cute", "bubbly"],
    style: "soft and adorable",
  },
  dark: {
    name: "🖤 Dark Academia",
    emojis: ["🖤", "🌙", "📚", "🕯️", "🥀", "⚡", "🔮", "🌑", "🗝️", "📜"],
    fonts: ["gothic", "elegant"],
    style: "mysterious and intellectual",
  },
  minimalist: {
    name: "✨ Minimalist",
    emojis: ["✨", "🤍", "🌿", "☁️", "🕊️", "💫", "🌱", "🔆", "🌾", "🤎"],
    fonts: ["clean", "simple"],
    style: "clean and simple",
  },
  y2k: {
    name: "💫 Y2K Cyber",
    emojis: ["💫", "🌈", "💎", "🦋", "✨", "🔮", "💿", "🌟", "🎆", "🌸"],
    fonts: ["cyber", "futuristic"],
    style: "nostalgic and futuristic",
  },
  cottagecore: {
    name: "🌻 Cottagecore",
    emojis: ["🌻", "🍄", "🌿", "🐝", "🌾", "🥖", "🧺", "🌼", "🦋", "🍯"],
    fonts: ["rustic", "handwritten"],
    style: "rustic and nature-loving",
  },
  baddie: {
    name: "💅 Baddie",
    emojis: ["💅", "👑", "💋", "🔥", "💎", "✨", "🖤", "💄", "👠", "💰"],
    fonts: ["bold", "fierce"],
    style: "confident and fierce",
  },
};

const BIO_TEMPLATES = {
  cute: [
    "✨ {interest} enthusiast ✨\n🌸 spreading good vibes only 🌸\n💕 {hobby} lover 💕\n🦄 living my best life 🦄",
    "🌙 {age} & dreaming 🌙\n🎀 {interest} obsessed 🎀\n💖 {location} based 💖\n🌺 {hobby} is my therapy 🌺",
    "🧸 soft girl energy 🧸\n🌸 {interest} + {hobby} 🌸\n💕 manifesting good vibes 💕\n⭐ {location} ⭐",
  ],
  dark: [
    "🖤 {interest} scholar 🖤\n📚 lost in books & thoughts 📚\n🌙 {hobby} by moonlight 🌙\n🕯️ {location} dweller 🕯️",
    "🥀 {age} & mysterious 🥀\n⚡ {interest} enthusiast ⚡\n🔮 {hobby} practitioner 🔮\n🌑 embracing the darkness 🌑",
    "📜 ancient soul, modern world 📜\n🖤 {interest} + philosophy 🖤\n🗝️ unlocking life's mysteries 🗝️\n🌙 {location} 🌙",
  ],
  minimalist: [
    "✨ {interest}\n🤍 {hobby}\n🌿 {location}\n☁️ simple living",
    "💫 {age}\n🌱 {interest} lover\n🕊️ {hobby}\n🌾 finding beauty in simplicity",
    "🔆 {interest} • {hobby}\n🤍 {location}\n🌿 less is more\n✨ mindful living",
  ],
};

const FONT_STYLES = {
  cute: "𝒸𝓊𝓉𝑒 𝒻𝑜𝓃𝓉",
  bubbly: "ᵇᵘᵇᵇˡʸ ᶠᵒⁿᵗ",
  gothic: "𝔤𝔬𝔱𝔥𝔦𝔠 𝔣𝔬𝔫𝔱",
  elegant: "𝓮𝓵𝓮𝓰𝓪𝓷𝓽 𝓯𝓸𝓷𝓽",
  clean: "clean font",
  simple: "simple font",
  cyber: "ᴄʏʙᴇʀ ꜰᴏɴᴛ",
  futuristic: "ⒻⓊⓉⓊⓇⒾⓈⓉⒾⒸ ⒻⓄⓃⓉ",
  rustic: "𝕣𝕦𝕤𝕥𝕚𝕔 𝕗𝕠𝕟𝕥",
  handwritten: "𝒽𝒶𝓃𝒹𝓌𝓇𝒾𝓉𝓉𝑒𝓃 𝒻𝑜𝓃𝓉",
  bold: "𝗯𝗼𝗹𝗱 𝗳𝗼𝗻𝘁",
  fierce: "ⒻⒾⒺⓇⒸⒺ ⒻⓄⓃⓉ",
};

export default function AestheticBioGeneratorTool() {
  const [selectedTheme, setSelectedTheme] = useState("cute");
  const [userInputs, setUserInputs] = useState({
    name: "",
    age: "",
    interest: "",
    hobby: "",
    location: "",
    customText: "",
  });
  const [generatedBio, setGeneratedBio] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [useAI, setUseAI] = useState(false);
  const [platform, setPlatform] = useState("instagram");
  const [copied, setCopied] = useState(false);

  const generateAIBio = async (theme, inputs) => {
    try {
      const prompt = `Generate an aesthetic ${theme} bio for social media. Include these details: ${JSON.stringify(inputs)}. Make it ${AESTHETIC_THEMES[theme].style}. Use relevant emojis. Keep it under 150 characters.`;

      const response = await fetch(
        `https://text.pollinations.ai/${encodeURIComponent(prompt)}`,
      );
      const aiText = await response.text();

      // Add theme-appropriate emojis
      const themeEmojis = AESTHETIC_THEMES[theme].emojis;
      const randomEmojis = themeEmojis
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      return `${randomEmojis[0]} ${aiText.trim()} ${randomEmojis[1]}`;
    } catch (_error) {
      console.error("AI generation failed:", error);
      return generateTemplateBio(theme, inputs);
    }
  };

  const generateTemplateBio = (theme, inputs) => {
    const templates = BIO_TEMPLATES[theme] || BIO_TEMPLATES.cute;
    const randomTemplate =
      templates[Math.floor(Math.random() * templates.length)];

    let bio = randomTemplate;
    Object.entries(inputs).forEach(([key, value]) => {
      if (value) {
        bio = bio.replace(new RegExp(`{${key}}`, "g"), value);
      }
    });

    // Remove unfilled placeholders
    bio = bio.replace(/{[^}]+}/g, "");

    return bio;
  };

  const handleGenerate = async () => {
    setIsGenerating(true);

    try {
      let bio;
      if (
        useAI &&
        (userInputs.interest || userInputs.hobby || userInputs.customText)
      ) {
        bio = await generateAIBio(selectedTheme, userInputs);
      } else {
        bio = generateTemplateBio(selectedTheme, userInputs);
      }

      setGeneratedBio(bio);
    } catch (_error) {
      console.error("Generation failed:", error);
      setGeneratedBio(generateTemplateBio(selectedTheme, userInputs));
    }

    setIsGenerating(false);
  };

  const handleCopy = async () => {
    if (generatedBio) {
      await navigator.clipboard.writeText(generatedBio);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getThemeIcon = (theme) => {
    const icons = {
      cute: <HeartIcon className="w-4 h-4" />,
      dark: <MoonIcon className="w-4 h-4" />,
      minimalist: <SunIcon className="w-4 h-4" />,
      y2k: <StarIcon className="w-4 h-4" />,
      cottagecore: <FlowerIcon className="w-4 h-4" />,
      baddie: <SparklesIcon className="w-4 h-4" />,
    };
    return icons[theme] || <SparklesIcon className="w-4 h-4" />;
  };

  const platformLimits = {
    instagram: 150,
    twitter: 160,
    tiktok: 80,
  };

  return (
    <div className="min-h-screen bg-muted/20 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/text-tools"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Text Tools
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-background">
              <SparklesIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-background">
                Aesthetic Bio Generator
              </h2>
              <p className="text-muted-foreground">
                Create viral social media bios with emojis and aesthetic themes
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">✨ AI-Powered</Badge>
            <Badge variant="secondary">🌸 6 Aesthetic Themes</Badge>
            <Badge variant="secondary">📱 Platform Optimized</Badge>
            <Badge variant="secondary">🔥 Viral Ready</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5" />
                  Bio Settings
                </CardTitle>
                <CardDescription>
                  Choose your aesthetic and add personal details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Theme Selection */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">
                    Aesthetic Theme
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(AESTHETIC_THEMES).map(([key, theme]) => (
                      <Button
                        key={key}
                        variant={selectedTheme === key ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTheme(key)}
                        className="justify-start text-xs"
                      >
                        {getThemeIcon(key)}
                        <span className="ml-2 truncate">{theme.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Platform Selection */}
                <div>
                  <Label htmlFor="platform">Platform</Label>
                  <Select value={platform} onValueChange={setPlatform}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram">
                        📸 Instagram ({platformLimits.instagram} chars)
                      </SelectItem>
                      <SelectItem value="twitter">
                        🐦 Twitter ({platformLimits.twitter} chars)
                      </SelectItem>
                      <SelectItem value="tiktok">
                        🎵 TikTok ({platformLimits.tiktok} chars)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Personal Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name (optional)</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={userInputs.name}
                      onChange={(e) =>
                        setUserInputs((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age (optional)</Label>
                    <Input
                      id="age"
                      placeholder="25"
                      value={userInputs.age}
                      onChange={(e) =>
                        setUserInputs((prev) => ({
                          ...prev,
                          age: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="interest">Main Interest</Label>
                    <Input
                      id="interest"
                      placeholder="photography, art, music..."
                      value={userInputs.interest}
                      onChange={(e) =>
                        setUserInputs((prev) => ({
                          ...prev,
                          interest: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="hobby">Hobby</Label>
                    <Input
                      id="hobby"
                      placeholder="reading, gaming, cooking..."
                      value={userInputs.hobby}
                      onChange={(e) =>
                        setUserInputs((prev) => ({
                          ...prev,
                          hobby: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">Location (optional)</Label>
                  <Input
                    id="location"
                    placeholder="NYC, LA, London..."
                    value={userInputs.location}
                    onChange={(e) =>
                      setUserInputs((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="customText">Custom Text (optional)</Label>
                  <Textarea
                    id="customText"
                    placeholder="Add any specific text you want included..."
                    value={userInputs.customText}
                    onChange={(e) =>
                      setUserInputs((prev) => ({
                        ...prev,
                        customText: e.target.value,
                      }))
                    }
                    rows={2}
                  />
                </div>

                {/* AI Toggle */}
                <div className="flex items-center space-x-2">
                  <Switch
                    id="useAI"
                    checked={useAI}
                    onCheckedChange={setUseAI}
                  />
                  <Label htmlFor="useAI" className="text-sm">
                    ✨ Use AI for creative generation
                  </Label>
                </div>

                <Button
                  onClick={handleGenerate}
                  className="w-full"
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCwIcon className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <SparklesIcon className="mr-2 h-4 w-4" />
                      Generate Aesthetic Bio
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5" />
                  Your Aesthetic Bio
                </CardTitle>
                <CardDescription>
                  Copy and paste to your social media profile
                </CardDescription>
              </CardHeader>
              <CardContent>
                {generatedBio ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-background/20 dark:to-purple-900/20 rounded-lg border">
                      <div className="whitespace-pre-wrap text-sm font-medium">
                        {generatedBio}
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        {generatedBio.length} / {platformLimits[platform]}{" "}
                        characters
                        {generatedBio.length > platformLimits[platform] && (
                          <span className="text-destructive ml-2">
                            ⚠️ Too long for {platform}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={handleCopy}
                        variant="outline"
                        className="flex-1"
                        disabled={!generatedBio}
                      >
                        <CopyIcon className="mr-2 h-4 w-4" />
                        {copied ? "Copied!" : "Copy Bio"}
                      </Button>
                      <Button
                        onClick={handleGenerate}
                        variant="outline"
                        disabled={isGenerating}
                      >
                        <RefreshCwIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <SparklesIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Generate your first aesthetic bio to see it here!</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Theme Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  {AESTHETIC_THEMES[selectedTheme].name} Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-3">
                  {AESTHETIC_THEMES[selectedTheme].emojis.map(
                    (emoji, index) => (
                      <span key={index} className="text-lg">
                        {emoji}
                      </span>
                    ),
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Style: {AESTHETIC_THEMES[selectedTheme].style}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-12">
          <SocialShareButtons
            toolName="Aesthetic Bio Generator"
            toolDescription="Create viral social media bios with emojis and aesthetic themes. Perfect for Instagram, Twitter, and TikTok!"
            toolUrl="https://30tools.com/aesthetic-bio-generator"
            category="generators"
          />
        </div>
      </div>
    </div>
  );
}
