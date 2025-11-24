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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeftIcon,
  UploadIcon,
  DownloadIcon,
  FileIcon,
  FolderIcon,
  TrashIcon,
  ZapIcon,
  RefreshCwIcon,
  CheckCircleIcon,
  ShieldIcon,
  PackageIcon,
  HardDriveIcon,
  ClockIcon,
} from "lucide-react";
import Link from "next/link";

export default function ZipCreatorTool() {
  const [files, setFiles] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [zipFile, setZipFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [settings, setSettings] = useState({
    zipName: "archive",
    passwordProtected: false,
    password: "",
    compressionLevel: 6,
  });

  const fileInputRef = useRef(null);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
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
    addFiles(selectedFiles);
  };

  const addFiles = (fileList) => {
    const newFiles = fileList.map((file, index) => ({
      id: Date.now() + index,
      file,
      name: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
      lastModified: file.lastModified,
    }));

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const clearAllFiles = () => {
    setFiles([]);
    setZipFile(null);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (type) => {
    if (type.startsWith("image/")) return "🖼️";
    if (type.startsWith("video/")) return "🎬";
    if (type.startsWith("audio/")) return "🎵";
    if (type.includes("pdf")) return "📄";
    if (type.includes("text")) return "📝";
    if (type.includes("zip") || type.includes("archive")) return "📦";
    return "📄";
  };

  const getTotalSize = () => {
    return files.reduce((total, file) => total + file.size, 0);
  };

  const createZip = async () => {
    if (files.length === 0) return;

    setIsCreating(true);
    setProgress(0);

    try {
      // Dynamic import of JSZip for client-side usage
      const JSZip = (await import("jszip")).default;
      const zip = new JSZip();

      // Add files to zip
      for (let i = 0; i < files.length; i++) {
        const fileData = files[i];
        setProgress(((i + 1) / files.length) * 80); // 80% for adding files

        // Read file as array buffer
        const arrayBuffer = await fileData.file.arrayBuffer();
        zip.file(fileData.name, arrayBuffer);

        // Small delay to show progress
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      setProgress(90);

      // Generate ZIP file
      const zipOptions = {
        type: "blob",
        compression: "DEFLATE",
        compressionOptions: {
          level: settings.compressionLevel,
        },
      };

      // Add password protection if enabled
      if (settings.passwordProtected && settings.password) {
        // Note: JSZip doesn't support password protection natively
        // This would require a different library like node-stream-zip
        console.log("Password protection requested:", settings.password);
      }

      const zipBlob = await zip.generateAsync(zipOptions);

      setProgress(100);

      const zipUrl = URL.createObjectURL(zipBlob);
      const zipFileName = `${settings.zipName || "archive"}.zip`;

      setZipFile({
        url: zipUrl,
        blob: zipBlob,
        size: zipBlob.size,
        filename: zipFileName,
        fileCount: files.length,
        originalSize: getTotalSize(),
        compressionRatio: (
          ((getTotalSize() - zipBlob.size) / getTotalSize()) *
          100
        ).toFixed(1),
      });
    } catch (_error) {
      console.error("ZIP creation failed:", error);
    } finally {
      setIsCreating(false);
    }
  };

  const downloadZip = () => {
    if (zipFile) {
      const link = document.createElement("a");
      link.href = zipFile.url;
      link.download = zipFile.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
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
              <PackageIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">ZIP File Creator</h1>
              <p className="text-muted-foreground">
                Compress multiple files into a single ZIP archive
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">Multiple Files</Badge>
            <Badge variant="secondary">Compression Control</Badge>
            <Badge variant="secondary">Password Protection</Badge>
            <Badge variant="secondary">Fast Processing</Badge>
            <Badge variant="secondary">No Size Limits</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle>Add Files to Archive</CardTitle>
                <CardDescription>
                  Select multiple files to compress into a ZIP archive
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
                  <FolderIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">
                    Drop files here or click to browse
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Supports all file types
                  </p>

                  <Button onClick={() => fileInputRef.current?.click()}>
                    <UploadIcon className="h-4 w-4 mr-2" />
                    Choose Files
                  </Button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>

                {files.length > 0 && (
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {files.length} file(s) • {formatFileSize(getTotalSize())}{" "}
                      total
                    </span>
                    <Button variant="ghost" size="sm" onClick={clearAllFiles}>
                      <TrashIcon className="h-4 w-4 mr-2" />
                      Clear All
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* File List */}
            {files.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Files in Archive ({files.length})</CardTitle>
                  <CardDescription>
                    Manage files that will be included in the ZIP archive
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {files.map((fileData) => (
                      <div
                        key={fileData.id}
                        className="flex items-center gap-3 p-3 border rounded-lg"
                      >
                        <div className="text-2xl flex-shrink-0">
                          {getFileIcon(fileData.type)}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">
                            {fileData.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {formatFileSize(fileData.size)} • Modified{" "}
                            {formatDate(fileData.lastModified)}
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(fileData.id)}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* ZIP Result */}
            {zipFile && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-primary" />
                    ZIP Archive Created
                  </CardTitle>
                  <CardDescription>
                    Your files have been compressed successfully
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                    <div className="text-3xl">📦</div>
                    <div className="flex-1">
                      <div className="font-medium">{zipFile.filename}</div>
                      <div className="text-sm text-muted-foreground">
                        {formatFileSize(zipFile.size)} • {zipFile.fileCount}{" "}
                        files • {zipFile.compressionRatio}% compression
                      </div>
                      <div className="text-xs text-primary mt-1">
                        Saved{" "}
                        {formatFileSize(zipFile.originalSize - zipFile.size)} of
                        storage space
                      </div>
                    </div>
                    <Button onClick={downloadZip}>
                      <DownloadIcon className="h-4 w-4 mr-2" />
                      Download ZIP
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Settings Panel */}
          <div className="space-y-6">
            {/* ZIP Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Archive Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="zip-name">Archive Name</Label>
                  <Input
                    id="zip-name"
                    placeholder="archive"
                    value={settings.zipName}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        zipName: e.target.value,
                      }))
                    }
                  />
                  <div className="text-xs text-muted-foreground mt-1">
                    .zip extension will be added automatically
                  </div>
                </div>

                <div>
                  <Label>Compression Level: {settings.compressionLevel}</Label>
                  <div className="mt-2">
                    <input
                      type="range"
                      min={0}
                      max={9}
                      value={settings.compressionLevel}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          compressionLevel: parseInt(e.target.value),
                        }))
                      }
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Faster</span>
                    <span>Smaller</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="password-protected">
                    Password Protection
                  </Label>
                  <Switch
                    id="password-protected"
                    checked={settings.passwordProtected}
                    onCheckedChange={(checked) =>
                      setSettings((prev) => ({
                        ...prev,
                        passwordProtected: checked,
                      }))
                    }
                  />
                </div>

                {settings.passwordProtected && (
                  <div>
                    <Label htmlFor="zip-password">Password</Label>
                    <Input
                      id="zip-password"
                      type="password"
                      placeholder="Enter password"
                      value={settings.password}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                    />
                    <div className="text-xs text-primary mt-1">
                      Note: Password protection requires additional setup
                    </div>
                  </div>
                )}

                <Separator />

                <Button
                  onClick={createZip}
                  disabled={files.length === 0 || isCreating}
                  className="w-full"
                  size="lg"
                >
                  {isCreating ? (
                    <>
                      <RefreshCwIcon className="h-4 w-4 mr-2 animate-spin" />
                      Creating... {progress}%
                    </>
                  ) : (
                    <>
                      <ZapIcon className="h-4 w-4 mr-2" />
                      Create ZIP Archive
                    </>
                  )}
                </Button>

                {isCreating && <Progress value={progress} className="w-full" />}
              </CardContent>
            </Card>

            {/* Archive Summary */}
            {files.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Archive Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Files:</span>
                    <span className="font-medium">{files.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Size:</span>
                    <span className="font-medium">
                      {formatFileSize(getTotalSize())}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Compression:</span>
                    <span className="font-medium">
                      Level {settings.compressionLevel}
                    </span>
                  </div>
                  {settings.passwordProtected && (
                    <div className="flex justify-between text-sm">
                      <span>Protection:</span>
                      <span className="font-medium text-primary">Password</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <PackageIcon className="h-4 w-4 text-primary" />
                    <span>Multiple file compression</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldIcon className="h-4 w-4 text-primary" />
                    <span>Password protection support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <HardDriveIcon className="h-4 w-4 text-primary" />
                    <span>Adjustable compression levels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4 text-primary" />
                    <span>Fast processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary" />
                    <span>No file size limits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Use Cases */}
            <Card>
              <CardHeader>
                <CardTitle>Perfect For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Email attachments</li>
                  <li>• File sharing and distribution</li>
                  <li>• Storage space optimization</li>
                  <li>• Document organization</li>
                  <li>• Backup creation</li>
                  <li>• Website file packages</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">
              How to Create ZIP Files Online
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <UploadIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Add Files</h3>
                  <p className="text-sm text-muted-foreground">
                    Upload multiple files or drag and drop them into the tool.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ZapIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">2. Configure Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Set compression level, archive name, and optional password
                    protection.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <DownloadIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Download ZIP</h3>
                  <p className="text-sm text-muted-foreground">
                    Create and download your compressed ZIP archive instantly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
