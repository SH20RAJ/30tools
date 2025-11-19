"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ShareIcon,
  CopyIcon,
  ExternalLinkIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  MessageCircleIcon,
  MailIcon,
  QrCodeIcon,
} from "lucide-react";
import { toast } from "sonner";

export default function TeraboxSharingTools({ shareUrl, videoData }) {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  if (!shareUrl || !videoData) return null;

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${type} copied to clipboard!`);
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const generateQRCode = () => {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shareUrl)}`;
    setQrCodeUrl(qrUrl);
  };

  const shareToSocial = (platform) => {
    const title = `Watch ${videoData.name} - Terabox Video Player`;
    const text = `Check out this video: ${videoData.name}`;

    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + shareUrl)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + "\n\n" + shareUrl)}`,
    };

    window.open(urls[platform], "_blank", "noopener,noreferrer");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <ShareIcon className="h-5 w-5 mr-2" />
          Share Video
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="link" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="link">Share Link</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
            <TabsTrigger value="qr">QR Code</TabsTrigger>
          </TabsList>

          <TabsContent value="link" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="share-url">Shareable URL</Label>
              <div className="flex space-x-2">
                <Input
                  id="share-url"
                  value={shareUrl}
                  readOnly
                  className="font-mono text-xs"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(shareUrl, "Share link")}
                >
                  <CopyIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(shareUrl, "_blank")}
              >
                <ExternalLinkIcon className="h-4 w-4 mr-2" />
                Open Link
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(shareUrl, "URL")}
              >
                <CopyIcon className="h-4 w-4 mr-2" />
                Copy URL
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Anyone with this link can watch the video instantly without
              downloading any app.
            </p>
          </TabsContent>

          <TabsContent value="social" className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => shareToSocial("facebook")}
                className="justify-start"
              >
                <div className="w-4 h-4 mr-2 bg-primary rounded"></div>
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => shareToSocial("twitter")}
                className="justify-start"
              >
                <div className="w-4 h-4 mr-2 bg-primary rounded"></div>
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => shareToSocial("linkedin")}
                className="justify-start"
              >
                <div className="w-4 h-4 mr-2 bg-primary/90 rounded"></div>
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => shareToSocial("whatsapp")}
                className="justify-start"
              >
                <div className="w-4 h-4 mr-2 bg-muted/500 rounded"></div>
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => shareToSocial("telegram")}
                className="justify-start"
              >
                <div className="w-4 h-4 mr-2 bg-muted/500 rounded"></div>
                Telegram
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => shareToSocial("email")}
                className="justify-start"
              >
                <MailIcon className="w-4 h-4 mr-2" />
                Email
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Share this video on your favorite social media platform.
            </p>
          </TabsContent>

          <TabsContent value="qr" className="space-y-4">
            <div className="text-center space-y-4">
              {!qrCodeUrl ? (
                <Button onClick={generateQRCode}>
                  <QrCodeIcon className="h-4 w-4 mr-2" />
                  Generate QR Code
                </Button>
              ) : (
                <div className="space-y-4">
                  <img
                    src={qrCodeUrl}
                    alt="QR Code for video"
                    className="mx-auto border rounded-lg"
                  />
                  <div className="flex justify-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = qrCodeUrl;
                        link.download = `${videoData.name}-qr-code.png`;
                        link.click();
                      }}
                    >
                      Download QR
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(qrCodeUrl, "QR Code URL")}
                    >
                      <CopyIcon className="h-4 w-4 mr-2" />
                      Copy QR URL
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Scan this QR code with any device to open the video instantly.
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
