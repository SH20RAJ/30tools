"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MessageSquare, Check, X, ExternalLink, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function WhatsAppCheckerTool() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(null);

  const checkNumber = async () => {
    if (!phoneNumber.trim()) {
      toast.error("Please enter a phone number");
      return;
    }

    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    if (cleanedNumber.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setChecking(true);
    setResult(null);

    // Simulate checking (in reality, this would need a backend or WhatsApp API)
    // For this demo, we'll create a wa.me link and let the user verify
    await new Promise(resolve => setTimeout(resolve, 1500));

    const waLink = `https://wa.me/${cleanedNumber}`;

    setResult({
      number: cleanedNumber,
      link: waLink,
      checked: true
    });

    setChecking(false);
    toast.success("Check complete! Click 'Open in WhatsApp' to verify");
  };

  const openWhatsApp = () => {
    if (result?.link) {
      window.open(result.link, '_blank');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-green-600" />
            Check WhatsApp Number
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (with country code)</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="e.g., 1234567890"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={checking}
            />
            <p className="text-xs text-muted-foreground">
              Enter the full phone number including country code (without + or spaces)
            </p>
          </div>

          <Button
            onClick={checkNumber}
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={checking}
          >
            {checking ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Checking...
              </>
            ) : (
              <>
                <MessageSquare className="w-4 h-4 mr-2" />
                Check Number
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-green-600/20">
          <CardHeader>
            <CardTitle className="text-lg">Result</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Phone Number:</span>
                <span className="font-mono font-medium">+{result.number}</span>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100 mb-3 font-medium">
                📱 How to Verify
              </p>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                Click the button below to open WhatsApp. If the number is active:
              </p>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 ml-4">
                <li>• You'll see their WhatsApp profile</li>
                <li>• You can send them a message</li>
                <li>• If NOT active, you'll see an error</li>
              </ul>
            </div>

            <Button onClick={openWhatsApp} variant="outline" className="w-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in WhatsApp to Verify
            </Button>
          </CardContent>
        </Card>
      )}

      <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900">
        <CardHeader>
          <CardTitle className="text-sm">⚠️ Important Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• This tool generates a WhatsApp link for you to manually verify</p>
          <p>• No automated checking is performed (WhatsApp doesn't provide a public API for this)</p>
          <p>• You must have WhatsApp installed to verify the number</p>
          <p>• The number must include the country code (e.g., 1 for USA, 91 for India)</p>
          <p>• Verification is done by opening WhatsApp and checking if a chat can be initiated</p>
        </CardContent>
      </Card>
    </div>
  );
}
