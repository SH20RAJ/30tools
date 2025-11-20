"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Youtube, TrendingUp, AlertCircle, ExternalLink } from "lucide-react";

export default function YouTubeVideoAnalyticsTool() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <Card className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200 dark:border-red-900">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Youtube className="w-6 h-6 text-red-600" />
            YouTube Video Analytics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-semibold">API Key Required</h3>
                <p className="text-sm text-muted-foreground">
                  This tool requires a YouTube Data API v3 key to fetch video analytics such as views, likes, comments, and engagement metrics.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Label>YouTube Video URL or ID</Label>
              <Input placeholder="https://youtube.com/watch?v=..." disabled />

              <Label>Your YouTube API Key</Label>
              <Input type="password" placeholder="Enter your API key..." disabled />

              <Button className="w-full bg-red-600 hover:bg-red-700" disabled>
                Analyze Video
              </Button>
            </div>
          </div>

          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
            <CardHeader>
              <CardTitle className="text-sm">How to Get YouTube API Key</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <ol className="list-decimal list-inside space-y-2">
                <li>Go to <a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Cloud Console</a></li>
                <li>Create a new project or select existing one</li>
                <li>Enable "YouTube Data API v3"</li>
                <li>Create credentials (API Key)</li>
                <li>Copy your API key and paste it above</li>
              </ol>

              <Button variant="outline" size="sm" className="w-full mt-3" asChild>
                <a href="https://console.cloud.google.com/apis/library/youtube.googleapis.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open Google Cloud Console
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">📊 Analytics You'll Get</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3 text-sm">
              <div className="space-y-1">
                <p className="font-medium">Basic Metrics</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• View Count</li>
                  <li>• Like/Dislike Count</li>
                  <li>• Comment Count</li>
                  <li>• Share Count</li>
                </ul>
              </div>
              <div className="space-y-1">
                <p className="font-medium">Video Details</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Title & Description</li>
                  <li>• Duration</li>
                  <li>• Upload Date</li>
                  <li>• Channel Info</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
