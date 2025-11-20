"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Square, Download, Play, Pause } from "lucide-react";
import { toast } from "sonner";

export default function ScreenRecorderTool() {
  const [recording, setRecording] = useState(false);
  const [paused, setPaused] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoURL, setVideoURL] = useState(null);
  const [duration, setDuration] = useState(0);

  const mediaRecorderRef = useRef(null);
  const timerRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: "screen" },
        audio: true
      });

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp9'
      });

      mediaRecorderRef.current = mediaRecorder;
      const chunks = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setVideoURL(url);
        setRecordedChunks(chunks);
        stream.getTracks().forEach(track => track.stop());
        if (timerRef.current) clearInterval(timerRef.current);
      };

      mediaRecorder.start();
      setRecording(true);
      setDuration(0);

      timerRef.current = setInterval(() => {
        setDuration(prev => prev + 1);
      }, 1000);

      toast.success("Recording started!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to start recording. Please grant screen permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
      setPaused(false);
      toast.success("Recording stopped!");
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && recording) {
      if (paused) {
        mediaRecorderRef.current.resume();
        setPaused(false);
        toast.info("Recording resumed");
      } else {
        mediaRecorderRef.current.pause();
        setPaused(true);
        toast.info("Recording paused");
      }
    }
  };

  const downloadRecording = () => {
    if (videoURL) {
      const a = document.createElement('a');
      a.href = videoURL;
      a.download = `screen-recording-${Date.now()}.webm`;
      a.click();
      toast.success("Download started!");
    }
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="w-5 h-5" />
            Screen Recorder
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Recording Controls */}
          {!videoURL && (
            <div className="text-center space-y-4">
              {recording && (
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/20 rounded-full">
                    <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
                    <span className="font-semibold text-red-900 dark:text-red-100">
                      {paused ? 'PAUSED' : 'RECORDING'}
                    </span>
                  </div>
                  <p className="text-2xl font-mono font-bold">{formatDuration(duration)}</p>
                </div>
              )}

              <div className="flex gap-3 justify-center">
                {!recording ? (
                  <Button size="lg" onClick={startRecording} className="bg-red-600 hover:bg-red-700">
                    <Monitor className="w-5 h-5 mr-2" />
                    Start Recording
                  </Button>
                ) : (
                  <>
                    <Button variant="outline" onClick={pauseRecording}>
                      {paused ? <Play className="w-4 h-4 mr-2" /> : <Pause className="w-4 h-4 mr-2" />}
                      {paused ? 'Resume' : 'Pause'}
                    </Button>
                    <Button variant="destructive" onClick={stopRecording}>
                      <Square className="w-4 h-4 mr-2" />
                      Stop Recording
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Video Preview */}
          {videoURL && (
            <div className="space-y-4">
              <video
                src={videoURL}
                controls
                className="w-full rounded-lg border"
              />

              <div className="flex gap-3">
                <Button onClick={downloadRecording} className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Download Recording
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setVideoURL(null);
                    setRecordedChunks([]);
                    setDuration(0);
                  }}
                >
                  New Recording
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
        <CardHeader>
          <CardTitle className="text-sm">Browser Requirements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>✅ Chrome, Edge, Firefox (Latest versions)</p>
          <p>✅ Screen and audio recording supported</p>
          <p>⚠️ You'll be prompted to select which screen/window to record</p>
          <p>⚠️ Recordings are saved in WebM format</p>
          <p>💡 Grant microphone permission for audio recording</p>
        </CardContent>
      </Card>
    </div>
  );
}
