'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeftIcon, 
  CopyIcon, 
  DownloadIcon, 
  TagIcon,
  SearchIcon,
  ShareIcon,
  TwitterIcon,
  FacebookIcon,
  EyeIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  InfoIcon
} from 'lucide-react';
import Link from 'next/link';

export default function MetaTagsGeneratorTool() {
  const [metaData, setMetaData] = useState({
    title: '',
    description: '',
    keywords: '',
    author: '',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0',
    charset: 'UTF-8',
    
    // Open Graph
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    ogUrl: '',
    ogType: 'website',
    ogSiteName: '',
    
    // Twitter Cards
    twitterCard: 'summary_large_image',
    twitterTitle: '',
    twitterDescription: '',
    twitterImage: '',
    twitterSite: '',
    twitterCreator: '',
    
    // Additional
    canonicalUrl: '',
    language: 'en',
    themeColor: '#000000',
    appleTouchIcon: '',
    favicon: ''
  });

  const [activeTab, setActiveTab] = useState('basic');
  const [copied, setCopied] = useState(false);
  const [useOgFallback, setUseOgFallback] = useState(true);
  const [useTwitterFallback, setUseTwitterFallback] = useState(true);

  // Character limits and validation
  const limits = {
    title: { min: 30, max: 60, ideal: [50, 60] },
    description: { min: 120, max: 160, ideal: [150, 160] },
    ogTitle: { max: 88 },
    ogDescription: { max: 300 },
    twitterTitle: { max: 70 },
    twitterDescription: { max: 200 }
  };

  const getCharacterStatus = (text, limit) => {
    const length = text.length;
    if (length === 0) return { status: 'empty', color: 'text-muted-foreground' };
    if (length < limit.min) return { status: 'short', color: 'text-yellow-600' };
    if (limit.ideal && length >= limit.ideal[0] && length <= limit.ideal[1]) return { status: 'ideal', color: 'text-green-600' };
    if (length <= limit.max) return { status: 'good', color: 'text-blue-600' };
    return { status: 'long', color: 'text-red-600' };
  };

  const generateMetaTags = useMemo(() => {
    const tags = [];
    
    // Basic Meta Tags
    tags.push(`<meta charset="${metaData.charset}">`);
    tags.push(`<meta name="viewport" content="${metaData.viewport}">`);
    
    if (metaData.title) {
      tags.push(`<title>${metaData.title}</title>`);
    }
    
    if (metaData.description) {
      tags.push(`<meta name="description" content="${metaData.description}">`);
    }
    
    if (metaData.keywords) {
      tags.push(`<meta name="keywords" content="${metaData.keywords}">`);
    }
    
    if (metaData.author) {
      tags.push(`<meta name="author" content="${metaData.author}">`);
    }
    
    tags.push(`<meta name="robots" content="${metaData.robots}">`);
    
    if (metaData.canonicalUrl) {
      tags.push(`<link rel="canonical" href="${metaData.canonicalUrl}">`);
    }
    
    if (metaData.language) {
      tags.push(`<html lang="${metaData.language}">`);
    }
    
    // Open Graph Tags
    const ogTitle = metaData.ogTitle || (useOgFallback ? metaData.title : '');
    const ogDescription = metaData.ogDescription || (useOgFallback ? metaData.description : '');
    
    if (ogTitle) {
      tags.push(`<meta property="og:title" content="${ogTitle}">`);
    }
    
    if (ogDescription) {
      tags.push(`<meta property="og:description" content="${ogDescription}">`);
    }
    
    if (metaData.ogImage) {
      tags.push(`<meta property="og:image" content="${metaData.ogImage}">`);
    }
    
    if (metaData.ogUrl) {
      tags.push(`<meta property="og:url" content="${metaData.ogUrl}">`);
    }
    
    tags.push(`<meta property="og:type" content="${metaData.ogType}">`);
    
    if (metaData.ogSiteName) {
      tags.push(`<meta property="og:site_name" content="${metaData.ogSiteName}">`);
    }
    
    // Twitter Card Tags
    tags.push(`<meta name="twitter:card" content="${metaData.twitterCard}">`);
    
    const twitterTitle = metaData.twitterTitle || (useTwitterFallback ? (metaData.ogTitle || metaData.title) : '');
    const twitterDescription = metaData.twitterDescription || (useTwitterFallback ? (metaData.ogDescription || metaData.description) : '');
    
    if (twitterTitle) {
      tags.push(`<meta name="twitter:title" content="${twitterTitle}">`);
    }
    
    if (twitterDescription) {
      tags.push(`<meta name="twitter:description" content="${twitterDescription}">`);
    }
    
    if (metaData.twitterImage || metaData.ogImage) {
      tags.push(`<meta name="twitter:image" content="${metaData.twitterImage || metaData.ogImage}">`);
    }
    
    if (metaData.twitterSite) {
      tags.push(`<meta name="twitter:site" content="${metaData.twitterSite}">`);
    }
    
    if (metaData.twitterCreator) {
      tags.push(`<meta name="twitter:creator" content="${metaData.twitterCreator}">`);
    }
    
    // Additional Tags
    if (metaData.themeColor) {
      tags.push(`<meta name="theme-color" content="${metaData.themeColor}">`);
    }
    
    if (metaData.appleTouchIcon) {
      tags.push(`<link rel="apple-touch-icon" href="${metaData.appleTouchIcon}">`);
    }
    
    if (metaData.favicon) {
      tags.push(`<link rel="icon" href="${metaData.favicon}">`);
    }
    
    return tags.join('\n');
  }, [metaData, useOgFallback, useTwitterFallback]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateMetaTags);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy meta tags: ', err);
    }
  };

  const downloadHTML = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="${metaData.language}">
