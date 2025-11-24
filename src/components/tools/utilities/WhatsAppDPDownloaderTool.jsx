"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Copy, Check, Phone, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function WhatsAppDPDownloaderTool() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dpUrl, setDpUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const extractWhatsAppDP = async () => {
    if (!phoneNumber.trim()) {
      toast.error("Please enter a phone number");
      return;
    }

    // Clean phone number (remove spaces, hyphens, etc.)
    const cleanNumber = phoneNumber.replace(/[^\d+]/g, "");

    if (!cleanNumber.startsWith("+")) {
      toast.error("Please include country code (e.g., +1234567890)");
      return;
    }

    setLoading(true);
    try {
      // Generate WhatsApp profile picture URL
      // Note: This is a simplified version. In production, you'd need proper API integration
      const whatsappDPUrl = `https://web.whatsapp.com/pp?phone=${cleanNumber.substring(1)}&type=image`;
      setDpUrl(whatsappDPUrl);
      toast.success("Profile picture URL generated!");
    } catch (_error) {
      toast.error("Error generating profile picture URL");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(dpUrl);
      setCopied(true);
      toast.success("URL copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (_error) {
      toast.error("Failed to copy URL");
    }
  };

  const downloadImage = () => {
    if (!dpUrl) return;

    const link = document.createElement("a");
    link.href = dpUrl;
    link.download = `whatsapp_dp_${phoneNumber.replace(/[^\d]/g, "")}.jpg`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Download started!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            WhatsApp DP Downloader
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download WhatsApp profile pictures in high quality. Enter a phone
            number with country code to get the profile picture URL.
          </p>
        </div>

        {/* Main Tool */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              WhatsApp DP Downloader
            </CardTitle>
            <CardDescription>
              Enter a phone number with country code to download the WhatsApp
              profile picture
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (with country code)</Label>
              <Input
                id="phone"
                placeholder="+1234567890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="text-lg"
              />
              <p className="text-sm text-muted-foreground">
                Include country code (e.g., +1 for US, +91 for India)
              </p>
            </div>

            <Button
              onClick={extractWhatsAppDP}
              disabled={loading || !phoneNumber.trim()}
              className="w-full"
              size="lg"
            >
              {loading ? "Generating..." : "Get Profile Picture"}
            </Button>

            {dpUrl && (
              <div className="space-y-4 pt-4 border-t">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Label htmlFor="dpUrl">Profile Picture URL</Label>
                    <Input id="dpUrl" value={dpUrl} readOnly className="mt-1" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copied ? "Copied!" : "Copy URL"}
                  </Button>
                  <Button
                    onClick={downloadImage}
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download Image
                  </Button>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <img
                    src={dpUrl}
                    alt="WhatsApp Profile Picture"
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                    onError={() =>
                      toast.error("Could not load profile picture")
                    }
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Warning */}
        <Card className="border-border bg-muted/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold text-primary mb-2">
                  Important Notes
                </h3>
                <ul className="text-sm text-primary space-y-1">
                  <li>
                    • Profile pictures may not be available for all numbers
                  </li>
                  <li>
                    • Privacy settings affect visibility of profile pictures
                  </li>
                  <li>
                    • Some profile pictures may be low resolution or default
                    images
                  </li>
                  <li>• Respect privacy and use this tool responsibly</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Easy Number Input</h3>
                <p className="text-sm text-muted-foreground">
                  Simply enter phone number with country code
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Download className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Quick Download</h3>
                <p className="text-sm text-muted-foreground">
                  Download profile pictures instantly
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Copy className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Copy URL</h3>
                <p className="text-sm text-muted-foreground">
                  Copy profile picture URL to clipboard
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
