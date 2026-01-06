"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Download, QrCode, Share2, Copy, Check } from "lucide-react";
import { toast } from "sonner";

export default function QrGeneratorTool() {
  const [text, setText] = useState("");
  const [size, setSize] = useState("256");
  const [errorLevel, setErrorLevel] = useState("M");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateQrCode = async () => {
    if (!text.trim()) {
      toast.error("Please enter text or URL to generate QR code");
      return;
    }

    setIsGenerating(true);

    try {
      // Using qr-server.com API for QR code generation
      const encodedText = encodeURIComponent(text);
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedText}&ecc=${errorLevel}&format=png`;
      setQrCodeUrl(url);

      toast.success("Your QR code has been generated successfully");
    } catch (_error) {
      toast.error("Failed to generate QR code. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadQrCode = async () => {
    if (!qrCodeUrl) return;

    try {
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `qr-code-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast.success("QR code image is being downloaded");
    } catch (_error) {
      toast.error("Failed to download QR code. Please try again.");
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(qrCodeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("QR code URL copied successfully");
    } catch (_error) {
      toast.error("Failed to copy URL to clipboard");
    }
  };

  const shareQrCode = async () => {
    if (navigator.share && qrCodeUrl) {
      try {
        await navigator.share({
          title: "QR Code",
          text: `QR Code for: ${text}`,
          url: qrCodeUrl,
        });
      } catch (_error) {
        // Fallback to copy to clipboard
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <QrCode className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">QR Code Generator</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Generate high-quality QR codes instantly for URLs, text, contact
          information, and more. Perfect for marketing, business cards, and
          digital sharing.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>QR Code Settings</CardTitle>
            <CardDescription>Configure your QR code parameters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="text">Text or URL</Label>
              <Input
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text, URL, or any content..."
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="size">Size (pixels)</Label>
                <Select value={size} onValueChange={setSize}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="128">128x128</SelectItem>
                    <SelectItem value="256">256x256</SelectItem>
                    <SelectItem value="512">512x512</SelectItem>
                    <SelectItem value="1024">1024x1024</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="errorLevel">Error Correction</Label>
                <Select value={errorLevel} onValueChange={setErrorLevel}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="L">Low (7%)</SelectItem>
                    <SelectItem value="M">Medium (15%)</SelectItem>
                    <SelectItem value="Q">Quartile (25%)</SelectItem>
                    <SelectItem value="H">High (30%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={generateQrCode}
              disabled={isGenerating || !text.trim()}
              className="w-full"
            >
              {isGenerating ? "Generating..." : "Generate QR Code"}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generated QR Code</CardTitle>
            <CardDescription>Your QR code will appear here</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {qrCodeUrl ? (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <img
                    src={qrCodeUrl}
                    alt="Generated QR Code"
                    className="border rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button onClick={downloadQrCode} variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button onClick={copyToClipboard} variant="outline" size="sm">
                    {copied ? (
                      <Check className="h-4 w-4 mr-2" />
                    ) : (
                      <Copy className="h-4 w-4 mr-2" />
                    )}
                    {copied ? "Copied!" : "Copy URL"}
                  </Button>
                  <Button onClick={shareQrCode} variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
                <div className="text-center text-muted-foreground">
                  <QrCode className="h-12 w-12 mx-auto mb-2" />
                  <p>Your QR code will appear here</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* SEO Content Section */}
      <div className="mt-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>About QR Code Generator</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              QR codes (Quick Response codes) are two-dimensional barcodes that
              can store various types of information and can be quickly scanned
              using smartphones or QR code readers. Our free QR code generator
              creates high-quality QR codes instantly without any watermarks or
              limitations.
            </p>

            <h3>Key Features:</h3>
            <ul>
              <li>
                <strong>Instant Generation:</strong> Create QR codes immediately
                without waiting
              </li>
              <li>
                <strong>Multiple Sizes:</strong> Choose from 128x128 to
                1024x1024 pixels
              </li>
              <li>
                <strong>Error Correction:</strong> Built-in error correction for
                damaged codes
              </li>
              <li>
                <strong>High Quality:</strong> PNG format for crisp, clear
                images
              </li>
              <li>
                <strong>Free & Unlimited:</strong> No limits on the number of QR
                codes you can generate
              </li>
            </ul>

            <h3>Common Use Cases:</h3>
            <ul>
              <li>Website URLs and landing pages</li>
              <li>Contact information (vCard)</li>
              <li>WiFi network credentials</li>
              <li>Social media profiles</li>
              <li>Product information and reviews</li>
              <li>Event details and tickets</li>
              <li>Menu links for restaurants</li>
              <li>App download links</li>
            </ul>

            <h3>Error Correction Levels:</h3>
            <ul>
              <li>
                <strong>Low (7%):</strong> Best for clean environments
              </li>
              <li>
                <strong>Medium (15%):</strong> Standard choice for most
                applications
              </li>
              <li>
                <strong>Quartile (25%):</strong> Good for outdoor or printed
                materials
              </li>
              <li>
                <strong>High (30%):</strong> Maximum reliability for harsh
                conditions
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
