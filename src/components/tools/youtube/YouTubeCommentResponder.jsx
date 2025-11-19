"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  MessageCircle,
  Copy,
  RefreshCw,
  Users,
  Youtube,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { generateCommentResponse } from "@/lib/youtube-actions";

export default function YouTubeCommentResponder() {
  const [comment, setComment] = useState("");
  const [tone, setTone] = useState("friendly");
  const [includeQuestion, setIncludeQuestion] = useState(true);
  const [includeEmoji, setIncludeEmoji] = useState(true);
  const [channelContext, setChannelContext] = useState("");
  const [responses, setResponses] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const tones = {
    friendly: {
      name: "Friendly & Warm",
      description: "Casual and welcoming tone",
    },
    professional: {
      name: "Professional",
      description: "Business-appropriate responses",
    },
    humorous: {
      name: "Humorous & Fun",
      description: "Light-hearted and entertaining",
    },
    grateful: {
      name: "Grateful & Appreciative",
      description: "Thankful and positive",
    },
    educational: {
      name: "Educational & Helpful",
      description: "Informative and instructive",
    },
    enthusiastic: {
      name: "Enthusiastic & Energetic",
      description: "Excited and motivational",
    },
    empathetic: {
      name: "Empathetic & Understanding",
      description: "Compassionate and supportive",
    },
    concise: {
      name: "Concise & Direct",
      description: "Brief and to the point",
    },
  };

  const sampleComments = [
    "This tutorial was amazing! Can you make one about advanced techniques?",
    "I tried this method but it didn't work for me. What am I doing wrong?",
    "First! Love your content, keep it up!",
    "This video saved my project. Thank you so much!",
    "I disagree with your approach. There are better ways to do this.",
    "Could you please explain the part about optimization in more detail?",
    "Your channel has helped me so much in my career. You're the best!",
    "I'm a beginner and this seems too complicated. Any simpler alternatives?",
  ];

  const handleGenerateResponses = async () => {
    if (!comment.trim()) {
      setError("Please enter a comment to respond to");
      return;
    }

    setIsGenerating(true);
    setError("");

    try {
      const requestData = {
        comment: comment.trim(),
        tone,
        includeQuestion,
        includeEmoji,
        channelContext: channelContext.trim(),
      };

      const result = await generateCommentResponse(requestData);

      if (result.success) {
        setResponses(result.responses);
      } else {
        setError(result.error || "Failed to generate responses");
      }
    } catch (err) {
      setError("An error occurred while generating responses");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyResponse = async (response, index) => {
    try {
      await navigator.clipboard.writeText(response);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy response:", err);
    }
  };

  const loadSampleComment = (sampleComment) => {
    setComment(sampleComment);
  };

  const regenerateResponses = () => {
    if (comment.trim()) {
      handleGenerateResponses();
    }
  };

  return (
    <div className="space-y-6">
      <Card className="card-cute">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-destructive" />
            AI Comment Responder
          </CardTitle>
          <CardDescription>
            Generate intelligent and engaging replies to YouTube comments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="comment">YouTube Comment</Label>
            <Textarea
              id="comment"
              placeholder="Paste the YouTube comment you want to respond to..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-[100px] input-cute"
            />
          </div>

          <div className="space-y-3">
            <Label>Quick Samples (Click to use)</Label>
            <div className="flex flex-wrap gap-2">
              {sampleComments.slice(0, 4).map((sample, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => loadSampleComment(sample)}
                  className="text-xs btn-cute max-w-[200px] truncate"
                >
                  {sample.length > 40
                    ? sample.substring(0, 40) + "..."
                    : sample}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tone">Response Tone</Label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger className="input-cute">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(tones).map(([key, toneData]) => (
                      <SelectItem key={key} value={key}>
                        <div>
                          <div className="font-medium">{toneData.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {toneData.description}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="channel-context">
                  Channel Context (Optional)
                </Label>
                <Textarea
                  id="channel-context"
                  placeholder="Brief description of your channel, niche, or any specific information to include in responses..."
                  value={channelContext}
                  onChange={(e) => setChannelContext(e.target.value)}
                  className="min-h-[80px] input-cute"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Response Options</h3>

              <div className="flex items-center justify-between">
                <Label htmlFor="include-question">Ask Follow-up Question</Label>
                <Switch
                  id="include-question"
                  checked={includeQuestion}
                  onCheckedChange={setIncludeQuestion}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="include-emoji">Include Emojis</Label>
                <Switch
                  id="include-emoji"
                  checked={includeEmoji}
                  onCheckedChange={setIncludeEmoji}
                />
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Response Features:</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• Personalized to commenter</div>
                  <div>• Context-aware responses</div>
                  <div>• Engagement optimization</div>
                  <div>• Brand voice consistency</div>
                </div>
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
              onClick={handleGenerateResponses}
              disabled={isGenerating || !comment.trim()}
              className="flex-1 btn-cute bg-background"
            >
              {isGenerating ? (
                <>
                  <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                  Generating Responses...
                </>
              ) : (
                <>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Generate AI Responses
                </>
              )}
            </Button>

            {responses.length > 0 && (
              <Button
                onClick={regenerateResponses}
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

      {responses.length > 0 && (
        <Card className="card-cute">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Youtube className="w-5 h-5 text-destructive" />
              Generated Responses ({responses.length})
            </CardTitle>
            <CardDescription>
              Choose the response that best fits your style and audience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {responses.map((response, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          Option {index + 1}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {tones[tone].name}
                        </Badge>
                      </div>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {response}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyResponse(response, index)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    >
                      {copiedIndex === index ? (
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="card-cute">
        <CardHeader>
          <CardTitle>Comment Engagement Best Practices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">💬 Engagement Tips:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Respond within 24 hours when possible</li>
                <li>• Use the commenter's name for personalization</li>
                <li>• Ask questions to encourage discussion</li>
                <li>• Thank viewers for positive feedback</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🎯 Algorithm Benefits:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Higher engagement signals to YouTube</li>
                <li>• Improved video ranking and visibility</li>
                <li>• Stronger community building</li>
                <li>• Increased subscriber loyalty</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
