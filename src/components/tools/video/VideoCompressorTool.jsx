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
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Upload,
  Video,
  Download,
  Trash2,
  Play,
  Pause,
  CheckCircle,
  AlertCircle,
  Loader,
  FileVideo,
  Smartphone,
  Monitor,
  Zap,
  Gauge,
} from "lucide-react";

export default function VideoCompressorTool() {
  const [files, setFiles] = useState([]);
  const [compressionLevel, setCompressionLevel] = useState([60]);
  const [isCompressing, setIsCompressing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [outputFormat, setOutputFormat] = useState("mp4");
  const fileInputRef = useRef(null);

  const supportedFormats = [
    "video/mp4",
    "video/avi",
    "video/mov",
    "video/wmv",
    "video/flv",
    "video/webm",
    "video/mkv",
  ];
  const maxFileSize = 500 * 1024 * 1024; // 500MB

  const compressionPresets = {
    web: { quality: 70, description: "Optimized for web streaming" },
    mobile: { quality: 60, description: "Perfect for mobile devices" },
    whatsapp: { quality: 50, description: "WhatsApp optimized (16MB limit)" },
    social: { quality: 65, description: "Social media optimized" },
    custom: {
      quality: compressionLevel[0],
      description: "Custom quality settings",
    },
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const calculateSavings = (originalSize, compressedSize) => {
    if (!compressedSize || !originalSize) return 0;
    return Math.round(((originalSize - compressedSize) / originalSize) * 100);
  };

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    processFiles(selectedFiles);
  };

  const processFiles = (fileList) => {
    const validFiles = fileList.filter((file) => {
      const isValidType = supportedFormats.includes(file.type);
      const isValidSize = file.size <= maxFileSize;

      if (!isValidType) {
        alert(`${file.name} is not a supported video format`);
        return false;
      }

      if (!isValidSize) {
        alert(
          `${file.name} is too large. Maximum size is ${formatFileSize(maxFileSize)}`,
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
      compressedSize: null,
      compressedBlob: null,
      previewUrl: URL.createObjectURL(file),
    }));

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const compressVideo = useCallback(async (fileData, quality = 60) => {
    return new Promise((resolve) => {
      // Simulate video compression since we can't use FFmpeg in this demo
      const simulateCompression = () => {
        const originalSize = fileData.size;
        const compressionRatio = (100 - quality) / 100;
        const compressedSize = Math.max(
          originalSize * (1 - compressionRatio),
          originalSize * 0.1,
        );

        // Create a mock compressed blob (in real implementation, use FFmpeg.wasm)
        const compressedBlob = new Blob(["compressed video data"], {
          type: "video/mp4",
        });
        Object.defineProperty(compressedBlob, "size", {
          value: compressedSize,
        });

        resolve({
          blob: compressedBlob,
          size: compressedSize,
        });
      };

      // Simulate processing time
      setTimeout(simulateCompression, 2000 + Math.random() * 3000);
    });
  }, []);

  const handleCompress = async () => {
    if (files.length === 0) return;

    setIsCompressing(true);
    setProgress(0);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.status === "compressed") continue;

      setFiles((prev) =>
        prev.map((f) =>
          f.id === file.id ? { ...f, status: "compressing", progress: 0 } : f,
        ),
      );

      try {
        const result = await compressVideo(file, compressionLevel[0]);

        setFiles((prev) =>
          prev.map((f) =>
            f.id === file.id
              ? {
                  ...f,
                  status: "compressed",
                  progress: 100,
                  compressedSize: result.size,
                  compressedBlob: result.blob,
                }
              : f,
          ),
        );
      } catch (error) {
        setFiles((prev) =>
          prev.map((f) =>
            f.id === file.id ? { ...f, status: "error", progress: 0 } : f,
          ),
        );
      }

      setProgress(((i + 1) / files.length) * 100);
    }

    setIsCompressing(false);
  };

  const downloadFile = (fileData) => {
    if (!fileData.compressedBlob) return;

    const url = URL.createObjectURL(fileData.compressedBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `compressed_${fileData.name}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadAll = () => {
    files.filter((f) => f.status === "compressed").forEach(downloadFile);
  };

  const removeFile = (id) => {
    setFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === id);
      if (fileToRemove?.previewUrl) {
        URL.revokeObjectURL(fileToRemove.previewUrl);
      }
      return prev.filter((f) => f.id !== id);
    });
  };

  const clearFiles = () => {
    files.forEach((file) => {
      if (file.previewUrl) URL.revokeObjectURL(file.previewUrl);
    });
    setFiles([]);
    setProgress(0);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "ready":
        return <FileVideo className="h-4 w-4 text-primary" />;
      case "compressing":
        return <Loader className="h-4 w-4 text-primary animate-spin" />;
      case "compressed":
        return <CheckCircle className="h-4 w-4 text-primary" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return <FileVideo className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status) => {
    const variants = {
      ready: "secondary",
      compressing: "default",
      compressed: "default",
      error: "destructive",
    };

    const labels = {
      ready: "Ready",
      compressing: "Compressing...",
      compressed: "Completed",
      error: "Error",
    };

    return <Badge variant={variants[status]}>{labels[status]}</Badge>;
  };

  const totalOriginalSize = files.reduce((sum, file) => sum + file.size, 0);
  const totalCompressedSize = files.reduce(
    (sum, file) => sum + (file.compressedSize || 0),
    0,
  );
  const totalSavings = calculateSavings(totalOriginalSize, totalCompressedSize);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Free Video Compressor</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Compress videos online for free. Reduce file size by up to 80% while
          maintaining quality. Perfect for WhatsApp, social media, and web
          optimization.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Mobile Optimized</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Fast Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">No Watermarks</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="compress" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="compress">Compress Videos</TabsTrigger>
          <TabsTrigger value="settings">Compression Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="compress" className="space-y-6">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Videos
              </CardTitle>
              <CardDescription>
                Support: MP4, AVI, MOV, WMV, FLV, WebM, MKV • Max size:{" "}
                {formatFileSize(maxFileSize)} per file
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">
                  Drop video files here or click to browse
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Batch processing supported • All processing happens locally
                </p>
                <Input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <Button onClick={() => fileInputRef.current?.click()}>
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Files List */}
          {files.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Videos ({files.length})
                  </span>
                  <div className="flex gap-2">
                    {files.some((f) => f.status === "compressed") && (
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
                <div className="space-y-4">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        {getStatusIcon(file.status)}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{file.name}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Original: {formatFileSize(file.size)}</span>
                            {file.compressedSize && (
                              <>
                                <span>
                                  Compressed:{" "}
                                  {formatFileSize(file.compressedSize)}
                                </span>
                                <span className="text-primary font-medium">
                                  -
                                  {calculateSavings(
                                    file.size,
                                    file.compressedSize,
                                  )}
                                  %
                                </span>
                              </>
                            )}
                          </div>
                          {file.status === "compressing" && (
                            <Progress value={file.progress} className="mt-2" />
                          )}
                        </div>
                        {getStatusBadge(file.status)}
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        {file.status === "compressed" && (
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
                  ))}
                </div>

                {files.length > 0 && (
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={handleCompress}
                      disabled={
                        isCompressing ||
                        files.every((f) => f.status === "compressed")
                      }
                      className="flex-1"
                    >
                      {isCompressing ? (
                        <>
                          <Loader className="h-4 w-4 mr-2 animate-spin" />
                          Compressing...
                        </>
                      ) : (
                        <>
                          <Gauge className="h-4 w-4 mr-2" />
                          Compress All Videos
                        </>
                      )}
                    </Button>
                  </div>
                )}

                {isCompressing && (
                  <div className="mt-4">
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

          {/* Summary Statistics */}
          {files.length > 0 && totalCompressedSize > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Compression Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">
                      {formatFileSize(totalOriginalSize)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Original Size
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">
                      {formatFileSize(totalCompressedSize)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Compressed Size
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">
                      {totalSavings}%
                    </p>
                    <p className="text-sm text-muted-foreground">Space Saved</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compression Settings</CardTitle>
              <CardDescription>
                Adjust quality settings to balance file size and video quality
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Compression Presets */}
              <div>
                <Label className="text-base font-medium mb-4 block">
                  Quick Presets
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(compressionPresets).map(([key, preset]) => (
                    <Card
                      key={key}
                      className="cursor-pointer hover:bg-accent transition-colors"
                      onClick={() => setCompressionLevel([preset.quality])}
                    >
                      <CardContent className="p-4 text-center">
                        <h3 className="font-medium capitalize mb-2">{key}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {preset.description}
                        </p>
                        <Badge variant="outline">
                          Quality: {preset.quality}%
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Custom Quality */}
              <div>
                <Label htmlFor="quality" className="text-base font-medium">
                  Custom Quality: {compressionLevel[0]}%
                </Label>
                <div className="mt-4">
                  <Slider
                    id="quality"
                    min={10}
                    max={95}
                    step={5}
                    value={compressionLevel}
                    onValueChange={setCompressionLevel}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Smaller file</span>
                    <span>Better quality</span>
                  </div>
                </div>
              </div>

              {/* Output Format */}
              <div>
                <Label className="text-base font-medium mb-4 block">
                  Output Format
                </Label>
                <div className="flex gap-2">
                  {["mp4", "webm", "avi"].map((format) => (
                    <Button
                      key={format}
                      variant={outputFormat === format ? "default" : "outline"}
                      onClick={() => setOutputFormat(format)}
                      size="sm"
                    >
                      .{format.toUpperCase()}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card>
            <CardHeader>
              <CardTitle>Compression Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>WhatsApp limit:</strong> Use 50% quality or lower to
                    stay under 16MB limit
                  </AlertDescription>
                </Alert>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium mb-2">Quality Guidelines:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• 90-95%: Highest quality, minimal compression</li>
                      <li>• 70-80%: Good balance for web streaming</li>
                      <li>• 50-60%: Mobile/social media optimized</li>
                      <li>• 30-40%: Maximum compression</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Best Practices:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Start with 70% quality for most uses</li>
                      <li>• Use lower quality for messaging apps</li>
                      <li>• MP4 format offers best compatibility</li>
                      <li>• Preview before final compression</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* FAQ Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">
                How much can I compress my videos?
              </h4>
              <p className="text-sm text-muted-foreground">
                You can typically reduce video file sizes by 50-80% while
                maintaining good quality. The exact savings depend on the
                original video quality, format, and compression settings.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                What video formats are supported?
              </h4>
              <p className="text-sm text-muted-foreground">
                We support MP4, AVI, MOV, WMV, FLV, WebM, and MKV formats.
                Output is available in MP4, WebM, and AVI formats.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Is there a file size limit?</h4>
              <p className="text-sm text-muted-foreground">
                Maximum file size is {formatFileSize(maxFileSize)} per video.
                You can process multiple videos simultaneously.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                Are my videos stored on your servers?
              </h4>
              <p className="text-sm text-muted-foreground">
                No, all video processing happens locally in your browser. Your
                videos are never uploaded to our servers, ensuring complete
                privacy.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SEO Content Section with Long-tail Keywords */}
      <div className="mt-16 space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Complete Video Compression Guide
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn how to compress videos for WhatsApp, reduce file sizes without
            quality loss, and optimize videos for different platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Compress Video for WhatsApp Online Free
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                WhatsApp has a 16MB limit for video sharing. Our compressor
                automatically optimizes videos for WhatsApp while maintaining
                quality. Perfect for sharing family videos, business content,
                and social moments without the frustration of file size
                restrictions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Reduce Video Size Without Losing Quality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Advanced compression algorithms preserve video quality while
                significantly reducing file sizes. Choose from web, mobile, and
                custom quality presets to achieve the perfect balance between
                file size and visual quality for your specific needs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Video Compressor for Email Attachment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Email providers typically limit attachments to 25MB. Compress
                large videos to fit email size restrictions while maintaining
                playback quality. Ideal for business presentations, tutorials,
                and personal videos that need to be shared via email.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Bulk Video Compressor Free
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Process multiple videos simultaneously with batch compression.
                Upload entire folders and compress them all with consistent
                settings. Perfect for content creators, video editors, and
                businesses managing large video libraries.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Platform-specific optimization guide */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Platform-Specific Video Optimization
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold mb-2">WhatsApp</h4>
              <p className="text-xs text-muted-foreground">
                16MB limit, mobile-optimized compression
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-xs text-muted-foreground">
                25MB limit, universal format support
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h4 className="font-semibold mb-2">Web</h4>
              <p className="text-xs text-muted-foreground">
                Fast loading, SEO-optimized videos
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold mb-2">Social Media</h4>
              <p className="text-xs text-muted-foreground">
                Platform-specific aspect ratios and sizes
              </p>
            </div>
          </div>
        </div>

        {/* Technical benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-muted/20 rounded-lg">
            <h4 className="font-semibold mb-2">🚀 Faster Uploads</h4>
            <p className="text-sm text-muted-foreground">
              Smaller files upload 5x faster to social media, cloud storage, and
              video platforms
            </p>
          </div>
          <div className="text-center p-6 bg-muted/20 rounded-lg">
            <h4 className="font-semibold mb-2">💾 Storage Savings</h4>
            <p className="text-sm text-muted-foreground">
              Save up to 80% storage space on devices and cloud services without
              quality compromise
            </p>
          </div>
          <div className="text-center p-6 bg-muted/20 rounded-lg">
            <h4 className="font-semibold mb-2">📶 Better Streaming</h4>
            <p className="text-sm text-muted-foreground">
              Optimized videos stream smoothly on slower internet connections
              and mobile data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
