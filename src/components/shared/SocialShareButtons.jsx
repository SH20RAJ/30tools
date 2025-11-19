"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Share2,
  Copy,
  CheckCircle2,
  Twitter,
  Facebook,
  Linkedin,
  MessageCircle,
  Mail,
  Heart,
} from "lucide-react";

const SocialShareButtons = ({
  toolName,
  toolDescription,
  toolUrl,
  category = "tool",
  customMessage = null,
}) => {
  const [copied, setCopied] = useState(false);

  // Generate attractive share messages
  const generateShareText = (platform) => {
    if (customMessage) return customMessage;

    const messages = {
      twitter: `🚀 Just discovered ${toolName} on 30tools! ${toolDescription} Perfect for ${category} work. Try it free: ${toolUrl} #${category}tools #webtools #free`,
      facebook: `Amazing free tool alert! 🎉 ${toolName} - ${toolDescription}. This saved me so much time! Check it out at ${toolUrl}`,
      linkedin: `Productivity boost: ${toolName} 📈 ${toolDescription} Great tool for professionals. Available free at ${toolUrl}`,
      whatsapp: `Hey! Found this amazing free tool: ${toolName} - ${toolDescription} Check it out: ${toolUrl}`,
      email: `Subject: Great Free Tool - ${toolName}\n\nHi!\n\nI found this amazing free tool that might interest you:\n\n${toolName}\n${toolDescription}\n\nYou can try it here: ${toolUrl}\n\nBest regards!`,
      copy: `${toolName} - ${toolDescription} Try it free: ${toolUrl}`,
    };

    return messages[platform] || messages.copy;
  };

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(generateShareText("twitter"))}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(toolUrl)}&quote=${encodeURIComponent(generateShareText("facebook"))}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(toolUrl)}&title=${encodeURIComponent(toolName)}&summary=${encodeURIComponent(generateShareText("linkedin"))}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(generateShareText("whatsapp"))}`,
    email: `mailto:?${generateShareText("email").replace("Subject: ", "subject=").replace("\n\n", "&body=").replace(/\n/g, "%0D%0A")}`,
  };

  const handleShare = (platform) => {
    if (platform === "copy") {
      navigator.clipboard.writeText(generateShareText("copy"));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  return (
    <Card className="bg-gradient-cute border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Heart className="h-5 w-5 text-primary animate-pulse" />
          Love this tool? Share it!
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Help others discover this amazing free tool ✨
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Main Share Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare("twitter")}
            className="bg-muted/50 hover:bg-muted border-border text-primary hover:text-foreground"
          >
            <Twitter className="h-4 w-4 mr-2" />
            Twitter
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare("facebook")}
            className="bg-muted/50 hover:bg-muted border-border text-primary hover:text-primary"
          >
            <Facebook className="h-4 w-4 mr-2" />
            Facebook
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare("linkedin")}
            className="bg-muted/50 hover:bg-muted border-border text-foreground hover:text-primary"
          >
            <Linkedin className="h-4 w-4 mr-2" />
            LinkedIn
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare("whatsapp")}
            className="bg-muted/50 hover:bg-muted border-border text-primary hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </div>

        {/* Additional Actions */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare("email")}
            className="flex-1 bg-gray-50 hover:bg-gray-100 border-border"
          >
            <Mail className="h-4 w-4 mr-2" />
            Email
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare("copy")}
            className="flex-1 bg-muted/50 hover:bg-muted border-border text-primary"
          >
            {copied ? (
              <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
            ) : (
              <Copy className="h-4 w-4 mr-2" />
            )}
            {copied ? "Copied!" : "Copy Link"}
          </Button>
        </div>

        {/* Engagement Message */}
        <div className="text-center pt-2">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            <Share2 className="h-3 w-3 mr-1" />
            Free forever • No sign-up required
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialShareButtons;
