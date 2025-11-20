"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MessageCircle, Copy, ExternalLink, QrCode } from "lucide-react";
import { toast } from "sonner";

export default function WhatsAppLinkGeneratorTool() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const generateLink = () => {
    if (!phoneNumber.trim()) {
      toast.error("Please enter a phone number");
      return;
    }

    // Remove all non-digit characters
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    if (cleanedNumber.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    // Encode message
    const encodedMessage = encodeURIComponent(message);

    // Generate WhatsApp link
    const link = `https://wa.me/${cleanedNumber}${message ? `?text=${encodedMessage}` : ''}`;

    setGeneratedLink(link);
    toast.success("Link generated successfully!");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    toast.success("Link copied to clipboard!");
  };

  const openLink = () => {
    window.open(generatedLink, '_blank');
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-green-600" />
            Generate WhatsApp Link
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (with country code)</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="e.g., 1234567890 or +1 234 567 8900"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Enter the phone number without + or spaces (they will be removed automatically)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Pre-filled Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Hello! I'm interested in..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
            <p className="text-xs text-muted-foreground">
              This message will be pre-filled when someone clicks your link
            </p>
          </div>

          <Button onClick={generateLink} className="w-full bg-green-600 hover:bg-green-700">
            <MessageCircle className="w-4 h-4 mr-2" />
            Generate WhatsApp Link
          </Button>
        </CardContent>
      </Card>

      {generatedLink && (
        <Card className="border-green-600/20">
          <CardHeader>
            <CardTitle className="text-lg">Your WhatsApp Link</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-mono text-sm break-all">{generatedLink}</p>
            </div>

            <div className="flex gap-3">
              <Button onClick={copyLink} variant="outline" className="flex-1">
                <Copy className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
              <Button onClick={openLink} variant="outline" className="flex-1">
                <ExternalLink className="w-4 h-4 mr-2" />
                Test Link
              </Button>
            </div>

            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-sm">How to Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Share this link on your website, social media, or email</p>
                <p>✓ When clicked, it opens WhatsApp with your number</p>
                <p>✓ The message will be pre-filled for your customers</p>
                <p>✓ Works on both mobile and desktop WhatsApp</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      )}

      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
        <CardHeader>
          <CardTitle className="text-sm">Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>💡 <strong>Country Code:</strong> Always include the country code (e.g., 1 for USA, 91 for India)</p>
          <p>💡 <strong>No Symbols:</strong> Don't include +, -, (, ) or spaces - just digits</p>
          <p>💡 <strong>Message:</strong> Keep pre-filled messages short and clear</p>
          <p>💡 <strong>Testing:</strong> Always test your link before sharing</p>
        </CardContent>
      </Card>
    </div>
  );
}