<head>
${generateMetaTags}
</head>
<body>
    <!-- Your website content goes here -->
</body>
</html>`;

    const element = document.createElement('a');
    const file = new Blob([htmlContent], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'meta-tags.html';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const previewData = {
    title: metaData.title || 'Your Page Title',
    description: metaData.description || 'Your page description will appear here in search results.',
    url: metaData.canonicalUrl || 'https://yourwebsite.com/page'
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <TagIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Meta Tags Generator</h1>
              <p className="text-muted-foreground">Create SEO-optimized meta tags for your website</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">SEO Optimized</Badge>
            <Badge variant="secondary">Open Graph</Badge>
            <Badge variant="secondary">Twitter Cards</Badge>
            <Badge variant="secondary">Real-time Preview</Badge>
            <Badge variant="secondary">Character Counting</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Meta Tags Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Meta Tag Configuration</CardTitle>
                <CardDescription>
                  Fill in your website information to generate optimized meta tags
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="basic">Basic SEO</TabsTrigger>
                    <TabsTrigger value="opengraph">Open Graph</TabsTrigger>
                    <TabsTrigger value="twitter">Twitter</TabsTrigger>
                    <TabsTrigger value="advanced">Advanced</TabsTrigger>
                  </TabsList>

                  {/* Basic SEO Tab */}
                  <TabsContent value="basic" className="space-y-4">
                    <div>
                      <Label htmlFor="title">Page Title *</Label>
                      <Input
                        id="title"
                        placeholder="Your awesome page title"
                        value={metaData.title}
                        onChange={(e) => setMetaData(prev => ({ ...prev, title: e.target.value }))}
                        className={getCharacterStatus(metaData.title, limits.title).color}
                      />
                      <div className="flex justify-between text-xs mt-1">
                        <span className={getCharacterStatus(metaData.title, limits.title).color}>
                          {metaData.title.length}/{limits.title.max} characters
                        </span>
                        <span className="text-muted-foreground">
                          Ideal: {limits.title.ideal[0]}-{limits.title.ideal[1]} chars
                        </span>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Meta Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="A compelling description that encourages clicks from search results"
                        value={metaData.description}
                        onChange={(e) => setMetaData(prev => ({ ...prev, description: e.target.value }))}
                        rows={3}
                        className={getCharacterStatus(metaData.description, limits.description).color}
                      />
                      <div className="flex justify-between text-xs mt-1">
                        <span className={getCharacterStatus(metaData.description, limits.description).color}>
                          {metaData.description.length}/{limits.description.max} characters
                        </span>
                        <span className="text-muted-foreground">
                          Ideal: {limits.description.ideal[0]}-{limits.description.ideal[1]} chars
                        </span>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="keywords">Keywords (comma-separated)</Label>
                      <Input
                        id="keywords"
                        placeholder="seo, meta tags, website optimization"
                        value={metaData.keywords}
                        onChange={(e) => setMetaData(prev => ({ ...prev, keywords: e.target.value }))}
                      />
                    </div>

                    <div>
                      <Label htmlFor="canonical">Canonical URL</Label>
                      <Input
                        id="canonical"
                        placeholder="https://yourwebsite.com/page"
                        value={metaData.canonicalUrl}
                        onChange={(e) => setMetaData(prev => ({ ...prev, canonicalUrl: e.target.value }))}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="author">Author</Label>
                        <Input
                          id="author"
                          placeholder="Author Name"
                          value={metaData.author}
                          onChange={(e) => setMetaData(prev => ({ ...prev, author: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="language">Language</Label>
                        <Select value={metaData.language} onValueChange={(value) => setMetaData(prev => ({ ...prev, language: value }))}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="es">Spanish</SelectItem>
                            <SelectItem value="fr">French</SelectItem>
                            <SelectItem value="de">German</SelectItem>
                            <SelectItem value="it">Italian</SelectItem>
                            <SelectItem value="pt">Portuguese</SelectItem>
                            <SelectItem value="zh">Chinese</SelectItem>
                            <SelectItem value="ja">Japanese</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Open Graph Tab */}
                  <TabsContent value="opengraph" className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-medium">Open Graph Tags</h3>
                        <p className="text-sm text-muted-foreground">For social media sharing (Facebook, LinkedIn, etc.)</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="og-fallback" className="text-sm">Use basic tags as fallback</Label>
                        <Switch
                          id="og-fallback"
                          checked={useOgFallback}
                          onCheckedChange={setUseOgFallback}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="og-title">OG Title</Label>
                      <Input
                        id="og-title"
                        placeholder={useOgFallback && metaData.title ? metaData.title : "Social media title"}
                        value={metaData.ogTitle}
                        onChange={(e) => setMetaData(prev => ({ ...prev, ogTitle: e.target.value }))}
                      />
                      <div className="text-xs text-muted-foreground mt-1">
                        {(metaData.ogTitle || (useOgFallback ? metaData.title : '')).length}/{limits.ogTitle.max} characters
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="og-description">OG Description</Label>
                      <Textarea
                        id="og-description"
                        placeholder={useOgFallback && metaData.description ? metaData.description : "Description for social media sharing"}
                        value={metaData.ogDescription}
                        onChange={(e) => setMetaData(prev => ({ ...prev, ogDescription: e.target.value }))}
                        rows={3}
                      />
                      <div className="text-xs text-muted-foreground mt-1">
                        {(metaData.ogDescription || (useOgFallback ? metaData.description : '')).length}/{limits.ogDescription.max} characters
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="og-image">OG Image URL</Label>
                      <Input
                        id="og-image"
                        placeholder="https://yourwebsite.com/og-image.jpg"
                        value={metaData.ogImage}
                        onChange={(e) => setMetaData(prev => ({ ...prev, ogImage: e.target.value }))}
                      />
                      <div className="text-xs text-muted-foreground mt-1">
                        Recommended: 1200x630px, under 8MB
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="og-url">OG URL</Label>
                        <Input
                          id="og-url"
                          placeholder="https://yourwebsite.com/page"
                          value={metaData.ogUrl}
                          onChange={(e) => setMetaData(prev => ({ ...prev, ogUrl: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="og-site-name">Site Name</Label>
                        <Input
                          id="og-site-name"
                          placeholder="Your Website Name"
                          value={metaData.ogSiteName}
                          onChange={(e) => setMetaData(prev => ({ ...prev, ogSiteName: e.target.value }))}
                        />
                      </div>
                    </div>
                  </TabsContent>

                  {/* Twitter Tab */}
                  <TabsContent value="twitter" className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-medium">Twitter Card Tags</h3>
                        <p className="text-sm text-muted-foreground">For Twitter sharing optimization</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="twitter-fallback" className="text-sm">Use OG tags as fallback</Label>
                        <Switch
                          id="twitter-fallback"
                          checked={useTwitterFallback}
                          onCheckedChange={setUseTwitterFallback}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="twitter-card">Card Type</Label>
                      <Select value={metaData.twitterCard} onValueChange={(value) => setMetaData(prev => ({ ...prev, twitterCard: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="summary">Summary</SelectItem>
                          <SelectItem value="summary_large_image">Summary Large Image</SelectItem>
                          <SelectItem value="app">App</SelectItem>
                          <SelectItem value="player">Player</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="twitter-title">Twitter Title</Label>
                      <Input
                        id="twitter-title"
                        placeholder={useTwitterFallback ? (metaData.ogTitle || metaData.title || "Twitter title") : "Twitter title"}
                        value={metaData.twitterTitle}
                        onChange={(e) => setMetaData(prev => ({ ...prev, twitterTitle: e.target.value }))}
                      />
                      <div className="text-xs text-muted-foreground mt-1">
                        {(metaData.twitterTitle || (useTwitterFallback ? (metaData.ogTitle || metaData.title) : '')).length}/{limits.twitterTitle.max} characters
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="twitter-description">Twitter Description</Label>
                      <Textarea
                        id="twitter-description"
                        placeholder={useTwitterFallback ? (metaData.ogDescription || metaData.description || "Twitter description") : "Twitter description"}
                        value={metaData.twitterDescription}
                        onChange={(e) => setMetaData(prev => ({ ...prev, twitterDescription: e.target.value }))}
                        rows={3}
                      />
                      <div className="text-xs text-muted-foreground mt-1">
                        {(metaData.twitterDescription || (useTwitterFallback ? (metaData.ogDescription || metaData.description) : '')).length}/{limits.twitterDescription.max} characters
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="twitter-site">Twitter Site (@username)</Label>
                        <Input
                          id="twitter-site"
                          placeholder="@yourwebsite"
                          value={metaData.twitterSite}
                          onChange={(e) => setMetaData(prev => ({ ...prev, twitterSite: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="twitter-creator">Twitter Creator (@username)</Label>
                        <Input
                          id="twitter-creator"
                          placeholder="@author"
                          value={metaData.twitterCreator}
                          onChange={(e) => setMetaData(prev => ({ ...prev, twitterCreator: e.target.value }))}
                        />
                      </div>
                    </div>
                  </TabsContent>

                  {/* Advanced Tab */}
                  <TabsContent value="advanced" className="space-y-4">
                    <div>
                      <Label htmlFor="robots">Robots Directive</Label>
                      <Select value={metaData.robots} onValueChange={(value) => setMetaData(prev => ({ ...prev, robots: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="index, follow">Index, Follow (Default)</SelectItem>
                          <SelectItem value="noindex, follow">No Index, Follow</SelectItem>
                          <SelectItem value="index, nofollow">Index, No Follow</SelectItem>
                          <SelectItem value="noindex, nofollow">No Index, No Follow</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="theme-color">Theme Color</Label>
                        <div className="flex gap-2">
                          <Input
                            type="color"
                            value={metaData.themeColor}
                            onChange={(e) => setMetaData(prev => ({ ...prev, themeColor: e.target.value }))}
                            className="w-12 h-10 p-1"
                          />
                          <Input
                            value={metaData.themeColor}
                            onChange={(e) => setMetaData(prev => ({ ...prev, themeColor: e.target.value }))}
                            className="flex-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="charset">Character Set</Label>
                        <Select value={metaData.charset} onValueChange={(value) => setMetaData(prev => ({ ...prev, charset: value }))}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="UTF-8">UTF-8</SelectItem>
                            <SelectItem value="ISO-8859-1">ISO-8859-1</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="favicon">Favicon URL</Label>
                      <Input
                        id="favicon"
                        placeholder="https://yourwebsite.com/favicon.ico"
                        value={metaData.favicon}
                        onChange={(e) => setMetaData(prev => ({ ...prev, favicon: e.target.value }))}
                      />
                    </div>

                    <div>
                      <Label htmlFor="apple-touch-icon">Apple Touch Icon URL</Label>
                      <Input
                        id="apple-touch-icon"
                        placeholder="https://yourwebsite.com/apple-touch-icon.png"
                        value={metaData.appleTouchIcon}
                        onChange={(e) => setMetaData(prev => ({ ...prev, appleTouchIcon: e.target.value }))}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Preview & Output */}
          <div className="space-y-6">
            {/* Search Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SearchIcon className="h-5 w-5" />
                  Search Result Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-4 bg-muted/20">
                  <div className="text-blue-600 text-lg font-medium hover:underline cursor-pointer">
                    {previewData.title}
                  </div>
                  <div className="text-green-700 text-sm">
                    {previewData.url}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">
                    {previewData.description}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShareIcon className="h-5 w-5" />
                  Social Media Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Facebook/OG Preview */}
                  <div className="border rounded-lg overflow-hidden">
                    {metaData.ogImage && (
                      <div className="aspect-[1.91/1] bg-muted relative">
                        <img 
                          src={metaData.ogImage} 
                          alt="OG Preview" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <div className="p-3 bg-white border-t">
                      <div className="text-xs text-gray-500 uppercase mb-1">
                        {metaData.ogSiteName || 'yourwebsite.com'}
                      </div>
                      <div className="font-semibold text-sm">
                        {metaData.ogTitle || metaData.title || 'Your Page Title'}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {metaData.ogDescription || metaData.description || 'Your page description'}
                      </div>
                    </div>
                  </div>

                  {/* Twitter Preview */}
                  <div className="border rounded-lg overflow-hidden">
                    {(metaData.twitterImage || metaData.ogImage) && (
                      <div className="aspect-[2/1] bg-muted relative">
                        <img 
                          src={metaData.twitterImage || metaData.ogImage} 
                          alt="Twitter Preview" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <div className="p-3 bg-white border-t">
                      <div className="font-semibold text-sm">
                        {metaData.twitterTitle || metaData.ogTitle || metaData.title || 'Your Page Title'}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {metaData.twitterDescription || metaData.ogDescription || metaData.description || 'Your page description'}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {metaData.canonicalUrl || 'yourwebsite.com'}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Generated Code */}
            <Card>
              <CardHeader>
                <CardTitle>Generated Meta Tags</CardTitle>
                <CardDescription>Copy and paste into your HTML &lt;head&gt; section</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <pre className="text-xs overflow-x-auto whitespace-pre-wrap">
                      {generateMetaTags || '<!-- Fill out the form to generate meta tags -->'}
                    </pre>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button onClick={copyToClipboard} className="flex-1">
                      <CopyIcon className="h-4 w-4 mr-2" />
                      {copied ? 'Copied!' : 'Copy Code'}
                    </Button>
                    <Button onClick={downloadHTML} variant="outline">
                      <DownloadIcon className="h-4 w-4 mr-2" />
                      Download HTML
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SEO Tips */}
            <Card>
              <CardHeader>
                <CardTitle>SEO Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Keep title tags between 50-60 characters
                  </li>
                  <li className="flex gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Write meta descriptions 150-160 characters
                  </li>
                  <li className="flex gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Include target keywords naturally
                  </li>
                  <li className="flex gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Use compelling calls-to-action
                  </li>
                  <li className="flex gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Optimize OG images (1200x630px)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Test social media previews
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 space-y-12">
          {/* Meta Tags Guide */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Complete Guide to Meta Tags for SEO</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <TagIcon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Title Tags</h3>
                  <p className="text-sm text-muted-foreground">
                    The most important meta tag for SEO. Appears as the clickable headline in search results. 
                    Keep it under 60 characters and include your target keyword.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <SearchIcon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Meta Descriptions</h3>
                  <p className="text-sm text-muted-foreground">
                    The snippet text that appears under your title in search results. Write compelling copy 
                    that encourages clicks while staying under 160 characters.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <ShareIcon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Open Graph Tags</h3>
                  <p className="text-sm text-muted-foreground">
                    Control how your content appears when shared on social media platforms like Facebook, 
                    LinkedIn, and WhatsApp. Include title, description, and image.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <TwitterIcon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Twitter Cards</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimize your content for Twitter sharing. Choose from summary, large image, app, 
                    or player card types based on your content.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <EyeIcon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Viewport Tags</h3>
                  <p className="text-sm text-muted-foreground">
                    Essential for mobile responsiveness. Tell browsers how to display your page on 
                    different screen sizes and devices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <AlertTriangleIcon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Robots Tags</h3>
                  <p className="text-sm text-muted-foreground">
                    Control how search engines crawl and index your pages. Use index/noindex and 
                    follow/nofollow directives strategically.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Meta Tags FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What are meta tags and why are they important?</h3>
                  <p className="text-sm text-muted-foreground">
                    Meta tags are HTML elements that provide information about your webpage to search engines 
                    and social media platforms. They're crucial for SEO, click-through rates, and social sharing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How do I optimize meta tags for SEO?</h3>
                  <p className="text-sm text-muted-foreground">
                    Include target keywords naturally, write compelling descriptions, stay within character 
                    limits, and ensure each page has unique meta tags. Test how they appear in search results.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What's the difference between Open Graph and Twitter Cards?</h3>
                  <p className="text-sm text-muted-foreground">
                    Open Graph tags work for Facebook, LinkedIn, and most platforms. Twitter Cards are specific 
                    to Twitter but can fall back to Open Graph if not specified.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How often should I update my meta tags?</h3>
                  <p className="text-sm text-muted-foreground">
                    Update meta tags when you refresh content, target new keywords, or notice poor performance 
                    in search results. Regular audits help maintain SEO effectiveness.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* SEO Footer */}
          <section className="bg-muted/30 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Professional Meta Tags Generator - Free SEO Tool</h2>
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p className="mb-4">
                Create SEO-optimized meta tags instantly with our free meta tags generator. Generate perfect title tags, 
                meta descriptions, Open Graph tags, and Twitter Cards with real-time character counting and search result 
                previews. Essential for improving search rankings and social media engagement.
              </p>
              <p className="mb-4">
                <strong>Features include:</strong> automatic character counting with color-coded warnings, real-time search 
                result preview, social media sharing preview, Open Graph and Twitter Card optimization, fallback options 
                for efficiency, and downloadable HTML code. Perfect for SEO professionals, web developers, and digital marketers.
              </p>
              <p>
                <strong>SEO benefits:</strong> Improve click-through rates from search results, enhance social media sharing 
                appearance, optimize for featured snippets, ensure mobile-friendly display, and maintain consistent branding 
                across platforms. Generate professional meta tags that boost your website's visibility and engagement.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
