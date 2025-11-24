"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Scissors, Upload, Download, Play } from "lucide-react";
import { toast } from "sonner";

export default function VideoTrimmerTool() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [trimming, setTrimming] = useState(false);

  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('video/')) {
        toast.error("Please select a valid video file");
        return;
      }

      const url = URL.createObjectURL(file);
      setVideoFile(file);
      setVideoURL(url);
    }
  };

  const handleVideoLoad = () => {
    if (videoRef.current) {
      const dur = videoRef.current.duration;
      setDuration(dur);
      setEndTime(dur);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const trimVideo = async () => {
    if (!videoFile) {
      toast.error("Please upload a video first");
      return;
    }

    setTrimming(true);
    toast.info("Note: Client-side video trimming requires re-encoding. This is a preview of trim points. For actual trimming, server-side processing is recommended.");

    // For demonstration, we'll create a clipped version using MediaRecorder
    try {
      const stream = videoRef.current.captureStream();
      const mediaRecorder = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `trimmed-${Date.now()}.webm`;
        a.click();
        toast.success("Trimmed video downloaded!");
        setTrimming(false);
      };

      videoRef.current.currentTime = startTime;
      await new Promise(resolve => setTimeout(resolve, 100));

      mediaRecorder.start();
      videoRef.current.play();

      setTimeout(() => {
        mediaRecorder.stop();
        videoRef.current.pause();
      }, (endTime - startTime) * 1000);

    } catch (_error) {
      console.error(error);
      toast.error("Trimming failed. This feature requires a modern browser.");
      setTrimming(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      {!videoURL ? (
        <Card>
          <CardContent className="pt-6">
            <div
              className="border-2 border-dashed rounded-xl p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Upload Video</h3>
              <p className="text-sm text-muted-foreground">Click to select a video file</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Video Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <video
                ref={videoRef}
                src={videoURL}
                className="w-full rounded-lg"
                controls
                onLoadedMetadata={handleVideoLoad}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scissors className="w-5 h-5" />
                Trim Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Start Time</Label>
                  <span className="text-sm text-muted-foreground">{formatTime(startTime)}</span>
                </div>
                <Slider
                  value={[startTime]}
                  min={0}
                  max={duration}
                  step={0.1}
                  onValueChange={([v]) => {
                    setStartTime(Math.min(v, endTime - 1));
                    if (videoRef.current) videoRef.current.currentTime = v;
                  }}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>End Time</Label>
                  <span className="text-sm text-muted-foreground">{formatTime(endTime)}</span>
                </div>
                <Slider
                  value={[endTime]}
                  min={0}
                  max={duration}
                  step={0.1}
                  onValueChange={([v]) => {
                    setEndTime(Math.max(v, startTime + 1));
                  }}
                />
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span>Trimmed Duration:</span>
                  <span className="font-semibold">{formatTime(endTime - startTime)}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={trimVideo} disabled={trimming} className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  {trimming ? "Trimming..." : "Trim & Download"}
                </Button>
                <Button variant="outline" onClick={() => {
                  setVideoURL(null);
                  setVideoFile(null);
                  setStartTime(0);
                  setEndTime(0);
                }}>
                  Upload New
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900">
        <CardHeader>
          <CardTitle className="text-sm">⚠️ Important Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• Client-side video trimming re-encodes the video using browser APIs</p>
          <p>• Output is in WebM format for browser compatibility</p>
          <p>• For production use, consider server-side video processing (FFmpeg)</p>
          <p>• Large videos may take time to process</p>
          <p>• Original quality may not be preserved in re-encoding</p>
        </CardContent>
      </Card>
    </div>
  );
}
