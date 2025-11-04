'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Share2, 
  Copy, 
  ExternalLink, 
  ArrowRight, 
  Bookmark,
  Star,
  Users,
  TrendingUp,
  Globe,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Social sharing component
export function SocialShare({ 
  url, 
  title, 
  description,
  className = "" 
}) {
  const [copied, setCopied] = useState(false);

  const shareData = {
    title,
    text: description,
    url
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log('Error copying:', err);
    }
  };

  const shareLinks = [
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      name: 'Reddit',
      url: `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      
      {/* Native Share (mobile) */}
      {typeof navigator !== 'undefined' && navigator.share && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleShare}
          className="p-2"
        >
          <Share2 className="h-4 w-4" />
        </Button>
      )}

      {/* Social Media Links */}
      <div className="flex gap-1">
        {shareLinks.map((platform) => (
          <Button
            key={platform.name}
            variant="outline"
            size="sm"
            asChild
            className="p-2"
          >
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Share on ${platform.name}`}
            >
              <span className="sr-only">{platform.name}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        ))}
      </div>

      {/* Copy Link */}
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopy}
        className="p-2"
      >
        <Copy className="h-4 w-4" />
        {copied && <span className="ml-1 text-xs">Copied!</span>}
      </Button>
    </div>
  );
}

// Related tools component
export function RelatedTools({ 
  currentTool, 
  category,
  tools = [],
  title = "Related Tools",
  showCategory = true
}) {
  // Filter related tools (excluding current tool)
  const relatedTools = tools
    .filter(tool => tool.id !== currentTool && tool.category === category)
    .slice(0, 6);

  if (relatedTools.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.route}
              className="group block p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {tool.description}
                  </p>
                  {showCategory && (
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {tool.category}
                    </Badge>
                  )}
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Popular tools showcase
export function PopularTools({ 
  tools = [],
  title = "Most Popular Tools",
  showStats = true 
}) {
  const popularTools = tools
    .filter(tool => tool.popular)
    .slice(0, 8);

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-muted-foreground">
            The most loved tools by our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTools.map((tool, index) => (
            <Card key={tool.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    #{index + 1} Popular
                  </Badge>
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                </div>
                <CardTitle className="text-lg">{tool.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {tool.description}
                </p>
                
                {showStats && (
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{Math.floor(Math.random() * 50) + 10}K users</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>+{Math.floor(Math.random() * 20) + 5}% this week</span>
                    </div>
                  </div>
                )}

                <Button asChild className="w-full" size="sm">
                  <Link href={tool.route}>
                    Try Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Device compatibility indicator
export function DeviceCompatibility() {
  const devices = [
    { name: 'Desktop', icon: Monitor, supported: true },
    { name: 'Tablet', icon: Tablet, supported: true },
    { name: 'Mobile', icon: Smartphone, supported: true },
    { name: 'Web Browser', icon: Globe, supported: true }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Device Compatibility</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {devices.map((device) => {
            const Icon = device.icon;
            return (
              <div key={device.name} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Icon className={`h-8 w-8 ${device.supported ? 'text-green-500' : 'text-gray-400'}`} />
                </div>
                <div className="text-sm font-medium">{device.name}</div>
                <div className={`text-xs ${device.supported ? 'text-green-600' : 'text-gray-500'}`}>
                  {device.supported ? 'Supported' : 'Not Supported'}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

// Quick action buttons
export function QuickActions({ 
  toolName,
  toolUrl,
  showBookmark = true,
  showShare = true,
  className = ""
}) {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    // In a real app, save to user preferences or local storage
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showBookmark && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleBookmark}
          className={bookmarked ? 'bg-yellow-50 border-yellow-200' : ''}
        >
          <Bookmark className={`h-4 w-4 mr-2 ${bookmarked ? 'fill-current text-yellow-500' : ''}`} />
          {bookmarked ? 'Bookmarked' : 'Bookmark'}
        </Button>
      )}

      {showShare && (
        <SocialShare
          url={toolUrl}
          title={`${toolName} - Free Online Tool`}
          description={`Try ${toolName} - a free, fast, and secure online tool.`}
        />
      )}
    </div>
  );
}

// Tool features showcase
export function ToolFeatures({ 
  features = [],
  title = "Key Features",
  variant = "list" // "list", "grid", "badges"
}) {
  if (!features || features.length === 0) {
    return null;
  }

  const renderList = () => (
    <div className="space-y-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
            <div className="w-2 h-2 bg-primary rounded-full" />
          </div>
          <div>
            <h4 className="font-medium text-sm">{feature}</h4>
          </div>
        </div>
      ))}
    </div>
  );

  const renderGrid = () => (
    <div className="grid md:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-primary rounded-full" />
          </div>
          <span className="font-medium text-sm">{feature}</span>
        </div>
      ))}
    </div>
  );

  const renderBadges = () => (
    <div className="flex flex-wrap gap-2">
      {features.map((feature, index) => (
        <Badge key={index} variant="secondary" className="text-sm">
          {feature}
        </Badge>
      ))}
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {variant === 'list' && renderList()}
        {variant === 'grid' && renderGrid()}
        {variant === 'badges' && renderBadges()}
      </CardContent>
    </Card>
  );
}