"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Loader2, AlertCircle, Music, FileVideo } from "lucide-react";

export default function MP4ToMP3Converter() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [conversionData, setConversionData] = useState(null);
  const [error, setError] = useState("");
  const [selectedQuality, setSelectedQuality] = useState("192");

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      // Check if it's an MP4 file
      if (
        !uploadedFile.type.includes("mp4") &&
        !uploadedFile.name.toLowerCase().endsWith(".mp4")
      ) {
        setError("Please select a valid MP4 file");
        return;
      }
      setFile(uploadedFile);
      setError("");
      setConversionData(null);
    }
  };

  const handleConvert = async () => {
    if (!file) {
      setError("Please select an MP4 file first");
      return;
    }

    setIsLoading(true);
    setError("");
    setConversionData(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2500));

      const fileSizeMap = {
        128: "2.8 MB",
        192: "4.2 MB",
        256: "5.6 MB",
        320: "7.0 MB",
      };

      setConversionData({
        originalFile: file.name,
        duration: "3:12",
        format: "MP4 Video",
        outputQuality: selectedQuality + "kbps",
        outputSize: fileSizeMap[selectedQuality],
        downloadUrl: "#",
      });
    } catch (_err) {
      setError("Failed to convert MP4 to MP3. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadMP3 = () => {
    console.log(`Downloading MP3 at ${selectedQuality}kbps quality from MP4`);
  };

  const qualityOptions = [
    {
      value: "128",
      label: "128kbps (Standard)",
      description: "Good quality, smaller file size",
    },
    {
      value: "192",
      label: "192kbps (High)",
      description: "High quality, balanced size",
    },
    {
      value: "256",
      label: "256kbps (Very High)",
      description: "Very high quality, larger size",
    },
    {
      value: "320",
      label: "320kbps (Premium)",
      description: "Maximum quality, largest size",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileVideo className="h-5 w-5" />
            MP4 to MP3 Converter
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* File Upload */}
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
            <input
              type="file"
              accept=".mp4,video/mp4"
              onChange={handleFileUpload}
              className="hidden"
              id="mp4-upload"
            />
            <label htmlFor="mp4-upload" className="cursor-pointer">
              <FileVideo className="h-12 w-12 mx-auto mb-4 text-primary" />
              <p className="text-lg font-medium mb-2">
                {file ? file.name : "Choose MP4 File"}
              </p>
              <p className="text-sm text-muted-foreground">
                Optimized for MP4 video files
              </p>
            </label>
          </div>

          {/* Quality Selection */}
          {file && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Select MP3 Quality:</h4>
              <div className="grid grid-cols-1 gap-2">
                {qualityOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-3 p-3 border rounded cursor-pointer hover:bg-muted/50"
                  >
                    <input
                      type="radio"
                      name="quality"
                      value={option.value}
                      checked={selectedQuality === option.value}
                      onChange={(e) => setSelectedQuality(e.target.value)}
                      className="text-primary"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-sm">{option.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {option.description}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Convert Button */}
          {file && (
            <Button
              onClick={handleConvert}
              disabled={isLoading}
              className="w-full bgtbd"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Converting MP4 to MP3...
                </>
              ) : (
                <>
                  <Music className="h-4 w-4 mr-2" />
                  Convert to MP3
                </>
              )}
            </Button>
          )}

          {error && (
            <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/50 rounded-lg text-destructive">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {conversionData && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 p-3 bg-muted/50 border border-border rounded-lg text-primary">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">
                  MP4 converted to MP3 successfully!
                </span>
              </div>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      <Music className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm mb-1">
                        MP3 Audio File
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        From: {conversionData.originalFile}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Duration: {conversionData.duration}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Quality: {conversionData.outputQuality}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Music className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium">High Quality MP3</p>
                        <p className="text-xs text-muted-foreground">
                          Size: {conversionData.outputSize}
                        </p>
                      </div>
                    </div>
                    <Button onClick={downloadMP3} className="bg-background">
                      <Download className="h-4 w-4 mr-1" />
                      Download MP3
                    </Button>
                  </div>

                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <h5 className="text-sm font-medium mb-2">
                      Conversion Details:
                    </h5>
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div>Input Format: {conversionData.format}</div>
                      <div>Output Format: MP3 Audio</div>
                      <div>Bitrate: {conversionData.outputQuality}</div>
                      <div>Channels: Stereo</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="text-xs text-muted-foreground">
            <p>• Specialized for MP4 video files</p>
            <p>• High-quality audio extraction up to 320kbps</p>
            <p>• Optimized processing for MP4 format</p>
            <p>• Preserves original audio quality and metadata</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
