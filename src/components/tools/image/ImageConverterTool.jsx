"use client";

import { useState, useRef, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeftIcon,
  UploadIcon,
  DownloadIcon,
  ImageIcon,
  RefreshCwIcon,
  TrashIcon,
  SettingsIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  ZapIcon,
  ShieldIcon,
  CopyIcon,
  FolderIcon,
} from "lucide-react";
import Link from "next/link";

export default function ImageConverterTool() {
  const [files, setFiles] = useState([]);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [conversionSettings, setConversionSettings] = useState({
    outputFormat: "png",
    quality: [90],
    maintainAspectRatio: true,
    preserveExif: false,
    resizeWidth: "",
    resizeHeight: "",
    enableResize: false,
  });
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);

  // Supported formats with detailed info
  const supportedFormats = {
    input: {
      "image/jpeg": { ext: ".jpg/.jpeg", name: "JPEG", icon: "📷" },
      "image/png": { ext: ".png", name: "PNG", icon: "🖼️" },
      "image/webp": { ext: ".webp", name: "WebP", icon: "🌐" },
      "image/gif": { ext: ".gif", name: "GIF", icon: "🎞️" },
      "image/bmp": { ext: ".bmp", name: "BMP", icon: "🎨" },
      "image/tiff": { ext: ".tiff", name: "TIFF", icon: "📋" },
      "image/heic": { ext: ".heic", name: "HEIC", icon: "📱" },
      "image/heif": { ext: ".heif", name: "HEIF", icon: "📱" },
    },
    output: {
      jpeg: {
        ext: ".jpg",
        name: "JPEG",
        icon: "📷",
        description: "Best for photos, smaller file size",
      },
      png: {
        ext: ".png",
        name: "PNG",
        icon: "🖼️",
        description: "Best for graphics, supports transparency",
      },
      webp: {
        ext: ".webp",
        name: "WebP",
        icon: "🌐",
        description: "Modern format, excellent compression",
      },
      gif: {
        ext: ".gif",
        name: "GIF",
        icon: "🎞️",
        description: "Supports animation, limited colors",
      },
      bmp: {
        ext: ".bmp",
        name: "BMP",
        icon: "🎨",
        description: "Uncompressed, large file size",
      },
      tiff: {
        ext: ".tiff",
        name: "TIFF",
        icon: "📋",
        description: "High quality, supports layers",
      },
    },
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFormatIcon = (mimeType) => {
    const format = Object.keys(supportedFormats.input).find((key) =>
      mimeType.includes(key.split("/")[1]),
    );
    return format ? supportedFormats.input[format].icon : "📄";
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }, []);

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    processFiles(selectedFiles);
  };

  const processFiles = (fileList) => {
    const validFiles = fileList.filter((file) => {
      const isValidFormat = Object.keys(supportedFormats.input).some(
        (format) =>
          file.type === format ||
          file.name.toLowerCase().endsWith(format.split("/")[1]),
      );
      return isValidFormat && file.size <= 50 * 1024 * 1024; // 50MB limit
    });

    const newFiles = validFiles.map((file, index) => ({
      id: Date.now() + index,
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      originalFormat:
        file.type.split("/")[1] || file.name.split(".").pop().toLowerCase(),
      status: "ready",
      convertedBlob: null,
      convertedSize: null,
      preview: null,
    }));

    setFiles((prev) => [...prev, ...newFiles]);

    // Generate previews
    newFiles.forEach((fileData) => {
      if (fileData.file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFiles((prev) =>
            prev.map((f) =>
              f.id === fileData.id ? { ...f, preview: e.target.result } : f,
            ),
          );
        };
        reader.readAsDataURL(fileData.file);
      }
    });
  };

  const convertImage = async (fileData) => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        // Calculate new dimensions if resize is enabled
        let { width, height } = img;

        if (conversionSettings.enableResize) {
          const newWidth = parseInt(conversionSettings.resizeWidth) || width;
          const newHeight = parseInt(conversionSettings.resizeHeight) || height;

          if (conversionSettings.maintainAspectRatio) {
            const aspectRatio = width / height;
            if (newWidth && !newHeight) {
              width = newWidth;
              height = newWidth / aspectRatio;
            } else if (newHeight && !newWidth) {
              height = newHeight;
              width = newHeight * aspectRatio;
            } else {
              width = newWidth;
              height = newHeight;
            }
          } else {
            width = newWidth;
            height = newHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        // Set background for formats that don't support transparency
        if (["jpeg", "bmp"].includes(conversionSettings.outputFormat)) {
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(0, 0, width, height);
        }

        // Draw the image
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to target format
        const mimeType =
          conversionSettings.outputFormat === "jpeg"
            ? "image/jpeg"
            : `image/${conversionSettings.outputFormat}`;
        const quality = conversionSettings.quality[0] / 100;

        canvas.toBlob(
          (blob) => {
            resolve({
              blob,
              size: blob.size,
              width,
              height,
            });
          },
          mimeType,
          quality,
        );
      };

      img.src = fileData.preview;
    });
  };

  const handleConvert = async () => {
    if (files.length === 0) return;

    setIsConverting(true);
    setProgress(0);

    for (let i = 0; i < files.length; i++) {
      const fileData = files[i];

      try {
        setFiles((prev) =>
          prev.map((f) =>
            f.id === fileData.id ? { ...f, status: "converting" } : f,
          ),
        );

        const result = await convertImage(fileData);

        setFiles((prev) =>
          prev.map((f) =>
            f.id === fileData.id
              ? {
                  ...f,
                  status: "completed",
                  convertedBlob: result.blob,
                  convertedSize: result.size,
                  convertedWidth: result.width,
                  convertedHeight: result.height,
                }
              : f,
          ),
        );
      } catch (error) {
        console.error("Conversion failed:", error);
        setFiles((prev) =>
          prev.map((f) =>
            f.id === fileData.id ? { ...f, status: "error" } : f,
          ),
        );
      }

      setProgress(((i + 1) / files.length) * 100);
    }

    setIsConverting(false);
  };

  const downloadFile = (fileData) => {
    if (!fileData.convertedBlob) return;

    const url = URL.createObjectURL(fileData.convertedBlob);
    const link = document.createElement("a");
    link.href = url;

    const extension =
      supportedFormats.output[conversionSettings.outputFormat].ext;
    const nameWithoutExt = fileData.name.replace(/\.[^/.]+$/, "");
    link.download = `${nameWithoutExt}_converted${extension}`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadAll = async () => {
    const completedFiles = files.filter(
      (f) => f.status === "completed" && f.convertedBlob,
    );

    if (completedFiles.length === 0) return;

    if (completedFiles.length === 1) {
      downloadFile(completedFiles[0]);
      return;
    }

    // For multiple files, create a zip
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();

    completedFiles.forEach((fileData) => {
      const extension =
        supportedFormats.output[conversionSettings.outputFormat].ext;
      const nameWithoutExt = fileData.name.replace(/\.[^/.]+$/, "");
      const fileName = `${nameWithoutExt}_converted${extension}`;
      zip.file(fileName, fileData.convertedBlob);
    });

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(zipBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `converted_images_${Date.now()}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const clearAll = () => {
    setFiles([]);
    setProgress(0);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "ready":
        return <ImageIcon className="h-4 w-4 text-primary" />;
      case "converting":
        return <RefreshCwIcon className="h-4 w-4 text-primary animate-spin" />;
      case "completed":
        return <CheckCircleIcon className="h-4 w-4 text-primary" />;
      case "error":
        return <AlertCircleIcon className="h-4 w-4 text-destructive" />;
      default:
        return <ImageIcon className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status) => {
    const variants = {
      ready: "secondary",
      converting: "default",
      completed: "success",
      error: "destructive",
    };

    const labels = {
      ready: "Ready",
      converting: "Converting...",
      completed: "Completed",
      error: "Error",
    };

    return (
      <Badge variant={variants[status] || "secondary"}>{labels[status]}</Badge>
    );
  };

  const getSavingsInfo = (originalSize, convertedSize) => {
    if (!convertedSize) return null;
    const savings = ((originalSize - convertedSize) / originalSize) * 100;
    const isSmaller = convertedSize < originalSize;
    return {
      percentage: Math.abs(savings).toFixed(1),
      isSmaller,
      text: isSmaller ? "smaller" : "larger",
    };
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
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
              <h1 className="text-3xl font-bold">Image Converter</h1>
              <p className="text-muted-foreground">
                Convert your images to any format with advanced options
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">8+ Formats</Badge>
            <Badge variant="secondary">Batch Conversion</Badge>
            <Badge variant="secondary">Quality Control</Badge>
            <Badge variant="secondary">Resize Options</Badge>
            <Badge variant="secondary">No Watermarks</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Area & Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Images</CardTitle>
                <CardDescription>
                  Support: JPG, PNG, WebP, GIF, BMP, TIFF, HEIC, HEIF (max 50MB
                  each)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive
                      ? "border-primary bg-primary/5"
                      : "border-muted-foreground/25 hover:border-primary/50"
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                >
                  <UploadIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">
                    Drop images here or click to browse
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Supports JPG, PNG, WebP, GIF, BMP, TIFF, HEIC formats
                  </p>

                  <Button onClick={() => fileInputRef.current?.click()}>
                    <FolderIcon className="h-4 w-4 mr-2" />
                    Choose Files
                  </Button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*,.heic,.heif"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>

                {files.length > 0 && (
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {files.length} file(s) selected
                    </span>
                    <Button variant="ghost" size="sm" onClick={clearAll}>
                      <TrashIcon className="h-4 w-4 mr-2" />
                      Clear All
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Conversion Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SettingsIcon className="h-5 w-5" />
                  Conversion Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="format" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="format">Format</TabsTrigger>
                    <TabsTrigger value="quality">Quality</TabsTrigger>
                    <TabsTrigger value="resize">Resize</TabsTrigger>
                  </TabsList>

                  <TabsContent value="format" className="space-y-4">
                    <div>
                      <Label>Output Format</Label>
                      <Select
                        value={conversionSettings.outputFormat}
                        onValueChange={(value) =>
                          setConversionSettings((prev) => ({
                            ...prev,
                            outputFormat: value,
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(supportedFormats.output).map(
                            ([key, format]) => (
                              <SelectItem key={key} value={key}>
                                <div className="flex items-center gap-2">
                                  <span>{format.icon}</span>
                                  <div>
                                    <div className="font-medium">
                                      {format.name} ({format.ext})
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                      {format.description}
                                    </div>
                                  </div>
                                </div>
                              </SelectItem>
                            ),
                          )}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="preserve-exif">Preserve EXIF Data</Label>
                      <Switch
                        id="preserve-exif"
                        checked={conversionSettings.preserveExif}
                        onCheckedChange={(checked) =>
                          setConversionSettings((prev) => ({
                            ...prev,
                            preserveExif: checked,
                          }))
                        }
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="quality" className="space-y-4">
                    <div>
                      <Label className="flex justify-between">
                        <span>Quality</span>
                        <span className="text-sm font-mono">
                          {conversionSettings.quality[0]}%
                        </span>
                      </Label>
                      <Slider
                        value={conversionSettings.quality}
                        onValueChange={(value) =>
                          setConversionSettings((prev) => ({
                            ...prev,
                            quality: value,
                          }))
                        }
                        min={10}
                        max={100}
                        step={5}
                        className="mt-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Smaller file</span>
                        <span>Better quality</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { value: 60, label: "Low", desc: "Smallest files" },
                        { value: 75, label: "Medium", desc: "Balanced" },
                        { value: 90, label: "High", desc: "Best quality" },
                        {
                          value: 100,
                          label: "Maximum",
                          desc: "No compression",
                        },
                      ].map((preset) => (
                        <Button
                          key={preset.value}
                          variant={
                            conversionSettings.quality[0] === preset.value
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            setConversionSettings((prev) => ({
                              ...prev,
                              quality: [preset.value],
                            }))
                          }
                        >
                          <div className="text-center">
                            <div className="font-medium">{preset.label}</div>
                            <div className="text-xs">{preset.desc}</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="resize" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="enable-resize">Enable Resize</Label>
                      <Switch
                        id="enable-resize"
                        checked={conversionSettings.enableResize}
                        onCheckedChange={(checked) =>
                          setConversionSettings((prev) => ({
                            ...prev,
                            enableResize: checked,
                          }))
                        }
                      />
                    </div>

                    {conversionSettings.enableResize && (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="width">Width (px)</Label>
                            <input
                              id="width"
                              type="number"
                              placeholder="e.g. 1920"
                              value={conversionSettings.resizeWidth}
                              onChange={(e) =>
                                setConversionSettings((prev) => ({
                                  ...prev,
                                  resizeWidth: e.target.value,
                                }))
                              }
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                          <div>
                            <Label htmlFor="height">Height (px)</Label>
                            <input
                              id="height"
                              type="number"
                              placeholder="e.g. 1080"
                              value={conversionSettings.resizeHeight}
                              onChange={(e) =>
                                setConversionSettings((prev) => ({
                                  ...prev,
                                  resizeHeight: e.target.value,
                                }))
                              }
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <Label htmlFor="maintain-aspect">
                            Maintain Aspect Ratio
                          </Label>
                          <Switch
                            id="maintain-aspect"
                            checked={conversionSettings.maintainAspectRatio}
                            onCheckedChange={(checked) =>
                              setConversionSettings((prev) => ({
                                ...prev,
                                maintainAspectRatio: checked,
                              }))
                            }
                          />
                        </div>
                      </>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* File List */}
            {files.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Files to Convert</CardTitle>
                  <CardDescription>
                    Converting to{" "}
                    {
                      supportedFormats.output[conversionSettings.outputFormat]
                        .name
                    }{" "}
                    format
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {files.map((fileData) => {
                      const savings = getSavingsInfo(
                        fileData.size,
                        fileData.convertedSize,
                      );

                      return (
                        <div
                          key={fileData.id}
                          className="flex items-center gap-4 p-4 border rounded-lg"
                        >
                          {/* Preview */}
                          <div className="flex-shrink-0">
                            {fileData.preview ? (
                              <img
                                src={fileData.preview}
                                alt={fileData.name}
                                className="w-16 h-16 object-cover rounded"
                              />
                            ) : (
                              <div className="w-16 h-16 bg-muted rounded flex items-center justify-center">
                                <span className="text-2xl">
                                  {getFormatIcon(fileData.type)}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* File Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium truncate">
                                {fileData.name}
                              </span>
                              {getStatusIcon(fileData.status)}
                            </div>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{formatFileSize(fileData.size)}</span>
                              <ArrowRightIcon className="h-3 w-3" />
                              <span>
                                {
                                  supportedFormats.output[
                                    conversionSettings.outputFormat
                                  ].name
                                }
                                {fileData.convertedSize &&
                                  ` (${formatFileSize(fileData.convertedSize)})`}
                              </span>
                              {savings && (
                                <Badge
                                  variant={
                                    savings.isSmaller ? "success" : "secondary"
                                  }
                                  className="text-xs"
                                >
                                  {savings.percentage}% {savings.text}
                                </Badge>
                              )}
                            </div>

                            <div className="mt-2">
                              {getStatusBadge(fileData.status)}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2">
                            {fileData.status === "completed" && (
                              <Button
                                size="sm"
                                onClick={() => downloadFile(fileData)}
                              >
                                <DownloadIcon className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(fileData.id)}
                            >
                              <TrashIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Control Panel */}
          <div className="space-y-6">
            {/* Conversion Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Conversion Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Files:</span>
                    <span className="font-medium">{files.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Output Format:</span>
                    <span className="font-medium">
                      {
                        supportedFormats.output[conversionSettings.outputFormat]
                          .name
                      }
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Quality:</span>
                    <span className="font-medium">
                      {conversionSettings.quality[0]}%
                    </span>
                  </div>
                  {conversionSettings.enableResize && (
                    <div className="flex justify-between text-sm">
                      <span>Resize:</span>
                      <span className="font-medium">
                        {conversionSettings.resizeWidth || "Auto"} ×{" "}
                        {conversionSettings.resizeHeight || "Auto"}
                      </span>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="space-y-2">
                  <Button
                    onClick={handleConvert}
                    disabled={files.length === 0 || isConverting}
                    className="w-full"
                    size="lg"
                  >
                    {isConverting ? (
                      <>
                        <RefreshCwIcon className="h-4 w-4 mr-2 animate-spin" />
                        Converting...
                      </>
                    ) : (
                      <>
                        <ZapIcon className="h-4 w-4 mr-2" />
                        Convert Images
                      </>
                    )}
                  </Button>

                  {isConverting && (
                    <div className="space-y-2">
                      <Progress value={progress} />
                      <div className="text-xs text-center text-muted-foreground">
                        {Math.round(progress)}% complete
                      </div>
                    </div>
                  )}

                  {files.some((f) => f.status === "completed") && (
                    <Button
                      onClick={downloadAll}
                      variant="outline"
                      className="w-full"
                    >
                      <DownloadIcon className="h-4 w-4 mr-2" />
                      Download All
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Format Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Format Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">📷 JPEG</div>
                    <div className="text-muted-foreground">
                      Best for photos, smaller files
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">🖼️ PNG</div>
                    <div className="text-muted-foreground">
                      Supports transparency, lossless
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">🌐 WebP</div>
                    <div className="text-muted-foreground">
                      Modern, excellent compression
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">🎞️ GIF</div>
                    <div className="text-muted-foreground">
                      Animations, limited colors
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">📱 HEIC</div>
                    <div className="text-muted-foreground">
                      iPhone photos, efficient
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ShieldIcon className="h-4 w-4 text-primary" />
                    <span>100% client-side processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ZapIcon className="h-4 w-4 text-primary" />
                    <span>Batch conversion support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <SettingsIcon className="h-4 w-4 text-primary" />
                    <span>Advanced quality control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ImageIcon className="h-4 w-4 text-primary" />
                    <span>8+ supported formats</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    <span>No watermarks or limits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SEO Content Sections */}
        <div className="mt-16 space-y-12">
          {/* How to Use */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              How to Convert Images Online
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <UploadIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Upload Images</h3>
                  <p className="text-sm text-muted-foreground">
                    Drag and drop your images or click to browse. Supports JPG,
                    PNG, WebP, GIF, BMP, TIFF, and HEIC formats.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <SettingsIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">2. Choose Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Select output format, adjust quality, and optionally resize
                    images. Preview settings in real-time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <DownloadIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Download Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Convert and download individual files or get all converted
                    images in a zip file.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Common Conversions */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Popular Image Conversions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  from: "HEIC",
                  to: "JPG",
                  desc: "iPhone photos to universal format",
                },
                {
                  from: "PNG",
                  to: "JPG",
                  desc: "Reduce file size for web use",
                },
                { from: "JPG", to: "PNG", desc: "Add transparency support" },
                {
                  from: "Any",
                  to: "WebP",
                  desc: "Modern web-optimized format",
                },
                {
                  from: "GIF",
                  to: "MP4",
                  desc: "Better compression for animations",
                },
                {
                  from: "BMP",
                  to: "JPG",
                  desc: "Compress uncompressed images",
                },
              ].map((conversion, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{conversion.from}</Badge>
                      <ArrowRightIcon className="h-3 w-3" />
                      <Badge variant="outline">{conversion.to}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {conversion.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              When to Use Image Converter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Professional Use Cases
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong>Web Development:</strong> Convert images to WebP
                    for faster loading
                  </li>
                  <li>
                    • <strong>Print Design:</strong> Convert to TIFF for
                    high-quality printing
                  </li>
                  <li>
                    • <strong>Social Media:</strong> Optimize images for
                    different platforms
                  </li>
                  <li>
                    • <strong>Email Marketing:</strong> Reduce file sizes for
                    newsletters
                  </li>
                  <li>
                    • <strong>E-commerce:</strong> Standardize product image
                    formats
                  </li>
                  <li>
                    • <strong>Mobile Apps:</strong> Convert to appropriate
                    formats for iOS/Android
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Personal Use Cases
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong>iPhone Photos:</strong> Convert HEIC to JPG for
                    sharing
                  </li>
                  <li>
                    • <strong>Social Sharing:</strong> Optimize photos for
                    Instagram, Facebook
                  </li>
                  <li>
                    • <strong>Website Building:</strong> Prepare images for your
                    blog or portfolio
                  </li>
                  <li>
                    • <strong>Digital Storage:</strong> Reduce file sizes to
                    save space
                  </li>
                  <li>
                    • <strong>Photo Editing:</strong> Convert to PNG for
                    transparency effects
                  </li>
                  <li>
                    • <strong>Presentations:</strong> Optimize images for
                    PowerPoint or Google Slides
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    What image formats are supported?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We support 8+ formats including JPG, PNG, WebP, GIF, BMP,
                    TIFF, HEIC, and HEIF. Convert to any of the 6 most popular
                    output formats.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    Is image conversion free?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Our image converter is completely free with no limits
                    on file size, number of conversions, or watermarks on output
                    files.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    Are my images stored on your servers?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    No! All image conversion happens in your browser. Your
                    images never leave your device, ensuring complete privacy
                    and security.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    Can I convert HEIC files from iPhone?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! Our converter fully supports HEIC files from
                    iPhone and can convert them to JPG, PNG, or any other
                    supported format.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    Can I batch convert multiple images?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Upload multiple images at once and convert them all
                    with the same settings. Download individually or as a zip
                    file.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    How do I choose the right quality setting?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    For web use, 75-85% is ideal. For print, use 90-100%. For
                    email attachments, 60-70% provides good balance of quality
                    and file size.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* SEO Footer */}
          <section className="bg-muted/30 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Professional Image Converter - Free & No Watermarks
            </h2>
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p className="mb-4">
                <strong>Convert images online for free</strong> with our
                professional image converter. Transform between JPG, PNG, WebP,
                GIF, BMP, TIFF, HEIC, and HEIF formats with advanced quality
                control and batch processing. Perfect for web developers,
                designers, photographers, and anyone who needs reliable image
                format conversion.
              </p>
              <p className="mb-4">
                <strong>Key features include:</strong> 8+ supported input
                formats, 6 optimized output formats, batch conversion
                capabilities, quality and compression control, image resizing
                options, EXIF data preservation, client-side processing for
                privacy, and professional-grade results with no watermarks.
              </p>
              <p>
                <strong>Popular conversions:</strong> HEIC to JPG for iPhone
                photos, PNG to JPG for web optimization, any format to WebP for
                modern web standards, GIF to MP4 for better video compression,
                and BMP to JPG for file size reduction. Our image converter
                handles all your format conversion needs with professional
                quality and complete privacy.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
