"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, RefreshCw, Server } from "lucide-react";

export default function VideoConverterTool() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-200 dark:border-cyan-900">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="w-6 h-6 text-cyan-600" />
            Video Format Converter
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Requires Heavy Processing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Video format conversion requires video codec re-encoding which is computationally intensive.
                  Client-side conversion using FFmpeg.wasm (~100MB) is possible but very slow for large files.
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Server className="w-4 h-4" />
                Recommended Solutions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="font-medium">For Production Use:</p>
              <ul className="space-y-2 ml-4 list-disc">
                <li><strong>CloudConvert API</strong> - Cloud-based video conversion service</li>
                <li><strong>AWS MediaConvert</strong> - Scalable video processing</li>
                <li><strong>Cloudinary</strong> - Automatic format optimization</li>
                <li><strong>Server-side FFmpeg</strong> - Self-hosted solution</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">📝 Common Conversion Use Cases</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium mb-2">Popular Formats</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• MP4 (H.264/H.265)</li>
                  <li>• WebM (VP9)</li>
                  <li>• MOV (QuickTime)</li>
                  <li>• AVI</li>
                  <li>• MKV</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Typical Operations</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Change container format</li>
                  <li>• Re-encode codec</li>
                  <li>• Adjust bitrate/quality</li>
                  <li>• Resize resolution</li>
                  <li>• Extract audio</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
            <CardHeader>
              <CardTitle className="text-sm">💡 Lightweight Alternative</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>For basic format compatibility, browsers can play most modern video formats natively:</p>
              <ul className="ml-4 list-disc text-muted-foreground space-y-1 mt-2">
                <li>MP4 (H.264) - Universal support</li>
                <li>WebM (VP8/VP9) - Efficient for web</li>
                <li>Use the HTML5 video tag with multiple source formats</li>
              </ul>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
