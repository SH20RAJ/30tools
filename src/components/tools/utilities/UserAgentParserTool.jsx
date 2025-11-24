"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Monitor, Smartphone, Copy, Check, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export default function UserAgentParserTool() {
  const [userAgent, setUserAgent] = useState("");
  const [parsedData, setParsedData] = useState(null);
  const [copied, setCopied] = useState(false);

  const parseUserAgent = (ua) => {
    if (!ua) return null;

    // Basic parsing logic (in production, use a proper UA parser library)
    const parsed = {
      userAgent: ua,
      browser: {
        name: "Unknown",
        version: "Unknown",
      },
      os: {
        name: "Unknown",
        version: "Unknown",
      },
      device: {
        type: "Unknown",
        vendor: "Unknown",
        model: "Unknown",
      },
      engine: {
        name: "Unknown",
        version: "Unknown",
      },
    };

    // Browser detection
    if (ua.includes("Chrome")) {
      parsed.browser.name = "Chrome";
      const match = ua.match(/Chrome\/([0-9.]+)/);
      if (match) parsed.browser.version = match[1];
    } else if (ua.includes("Firefox")) {
      parsed.browser.name = "Firefox";
      const match = ua.match(/Firefox\/([0-9.]+)/);
      if (match) parsed.browser.version = match[1];
    } else if (ua.includes("Safari") && !ua.includes("Chrome")) {
      parsed.browser.name = "Safari";
      const match = ua.match(/Version\/([0-9.]+)/);
      if (match) parsed.browser.version = match[1];
    } else if (ua.includes("Edge")) {
      parsed.browser.name = "Edge";
      const match = ua.match(/Edge\/([0-9.]+)/);
      if (match) parsed.browser.version = match[1];
    }

    // OS detection
    if (ua.includes("Windows NT")) {
      parsed.os.name = "Windows";
      const match = ua.match(/Windows NT ([0-9.]+)/);
      if (match) {
        const version = match[1];
        if (version === "10.0") parsed.os.version = "10";
        else if (version === "6.3") parsed.os.version = "8.1";
        else if (version === "6.2") parsed.os.version = "8";
        else if (version === "6.1") parsed.os.version = "7";
        else parsed.os.version = version;
      }
    } else if (ua.includes("Mac OS X")) {
      parsed.os.name = "macOS";
      const match = ua.match(/Mac OS X ([0-9._]+)/);
      if (match) parsed.os.version = match[1].replace(/_/g, ".");
    } else if (ua.includes("Linux")) {
      parsed.os.name = "Linux";
    } else if (ua.includes("Android")) {
      parsed.os.name = "Android";
      const match = ua.match(/Android ([0-9.]+)/);
      if (match) parsed.os.version = match[1];
    } else if (
      ua.includes("iOS") ||
      ua.includes("iPhone") ||
      ua.includes("iPad")
    ) {
      parsed.os.name = "iOS";
      const match = ua.match(/OS ([0-9_]+)/);
      if (match) parsed.os.version = match[1].replace(/_/g, ".");
    }

    // Device detection
    if (ua.includes("Mobile") || ua.includes("Android")) {
      parsed.device.type = "Mobile";
    } else if (ua.includes("Tablet") || ua.includes("iPad")) {
      parsed.device.type = "Tablet";
    } else {
      parsed.device.type = "Desktop";
    }

    if (ua.includes("iPhone")) {
      parsed.device.vendor = "Apple";
      parsed.device.model = "iPhone";
    } else if (ua.includes("iPad")) {
      parsed.device.vendor = "Apple";
      parsed.device.model = "iPad";
    } else if (ua.includes("Samsung")) {
      parsed.device.vendor = "Samsung";
    }

    // Engine detection
    if (ua.includes("WebKit")) {
      parsed.engine.name = "WebKit";
      const match = ua.match(/WebKit\/([0-9.]+)/);
      if (match) parsed.engine.version = match[1];
    } else if (ua.includes("Gecko")) {
      parsed.engine.name = "Gecko";
      const match = ua.match(/Gecko\/([0-9.]+)/);
      if (match) parsed.engine.version = match[1];
    } else if (ua.includes("Trident")) {
      parsed.engine.name = "Trident";
      const match = ua.match(/Trident\/([0-9.]+)/);
      if (match) parsed.engine.version = match[1];
    }

    return parsed;
  };

  const handleParse = () => {
    if (!userAgent.trim()) {
      toast.error("Please enter a user agent string");
      return;
    }

    const parsed = parseUserAgent(userAgent);
    setParsedData(parsed);
    toast.success("User agent parsed successfully!");
  };

  const loadCurrentUserAgent = () => {
    setUserAgent(navigator.userAgent);
    const parsed = parseUserAgent(navigator.userAgent);
    setParsedData(parsed);
    toast.success("Current user agent loaded!");
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (_error) {
      toast.error("Failed to copy");
    }
  };

  const getDeviceIcon = (type) => {
    switch (type) {
      case "Mobile":
        return <Smartphone className="h-5 w-5" />;
      case "Tablet":
        return <Smartphone className="h-5 w-5" />;
      default:
        return <Monitor className="h-5 w-5" />;
    }
  };

  useEffect(() => {
    loadCurrentUserAgent();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Online User Agent Parser
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Parse and analyze user agent strings to extract browser, OS, and
            device information.
          </p>
        </div>

        {/* Input Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>User Agent String</CardTitle>
            <CardDescription>
              Enter a user agent string to analyze or use your current one
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userAgent">User Agent</Label>
              <Textarea
                id="userAgent"
                placeholder="Enter user agent string here..."
                value={userAgent}
                onChange={(e) => setUserAgent(e.target.value)}
                rows={4}
                className="font-mono text-sm"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button onClick={handleParse} className="flex-1">
                Parse User Agent
              </Button>
              <Button onClick={loadCurrentUserAgent} variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Use Current Browser
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        {parsedData && (
          <div className="space-y-6">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getDeviceIcon(parsedData.device.type)}
                  Device Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">
                      Browser
                    </h3>
                    <div className="text-lg font-bold">
                      {parsedData.browser.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {parsedData.browser.version}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">
                      Operating System
                    </h3>
                    <div className="text-lg font-bold">
                      {parsedData.os.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {parsedData.os.version}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">
                      Device Type
                    </h3>
                    <div className="text-lg font-bold">
                      {parsedData.device.type}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {parsedData.device.vendor} {parsedData.device.model}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">Engine</h3>
                    <div className="text-lg font-bold">
                      {parsedData.engine.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {parsedData.engine.version}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Browser Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Name:</span>
                    <Badge variant="secondary">{parsedData.browser.name}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Version:</span>
                    <span>{parsedData.browser.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Engine:</span>
                    <span>
                      {parsedData.engine.name} {parsedData.engine.version}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">OS:</span>
                    <Badge variant="secondary">{parsedData.os.name}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Version:</span>
                    <span>{parsedData.os.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Device:</span>
                    <span>{parsedData.device.type}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Raw User Agent */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Raw User Agent String
                  <Button
                    onClick={() => copyToClipboard(parsedData.userAgent)}
                    variant="outline"
                    size="sm"
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm break-all">
                    {parsedData.userAgent}
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Monitor className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Browser Detection</h3>
                <p className="text-sm text-muted-foreground">
                  Identify browser name and version accurately
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Smartphone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Device Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Detect device type, vendor, and model
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Copy className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Easy Sharing</h3>
                <p className="text-sm text-muted-foreground">
                  Copy results and user agent strings
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
