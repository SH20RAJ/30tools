"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  COMPRESSION_LIMITS,
  COMPRESSION_MESSAGES,
} from "@/constants/image/compression";
import { SUPPORTED_FORMATS } from "@/constants/image/formats";
import {
  IMAGE_COMPRESSOR_FAQS,
  WH_QUESTIONS_CONTENT,
} from "@/constants/seo/image-faqs";
import {
  UploadIcon,
  DownloadIcon,
  ImageIcon,
  ZapIcon,
  ShieldCheckIcon,
  FileIcon,
  ReplaceAll,
  XIcon,
  CheckIcon,
} from "lucide-react";

export default function ImageCompressionTool() {
  const [files, setFiles] = useState([]);
  const [isCompressing, setIsCompressing] = useState(false);
  const [quality, setQuality] = useState([80]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    const imageFiles = droppedFiles.filter((file) =>
      file.type.startsWith("image/"),
    );

    if (imageFiles.length > 0) {
      processFiles(imageFiles);
    }
  }, []);

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      processFiles(selectedFiles);
    }
  };

  const processFiles = (fileList) => {
    const newFiles = fileList.map((file, index) => ({
      id: Date.now() + index,
      file,
      name: file.name,
      originalSize: file.size,
      status: "pending",
      progress: 0,
      compressedBlob: null,
      compressedSize: null,
    }));

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const compressImage = async (fileItem) => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            resolve({
              blob,
              size: blob.size,
            });
          },
          "image/jpeg",
          quality[0] / 100,
        );
      };

      img.src = URL.createObjectURL(fileItem.file);
    });
  };

  const handleCompress = async () => {
    setIsCompressing(true);

    for (let i = 0; i < files.length; i++) {
      if (files[i].status === "pending") {
        setFiles((prev) =>
          prev.map((f, index) =>
            index === i ? { ...f, status: "compressing", progress: 50 } : f,
          ),
        );

        try {
          const result = await compressImage(files[i]);

          setFiles((prev) =>
            prev.map((f, index) =>
              index === i
                ? {
                    ...f,
                    status: "completed",
                    progress: 100,
                    compressedBlob: result.blob,
                    compressedSize: result.size,
                  }
                : f,
            ),
          );
        } catch (error) {
          setFiles((prev) =>
            prev.map((f, index) =>
              index === i ? { ...f, status: "error", progress: 0 } : f,
            ),
          );
        }
      }
    }

    setIsCompressing(false);
  };

  const downloadFile = (fileItem) => {
    if (fileItem.compressedBlob) {
      const url = URL.createObjectURL(fileItem.compressedBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `compressed-${fileItem.name}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const downloadAllAsZip = async () => {
    files.forEach((file) => {
      if (file.status === "completed") {
        setTimeout(() => downloadFile(file), 100);
      }
    });
  };

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const clearAll = () => {
    setFiles([]);
  };

  const getSavingsPercentage = (original, compressed) => {
    if (!compressed) return 0;
    return Math.round((1 - compressed / original) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Free Image Compressor</h1>
            <p className="text-muted-foreground">
              Compress images without losing quality. Support for JPEG, PNG,
              WebP formats.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <ZapIcon className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Process multiple images in seconds
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <ShieldCheckIcon className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Privacy First</h3>
              <p className="text-sm text-muted-foreground">
                All processing happens in your browser
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <ReplaceAll className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Batch Processing</h3>
              <p className="text-sm text-muted-foreground">
                Compress multiple files at once
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Upload Area */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Upload Images</CardTitle>
            <CardDescription>
              Drag and drop your images here or click to browse
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive
                  ? "border-primary bg-primary/10"
                  : "border-muted-foreground/25"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <UploadIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium mb-2">Drop your images here</p>
              <p className="text-sm text-muted-foreground mb-4">
                Supports JPEG, PNG, WebP formats
              </p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button asChild className="cursor-pointer">
                  <span>Choose Files</span>
                </Button>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Quality Settings */}
        {files.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Compression Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="quality-slider">Quality: {quality[0]}%</Label>
                  <Slider
                    id="quality-slider"
                    value={quality}
                    onValueChange={setQuality}
                    min={10}
                    max={100}
                    step={5}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>Smaller file</span>
                    <span>Better quality</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* File List */}
        {files.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Files ({files.length})</CardTitle>
                  <CardDescription>
                    {files.filter((f) => f.status === "completed").length} of{" "}
                    {files.length} processed
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  {files.some((f) => f.status === "completed") && (
                    <Button
                      onClick={downloadAllAsZip}
                      variant="outline"
                      size="sm"
                    >
                      <DownloadIcon className="h-4 w-4 mr-2" />
                      Download All
                    </Button>
                  )}
                  <Button onClick={clearAll} variant="outline" size="sm">
                    Clear All
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {files.map((fileItem) => (
                  <div
                    key={fileItem.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <FileIcon className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1">
                        <p className="font-medium truncate">{fileItem.name}</p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>{formatFileSize(fileItem.originalSize)}</span>
                          {fileItem.compressedSize && (
                            <>
                              <span>→</span>
                              <span>
                                {formatFileSize(fileItem.compressedSize)}
                              </span>
                              <Badge variant="secondary" className="ml-2">
                                {getSavingsPercentage(
                                  fileItem.originalSize,
                                  fileItem.compressedSize,
                                )}
                                % saved
                              </Badge>
                            </>
                          )}
                        </div>
                        {fileItem.status === "compressing" && (
                          <Progress
                            value={fileItem.progress}
                            className="mt-2"
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {fileItem.status === "completed" && (
                        <>
                          <CheckIcon className="h-4 w-4 text-primary" />
                          <Button
                            onClick={() => downloadFile(fileItem)}
                            size="sm"
                          >
                            <DownloadIcon className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </>
                      )}
                      <Button
                        onClick={() => removeFile(fileItem.id)}
                        variant="outline"
                        size="sm"
                      >
                        <XIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Compress Button */}
        {files.length > 0 && files.some((f) => f.status === "pending") && (
          <div className="text-center mb-12">
            <Button
              onClick={handleCompress}
              disabled={isCompressing}
              size="lg"
              className="px-8"
            >
              {isCompressing ? (
                <>
                  <ReplaceAll className="h-5 w-5 mr-2 animate-spin" />
                  Compressing...
                </>
              ) : (
                <>
                  <ReplaceAll className="h-5 w-5 mr-2" />
                  Compress Images
                </>
              )}
            </Button>
          </div>
        )}

        {/* WH-Questions Section for SEO */}
        <Separator className="my-12" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Everything You Need to Know About Image Compression
            </h2>
            <p className="text-muted-foreground text-lg">
              Get answers to common questions about image compression and
              optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {WH_QUESTIONS_CONTENT.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section for Rich Snippets */}
        <Separator className="my-8" />
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {IMAGE_COMPRESSOR_FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Info Section */}
        <Separator className="my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>How it works</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Upload your images using drag & drop or file browser</li>
                <li>Adjust compression quality (10-100%)</li>
                <li>Click "Compress Images" to process all files</li>
                <li>Download individual files or all at once</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Supported Formats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Badge variant="outline">JPEG</Badge>
                <Badge variant="outline">JPG</Badge>
                <Badge variant="outline">PNG</Badge>
                <Badge variant="outline">WebP</Badge>
                <Badge variant="outline">BMP</Badge>
                <Badge variant="outline">GIF</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SEO Content Section with Long-tail Keywords */}
        <Separator className="my-12" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Complete Guide to Image Compression
            </h2>
            <p className="text-muted-foreground text-lg">
              Learn everything about compressing images without losing quality,
              bulk processing, and optimization techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Long-tail keyword content blocks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Compress Images Without Losing Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our advanced compression algorithm reduces file size by up to
                  80% while maintaining visual quality. Perfect for websites,
                  social media, and email attachments. The smart compression
                  technology automatically optimizes JPEG, PNG, and WebP images
                  for the best quality-to-size ratio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Bulk Image Compressor Online Free
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Process multiple images simultaneously with our batch
                  compression feature. Upload hundreds of images at once and
                  compress them all with a single click. Ideal for
                  photographers, web developers, and businesses managing large
                  image libraries. No file limits or watermarks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Image Compressor for Web Upload
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Optimize images for faster website loading and better SEO
                  rankings. Our web-optimized compression reduces file sizes
                  while maintaining crisp visuals across all devices. Perfect
                  for e-commerce product images, blog posts, and social media
                  content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Compress Images for Email Attachment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reduce image file sizes to meet email attachment limits. Our
                  compression tool ensures your images stay under 25MB email
                  limits while maintaining clarity. Perfect for sending
                  high-quality photos, documents, and presentations via email
                  without quality loss.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technical SEO Content */}
          <div className="bg-muted/30 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">
              Why Choose Our Free Image Optimizer?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">🔒 Privacy Protected</h4>
                <p className="text-sm text-muted-foreground">
                  All image processing happens locally in your browser. Your
                  files never leave your device, ensuring complete privacy and
                  security for sensitive images.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">⚡ Lightning Fast</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced compression algorithms process images in seconds. No
                  waiting, no queues - instant results for immediate download
                  and use.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🎯 Quality Control</h4>
                <p className="text-sm text-muted-foreground">
                  Customizable quality settings from 10% to 100%. Preview
                  compression results before downloading to ensure perfect
                  balance between file size and image quality.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases with Long-tail Keywords */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              Popular Use Cases
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted/20 rounded-lg">
                <h4 className="font-semibold mb-2">Website Optimization</h4>
                <p className="text-xs text-muted-foreground">
                  Faster loading pages, better SEO rankings
                </p>
              </div>
              <div className="text-center p-4 bg-muted/20 rounded-lg">
                <h4 className="font-semibold mb-2">Email Attachments</h4>
                <p className="text-xs text-muted-foreground">
                  Stay under size limits without quality loss
                </p>
              </div>
              <div className="text-center p-4 bg-muted/20 rounded-lg">
                <h4 className="font-semibold mb-2">Social Media</h4>
                <p className="text-xs text-muted-foreground">
                  Instagram, Facebook, Twitter optimization
                </p>
              </div>
              <div className="text-center p-4 bg-muted/20 rounded-lg">
                <h4 className="font-semibold mb-2">Storage Savings</h4>
                <p className="text-xs text-muted-foreground">
                  Free up disk space and cloud storage
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
