'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import {
  RefreshCwIcon,
  RocketIcon,
  HeartIcon,
  ExternalLinkIcon,
  TrendingUpIcon,
  ZapIcon,
  BrainIcon
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
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4 mb-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full">
          <RocketIcon className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Startup Name Generator
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto font-medium">
          AI-powered, brandable startup names in seconds. Click generate to see your best options.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
        <Card className="text-center border-2 hover:border-primary/50 transition-colors">
          <CardContent className="p-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <BrainIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">AI-Powered</h3>
            <p className="text-sm text-muted-foreground">Smart name generation</p>
          </CardContent>
        </Card>
        
        <Card className="text-center border-2 hover:border-primary/50 transition-colors">
          <CardContent className="p-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUpIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Domain Check</h3>
            <p className="text-sm text-muted-foreground">Check availability instantly</p>
          </CardContent>
        </Card>
        
        {/* Removed third feature for focus, keep design reduced */}
      </div>

      {/* Main Generator Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BrainIcon className="h-5 w-5" />
            Generate Startup Names
          </CardTitle>
          <CardDescription>
            Choose your industry and preferences to get personalized name suggestions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Settings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            <div>
              <Label htmlFor="keywords">Keywords (optional)</Label>
              <Input
                id="keywords"
                placeholder="innovation, fast, secure..."
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
            </div>
          </div>

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

          {/* Big Generate Button */}
          <div className="text-center py-10">
            <Button 
              onClick={handleGenerate} 
              size="lg"
              className="text-xl px-12 py-5 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <RefreshCwIcon className="mr-3 h-5 w-5 animate-spin" />
                  Generating Names...
                </>
              ) : (
                <>
                  <RocketIcon className="mr-3 h-5 w-5" />
                  Generate Names
                </>
              )}
            </Button>
          </div>

          {/* Results */}
          {generatedNames.length > 0 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold">Your Startup Name Ideas</h3>
                <p className="text-muted-foreground">Click any name to copy, or check domain availability</p>
              </div>
              
              <Card className="border-4 border-primary/20 shadow-2xl">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {generatedNames.map((name, index) => (
                  <div
                    key={index}
                      className="group p-5 border-2 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 bg-primary/5 cursor-pointer"
                    onClick={() => copyName(name)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold text-2xl">{name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com
                        </p>
                      </div>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {e.stopPropagation(); toggleFavorite(name)}}
                          className={favorites.includes(name) ? 'text-destructive' : ''}
                        >
                          <HeartIcon className={`h-4 w-4 ${favorites.includes(name) ? 'fill-current' : ''}`} />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {e.stopPropagation(); window.open(checkDomain(name), '_blank')}}
                        >
                          <ExternalLinkIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {favorites.length > 0 && (
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">Favorites ({favorites.length})</h4>
                  <div className="flex flex-wrap gap-2">
                    {favorites.map((name, index) => (
                      <Badge key={index} variant="secondary" className="text-sm cursor-pointer" onClick={() => copyName(name)}>
                        {name}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {generatedNames.length === 0 && !isGenerating && (
            <div className="text-center py-12 text-muted-foreground">
              <RocketIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Configure your settings above and click "Generate Names" to get started!</p>
            </div>
          )}
                  </div>
                </CardContent>
              </Card>

      {/* Social Share */}
      <div className="mt-8">
        <SocialShareButtons
          toolName="Startup Name Generator"
          toolDescription="Generate creative startup names with AI! Perfect for indie hackers and entrepreneurs. 🚀"
          toolUrl="https://30tools.com/startup-name-generator"
          category="generators"
        />
      </div>
    </div>
  );
}