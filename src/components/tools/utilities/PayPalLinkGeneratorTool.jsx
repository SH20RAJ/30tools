"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { DollarSign, Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PayPalLinkGeneratorTool() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [description, setDescription] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const generateLink = () => {
    if (!email.trim()) {
      toast.error("Please enter a PayPal email");
      return;
    }

    const params = new URLSearchParams({
      cmd: '_xclick',
      business: email,
      currency_code: currency,
      ...(amount && { amount }),
      ...(description && { item_name: description }),
    });

    const link = `https://www.paypal.com/cgi-bin/webscr?${params.toString()}`;
    setGeneratedLink(link);
    toast.success("PayPal link generated!");
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
            <DollarSign className="w-5 h-5 text-blue-600" />
            Generate PayPal Payment Link
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">PayPal Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@paypal.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (Optional)</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                placeholder="10.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD - US Dollar</SelectItem>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                  <SelectItem value="GBP">GBP - British Pound</SelectItem>
                  <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                  <SelectItem value="AUD">AUD - Australian Dollar</SelectItem>
                  <SelectItem value="INR">INR - Indian Rupee</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Item Description (Optional)</Label>
            <Input
              id="description"
              placeholder="Payment for services"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Button onClick={generateLink} className="w-full bg-blue-600 hover:bg-blue-700">
            <DollarSign className="w-4 h-4 mr-2" />
            Generate PayPal Link
          </Button>
        </CardContent>
      </Card>

      {generatedLink && (
        <Card className="border-blue-600/20">
          <CardHeader>
            <CardTitle className="text-lg">Your PayPal Payment Link</CardTitle>
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
                <p>✓ Share this link with your customers</p>
                <p>✓ They'll be directed to PayPal to complete payment</p>
                <p>✓ Amount can be pre-filled or customer can enter it</p>
                <p>✓ Works for both PayPal account holders and guests</p>
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
          <p>💡 <strong>Email:</strong> Must be a verified PayPal business email</p>
          <p>💡 <strong>Amount:</strong> Leave blank to let customers enter their own amount</p>
          <p>💡 <strong>Currency:</strong> Choose the currency you want to receive</p>
          <p>💡 <strong>Testing:</strong> Test thoroughly before using in production</p>
        </CardContent>
      </Card>
    </div>
  );
}
