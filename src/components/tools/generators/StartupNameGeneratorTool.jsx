'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import {
  ArrowLeftIcon,
  CopyIcon,
  RefreshCwIcon,
  RocketIcon,
  HeartIcon,
  ExternalLinkIcon,
  TrendingUpIcon,
  ZapIcon,
  BrainIcon,
  DollarSignIcon
} from 'lucide-react';
import Link from 'next/link';
import SocialShareButtons from '@/components/shared/SocialShareButtons';

const INDUSTRIES = {
  ai: {
    name: '🤖 AI & Machine Learning',
    keywords: ['neural', 'cognitive', 'smart', 'auto', 'intel', 'brain', 'mind', 'learn'],
    suffixes: ['.ai', '.ml', '.tech'],
    prefixes: ['neuro', 'auto', 'smart', 'deep', 'meta']
  },
  fintech: {
    name: '💰 Fintech & Crypto',
    keywords: ['pay', 'coin', 'wallet', 'bank', 'finance', 'money', 'crypto', 'block'],
    suffixes: ['.finance', '.pay', '.money', '.bank'],
    prefixes: ['fin', 'pay', 'crypto', 'block', 'coin']
  },
  health: {
    name: '🏥 Health & Wellness',
    keywords: ['health', 'care', 'med', 'bio', 'fit', 'wellness', 'life', 'vital'],
    suffixes: ['.health', '.care', '.bio', '.life'],
    prefixes: ['bio', 'med', 'health', 'vita', 'care']
  },
  saas: {
    name: '💻 SaaS & Productivity',
    keywords: ['flow', 'sync', 'hub', 'space', 'work', 'team', 'pro', 'suite'],
    suffixes: ['.io', '.app', '.work', '.team'],
    prefixes: ['work', 'team', 'sync', 'flow', 'hub']
  },
  ecommerce: {
    name: '🛒 E-commerce & Retail',
    keywords: ['shop', 'store', 'market', 'buy', 'sell', 'trade', 'cart', 'deal'],
    suffixes: ['.shop', '.store', '.market', '.deals'],
    prefixes: ['shop', 'market', 'trade', 'deal', 'buy']
  },
  social: {
    name: '📱 Social & Community',
    keywords: ['social', 'connect', 'share', 'community', 'network', 'chat', 'meet', 'link'],
    suffixes: ['.social', '.community', '.network', '.chat'],
    prefixes: ['social', 'connect', 'link', 'meet', 'chat']
  },
  gaming: {
    name: '🎮 Gaming & Entertainment',
    keywords: ['game', 'play', 'fun', 'quest', 'arena', 'pixel', 'level', 'score'],
    suffixes: ['.game', '.play', '.fun', '.quest'],
    prefixes: ['game', 'play', 'pixel', 'quest', 'arena']
  },
  random: {
    name: '🎲 Random & Creative',
    keywords: ['venture', 'spark', 'nova', 'flux', 'zen', 'vibe', 'echo', 'pulse'],
    suffixes: ['.co', '.ly', '.io', '.app'],
    prefixes: ['spark', 'nova', 'flux', 'zen', 'vibe']
  }
};

const TRENDING_SUFFIXES = ['.ai', '.io', '.ly', '.co', '.app', '.tech', '.dev', '.xyz', '.me', '.so'];
const TRENDING_PREFIXES = ['super', 'ultra', 'mega', 'hyper', 'neo', 'next', 'pro', 'max', 'prime', 'apex'];

const NAME_PATTERNS = [
  '{prefix}{keyword}',
  '{keyword}{suffix}',
  '{prefix}{keyword}{suffix}',
  '{keyword1}{keyword2}',
  '{prefix}{keyword1}{keyword2}',
  '{keyword}{trend}'
];

