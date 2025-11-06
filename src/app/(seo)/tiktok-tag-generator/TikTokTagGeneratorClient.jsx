'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generateTikTokTags } from '@/lib/tag-actions';
import { MusicIcon, CopyIcon, HashIcon, TrendingUpIcon, SearchIcon, LoaderIcon } from 'lucide-react';
import { toast } from 'sonner';

export default function TikTokTagGeneratorClient() {
  const [query, setQuery] = useState('');
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleGenerateTags = async () => {
    if (!query.trim()) {
      toast.error('Please enter a topic or keyword');
      return;
    }

    setIsLoading(true);
    try {
      const result = await generateTikTokTags(query);
      
      if (result.success) {
        setTags(result.data.tags || []);
        setSearchQuery(result.data.query || query);
        toast.success('TikTok hashtags generated successfully!');
      } else {
        toast.error(result.error || 'Failed to generate hashtags');
      }
    } catch (error) {
      toast.error('An error occurred while generating hashtags');
    } finally {
      setIsLoading(false);
    }
  };

  const copyTag = (tag) => {
    navigator.clipboard.writeText(tag);
    toast.success('Hashtag copied to clipboard!');
  };

  const copyAllTags = () => {
    const allTags = tags.join(' ');
    navigator.clipboard.writeText(allTags);
    toast.success('All hashtags copied to clipboard!');
  };

  const copyForCaption = () => {
    const captionTags = tags.slice(0, 10).join(' '); // TikTok recommends 3-10 hashtags
    navigator.clipboard.writeText(captionTags);
    toast.success('Hashtags copied for caption!');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-muted dark:bg-primary/20 rounded-lg mr-3">
            <MusicIcon className="h-8 w-8 text-primary dark:text-primary" />
          </div>
          <h1 className="text-3xl font-bold">TikTok Hashtag Generator</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Generate trending TikTok hashtags to boost your video's reach and engagement. 
          Get relevant hashtags that help your content get discovered by more viewers.
        </p>
      </div>

      {/* Input Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <SearchIcon className="mr-2 h-5 w-5" />
            Generate Hashtags
          </CardTitle>
          <CardDescription>
            Enter your video topic, trend, or content theme to generate relevant TikTok hashtags
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="query">Video Topic or Theme</Label>
            <Input
              id="query"
              placeholder="e.g., dance, comedy, cooking, diy, travel..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleGenerateTags()}
            />
          </div>
          
          <Button 
            onClick={handleGenerateTags} 
            disabled={isLoading || !query.trim()}
            className="w-full"
          >
            {isLoading ? (
              <>
                <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
                Generating Hashtags...
              </>
            ) : (
              <>
                <HashIcon className="mr-2 h-4 w-4" />
                Generate TikTok Hashtags
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Results Section */}
      {tags.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <TrendingUpIcon className="mr-2 h-5 w-5" />
                  Generated Hashtags
                </CardTitle>
                <CardDescription>
                  {searchQuery && `Hashtags for: "${searchQuery}"`} • {tags.length} hashtags generated
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={copyForCaption}>
                  <CopyIcon className="mr-2 h-4 w-4" />
                  Copy Top 10
                </Button>
                <Button variant="outline" size="sm" onClick={copyAllTags}>
                  <HashIcon className="mr-2 h-4 w-4" />
                  Copy All
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Tags Display */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant={index < 10 ? "default" : "secondary"} 
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1"
                  onClick={() => copyTag(tag)}
                >
                  {tag}
                  <CopyIcon className="ml-2 h-3 w-3" />
                </Badge>
              ))}
            </div>

            {/* Top 10 for Caption */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="top-tags">Top 10 Hashtags (Recommended for captions)</Label>
                <Textarea
                  id="top-tags"
                  value={tags.slice(0, 10).join(' ')}
                  readOnly
                  className="min-h-[80px]"
                  onClick={(e) => e.target.select()}
                />
              </div>

              <div>
                <Label htmlFor="all-tags">All Hashtags</Label>
                <Textarea
                  id="all-tags"
                  value={tags.join(' ')}
                  readOnly
                  className="min-h-[120px]"
                  onClick={(e) => e.target.select()}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tips Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>TikTok Hashtag Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">✅ Best Practices:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Use 3-10 hashtags per video (optimal range)</li>
                <li>• Mix trending and niche-specific hashtags</li>
                <li>• Include location-based hashtags if relevant</li>
                <li>• Use #ForYou, #FYP, #Viral for broader reach</li>
                <li>• Research trending hashtags in your niche</li>
                <li>• Create a branded hashtag for your content</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🎯 Strategy Tips:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Use a mix of broad and specific hashtags</li>
                <li>• Check hashtag popularity before using</li>
                <li>• Avoid banned or flagged hashtags</li>
                <li>• Post at peak times for your audience</li>
                <li>• Engage with other posts using the same hashtags</li>
                <li>• Monitor hashtag performance and adjust</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
