"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, AlertCircle, ExternalLink } from "lucide-react";

export default function YouTubeTrendsAnalyzerTool() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-900">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            YouTube Trends Analyzer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-semibold">API Key Required</h3>
                <p className="text-sm text-muted-foreground">
                  This tool uses the YouTube Data API v3 to analyze trending videos, popular topics, and category performance in your region.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Category or Search Term</Label>
              <Input placeholder="e.g., Gaming, Music, Tech..." disabled />

              <Label>Region Code</Label>
              <Input placeholder="e.g., US, GB, IN..." disabled />

              <Label>Your YouTube API Key</Label>
              <Input type="password" placeholder="Enter your API key..." disabled />

              <Button className="w-full bg-purple-600 hover:bg-purple-700" disabled>
                Analyze Trends
              </Button>
            </div>
          </div>

          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
            <CardHeader>
              <CardTitle className="text-sm">How to Get YouTube API Key</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <ol className="list-decimal list-inside space-y-2">
                <li>Visit <a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Cloud Console</a></li>
                <li>Create/select a project</li>
                <li>Enable "YouTube Data API v3"</li>
                <li>Create API credentials</li>
                <li>Use your API key in this tool</li>
              </ol>

              <Button variant="outline" size="sm" className="w-full mt-3" asChild>
                <a href="https://console.cloud.google.com/apis/library/youtube.googleapis.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Get API Key
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card >
            <CardHeader>
              <CardTitle className="text-sm">📈 Trend Insights You'll Get</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3 text-sm">
              <div className="space-y-1">
                <p className="font-medium">Trending Videos</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Most Viewed</li>
                  <li>• Fastest Growing</li>
                  <li>• Top Engagement</li>
                  <li>• Rising Creators</li>
                </ul>
              </div>
              <div className="space-y-1">
                <p className="font-medium">Analysis</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Trending Topics</li>
                  <li>• Best Upload Times</li>
                  <li>• Popular Tags</li>
                  <li>• Category Performance</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
