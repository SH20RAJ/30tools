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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Copy, Check, Mail, Link, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export default function MailtoLinkGeneratorTool() {
  const [formData, setFormData] = useState({
    email: "",
    cc: "",
    bcc: "",
    subject: "",
    body: "",
  });
  const [generatedLink, setGeneratedLink] = useState("");
  const [copied, setCopied] = useState(false);

  const generateMailtoLink = () => {
    if (!formData.email.trim()) {
      toast.error("Please enter an email address");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    let link = `mailto:${formData.email}`;
    const params = [];

    if (formData.cc.trim()) {
      params.push(`cc=${encodeURIComponent(formData.cc)}`);
    }

    if (formData.bcc.trim()) {
      params.push(`bcc=${encodeURIComponent(formData.bcc)}`);
    }

    if (formData.subject.trim()) {
      params.push(`subject=${encodeURIComponent(formData.subject)}`);
    }

    if (formData.body.trim()) {
      params.push(`body=${encodeURIComponent(formData.body)}`);
    }

    if (params.length > 0) {
      link += "?" + params.join("&");
    }

    setGeneratedLink(link);
    toast.success("Mailto link generated successfully!");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy link");
    }
  };

  const testEmailLink = () => {
    if (generatedLink) {
      window.location.href = generatedLink;
    }
  };

  const copyHtmlCode = async () => {
    if (!generatedLink) return;

    const htmlCode = `<a href="${generatedLink}">Send Email</a>`;
    try {
      await navigator.clipboard.writeText(htmlCode);
      toast.success("HTML code copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy HTML code");
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear generated link when form changes
    if (generatedLink) {
      setGeneratedLink("");
    }
  };

  const clearForm = () => {
    setFormData({
      email: "",
      cc: "",
      bcc: "",
      subject: "",
      body: "",
    });
    setGeneratedLink("");
    toast.success("Form cleared!");
  };

  const loadExample = () => {
    setFormData({
      email: "contact@example.com",
      cc: "team@example.com",
      bcc: "",
      subject: "Inquiry about your services",
      body: "Hello,\n\nI would like to inquire about your services. Please provide more information.\n\nThank you!",
    });
    toast.success("Example data loaded!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Mailto Link Generator
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create clickable email links with custom subject, body, CC, and BCC
            fields for your website or application.
          </p>
        </div>

        {/* Main Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email Link Details
            </CardTitle>
            <CardDescription>
              Fill in the details to generate your mailto link
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="contact@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="text-lg"
              />
            </div>

            {/* CC and BCC */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cc">CC (Carbon Copy)</Label>
                <Input
                  id="cc"
                  type="email"
                  placeholder="team@example.com"
                  value={formData.cc}
                  onChange={(e) => handleInputChange("cc", e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Optional: Add CC recipients
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bcc">BCC (Blind Carbon Copy)</Label>
                <Input
                  id="bcc"
                  type="email"
                  placeholder="admin@example.com"
                  value={formData.bcc}
                  onChange={(e) => handleInputChange("bcc", e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Optional: Add BCC recipients
                </p>
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Enter email subject"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Optional: Pre-fill the email subject
              </p>
            </div>

            {/* Body */}
            <div className="space-y-2">
              <Label htmlFor="body">Email Body</Label>
              <Textarea
                id="body"
                placeholder="Enter email body content..."
                value={formData.body}
                onChange={(e) => handleInputChange("body", e.target.value)}
                rows={6}
              />
              <p className="text-sm text-muted-foreground">
                Optional: Pre-fill the email content
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={generateMailtoLink}
                disabled={!formData.email.trim()}
                className="flex-1"
              >
                Generate Mailto Link
              </Button>
              <Button onClick={loadExample} variant="outline">
                Load Example
              </Button>
              <Button onClick={clearForm} variant="outline">
                Clear Form
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Generated Link */}
        {generatedLink && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link className="h-5 w-5" />
                Generated Mailto Link
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Link Display */}
              <div className="space-y-2">
                <Label>Mailto Link</Label>
                <div className="flex items-center gap-2">
                  <Input
                    value={generatedLink}
                    readOnly
                    className="font-mono text-sm"
                  />
                  <Button onClick={copyToClipboard} variant="outline" size="sm">
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* HTML Code */}
              <div className="space-y-2">
                <Label>HTML Code</Label>
                <div className="flex items-center gap-2">
                  <Input
                    value={`<a href="${generatedLink}">Send Email</a>`}
                    readOnly
                    className="font-mono text-sm"
                  />
                  <Button onClick={copyHtmlCode} variant="outline" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Test Button */}
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={testEmailLink}
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Test Email Link
                </Button>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copied ? "Copied!" : "Copy Link"}
                </Button>
              </div>

              {/* Preview */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Preview:</h3>
                <a
                  href={generatedLink}
                  className="text-primary hover:text-foreground underline"
                >
                  Send Email to {formData.email}
                </a>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Usage Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage Examples</CardTitle>
            <CardDescription>Common use cases for mailto links</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold">Contact Form</h3>
                <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                  &lt;a
                  href="mailto:contact@company.com?subject=Website%20Inquiry"&gt;
                  <br />
                  &nbsp;&nbsp;Contact Us
                  <br />
                  &lt;/a&gt;
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Support Email</h3>
                <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                  &lt;a
                  href="mailto:support@company.com?subject=Technical%20Support"&gt;
                  <br />
                  &nbsp;&nbsp;Get Support
                  <br />
                  &lt;/a&gt;
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Feedback Form</h3>
                <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                  &lt;a
                  href="mailto:feedback@company.com?subject=User%20Feedback"&gt;
                  <br />
                  &nbsp;&nbsp;Send Feedback
                  <br />
                  &lt;/a&gt;
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Newsletter Subscription</h3>
                <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                  &lt;a
                  href="mailto:subscribe@company.com?subject=Newsletter%20Subscription"&gt;
                  <br />
                  &nbsp;&nbsp;Subscribe
                  <br />
                  &lt;/a&gt;
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Create seamless email integration for websites
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Copy className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Copy & Paste</h3>
                <p className="text-sm text-muted-foreground">
                  Easily copy links and HTML code
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <ExternalLink className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Test & Preview</h3>
                <p className="text-sm text-muted-foreground">
                  Test your email links before using them
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
