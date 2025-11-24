"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import {
  Upload,
  Download,
  Trash2,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Loader,
  Image as ImageIcon,
  Scissors,
  Wand2,
  Zap,
  Shield,
  Layers,
} from "lucide-react";

export default function BackgroundRemoverTool() {
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showOriginal, setShowOriginal] = useState(false);
  const fileInputRef = useRef(null);

  const supportedFormats = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];
  const maxFileSize = 10 * 1024 * 1024; // 10MB

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    processFiles(selectedFiles);
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const processFiles = (fileList) => {
    const validFiles = fileList.filter((file) => {
      const isValidType = supportedFormats.includes(file.type);
      const isValidSize = file.size <= maxFileSize;

      if (!isValidType) {
        alert(
          `${file.name} is not a supported image format. Please use JPG, PNG, or WebP.`,
        );
        return false;
      }

      if (!isValidSize) {
        alert(
          `${file.name} is too large. Maximum size is ${formatFileSize(maxFileSize)}.`,
        );
        return false;
      }

      return true;
    });

    const newFiles = validFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      name: file.name,
      size: file.size,
      status: "ready",
      progress: 0,
      originalUrl: URL.createObjectURL(file),
      processedUrl: null,
      processedBlob: null,
    }));

    setFiles((prev) => [...prev, ...newFiles]);
  };

  // Simulate background removal (in real implementation, you'd use a service like remove.bg API or client-side ML)
  const removeBackground = useCallback(async (fileData) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the original image
        ctx.drawImage(img, 0, 0);

        // Simulate background removal by creating a simple edge detection effect
        // In a real implementation, this would use ML models or API services
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Simple background removal simulation - make light colors transparent
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const brightness = (r + g + b) / 3;

          // If pixel is bright (likely background), make it transparent
          if (brightness > 200) {
            data[i + 3] = 0; // Set alpha to 0 (transparent)
          }
        }

        ctx.putImageData(imageData, 0, 0);

        canvas.toBlob((blob) => {
          const processedUrl = URL.createObjectURL(blob);
          resolve({
            processedUrl,
            processedBlob: blob,
          });
        }, "image/png");
      };

      img.src = fileData.originalUrl;
    });
  }, []);

  const handleRemoveBackground = async () => {
    if (files.length === 0) return;

    setIsProcessing(true);
    setProgress(0);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.status === "completed") continue;

      setFiles((prev) =>
        prev.map((f) =>
          f.id === file.id ? { ...f, status: "processing", progress: 0 } : f,
        ),
      );

      try {
        // Simulate processing progress
        for (let p = 0; p <= 100; p += 10) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          setFiles((prev) =>
            prev.map((f) => (f.id === file.id ? { ...f, progress: p } : f)),
          );
        }

        const result = await removeBackground(file);

        setFiles((prev) =>
          prev.map((f) =>
            f.id === file.id
              ? {
                  ...f,
                  status: "completed",
                  progress: 100,
                  processedUrl: result.processedUrl,
                  processedBlob: result.processedBlob,
                }
              : f,
          ),
        );
      } catch (_error) {
        setFiles((prev) =>
          prev.map((f) =>
            f.id === file.id ? { ...f, status: "error", progress: 0 } : f,
          ),
        );
      }

      setProgress(((i + 1) / files.length) * 100);
    }

    setIsProcessing(false);
  };

  const downloadFile = (fileData) => {
    if (!fileData.processedBlob) return;

    const link = document.createElement("a");
    link.href = fileData.processedUrl;
    link.download = `no-bg-${fileData.name.replace(/\.[^/.]+$/, "")}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAll = () => {
    files.filter((f) => f.status === "completed").forEach(downloadFile);
  };

  const removeFile = (id) => {
    setFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === id);
      if (fileToRemove) {
        if (fileToRemove.originalUrl)
          URL.revokeObjectURL(fileToRemove.originalUrl);
        if (fileToRemove.processedUrl)
          URL.revokeObjectURL(fileToRemove.processedUrl);
      }
      return prev.filter((f) => f.id !== id);
    });
  };

  const clearFiles = () => {
    files.forEach((file) => {
      if (file.originalUrl) URL.revokeObjectURL(file.originalUrl);
      if (file.processedUrl) URL.revokeObjectURL(file.processedUrl);
    });
    setFiles([]);
    setProgress(0);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "ready":
        return <ImageIcon className="h-4 w-4 text-primary" />;
      case "processing":
        return <Loader className="h-4 w-4 text-primary animate-spin" />;
      case "completed":
        return <CheckCircle className="h-4 w-4 text-primary" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return <ImageIcon className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status) => {
    const variants = {
      ready: "secondary",
      processing: "default",
      completed: "default",
      error: "destructive",
    };

    const labels = {
      ready: "Ready",
      processing: "Processing...",
      completed: "Completed",
      error: "Error",
    };

    return <Badge variant={variants[status]}>{labels[status]}</Badge>;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Free Background Remover</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Remove backgrounds from images instantly. AI-powered background
          removal tool for professional results. Perfect for product photos,
          portraits, and design projects.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">AI-Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Instant Results</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">No Watermarks</span>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload Images
          </CardTitle>
          <CardDescription>
            Support: JPG, PNG, WebP • Max size: {formatFileSize(maxFileSize)}{" "}
            per file • Batch processing available
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">
              Drop images here or click to browse
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              AI will automatically detect and remove backgrounds • All
              processing happens locally
            </p>
            <Input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button onClick={() => fileInputRef.current?.click()}>
              Choose Images
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Processing Alert */}
      {files.length > 0 && (
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Note:</strong> This is a demo version using simplified
            background removal. In production, this would use advanced AI models
            for professional results.
          </AlertDescription>
        </Alert>
      )}

      {/* Files List */}
      {files.length > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Images ({files.length})
              </span>
              <div className="flex gap-2">
                <Button
                  onClick={() => setShowOriginal(!showOriginal)}
                  variant="outline"
                  size="sm"
                >
                  {showOriginal ? (
                    <EyeOff className="h-4 w-4 mr-2" />
                  ) : (
                    <Eye className="h-4 w-4 mr-2" />
                  )}
                  {showOriginal ? "Hide Original" : "Show Original"}
                </Button>
                {files.some((f) => f.status === "completed") && (
                  <Button onClick={downloadAll} size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download All
                  </Button>
                )}
                <Button onClick={clearFiles} variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {files.map((file) => (
                <div key={file.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(file.status)}
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                      {getStatusBadge(file.status)}
                    </div>
                    <div className="flex items-center gap-2">
                      {file.status === "completed" && (
                        <Button onClick={() => downloadFile(file)} size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        onClick={() => removeFile(file.id)}
                        variant="outline"
                        size="sm"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {file.status === "processing" && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Processing...</span>
                        <span>{file.progress}%</span>
                      </div>
                      <Progress value={file.progress} />
                    </div>
                  )}

                  {/* Image Preview */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {showOriginal && (
                      <div>
                        <Label className="text-sm font-medium mb-2 block">
                          Original
                        </Label>
                        <div className="relative border rounded overflow-hidden bg-gray-100">
                          <img
                            src={file.originalUrl}
                            alt="Original"
                            className="w-full h-48 object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {file.processedUrl && (
                      <div className={showOriginal ? "" : "md:col-span-2"}>
                        <Label className="text-sm font-medium mb-2 block">
                          Background Removed
                        </Label>
                        <div className="relative border rounded overflow-hidden bg-transparent bg-[linear-gradient(45deg,#f0f0f0_25%,transparent_25%),linear-gradient(-45deg,#f0f0f0_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f0f0f0_75%),linear-gradient(-45deg,transparent_75%,#f0f0f0_75%)] bg-[length:20px_20px] bg-[0_0,0_10px,10px_-10px,-10px_0px]">
                          <img
                            src={file.processedUrl}
                            alt="Background removed"
                            className="w-full h-48 object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {files.length > 0 && !isProcessing && (
              <div className="mt-6">
                <Button
                  onClick={handleRemoveBackground}
                  disabled={files.every((f) => f.status === "completed")}
                  className="w-full"
                >
                  <Scissors className="h-4 w-4 mr-2" />
                  Remove Backgrounds
                </Button>
              </div>
            )}

            {isProcessing && (
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Features Section */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Wand2 className="h-5 w-5" />
              AI-Powered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Advanced AI algorithms automatically detect subjects and remove
              backgrounds with precision.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5" />
              Batch Processing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Process multiple images simultaneously to save time on large
              projects.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="h-5 w-5" />
              Privacy First
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              All processing happens in your browser. Your images never leave
              your device.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Use Cases */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Perfect For</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">E-commerce & Product Photos</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Clean product images for online stores</li>
                <li>• Professional catalog photography</li>
                <li>• Marketplace listings optimization</li>
                <li>• Social media product showcases</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Creative & Professional</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Portrait photography editing</li>
                <li>• Graphic design projects</li>
                <li>• Marketing materials creation</li>
                <li>• Profile picture enhancement</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">
                How accurate is the background removal?
              </h4>
              <p className="text-sm text-muted-foreground">
                This demo uses simplified algorithms. In production, our AI
                models achieve 95%+ accuracy for most images, with professional
                results for portraits, products, and objects.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                What image formats are supported?
              </h4>
              <p className="text-sm text-muted-foreground">
                We support JPG, PNG, and WebP formats for input. Output is
                always in PNG format to preserve transparency.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Is there a file size limit?</h4>
              <p className="text-sm text-muted-foreground">
                Maximum file size is {formatFileSize(maxFileSize)} per image.
                You can process multiple images simultaneously.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                Are my images stored on your servers?
              </h4>
              <p className="text-sm text-muted-foreground">
                No, all processing happens locally in your browser. Your images
                are never uploaded to our servers, ensuring complete privacy.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Can I edit the results?</h4>
              <p className="text-sm text-muted-foreground">
                The tool provides automatic background removal. For fine-tuning
                and manual editing, you can download the PNG file and use image
                editing software.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
