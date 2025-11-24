"use client";

import { useState, useRef } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ImageIcon,
  CopyIcon,
  ArrowLeftIcon,
  UploadIcon,
  DownloadIcon,
  RefreshCwIcon,
} from "lucide-react";
import Link from "next/link";

export default function Base64ImageTool() {
  const [base64String, setBase64String] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [fileInfo, setFileInfo] = useState(null);
  const [mode, setMode] = useState("encode");
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target.result;
      const base64 = result.split(",")[1]; // Remove data:image/jpeg;base64, prefix
      const dataUrl = result; // Keep full data URL for preview

      setBase64String(base64);
      setImagePreview(dataUrl);
      setFileInfo({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: new Date(file.lastModified).toLocaleString(),
      });
    };
    reader.readAsDataURL(file);
  };

  const handleBase64Input = (value) => {
    setBase64String(value);

    // Try to create preview from base64
    try {
      // Check if it already has data URL prefix
      let dataUrl = value;
      if (!value.startsWith("data:")) {
        // Assume it's a JPEG if no prefix
        dataUrl = `data:image/jpeg;base64,${value}`;
      }

      // Test if it's a valid image
      const img = new Image();
      img.onload = () => {
        setImagePreview(dataUrl);
      };
      img.onerror = () => {
        setImagePreview("");
      };
      img.src = dataUrl;
    } catch (_error) {
      setImagePreview("");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const downloadBase64AsImage = () => {
    if (!base64String) return;

    try {
      const dataUrl = base64String.startsWith("data:")
        ? base64String
        : `data:image/jpeg;base64,${base64String}`;

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (_error) {
      alert("Error downloading image");
    }
  };

  const clearAll = () => {
    setBase64String("");
    setImagePreview("");
    setFileInfo(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <ImageIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Base64 Image Converter</h1>
              <p className="text-muted-foreground">
                Convert images to Base64 and decode Base64 to images
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Image Encoding</Badge>
            <Badge variant="secondary">Base64 Decoding</Badge>
            <Badge variant="secondary">File Upload</Badge>
            <Badge variant="secondary">Download Image</Badge>
          </div>
        </div>

        {/* Mode Switcher */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center gap-4">
              <Button
                variant={mode === "encode" ? "default" : "outline"}
                onClick={() => setMode("encode")}
              >
                <UploadIcon className="h-4 w-4 mr-2" />
                Image to Base64
              </Button>
              <Button
                variant={mode === "decode" ? "default" : "outline"}
                onClick={() => setMode("decode")}
              >
                <DownloadIcon className="h-4 w-4 mr-2" />
                Base64 to Image
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {mode === "encode" ? "Upload Image" : "Base64 Input"}
                <Button onClick={clearAll} variant="ghost" size="sm">
                  <RefreshCwIcon className="h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription>
                {mode === "encode"
                  ? "Select an image file to convert to Base64"
                  : "Paste Base64 string to decode as image"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {mode === "encode" ? (
                <div className="space-y-4">
                  <div
                    className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <UploadIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-2">
                      Click to upload image
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supports JPG, PNG, GIF, WebP files
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>

                  {fileInfo && (
                    <div className="text-sm space-y-1 bg-muted p-3 rounded">
                      <div>
                        <strong>File:</strong> {fileInfo.name}
                      </div>
                      <div>
                        <strong>Size:</strong> {formatFileSize(fileInfo.size)}
                      </div>
                      <div>
                        <strong>Type:</strong> {fileInfo.type}
                      </div>
                      <div>
                        <strong>Modified:</strong> {fileInfo.lastModified}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <Textarea
                    value={base64String}
                    onChange={(e) => handleBase64Input(e.target.value)}
                    placeholder="Paste Base64 string here..."
                    className="min-h-[200px] font-mono text-sm"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={() => copyToClipboard(base64String)}
                      variant="outline"
                      className="flex-1"
                    >
                      <CopyIcon className="h-4 w-4 mr-2" />
                      Copy Base64
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {mode === "encode" ? "Base64 Output" : "Image Preview"}
              </CardTitle>
              <CardDescription>
                {mode === "encode"
                  ? "Generated Base64 string"
                  : "Decoded image preview"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {mode === "encode" ? (
                <div className="space-y-4">
                  <Textarea
                    value={base64String}
                    readOnly
                    className="min-h-[200px] font-mono text-sm bg-muted"
                    placeholder="Base64 string will appear here..."
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={() => copyToClipboard(base64String)}
                      className="flex-1"
                      disabled={!base64String}
                    >
                      <CopyIcon className="h-4 w-4 mr-2" />
                      Copy Base64
                    </Button>
                    <Button
                      onClick={() =>
                        copyToClipboard(
                          `data:image/jpeg;base64,${base64String}`,
                        )
                      }
                      variant="outline"
                      disabled={!base64String}
                    >
                      Copy Data URL
                    </Button>
                  </div>
                  {base64String && (
                    <div className="text-sm text-muted-foreground">
                      Base64 length: {base64String.length} characters
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {imagePreview ? (
                    <div className="text-center">
                      <img
                        src={imagePreview}
                        alt="Decoded preview"
                        className="max-w-full max-h-64 mx-auto rounded border"
                      />
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <ImageIcon className="h-16 w-16 mx-auto mb-4" />
                      <p>Image preview will appear here</p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button
                      onClick={downloadBase64AsImage}
                      className="flex-1"
                      disabled={!imagePreview}
                    >
                      <DownloadIcon className="h-4 w-4 mr-2" />
                      Download Image
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Image Preview for Encode Mode */}
        {mode === "encode" && imagePreview && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Image Preview</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <img
                src={imagePreview}
                alt="Uploaded preview"
                className="max-w-full max-h-64 mx-auto rounded border"
              />
            </CardContent>
          </Card>
        )}

        {/* Information */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>About Base64 Image Encoding</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="usage" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="usage">Usage</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="limitations">Limitations</TabsTrigger>
              </TabsList>

              <TabsContent value="usage" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Web Development</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Embed images directly in CSS/HTML</li>
                      <li>• Reduce HTTP requests</li>
                      <li>• Store images in databases</li>
                      <li>• Create data URLs for icons</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">API Integration</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Send images via JSON APIs</li>
                      <li>• Store images in text fields</li>
                      <li>• Email image attachments</li>
                      <li>• Mobile app development</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="benefits" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Performance</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Eliminates separate image requests</li>
                      <li>• Faster page load for small images</li>
                      <li>• No broken image links</li>
                      <li>• Works offline</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Convenience</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Self-contained HTML/CSS files</li>
                      <li>• Easy to share and backup</li>
                      <li>• No external dependencies</li>
                      <li>• Cross-platform compatibility</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="limitations" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">File Size</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 33% larger than original image</li>
                      <li>• Not suitable for large images</li>
                      <li>• Increases HTML/CSS file size</li>
                      <li>• No browser caching benefits</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Best Practices</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Use for small images (&lt;10KB)</li>
                      <li>• Ideal for icons and logos</li>
                      <li>• Consider SVG for vector graphics</li>
                      <li>• Test performance impact</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
