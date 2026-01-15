"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Copy,
  Check,
  Eye,
  EyeOff,
  Play,
  Terminal,
  AlertCircle,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ApiKeyTester({ tool }) {
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  // Initialize status badging
  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "error":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-slate-500/10 text-slate-500 border-slate-500/20";
    }
  };

  const handleInputChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeBrowserTest = async () => {
    if (!apiKey) {
      setError("Please enter an API key");
      return;
    }

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      // Build options
      let url =
        typeof tool.endpoint === "function"
          ? tool.endpoint(apiKey)
          : tool.endpoint;
      
      // Handle query params if defined in input (basic implementation)
      // If the tool has specific input builders, we rely on tool.endpoint function usually.
      
      const headers = tool.headers ? tool.headers(apiKey) : {};
      const method = tool.method || "GET";
      const body = tool.body ? JSON.stringify(tool.body) : undefined;

      const response = await fetch(url, {
        method,
        headers,
        body,
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        // Run specific check if available
        if (tool.responseCheck) {
            if (tool.responseCheck(data)) {
                 setResult({ success: true, data });
            } else {
                 setResult({ success: false, data, message: "Response format validation failed" });
            }
        } else {
             setResult({ success: true, data });
        }
      } else {
        setResult({
          success: false,
          data,
          status: response.status,
          statusText: response.statusText,
        });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getCurlCommand = () => {
    if (!tool.curlCommand) return "";
    // Collect all args: key + input values in order
    // This assumes the inputs are passed as arguments to curlCommand in a specific order or we need to map them.
    // The data file defines inputs with names. 
    // Let's assume tool.curlCommand takes (key, val1, val2...) where val1 is inputs[0]
    
    const args = [apiKey];
    if (tool.inputs) {
        tool.inputs.forEach(input => {
            args.push(inputs[input.name] || "");
        });
    }
    
    return tool.curlCommand(...args);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="text-2xl flex items-center gap-2">
                {tool.name}
                {tool.type === "browser" ? (
                  <Badge variant="secondary" className="bg-green-500/10 text-green-600 hover:bg-green-500/20">
                    Browser Compatible
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="bg-orange-500/10 text-orange-600 hover:bg-orange-500/20">
                    Server Side Only
                  </Badge>
                )}
              </CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </div>
            {tool.documentationUrl && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={tool.documentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Docs
                </a>
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* API Key Input */}
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <div className="relative">
              <Input
                id="apiKey"
                type={showKey ? "text" : "password"}
                placeholder={`Enter your ${tool.name} API Key`}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="pr-10"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowKey(!showKey)}
              >
                {showKey ? (
                  <EyeOff className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Eye className="w-4 h-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>

          {/* Extra Inputs */}
          {tool.inputs && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tool.inputs.map((input) => (
                <div key={input.name} className="space-y-2">
                  <Label htmlFor={input.name}>{input.label}</Label>
                  <Input
                    id={input.name}
                    placeholder={`Enter ${input.label}`}
                    value={inputs[input.name] || ""}
                    onChange={(e) => handleInputChange(input.name, e.target.value)}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          {tool.type === "browser" ? (
            <Button
              onClick={executeBrowserTest}
              disabled={loading || !apiKey}
              className="w-full md:w-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Testing...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Test API Key
                </>
              )}
            </Button>
          ) : (
            <div className="space-y-4">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Terminal Required</AlertTitle>
                <AlertDescription>
                  This API cannot be tested directly in the browser due to CORS or security restrictions. 
                  Use the generated command below in your terminal.
                </AlertDescription>
              </Alert>
              <div className="relative group">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm break-all whitespace-pre-wrap">
                  {getCurlCommand() || "# Enter API Key to see command"}
                </div>
                {apiKey && (
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleCopy(getCurlCommand())}
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Browser Test Results */}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {result && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-4">
              <div className={`p-4 rounded-lg border flex items-center gap-3 ${
                  result.success ? "bg-green-500/10 border-green-500/20 text-green-700" : "bg-red-500/10 border-red-500/20 text-red-700"
              }`}>
                  {result.success ? <Check className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                  <div>
                      <p className="font-semibold">{result.success ? "Valid API Key" : "Test Failed"}</p>
                      {result.message && <p className="text-sm opacity-90">{result.message}</p>}
                      {!result.success && result.status && <p className="text-sm opacity-90">Status: {result.status} {result.statusText}</p>}
                  </div>
              </div>
              
              <div className="space-y-2">
                  <Label>Response Details</Label>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <pre className="text-xs font-mono">
                        {JSON.stringify(result.data, null, 2)}
                    </pre>
                  </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
