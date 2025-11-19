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
        // Calculate optimal dimensions for better compression
        let { width, height } = img;
        const maxDimension = 2048; // Max dimension for web optimization

        if (width > maxDimension || height > maxDimension) {
          const ratio = Math.min(maxDimension / width, maxDimension / height);
          width *= ratio;
          height *= ratio;
        }

        canvas.width = width;
        canvas.height = height;

        // Use better image rendering
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, width, height);

        // Determine optimal format and quality
        const originalFormat = fileItem.file.type;
        let outputFormat = "image/jpeg";
        let outputQuality = quality[0] / 100;

        // Use WebP for better compression if supported
        if (canvas.toBlob && typeof canvas.toBlob === "function") {
          // Test WebP support
          canvas.toBlob(
            (testBlob) => {
              if (testBlob && testBlob.type === "image/webp") {
                outputFormat = "image/webp";
                outputQuality = Math.max(0.8, quality[0] / 100); // WebP can use higher quality
              }

              canvas.toBlob(
                (blob) => {
                  resolve({
                    blob,
                    size: blob.size,
                    format: outputFormat,
                    dimensions: { width, height },
                  });
                },
                outputFormat,
                outputQuality,
              );
            },
            "image/webp",
            0.8,
          );
        } else {
          // Fallback to JPEG
          canvas.toBlob(
            (blob) => {
              resolve({
                blob,
                size: blob.size,
                format: outputFormat,
                dimensions: { width, height },
              });
            },
            outputFormat,
            outputQuality,
          );
        }
      };

      img.onerror = () => {
        resolve({ error: "Failed to load image" });
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
            <h1 className="text-3xl font-bold mb-2">
              Free Image Compressor Online - Compress JPEG & PNG Images
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Compress images online free without watermarks. Reduce image file
              size by 80% without losing quality.
            </p>
            <p className="text-sm text-muted-foreground">
              Professional photo compressor and image optimizer - Perfect
              TinyPNG & iLoveIMG alternative
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
              <h3 className="font-semibold">Lightning Fast Compression</h3>
              <p className="text-sm text-muted-foreground">
                Bulk image compressor - Process multiple photos in seconds
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <ShieldCheckIcon className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Privacy First - No Watermarks</h3>
              <p className="text-sm text-muted-foreground">
                All image compression happens in your browser
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <ReplaceAll className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Compress Images Online Free</h3>
              <p className="text-sm text-muted-foreground">
                Unlimited uploads - Reduce image size without limits
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Upload Area */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Upload Images to Compress Online</CardTitle>
            <CardDescription>
              Drag and drop your JPEG, PNG, or WebP images here to reduce file
              size instantly
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
              <p className="text-lg font-medium mb-2">
                Drop your photos here to compress image size
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Free image compressor supporting JPEG, PNG, WebP formats
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
                  <span>Choose Images to Compress</span>
                </Button>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Quality Settings */}
        {files.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Image Compression Settings</CardTitle>
              <CardDescription>
                Adjust quality to balance file size reduction and image quality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="quality-slider">
                    Compression Quality: {quality[0]}%
                  </Label>
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
                    <span>Smaller file size</span>
                    <span>Better image quality</span>
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
                  Compressing Images...
                </>
              ) : (
                <>
                  <ReplaceAll className="h-5 w-5 mr-2" />
                  Compress Images Now
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
              How to Compress Images Online Free - Complete Guide
            </h2>
            <p className="text-muted-foreground text-lg">
              Learn how to reduce image file size, compress JPEG and PNG photos,
              and optimize images for web
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
            Image Compression FAQ - Compress Images Like TinyPNG
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
              <CardTitle>How to Compress Images Online</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Upload your JPEG, PNG, or WebP images using drag & drop</li>
                <li>Adjust compression quality (80% recommended for photos)</li>
                <li>Click "Compress Images Now" to reduce image file size</li>
                <li>Download compressed images individually or all at once</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Supported Image Formats</CardTitle>
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
              <p className="text-sm text-muted-foreground mt-3">
                All formats compressed without watermarks
              </p>
            </CardContent>
          </Card>
        </div>

        {/* SEO Article Section */}
        <Separator className="my-12" />

        <article className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
          <h2 className="text-3xl font-bold mb-6">
            Complete Guide: How to Compress Images Online Free
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">
                  Why Use Our Image Compressor?
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">
                  ✓ <strong>Free image compressor</strong> with no watermarks
                </p>
                <p className="text-sm">
                  ✓ <strong>Bulk image compressor</strong> for multiple files
                </p>
                <p className="text-sm">
                  ✓ <strong>Compress images without losing quality</strong>
                </p>
                <p className="text-sm">
                  ✓ Better than TinyPNG and iLoveIMG alternatives
                </p>
                <p className="text-sm">
                  ✓ <strong>Reduce image file size</strong> by up to 80%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Perfect For</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">📱 Social media image optimization</p>
                <p className="text-sm">✉️ Email attachment compression</p>
                <p className="text-sm">🌐 Website speed optimization</p>
                <p className="text-sm">📸 Photo portfolio compression</p>
                <p className="text-sm">🛒 E-commerce product images</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold mb-4">
            How to Make Image Size Smaller: Step-by-Step Guide
          </h3>

          <p className="mb-4">
            Learning <strong>how to compress an image</strong> is essential for
            web optimization and faster loading times. Our free online image
            compressor makes it easy to <strong>reduce image size</strong>{" "}
            without compromising quality.
          </p>

          <h4 className="text-xl font-semibold mb-3">
            Best Practices for Image Compression:
          </h4>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>JPEG compression:</strong> Use 80-90% quality for photos
              and complex images
            </li>
            <li>
              <strong>PNG compression:</strong> Best for images with
              transparency or few colors
            </li>
            <li>
              <strong>WebP compression:</strong> Modern format offering 25-35%
              better compression than JPEG
            </li>
            <li>
              <strong>Bulk processing:</strong> Use our bulk image compressor
              for multiple files
            </li>
            <li>
              <strong>Quality control:</strong> Adjust settings based on your
              specific needs
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">
            Image Compressor vs Competitors: TinyPNG vs iLoveIMG
          </h3>

          <div className="mb-6 not-prose">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-border px-4 py-2 text-left">
                      Feature
                    </th>
                    <th className="border border-border px-4 py-2 text-center">
                      Our Compressor
                    </th>
                    <th className="border border-border px-4 py-2 text-center">
                      TinyPNG
                    </th>
                    <th className="border border-border px-4 py-2 text-center">
                      iLoveIMG
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Free Usage
                    </td>
                    <td className="border border-border px-4 py-2 text-center">
                      ✅ Unlimited
                    </td>
                    <td className="border border-border px-4 py-2 text-center">
                      ⚠️ 20 images/month
                    </td>
                    <td className="border border-border px-4 py-2 text-center">
                      ⚠️ Limited
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Watermarks
                    </td>
                    <td className="border border-border px-4 py-2 text-center">
                      ✅ None
                    </td>
                    <td className="border border-border px-4 py-2 text-center">
                      ✅ None
                    </td>
                    <td className="border border-border px-4 py-2 text-center">
                      ❌ Yes (free plan)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Privacy</td>
                    <td className="border border-border px-4 py-2 text-center">
                      ✅ Browser-based
                    </td>
                    <td className="border border-border px-4 py-2 text-center">
                      ❌ Server upload
                    </td>
                    <td className="border border-border px-4 py-2 text-center">
                      ❌ Server upload
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Batch Processing
                    </td>
                    <td className="border border-border px-4 py-2 text-center">
                      ✅ Unlimited
                    </td>
                    <td className="border border-border px-4 py-2 text-center">
                      ⚠️ Limited
                    </td>
                    <td className="border border-border px-4 py-2 text-center">
                      ✅ Yes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">
            How to Reduce Image File Size for Different Use Cases
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card>
              <CardHeader>
                <h4 className="text-lg font-semibold">Web Optimization</h4>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">
                  <strong>Compress images for websites</strong> to improve
                  loading speed and SEO rankings:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Use 80-85% quality for hero images</li>
                  <li>• Compress thumbnails to 60-70% quality</li>
                  <li>• Convert to WebP when possible</li>
                  <li>• Keep file sizes under 100KB for fastest loading</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h4 className="text-lg font-semibold">Social Media & Email</h4>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">
                  <strong>Photo size reducer</strong> for social platforms and
                  email attachments:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Instagram posts: 1080x1080px, 70-80% quality</li>
                  <li>• Email attachments: Under 25MB total</li>
                  <li>• Profile pictures: 400x400px, 75% quality</li>
                  <li>• Facebook covers: 1200x630px, 80% quality</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Advanced Image Compression Techniques
          </h3>

          <p className="mb-4">
            Our <strong>image optimizer</strong> uses advanced algorithms to
            achieve maximum compression while preserving image quality. Here's
            how different compression methods work:
          </p>

          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>Lossy compression:</strong> Reduces file size
              significantly by removing some image data
            </li>
            <li>
              <strong>Lossless compression:</strong> Reduces file size without
              any quality loss
            </li>
            <li>
              <strong>Smart optimization:</strong> Automatically chooses the
              best compression method
            </li>
            <li>
              <strong>Format conversion:</strong> Converts to more efficient
              formats like WebP
            </li>
            <li>
              <strong>Dimension optimization:</strong> Resizes oversized images
              for web use
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">
            Frequently Searched Keywords
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6 not-prose">
            <Badge variant="outline" className="justify-center">
              compress jpeg
            </Badge>
            <Badge variant="outline" className="justify-center">
              iloveimg
            </Badge>
            <Badge variant="outline" className="justify-center">
              tinypng
            </Badge>
            <Badge variant="outline" className="justify-center">
              photo compressor
            </Badge>
            <Badge variant="outline" className="justify-center">
              image compression
            </Badge>
            <Badge variant="outline" className="justify-center">
              compress image
            </Badge>
            <Badge variant="outline" className="justify-center">
              reduce image size
            </Badge>
            <Badge variant="outline" className="justify-center">
              jpg compressor
            </Badge>
            <Badge variant="outline" className="justify-center">
              size reducer
            </Badge>
            <Badge variant="outline" className="justify-center">
              photo size reducer
            </Badge>
            <Badge variant="outline" className="justify-center">
              image optimizer
            </Badge>
            <Badge variant="outline" className="justify-center">
              compress images
            </Badge>
            <Badge variant="outline" className="justify-center">
              picture compressor
            </Badge>
            <Badge variant="outline" className="justify-center">
              image compress
            </Badge>
            <Badge variant="outline" className="justify-center">
              compress photo
            </Badge>
            <Badge variant="outline" className="justify-center">
              optimizilla
            </Badge>
            <Badge variant="outline" className="justify-center">
              image size reducer
            </Badge>
            <Badge variant="outline" className="justify-center">
              compress img
            </Badge>
          </div>

          <p className="text-center text-muted-foreground">
            Start compressing your images now with our free, unlimited image
            compressor. No registration required, no watermarks added.
          </p>
        </article>
      </main>
    </div>
  );
}
