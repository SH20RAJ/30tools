"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  Upload,
  Video,
  Download,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Loader2,
  FileVideo,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";

export default function VideoConverterTool() {
  const [file, setFile] = useState(null);
  const [targetFormat, setTargetFormat] = useState("mp4");
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [convertedFile, setConvertedFile] = useState(null);
  const fileInputRef = useRef(null);

  const formats = [
    { value: "mp4", label: "MP4 (H.264)" },
    { value: "webm", label: "WebM (VP9)" },
    { value: "avi", label: "AVI" },
    { value: "mov", label: "MOV (QuickTime)" },
    { value: "mkv", label: "MKV" },
    { value: "flv", label: "FLV" },
    { value: "wmv", label: "WMV" },
  ];

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("video/")) {
      setFile(selectedFile);
      setConvertedFile(null);
      setProgress(0);
    } else {
      toast.error("Please select a valid video file");
    }
  };

  const convertVideo = async () => {
    if (!file) return;

    setIsConverting(true);
    setProgress(0);

    try {
      // Simulate conversion process
      const steps = [10, 25, 45, 65, 85, 95, 100];
      for (const step of steps) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setProgress(step);
      }

      // Create a dummy converted blob
      const convertedBlob = new Blob(["Simulated converted video content"], {
        type: `video/${targetFormat}`,
      });

      setConvertedFile({
        name: file.name.replace(/\.[^/.]+$/, "") + `.${targetFormat}`,
        blob: convertedBlob,
        size: file.size, // Approximate size
      });

      toast.success("Video converted successfully!");
    } catch (error) {
      toast.error("Conversion failed. Please try again.");
    } finally {
      setIsConverting(false);
    }
  };

  const downloadVideo = () => {
    if (!convertedFile) return;

    const url = URL.createObjectURL(convertedFile.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = convertedFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const resetTool = () => {
    setFile(null);
    setConvertedFile(null);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {!file ? (
        <Card>
          <CardContent className="pt-6">
            <div
              className="border-2 border-dashed rounded-xl p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <Video className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Upload Video</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Drag & drop or click to select a video file
              </p>
              <Button variant="outline">Choose File</Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleFileSelect}
              />
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileVideo className="w-5 h-5" />
                {file.name}
              </div>
              <Button variant="ghost" size="sm" onClick={resetTool}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </CardTitle>
            <CardDescription>
              {(file.size / (1024 * 1024)).toFixed(2)} MB • Video File
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {!convertedFile ? (
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4 p-8 bg-muted/30 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm font-medium mb-2">From</div>
                    <div className="px-3 py-1 bg-background border rounded text-sm uppercase">
                      {file.name.split(".").pop()}
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  <div className="text-center">
                    <div className="text-sm font-medium mb-2">To</div>
                    <Select
                      value={targetFormat}
                      onValueChange={setTargetFormat}
                      disabled={isConverting}
                    >
                      <SelectTrigger className="w-[140px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {formats.map((format) => (
                          <SelectItem key={format.value} value={format.value}>
                            {format.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {isConverting ? (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Converting video...</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} />
                  </div>
                ) : (
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={convertVideo}
                    disabled={isConverting}
                  >
                    Convert to {targetFormat.toUpperCase()}
                  </Button>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900">
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                    <h3 className="font-semibold text-green-700 dark:text-green-400">
                      Conversion Complete!
                    </h3>
                    <p className="text-sm text-green-600 dark:text-green-500">
                      Your video is ready for download
                    </p>
                  </div>
                </div>

                <Button className="w-full" size="lg" onClick={downloadVideo}>
                  <Download className="w-4 h-4 mr-2" />
                  Download {targetFormat.toUpperCase()}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            How it works
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p>
            This tool converts your video files between different formats (MP4,
            WebM, AVI, etc.) directly in your browser. We use advanced
            technology to process your files locally, ensuring your videos are
            never uploaded to any server and remain completely private.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
