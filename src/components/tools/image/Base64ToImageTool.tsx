"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Download, Image as ImageIcon, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function Base64ToImageTool() {
  const [base64String, setBase64String] = useState("");

  const imageSrc = useMemo(() => {
    const trimmed = base64String.trim();
    if (!trimmed) return null;
    
    // Check if it already has the data URI scheme
    if (trimmed.startsWith("data:image/")) {
      return trimmed;
    }

    // Try to guess the image type or default to png
    let mimeType = "image/png";
    if (trimmed.startsWith("/") || trimmed.startsWith("iVBORw0KGgo")) mimeType = "image/png";
    else if (trimmed.startsWith("/9j/") || trimmed.startsWith("/9j/4")) mimeType = "image/jpeg";
    else if (trimmed.startsWith("R0lGODlh")) mimeType = "image/gif";
    else if (trimmed.startsWith("UklGR")) mimeType = "image/webp";

    return `data:${mimeType};base64,${trimmed}`;
  }, [base64String]);

  const handleDownload = () => {
    if (!imageSrc) return;
    try {
      const a = document.createElement("a");
      a.href = imageSrc;
      // Get extension from mime type
      const match = imageSrc.match(/data:image\/([a-zA-Z0-9]+);base64,/);
      const ext = match ? match[1] : "png";
      a.download = `decoded-image.${ext}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      toast.success("Image downloaded successfully!");
    } catch (e) {
      toast.error("Failed to download image. Invalid Base64.");
    }
  };

  const handleCopy = () => {
    if (!base64String) return;
    navigator.clipboard.writeText(base64String);
    toast.success("Base64 copied to clipboard");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Base64 to Image Decoder</CardTitle>
          <CardDescription>
            Paste your Base64 string below to view and download the image. Processing is done securely in your browser.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Base64 String</label>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleCopy}
                    disabled={!base64String}
                    className="h-8 text-muted-foreground"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setBase64String("")}
                    disabled={!base64String}
                    className="h-8 text-destructive hover:text-destructive/90"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                </div>
              </div>
              <Textarea
                placeholder="Paste Base64 string here (e.g., data:image/png;base64,iVBORw0KGgo...)"
                className="min-h-[300px] font-mono text-xs resize-none"
                value={base64String}
                onChange={(e) => setBase64String(e.target.value)}
              />
            </div>

            {/* Preview Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Image Preview</label>
                <Button 
                  size="sm" 
                  onClick={handleDownload}
                  disabled={!imageSrc}
                  className="h-8"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Image
                </Button>
              </div>
              <div className="border rounded-md min-h-[300px] bg-muted/30 flex items-center justify-center p-4 relative overflow-hidden">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt="Decoded from Base64"
                    className="max-w-full max-h-[400px] object-contain shadow-sm border bg-white"
                    onError={() => {
                      toast.error("Invalid Base64 string or format not supported.");
                    }}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-muted-foreground space-y-2">
                    <ImageIcon className="w-12 h-12 opacity-20" />
                    <p className="text-sm">Preview will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
