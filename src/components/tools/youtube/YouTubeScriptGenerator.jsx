'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { PenTool, Copy, Download, Sparkles, Youtube, CheckCircle2, Wand2 } from 'lucide-react';
import { generateYouTubeScript } from '@/lib/youtube-actions';

export default function YouTubeScriptGenerator() {
  const [topic, setTopic] = useState('');
  const [videoType, setVideoType] = useState('tutorial');
  const [duration, setDuration] = useState([10]);
  const [targetAudience, setTargetAudience] = useState('general');
  const [tone, setTone] = useState('friendly');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [script, setScript] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const videoTypes = {
    tutorial: 'Tutorial/How-to',
    review: 'Product Review',
    vlog: 'Vlog/Personal',
    educational: 'Educational',
    entertainment: 'Entertainment',
    unboxing: 'Unboxing',
    comparison: 'Comparison',
    listicle: 'Top 10/List',
    storytelling: 'Storytelling',
    interview: 'Interview'
  };

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
    business: 'Business Owners'
  };

  const tones = {
    friendly: 'Friendly & Conversational',
    professional: 'Professional & Informative',
    casual: 'Casual & Relaxed',
    energetic: 'Energetic & Enthusiastic',
    authoritative: 'Authoritative & Expert',
    humorous: 'Humorous & Fun',
    inspirational: 'Inspirational & Motivating',
    educational: 'Educational & Clear'
  };

  const handleGenerateScript = async () => {
    if (!topic.trim()) {
      setError('Please enter a video topic');
      return;
    }

    setIsGenerating(true);
    setError('');

    try {
      const scriptData = {
        topic: topic.trim(),
        videoType,
        duration: duration[0],
        targetAudience,
        tone,
        additionalInfo: additionalInfo.trim()
      };

      const result = await generateYouTubeScript(scriptData);
      
      if (result.success) {
        setScript(result.script);
      } else {
        setError(result.error || 'Failed to generate script');
      }
    } catch (err) {
      setError('An error occurred while generating the script');
    } finally {
      setIsGenerating(false);
    }
  };

  const copyScript = async () => {
    try {
      await navigator.clipboard.writeText(script);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy script:', err);
    }
  };

  const downloadScript = () => {
    const blob = new Blob([script], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `youtube-script-${topic.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatDuration = (minutes) => {
    if (minutes < 60) {
      return `${minutes} min`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  return (
    <div className="space-y-6">
      <Card className="card-cute">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PenTool className="w-5 h-5 text-destructive" />
            AI Script Generator
          </CardTitle>
          <CardDescription>
            Generate engaging YouTube video scripts with AI assistance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="topic">Video Topic/Title</Label>
            <Input
              id="topic"
              placeholder="Enter your video topic or title (e.g., 'How to Start a YouTube Channel in 2024')"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="input-cute"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="video-type">Video Type</Label>
                <Select value={videoType} onValueChange={setVideoType}>
                  <SelectTrigger className="input-cute">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(videoTypes).map(([key, label]) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="target-audience">Target Audience</Label>
                <Select value={targetAudience} onValueChange={setTargetAudience}>
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
                <Label htmlFor="tone">Tone & Style</Label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger className="input-cute">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(tones).map(([key, label]) => (
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
                <Label>Video Duration: {formatDuration(duration[0])}</Label>
                <Slider
                  value={duration}
                  onValueChange={setDuration}
                  max={120}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 min</span>
                  <span>2 hours</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional-info">Additional Information (Optional)</Label>
                <Textarea
                  id="additional-info"
                  placeholder="Any specific points, products, or information to include in the script..."
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  className="min-h-[100px] input-cute"
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
              onClick={handleGenerateScript}
              disabled={isGenerating || !topic.trim()}
              className="flex-1 btn-cute"
            >
              {isGenerating ? (
                <>
                  <Wand2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating Script...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate AI Script
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {script && (
        <Card className="card-cute">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Youtube className="w-5 h-5 text-destructive" />
                Generated Script
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyScript}
                  className="btn-cute"
                >
                  {copied ? (
                    <CheckCircle2 className="w-4 h-4 mr-1 text-primary" />
                  ) : (
                    <Copy className="w-4 h-4 mr-1" />
                  )}
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadScript}
                  className="btn-cute"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Button>
              </div>
            </CardTitle>
            <CardDescription>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary">{videoTypes[videoType]}</Badge>
                <Badge variant="secondary">{formatDuration(duration[0])}</Badge>
                <Badge variant="secondary">{tones[tone]}</Badge>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={script}
              readOnly
              className="min-h-[400px] font-mono text-sm input-cute"
            />
          </CardContent>
        </Card>
      )}

      <Card className="card-cute">
        <CardHeader>
          <CardTitle>Script Writing Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">🎬 Video Structure:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Strong hook in first 15 seconds</li>
                <li>• Clear value proposition early</li>
                <li>• Logical content progression</li>
                <li>• Strategic call-to-actions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📈 Engagement Tips:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Use conversational language</li>
                <li>• Include viewer questions/prompts</li>
                <li>• Add personality and authenticity</li>
                <li>• End with clear next steps</li>
              </ul>
            </div>
          </div>
          <div className="p-3 bg-accent/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Pro Tip:</strong> Use the generated script as a foundation and add your personal touch, 
              examples, and unique insights to make it truly your own.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