export default function StartupNameGeneratorTool() {
  const [selectedIndustry, setSelectedIndustry] = useState('ai');
  const [keywords, setKeywords] = useState('');
  const [generatedNames, setGeneratedNames] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [useAI, setUseAI] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [nameStyle, setNameStyle] = useState('modern');

  const generateAINames = async (industry, userKeywords) => {
    try {
      const prompt = `Generate 10 creative startup names for ${industry} industry. Keywords: ${userKeywords}. Make them modern, memorable, and brandable. Return only the names, one per line.`;
      
      const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}`);
      const aiText = await response.text();
      
      return aiText.split('\n').filter(name => name.trim()).slice(0, 10);
    } catch (error) {
      console.error('AI generation failed:', error);
      return [];
    }
  };

  const generateAlgorithmicNames = (industry, userKeywords) => {
    const industryData = INDUSTRIES[industry];
    const allKeywords = [...industryData.keywords];
    
    if (userKeywords) {
      allKeywords.push(...userKeywords.split(',').map(k => k.trim().toLowerCase()));
    }

    const names = [];
    
    // Generate names using patterns
    for (let i = 0; i < 20; i++) {
      const pattern = NAME_PATTERNS[Math.floor(Math.random() * NAME_PATTERNS.length)];
      const keyword1 = allKeywords[Math.floor(Math.random() * allKeywords.length)];
      const keyword2 = allKeywords[Math.floor(Math.random() * allKeywords.length)];
      const prefix = [...industryData.prefixes, ...TRENDING_PREFIXES][Math.floor(Math.random() * (industryData.prefixes.length + TRENDING_PREFIXES.length))];
      const suffix = [...industryData.suffixes, ...TRENDING_SUFFIXES][Math.floor(Math.random() * (industryData.suffixes.length + TRENDING_SUFFIXES.length))];
      const trend = ['ly', 'fy', 'ify', 'hub', 'lab', 'works', 'labs'][Math.floor(Math.random() * 7)];

      let name = pattern
        .replace('{prefix}', prefix)
        .replace('{keyword}', keyword1)
        .replace('{keyword1}', keyword1)
        .replace('{keyword2}', keyword2)
        .replace('{suffix}', suffix)
        .replace('{trend}', trend);

      // Capitalize properly
      name = name.charAt(0).toUpperCase() + name.slice(1);
      
      if (name.length > 3 && name.length < 15 && !names.includes(name)) {
        names.push(name);
      }
    }

    return names.slice(0, 12);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    try {
      let names = [];
      
      if (useAI) {
        const aiNames = await generateAINames(selectedIndustry, keywords);
        names = [...aiNames];
      }
      
      // Always include algorithmic names as backup/supplement
      const algorithmicNames = generateAlgorithmicNames(selectedIndustry, keywords);
      names = [...names, ...algorithmicNames];
      
      // Remove duplicates and limit to 12
      const uniqueNames = [...new Set(names)].slice(0, 12);
      setGeneratedNames(uniqueNames);
    } catch (error) {
      console.error('Generation failed:', error);
      const fallbackNames = generateAlgorithmicNames(selectedIndustry, keywords);
      setGeneratedNames(fallbackNames);
    }
    
    setIsGenerating(false);
  };

  const toggleFavorite = (name) => {
    setFavorites(prev => 
      prev.includes(name) 
        ? prev.filter(fav => fav !== name)
        : [...prev, name]
    );
  };

  const copyName = async (name) => {
    await navigator.clipboard.writeText(name);
  };

  const checkDomain = (name) => {
    const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
    return `https://www.namecheap.com/domains/registration/results/?domain=${cleanName}.com`;
  };

  const exportFavorites = () => {
    const text = favorites.join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'startup-names.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/text-tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Text Tools
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
              <RocketIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Startup Name Generator
              </h1>
              <p className="text-muted-foreground">Generate trendy startup names loved by indie hackers and VCs</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">🤖 AI-Powered</Badge>
            <Badge variant="secondary">🚀 Indie Hacker Approved</Badge>
            <Badge variant="secondary">💎 Domain Ready</Badge>
            <Badge variant="secondary">🔥 Viral Names</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BrainIcon className="h-5 w-5" />
                  Name Settings
                </CardTitle>
                <CardDescription>
                  Configure your startup name preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Industry Selection */}
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(INDUSTRIES).map(([key, industry]) => (
                        <SelectItem key={key} value={key}>
                          {industry.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Keywords */}
                <div>
                  <Label htmlFor="keywords">Keywords (optional)</Label>
                  <Input
                    id="keywords"
                    placeholder="innovation, fast, secure..."
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Separate multiple keywords with commas
                  </p>
                </div>

                {/* AI Toggle */}
                <div className="flex items-center space-x-2">
                  <Switch
                    id="useAI"
                    checked={useAI}
                    onCheckedChange={setUseAI}
                  />
                  <Label htmlFor="useAI" className="text-sm">
                    🤖 Use AI for creative names
                  </Label>
                </div>

                <Button 
                  onClick={handleGenerate} 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
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
                      Generate Names
                    </>
                  )}
                </Button>

                {favorites.length > 0 && (
                  <Button 
                    onClick={exportFavorites}
                    variant="outline"
                    className="w-full"
                  >
                    Export Favorites ({favorites.length})
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUpIcon className="h-5 w-5" />
                  Generated Names
                </CardTitle>
                <CardDescription>
                  Click to copy, heart to favorite, or check domain availability
                </CardDescription>
              </CardHeader>
              <CardContent>
                {generatedNames.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {generatedNames.map((name, index) => (
                      <div
                        key={index}
                        className="group p-4 border rounded-lg hover:shadow-md transition-all duration-200 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{name}</h3>
                            <p className="text-xs text-muted-foreground">
                              {name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com
                            </p>
                          </div>
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => toggleFavorite(name)}
                              className={favorites.includes(name) ? 'text-red-500' : ''}
                            >
                              <HeartIcon className={`h-4 w-4 ${favorites.includes(name) ? 'fill-current' : ''}`} />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyName(name)}
                            >
                              <CopyIcon className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => window.open(checkDomain(name), '_blank')}
                            >
                              <ExternalLinkIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <RocketIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Generate your first batch of startup names!</p>
                    <p className="text-sm mt-2">Perfect for your next unicorn 🦄</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Favorites */}
            {favorites.length > 0 && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HeartIcon className="h-5 w-5 text-red-500" />
                    Favorites ({favorites.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {favorites.map((name, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Tips Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ZapIcon className="h-5 w-5" />
              Pro Tips for Startup Names
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">🎯 Keep it Short</h4>
                <p>5-8 characters work best for domains and branding</p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">🔤 Easy to Spell</h4>
                <p>Avoid complex spellings that confuse users</p>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">🌐 Check Domains</h4>
                <p>Secure .com, .io, or industry-specific domains</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Share */}
        <div className="mt-12">
          <SocialShareButtons
            toolName="Startup Name Generator"
            toolDescription="Generate trendy startup names with AI! Perfect for indie hackers and entrepreneurs. 🚀"
            toolUrl="https://30tools.com/startup-name-generator"
            category="generators"
          />
        </div>
      </div>
    </div>
  );
}