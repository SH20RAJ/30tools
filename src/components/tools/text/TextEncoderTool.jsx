"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, ArrowUpDown, FileText, Code } from "lucide-react";
import { toast } from "sonner";

export default function TextEncoderTool() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [encodingType, setEncodingType] = useState("url");
  const [activeTab, setActiveTab] = useState("encode");

  const encodeText = () => {
    if (!inputText.trim()) {
      toast.error("Please enter some text to encode");
      return;
    }

    let result = "";

    try {
      switch (encodingType) {
        case "url":
          result = encodeURIComponent(inputText);
          break;

        case "base64":
          result = btoa(unescape(encodeURIComponent(inputText)));
          break;

        case "html":
          result = inputText
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;")
            .replace(/\//g, "&#x2F;");
          break;

        case "uri":
          result = encodeURI(inputText);
          break;

        case "css":
          result = inputText.replace(/[^\w\s-]/g, (char) => {
            return "\\" + char.charCodeAt(0).toString(16) + " ";
          });
          break;

        case "javascript":
          result = inputText
            .replace(/[\\'"]/g, "\\$&")
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/\t/g, "\\t");
          break;

        case "hex":
          result = Array.from(inputText)
            .map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
            .join(" ");
          break;

        case "unicode":
          result = Array.from(inputText)
            .map(
              (char) =>
                "\\u" + char.charCodeAt(0).toString(16).padStart(4, "0"),
            )
            .join("");
          break;

        default:
          result = inputText;
      }

      setOutputText(result);
      toast.success("Text encoded successfully!");
    } catch (_error) {
      toast.error("Error encoding text: " + error.message);
    }
  };

  const decodeText = () => {
    if (!inputText.trim()) {
      toast.error("Please enter some text to decode");
      return;
    }

    let result = "";

    try {
      switch (encodingType) {
        case "url":
          result = decodeURIComponent(inputText);
          break;

        case "base64":
          result = decodeURIComponent(escape(atob(inputText)));
          break;

        case "html":
          result = inputText
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&#x27;/g, "'")
            .replace(/&#x2F;/g, "/");
          break;

        case "uri":
          result = decodeURI(inputText);
          break;

        case "css":
          result = inputText.replace(/\\([0-9a-fA-F]+)\s?/g, (match, code) => {
            return String.fromCharCode(parseInt(code, 16));
          });
          break;

        case "javascript":
          result = inputText
            .replace(/\\n/g, "\n")
            .replace(/\\r/g, "\r")
            .replace(/\\t/g, "\t")
            .replace(/\\([\\'"])/g, "$1");
          break;

        case "hex":
          result = inputText
            .split(" ")
            .filter((hex) => hex.length > 0)
            .map((hex) => String.fromCharCode(parseInt(hex, 16)))
            .join("");
          break;

        case "unicode":
          result = inputText.replace(/\\u([0-9a-fA-F]{4})/g, (match, code) => {
            return String.fromCharCode(parseInt(code, 16));
          });
          break;

        default:
          result = inputText;
      }

      setOutputText(result);
      toast.success("Text decoded successfully!");
    } catch (_error) {
      toast.error("Error decoding text: " + error.message);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch (_err) {
      toast.error("Failed to copy text");
    }
  };

  const clearAll = () => {
    setInputText("");
    setOutputText("");
    toast.success("Cleared all text");
  };

  const swapTexts = () => {
    if (!outputText) {
      toast.error("No output text to swap");
      return;
    }

    setInputText(outputText);
    setOutputText("");
    toast.success("Texts swapped!");
  };

  const exampleTexts = {
    url: "Hello World! @#$%^&*()",
    base64: "Hello World!",
    html: "<script>alert('hello')</script>",
    uri: "https://example.com/path?query=value",
    css: "body { background: url('image.jpg'); }",
    javascript: "var message = 'Hello \"World\"!';",
    hex: "Hello",
    unicode: "Hello 世界",
  };

  const encodingFormats = [
    {
      value: "url",
      label: "URL Encoding",
      description: "Percent encoding for URLs",
    },
    {
      value: "base64",
      label: "Base64",
      description: "Binary-safe text encoding",
    },
    {
      value: "html",
      label: "HTML Entities",
      description: "HTML character entities",
    },
    {
      value: "uri",
      label: "URI Encoding",
      description: "URI component encoding",
    },
    { value: "css", label: "CSS Escape", description: "CSS string escaping" },
    {
      value: "javascript",
      label: "JavaScript",
      description: "JavaScript string escaping",
    },
    {
      value: "hex",
      label: "Hexadecimal",
      description: "Hexadecimal representation",
    },
    {
      value: "unicode",
      label: "Unicode",
      description: "Unicode escape sequences",
    },
  ];

  const loadExample = () => {
    setInputText(exampleTexts[encodingType] || "Hello World!");
    setOutputText("");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Main Tool */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Text Encoder & Decoder Tool
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Encoding Type Selection */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Encoding Format:</Label>
            <Select value={encodingType} onValueChange={setEncodingType}>
              <SelectTrigger>
                <SelectValue placeholder="Select encoding format" />
              </SelectTrigger>
              <SelectContent>
                {encodingFormats.map((format) => (
                  <SelectItem key={format.value} value={format.value}>
                    <div className="flex flex-col">
                      <span>{format.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {format.description}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Input Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="input-text" className="text-base font-medium">
                Input Text:
              </Label>
              <Button
                onClick={loadExample}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                Load Example
              </Button>
            </div>
            <Textarea
              id="input-text"
              placeholder="Enter or paste your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[120px] resize-y font-mono"
            />
            <div className="text-sm text-muted-foreground">
              Characters: {inputText.length} | Bytes:{" "}
              {new TextEncoder().encode(inputText).length}
            </div>
          </div>

          {/* Action Buttons */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="encode">Encode</TabsTrigger>
              <TabsTrigger value="decode">Decode</TabsTrigger>
            </TabsList>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                onClick={activeTab === "encode" ? encodeText : decodeText}
                className="flex items-center gap-2"
                disabled={!inputText.trim()}
              >
                <Code className="h-4 w-4" />
                {activeTab === "encode" ? "Encode Text" : "Decode Text"}
              </Button>

              <Button
                onClick={swapTexts}
                variant="outline"
                className="flex items-center gap-2"
                disabled={!outputText}
              >
                <ArrowUpDown className="h-4 w-4" />
                Swap
              </Button>

              <Button
                onClick={clearAll}
                variant="outline"
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Clear
              </Button>
            </div>
          </Tabs>

          {/* Output Section */}
          {outputText && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">
                  {activeTab === "encode" ? "Encoded" : "Decoded"} Text:
                </Label>
                <Button
                  onClick={() => copyToClipboard(outputText)}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Copy className="h-4 w-4" />
                  Copy Result
                </Button>
              </div>
              <Textarea
                value={outputText}
                readOnly
                className="min-h-[120px] bg-muted font-mono"
              />
              <div className="text-sm text-muted-foreground">
                Characters: {outputText.length} | Bytes:{" "}
                {new TextEncoder().encode(outputText).length}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Encoding Format Details */}
      <Card>
        <CardHeader>
          <CardTitle>Encoding Format Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {encodingFormats.map((format) => (
              <div
                key={format.value}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  encodingType === format.value
                    ? "border-primary bg-primary/5"
                    : ""
                }`}
                onClick={() => setEncodingType(format.value)}
              >
                <h3 className="font-medium mb-2">{format.label}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {format.description}
                </p>
                <div className="bg-muted p-2 rounded font-mono text-xs">
                  <div>
                    <strong>Example:</strong>
                  </div>
                  <div className="mt-1 break-all">
                    {exampleTexts[format.value]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Encoding Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Common Encoding Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2 text-primary">URL Encoding:</h3>
                <div className="bg-muted p-3 rounded font-mono text-sm space-y-1">
                  <div>
                    <strong>Original:</strong> Hello World!
                  </div>
                  <div>
                    <strong>Encoded:</strong> Hello%20World%21
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2 text-primary">
                  Base64 Encoding:
                </h3>
                <div className="bg-muted p-3 rounded font-mono text-sm space-y-1">
                  <div>
                    <strong>Original:</strong> Hello World!
                  </div>
                  <div>
                    <strong>Encoded:</strong> SGVsbG8gV29ybGQh
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2 text-primary">
                  HTML Entities:
                </h3>
                <div className="bg-muted p-3 rounded font-mono text-sm space-y-1">
                  <div>
                    <strong>Original:</strong> &lt;script&gt;
                  </div>
                  <div>
                    <strong>Encoded:</strong> &amp;lt;script&amp;gt;
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2 text-primary">
                  Unicode Escapes:
                </h3>
                <div className="bg-muted p-3 rounded font-mono text-sm space-y-1">
                  <div>
                    <strong>Original:</strong> Hello 世界
                  </div>
                  <div>
                    <strong>Encoded:</strong> Hello \u4e16\u754c
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Tool Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-medium text-primary">✨ Encoding Formats:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• URL encoding for web parameters</li>
                <li>• Base64 encoding for binary data</li>
                <li>• HTML entity encoding for web content</li>
                <li>• Unicode escape sequences</li>
                <li>• Hexadecimal representation</li>
                <li>• CSS and JavaScript escaping</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium text-primary">🔧 Features:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Bidirectional encoding and decoding</li>
                <li>• Real-time character and byte counting</li>
                <li>• Example text for each encoding type</li>
                <li>• Error handling for invalid input</li>
                <li>• Quick copy to clipboard</li>
                <li>• Swap input and output easily</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
