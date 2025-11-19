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
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeftIcon,
  SendIcon,
  CopyIcon,
  RefreshCwIcon,
  Globe,
  CheckCircleIcon,
  XCircleIcon,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function APITester() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState(
    '{"Content-Type": "application/json"}',
  );
  const [body, setBody] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const methods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"];

  const sendRequest = async () => {
    if (!url.trim()) {
      toast.error("Please enter a URL");
      return;
    }

    setLoading(true);
    try {
      const requestOptions = {
        method: method,
        headers: headers ? JSON.parse(headers) : {},
      };

      if (method !== "GET" && method !== "HEAD" && body) {
        requestOptions.body = body;
      }

      const startTime = Date.now();
      const res = await fetch(url, requestOptions);
      const endTime = Date.now();

      const responseText = await res.text();

      setStatus({
        code: res.status,
        statusText: res.statusText,
        time: endTime - startTime,
        headers: Object.fromEntries(res.headers.entries()),
      });

      // Try to format JSON response
      try {
        const jsonResponse = JSON.parse(responseText);
        setResponse(JSON.stringify(jsonResponse, null, 2));
      } catch {
        setResponse(responseText);
      }

      toast.success(`Request completed (${res.status})`);
    } catch (error) {
      setStatus({
        code: 0,
        statusText: "Network Error",
        time: 0,
        headers: {},
      });
      setResponse(`Error: ${error.message}`);
      toast.error("Request failed");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Response copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy response");
    }
  };

  const clearAll = () => {
    setUrl("");
    setHeaders('{"Content-Type": "application/json"}');
    setBody("");
    setResponse("");
    setStatus(null);
  };

  const loadExample = (type) => {
    const examples = {
      get: {
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "GET",
        headers: '{"Accept": "application/json"}',
      },
      post: {
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        headers: '{"Content-Type": "application/json"}',
        body: '{"title": "Test Post", "body": "This is a test", "userId": 1}',
      },
    };

    const example = examples[type];
    setMethod(example.method);
    setUrl(example.url);
    setHeaders(example.headers);
    setBody(example.body || "");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">API Tester</h1>
              <p className="text-muted-foreground">
                Test REST APIs and HTTP endpoints
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">REST API</Badge>
            <Badge variant="secondary">HTTP Testing</Badge>
            <Badge variant="secondary">Response Viewer</Badge>
            <Badge variant="secondary">Free Forever</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Request Configuration</CardTitle>
                <CardDescription>
                  Configure your API request parameters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-4 gap-2">
                  <Select value={method} onValueChange={setMethod}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {methods.map((m) => (
                        <SelectItem key={m} value={m}>
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Enter API URL..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="col-span-3"
                  />
                </div>

                <Tabs defaultValue="headers">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="headers">Headers</TabsTrigger>
                    <TabsTrigger value="body">Body</TabsTrigger>
                  </TabsList>

                  <TabsContent value="headers" className="space-y-2">
                    <Label>Request Headers (JSON)</Label>
                    <Textarea
                      placeholder='{"Content-Type": "application/json"}'
                      value={headers}
                      onChange={(e) => setHeaders(e.target.value)}
                      className="min-h-[100px] font-mono text-sm"
                    />
                  </TabsContent>

                  <TabsContent value="body" className="space-y-2">
                    <Label>Request Body</Label>
                    <Textarea
                      placeholder="Enter request body..."
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      className="min-h-[100px] font-mono text-sm"
                    />
                  </TabsContent>
                </Tabs>

                <div className="flex gap-2">
                  <Button
                    onClick={sendRequest}
                    disabled={loading}
                    className="flex-1"
                  >
                    <SendIcon className="h-4 w-4 mr-2" />
                    {loading ? "Sending..." : "Send Request"}
                  </Button>
                  <Button onClick={clearAll} variant="outline">
                    <RefreshCwIcon className="h-4 w-4 mr-2" />
                    Clear
                  </Button>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Quick Examples</Label>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => loadExample("get")}
                    >
                      GET Example
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => loadExample("post")}
                    >
                      POST Example
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {status && (
              <Card>
                <CardHeader>
                  <CardTitle>Response Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      {status.code >= 200 && status.code < 300 ? (
                        <CheckCircleIcon className="h-5 w-5 text-primary" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 text-destructive" />
                      )}
                      <span className="font-mono">
                        {status.code} {status.statusText}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Time: {status.time}ms
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Response</CardTitle>
                <CardDescription>API response data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={response}
                  readOnly
                  placeholder="Response will appear here..."
                  className="min-h-[300px] font-mono text-sm bg-muted"
                />
                <Button
                  onClick={() => copyToClipboard(response)}
                  disabled={!response}
                  variant="outline"
                  size="sm"
                >
                  <CopyIcon className="h-4 w-4 mr-2" />
                  {copied ? "Copied!" : "Copy Response"}
                </Button>
              </CardContent>
            </Card>

            {status?.headers && (
              <Card>
                <CardHeader>
                  <CardTitle>Response Headers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 font-mono text-sm">
                    {Object.entries(status.headers).map(([key, value]) => (
                      <div key={key} className="grid grid-cols-3 gap-2">
                        <span className="font-medium">{key}:</span>
                        <span className="col-span-2 break-all">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Support for all HTTP methods
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Custom headers configuration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Request body for POST/PUT requests
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Response time measurement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  Response headers viewer
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-primary" />
                  JSON response formatting
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">CORS Limitations</h4>
                <p className="text-sm text-muted-foreground">
                  Some APIs may block requests due to CORS policy. This is a
                  browser security feature.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">Headers Format</h4>
                <p className="text-sm text-muted-foreground">
                  Headers must be valid JSON format with key-value pairs.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-1">Authentication</h4>
                <p className="text-sm text-muted-foreground">
                  Add authentication headers like "Authorization": "Bearer
                  token" in the headers section.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
