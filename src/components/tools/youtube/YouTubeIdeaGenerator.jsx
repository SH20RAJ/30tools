'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Copy, RefreshCw, TrendingUp, Youtube, CheckCircle2, Sparkles } from 'lucide-react';
import { generateYouTubeIdeas } from '@/lib/youtube-actions';

export default function YouTubeIdeaGenerator() {
  const [niche, setNiche] = useState('');
  const [audience, setAudience] = useState('general');
  const [contentType, setContentType] = useState('tutorial');
  const [videoLength, setVideoLength] = useState('medium');
  const [goalType, setGoalType] = useState('education');
  const [trendingTopics, setTrendingTopics] = useState('');
  const [ideas, setIdeas] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const audiences = {
    general: 'General Audience',
    teens: 'Teenagers (13-19)',
    young_adults: 'Young Adults (20-35)',
    professionals: 'Professionals',
    parents: 'Parents',
    seniors: 'Seniors (50+)',
    gamers: 'Gamers',
    tech: 'Tech Enthusiasts',
    fitness: 'Fitness Community',
    business: 'Business Owners',
    students: 'Students',
    creators: 'Content Creators'
  };

  const contentTypes = {
    tutorial: 'Tutorial/How-to',
    review: 'Product Review',
    vlog: 'Vlog/Personal',
    educational: 'Educational',
    entertainment: 'Entertainment',
    unboxing: 'Unboxing',
    comparison: 'Comparison',
    listicle: 'Top 10/List',
    storytelling: 'Storytelling',
    interview: 'Interview',
    challenge: 'Challenge',
    reaction: 'Reaction',
    news: 'News/Commentary'
  };

  const videoLengths = {
    short: 'Shorts (< 1 min)',
    medium: 'Medium (5-15 min)',
    long: 'Long-form (15+ min)'
  };

  const goalTypes = {
    education: 'Education & Teaching',
    entertainment: 'Entertainment & Fun',
    inspiration: 'Inspiration & Motivation',
    business: 'Business & Marketing',
    viral: 'Viral & Trending',
    community: 'Community Building'
  };

  const popularNiches = [
    'Technology & Gadgets',
    'Gaming',
    'Fitness & Health',
    'Cooking & Food',
    'Travel & Adventure',
    'Fashion & Beauty',
    'Personal Finance',
    'DIY & Crafts',
    'Music & Entertainment',
    'Education & Learning',
    'Business & Entrepreneurship',
    'Lifestyle & Wellness'
  ];

  const handleGenerateIdeas = async () => {
    if (!niche.trim()) {
      setError('Please enter your niche or topic area');
      return;
    }

    setIsGenerating(true);
    setError('');

    try {
      const requestData = {
        niche: niche.trim(),
        audience,
        contentType,
        videoLength,
        goalType,
        trendingTopics: trendingTopics.trim()
      };

      const result = await generateYouTubeIdeas(requestData);
      
      if (result.success) {
        setIdeas(result.ideas);
      } else {
        setError(result.error || 'Failed to generate video ideas');
      }
    } catch (err) {
      setError('An error occurred while generating ideas');
    } finally {
      setIsGenerating(false);
    }
  };

  const copyIdea = async (idea, index) => {
    const formattedIdea = `Title: ${idea.title}\n\nHook: ${idea.hook}\n\nKey Points: ${idea.keyPoints}\n\nViral Potential: ${idea.viralPotential}\n\nEngagement Strategy: ${idea.engagementStrategy}`;
    
    try {
      await navigator.clipboard.writeText(formattedIdea);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy idea:', err);
    }
  };

  const regenerateIdeas = () => {
    if (niche.trim()) {
      handleGenerateIdeas();
    }
  };

  return (
    <div className="space-y-6">
      <Card className="card-cute">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-destructive" />
            YouTube Idea Generator
          </CardTitle>
          <CardDescription>
            Generate viral video ideas tailored to your niche and audience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="niche">Your Niche/Topic Area</Label>
            <Input
              id="niche"
              placeholder="Enter your niche (e.g., Web Development, Fitness, Cooking...)"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="input-cute"
            />
          </div>

          <div className="space-y-3">
            <Label>Popular Niches (Click to use)</Label>
            <div className="flex flex-wrap gap-2">
              {popularNiches.map((nicheOption, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setNiche(nicheOption)}
                  className="text-xs btn-cute"
                >
                  {nicheOption}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="audience">Target Audience</Label>
                <Select value={audience} onValueChange={setAudience}>
                  <SelectTrigger className="input-cute">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(audiences).map(([key, label]) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content-type">Content Type</Label>
                <Select value={contentType} onValueChange={setContentType}>
                  <SelectTrigger className="input-cute">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(contentTypes).map(([key, label]) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="video-length">Video Length</Label>
                <Select value={videoLength} onValueChange={setVideoLength}>
                  <SelectTrigger className="input-cute">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(videoLengths).map(([key, label]) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="goal-type">Video Goal</Label>
                <Select value={goalType} onValueChange={setGoalType}>
                  <SelectTrigger className="input-cute">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(goalTypes).map(([key, label]) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="trending-topics">Trending Topics (Optional)</Label>
                <Textarea
                  id="trending-topics"
                  placeholder="Enter current trending topics you'd like to incorporate..."
                  value={trendingTopics}
                  onChange={(e) => setTrendingTopics(e.target.value)}
                  className="min-h-[80px] input-cute"
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <Button
              onClick={handleGenerateIdeas}
              disabled={isGenerating || !niche.trim()}
              className="flex-1 btn-cute"
            >
              {isGenerating ? (
                <>
                  <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                  Generating Ideas...
                </>
              ) : (
                <>
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Generate Viral Ideas
                </>
              )}
            </Button>
            
            {ideas.length > 0 && (
              <Button
                onClick={regenerateIdeas}
                variant="outline"
                disabled={isGenerating}
                className="btn-cute"
              >
                <RefreshCw className="w-4 h-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {ideas.length > 0 && (
        <div className="space-y-4">
          <Card className="card-cute">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Youtube className="w-5 h-5 text-destructive" />
                  Generated Video Ideas ({ideas.length})
                </span>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  AI Powered
                </Badge>
              </CardTitle>
              <CardDescription>
                Click on any idea to copy it to your clipboard
              </CardDescription>
            </CardHeader>
          </Card>

          {ideas.map((idea, index) => (
            <Card key={idea.id || index} className="card-cute hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">
                        Idea #{idea.id || index + 1}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {contentTypes[contentType]}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground leading-tight">
                      {idea.title}
                    </h3>
                    
                    {idea.hook && (
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Hook:</h4>
                        <p className="text-sm">{idea.hook}</p>
                      </div>
                    )}
                    
                    {idea.keyPoints && (
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Key Points:</h4>
                        <p className="text-sm">{idea.keyPoints}</p>
                      </div>
                    )}
                    
                    <div className="grid md:grid-cols-2 gap-4 text-xs">
                      {idea.viralPotential && (
                        <div>
                          <h4 className="font-medium text-muted-foreground mb-1">Viral Potential:</h4>
                          <p>{idea.viralPotential}</p>
                        </div>
                      )}
                      
                      {idea.engagementStrategy && (
                        <div>
                          <h4 className="font-medium text-muted-foreground mb-1">Engagement Strategy:</h4>
                          <p>{idea.engagementStrategy}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyIdea(idea, index)}
                    className="shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                  >
                    {copiedIndex === index ? (
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Card className="card-cute">
        <CardHeader>
          <CardTitle>Video Idea Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">🎯 Viral Potential:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Tap into current trends and events</li>
                <li>• Solve common problems in your niche</li>
                <li>• Create curiosity with intriguing titles</li>
                <li>• Use emotional triggers (surprise, humor, fear)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📈 Growth Strategy:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Research trending keywords in your niche</li>
                <li>• Analyze successful competitors</li>
                <li>• Create content series for consistency</li>
                <li>• Engage with your community regularly</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
