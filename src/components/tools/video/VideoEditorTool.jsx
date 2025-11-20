"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Video, Server } from "lucide-react";

export default function VideoEditorTool() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-200 dark:border-indigo-900">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="w-6 h-6 text-indigo-600" />
            Video Editor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Server-Side Processing Recommended</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Advanced video editing (cutting, merging, effects, filters) requires significant processing power.
                  While client-side libraries like FFmpeg.wasm exist, they're ~100MB in size and perform slowly in browsers.
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Server className="w-4 h-4" />
                Recommended Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="font-medium">For Production Video Editing:</p>
              <ul className="space-y-2 ml-4 list-disc">
                <li>Use server-side FFmpeg for processing</li>
                <li>Implement cloud functions (AWS Lambda, Google Cloud Functions)</li>
                <li>Use dedicated video processing services (Cloudinary, Mux, AWS MediaConvert)</li>
                <li>Queue-based processing for large files</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">✨ Alternative: Use Our Other Tools</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>For basic video operations, try these lightweight alternatives:</p>
              <ul className="space-y-2 ml-4 list-disc text-muted-foreground">
                <li><strong>Video Trimmer</strong> - Cut and trim video clips</li>
                <li><strong>Screen Recorder</strong> - Record your screen directly</li>
                <li><strong>YouTube Downloader</strong> - Download and convert videos</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-900">
            <CardHeader>
              <CardTitle className="text-sm">🔧 What Full Video Editing Would Include</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-medium mb-2">Basic Features</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Cut & Trim</li>
                  <li>• Merge Videos</li>
                  <li>• Add Text Overlays</li>
                  <li>• Audio Replacement</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Advanced Features</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Filters & Effects</li>
                  <li>• Transitions</li>
                  <li>• Color Correction</li>
                  <li>• Format Conversion</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
