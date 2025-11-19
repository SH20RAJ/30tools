"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Upload,
  Download,
  Play,
  Pause,
  Volume2,
  RotateCcw,
  Scissors,
  Copy,
  ZoomIn,
  ZoomOut,
  SkipBack,
  SkipForward,
  Mic,
  Square,
  Music,
  Settings,
  Filter,
  Volume,
  Headphones,
  FileAudio,
  Maximize2,
  Minimize2,
  Save,
  FolderOpen,
  Plus,
  Minus,
  RefreshCw,
  Layers,
  Move,
  Trash2,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Shuffle,
  Repeat,
  Rewind,
  FastForward,
  StopCircle,
  Record,
  Edit3,
  Waves,
} from "lucide-react";
import { toast } from "sonner";
import dynamic from "next/dynamic";

// Dynamically import libraries to avoid SSR issues
const WaveSurfer = dynamic(() => import("wavesurfer.js"), { ssr: false });

export default function AudioEditor() {
  // Core state
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [zoom, setZoom] = useState(50);

  // Audio processing state
  const [volume, setVolume] = useState(80);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const [tracks, setTracks] = useState([]);
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  // Effects state
  const [effects, setEffects] = useState({
    // EQ
    lowGain: 0,
    midGain: 0,
    highGain: 0,

    // Dynamics
    compressorThreshold: -24,
    compressorRatio: 4,
    compressorAttack: 3,
    compressorRelease: 250,
    limiterThreshold: -3,
    gateThreshold: -40,

    // Time-based effects
    reverbAmount: 0,
    reverbDecay: 2,
    delayTime: 0.3,
    delayFeedback: 0.3,
    delayAmount: 0,

    // Modulation
    chorusRate: 1.5,
    chorusDepth: 0.35,
    chorusAmount: 0,
    flangerRate: 0.5,
    flangerDepth: 1,
    flangerAmount: 0,
    phaserRate: 0.5,
    phaserDepth: 1,
    phaserAmount: 0,

    // Distortion
    distortionAmount: 0,
    overdrive: 0,
    bitcrusher: 0,

    // Filters
    lowPassFreq: 20000,
    highPassFreq: 20,
    bandPassFreq: 1000,
    bandPassQ: 1,
    notchFreq: 1000,
    notchQ: 1,

    // Advanced
    pitch: 0,
    formant: 0,
    timeStretch: 1,
    noisereduction: 0,
    deesser: 0,
    exciter: 0,
    stereoWidth: 100,

    // Master
    masterGain: 0,
    masterLimiter: true,
  });

  // Analysis state
  const [spectrumAnalyzer, setSpectrumAnalyzer] = useState(true);
  const [waveformView, setWaveformView] = useState("stereo");
  const [showGrid, setShowGrid] = useState(true);
  const [snapToGrid, setSnapToGrid] = useState(false);

  // Export settings
  const [exportFormat, setExportFormat] = useState("wav");
  const [exportQuality, setExportQuality] = useState("high");
  const [exportSampleRate, setExportSampleRate] = useState(44100);
  const [exportBitDepth, setExportBitDepth] = useState(16);

  // Refs
  const wavesurferRef = useRef(null);
  const audioContextRef = useRef(null);
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordingChunksRef = useRef([]);

  // Advanced audio processing nodes
  const audioNodesRef = useRef({
    source: null,
    eq: { low: null, mid: null, high: null },
    compressor: null,
    limiter: null,
    gate: null,
    reverb: null,
    delay: null,
    chorus: null,
    flanger: null,
    phaser: null,
    distortion: null,
    filters: { lowpass: null, highpass: null, bandpass: null, notch: null },
    analyzer: null,
    destination: null,
  });

  // Initialize Web Audio API
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
      initializeAudioNodes();
    }
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const initializeAudioNodes = () => {
    const ctx = audioContextRef.current;
    if (!ctx) return;

    const nodes = audioNodesRef.current;

    // EQ (3-band)
    nodes.eq.low = ctx.createBiquadFilter();
    nodes.eq.low.type = "lowshelf";
    nodes.eq.low.frequency.value = 320;

    nodes.eq.mid = ctx.createBiquadFilter();
    nodes.eq.mid.type = "peaking";
    nodes.eq.mid.frequency.value = 1000;
    nodes.eq.mid.Q.value = 0.5;

    nodes.eq.high = ctx.createBiquadFilter();
    nodes.eq.high.type = "highshelf";
    nodes.eq.high.frequency.value = 3200;

    // Dynamics
    nodes.compressor = ctx.createDynamicsCompressor();
    nodes.limiter = ctx.createDynamicsCompressor();
    nodes.gate = ctx.createGain();

    // Time-based effects
    nodes.delay = ctx.createDelay(2);
    const delayGain = ctx.createGain();
    const delayFeedback = ctx.createGain();

    // Filters
    nodes.filters.lowpass = ctx.createBiquadFilter();
    nodes.filters.lowpass.type = "lowpass";

    nodes.filters.highpass = ctx.createBiquadFilter();
    nodes.filters.highpass.type = "highpass";

    nodes.filters.bandpass = ctx.createBiquadFilter();
    nodes.filters.bandpass.type = "bandpass";

    nodes.filters.notch = ctx.createBiquadFilter();
    nodes.filters.notch.type = "notch";

    // Analyzer
    nodes.analyzer = ctx.createAnalyser();
    nodes.analyzer.fftSize = 2048;
    nodes.analyzer.smoothingTimeConstant = 0.8;

    // Master gain
    nodes.destination = ctx.createGain();

    // Connect the chain
    connectAudioNodes();
  };

  const connectAudioNodes = () => {
    const nodes = audioNodesRef.current;
    const ctx = audioContextRef.current;
    if (!ctx || !nodes.eq.low) return;

    try {
      // Disconnect all first
      Object.values(nodes).forEach((node) => {
        if (node && typeof node.disconnect === "function") {
          node.disconnect();
        }
      });

      // Connect in order: EQ -> Dynamics -> Filters -> Effects -> Analyzer -> Destination
      if (nodes.source) {
        nodes.source
          .connect(nodes.eq.low)
          .connect(nodes.eq.mid)
          .connect(nodes.eq.high)
          .connect(nodes.compressor)
          .connect(nodes.limiter)
          .connect(nodes.filters.lowpass)
          .connect(nodes.filters.highpass)
          .connect(nodes.filters.bandpass)
          .connect(nodes.filters.notch)
          .connect(nodes.analyzer)
          .connect(nodes.destination)
          .connect(ctx.destination);
      }
    } catch (error) {
      console.error("Error connecting audio nodes:", error);
    }
  };

  // File handling
  const handleFileUpload = useCallback(
    async (files) => {
      const fileArray = Array.from(files);

      for (const file of fileArray) {
        if (!file.type.startsWith("audio/")) {
          toast.error(`${file.name} is not a valid audio file`);
          continue;
        }

        try {
          const arrayBuffer = await file.arrayBuffer();
          const audioBuffer =
            await audioContextRef.current.decodeAudioData(arrayBuffer);

          const newTrack = {
            id: Date.now() + Math.random(),
            name: file.name,
            file,
            audioBuffer,
            url: URL.createObjectURL(file),
            duration: audioBuffer.duration,
            channels: audioBuffer.numberOfChannels,
            sampleRate: audioBuffer.sampleRate,
            volume: 1,
            muted: false,
            solo: false,
            visible: true,
            locked: false,
            effects: { ...effects },
          };

          setTracks((prev) => [...prev, newTrack]);
          setAudioFiles((prev) => [...prev, file]);

          // Initialize WaveSurfer for the first track
          if (tracks.length === 0) {
            initializeWaveSurfer(newTrack);
          }

          toast.success(`Loaded ${file.name}`);
        } catch (error) {
          console.error("Error loading audio file:", error);
          toast.error(`Failed to load ${file.name}`);
        }
      }
    },
    [tracks.length, effects],
  );

  const initializeWaveSurfer = async (track) => {
    if (typeof window === "undefined") return;

    try {
      const WaveSurfer = (await import("wavesurfer.js")).default;

      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }

      wavesurferRef.current = WaveSurfer.create({
        container: "#waveform",
        waveColor: "#3b82f6",
        progressColor: "#1d4ed8",
        cursorColor: "#ef4444",
        barWidth: 2,
        barRadius: 1,
        responsive: true,
        height: 100,
        normalize: true,
        backend: "WebAudio",
        mediaControls: false,
      });

      wavesurferRef.current.loadBlob(track.file);

      wavesurferRef.current.on("ready", () => {
        setDuration(wavesurferRef.current.getDuration());
      });

      wavesurferRef.current.on("audioprocess", () => {
        setCurrentTime(wavesurferRef.current.getCurrentTime());
      });

      wavesurferRef.current.on("finish", () => {
        setIsPlaying(false);
      });
    } catch (error) {
      console.error("Error initializing WaveSurfer:", error);
      toast.error("Failed to initialize waveform display");
    }
  };

  // Playback controls
  const togglePlayPause = () => {
    if (!wavesurferRef.current) return;

    if (isPlaying) {
      wavesurferRef.current.pause();
    } else {
      wavesurferRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const stop = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.stop();
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const skipForward = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.skip(10);
    }
  };

  const skipBackward = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.skip(-10);
    }
  };

  // Recording functionality
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false,
          sampleRate: 44100,
        },
      });

      const options = {
        mimeType: "audio/webm;codecs=opus",
        audioBitsPerSecond: 128000,
      };

      mediaRecorderRef.current = new MediaRecorder(stream, options);
      recordingChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        recordingChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const blob = new Blob(recordingChunksRef.current, {
          type: "audio/webm",
        });
        const file = new File(
          [blob],
          `Recording_${new Date().toISOString()}.webm`,
          { type: "audio/webm" },
        );
        await handleFileUpload([file]);

        // Stop all tracks
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      toast.success("Recording started");
    } catch (error) {
      console.error("Error starting recording:", error);
      toast.error("Failed to start recording");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      toast.success("Recording stopped");
    }
  };

  // Audio processing functions
  const applyEffects = useCallback(async () => {
    if (!audioContextRef.current || tracks.length === 0) return;

    setIsProcessing(true);

    try {
      const ctx = audioContextRef.current;
      const nodes = audioNodesRef.current;

      // Apply EQ
      if (nodes.eq.low) {
        nodes.eq.low.gain.value = effects.lowGain;
        nodes.eq.mid.gain.value = effects.midGain;
        nodes.eq.high.gain.value = effects.highGain;
      }

      // Apply dynamics
      if (nodes.compressor) {
        nodes.compressor.threshold.value = effects.compressorThreshold;
        nodes.compressor.ratio.value = effects.compressorRatio;
        nodes.compressor.attack.value = effects.compressorAttack / 1000;
        nodes.compressor.release.value = effects.compressorRelease / 1000;
      }

      // Apply filters
      if (nodes.filters.lowpass) {
        nodes.filters.lowpass.frequency.value = effects.lowPassFreq;
        nodes.filters.highpass.frequency.value = effects.highPassFreq;
        nodes.filters.bandpass.frequency.value = effects.bandPassFreq;
        nodes.filters.bandpass.Q.value = effects.bandPassQ;
        nodes.filters.notch.frequency.value = effects.notchFreq;
        nodes.filters.notch.Q.value = effects.notchQ;
      }

      // Apply master gain
      if (nodes.destination) {
        nodes.destination.gain.value = Math.pow(10, effects.masterGain / 20);
      }

      toast.success("Effects applied successfully!");
    } catch (error) {
      console.error("Error applying effects:", error);
      toast.error("Failed to apply effects");
    }

    setIsProcessing(false);
  }, [effects, tracks]);

  // Export functionality
  const exportAudio = async () => {
    if (tracks.length === 0) {
      toast.error("No audio tracks to export");
      return;
    }

    setIsProcessing(true);

    try {
      const ctx = audioContextRef.current;
      const currentTrack = tracks[currentTrackIndex];

      if (!currentTrack) {
        toast.error("No track selected for export");
        return;
      }

      let exportBlob;

      if (exportFormat === "mp3") {
        // Use lamejs for MP3 export
        const lamejs = await import("lamejs");
        const mp3encoder = new lamejs.Mp3Encoder(
          currentTrack.channels,
          currentTrack.sampleRate,
          exportQuality === "high"
            ? 320
            : exportQuality === "medium"
              ? 192
              : 128,
        );

        const samples = new Int16Array(currentTrack.audioBuffer.length);
        const left = currentTrack.audioBuffer.getChannelData(0);
        const right =
          currentTrack.channels > 1
            ? currentTrack.audioBuffer.getChannelData(1)
            : left;

        for (let i = 0; i < samples.length; i++) {
          samples[i] = Math.max(-1, Math.min(1, left[i])) * 0x7fff;
        }

        const mp3Data = [];
        const sampleBlockSize = 1152;

        for (let i = 0; i < samples.length; i += sampleBlockSize) {
          const leftChunk = samples.subarray(i, i + sampleBlockSize);
          const rightChunk =
            currentTrack.channels > 1
              ? samples.subarray(i, i + sampleBlockSize)
              : leftChunk;
          const mp3buf = mp3encoder.encodeBuffer(leftChunk, rightChunk);
          if (mp3buf.length > 0) {
            mp3Data.push(mp3buf);
          }
        }

        const mp3buf = mp3encoder.flush();
        if (mp3buf.length > 0) {
          mp3Data.push(mp3buf);
        }

        exportBlob = new Blob(mp3Data, { type: "audio/mp3" });
      } else {
        // Use audiobuffer-to-wav for WAV export
        const audioBufferToWav = await import("audiobuffer-to-wav");
        const wavArrayBuffer = audioBufferToWav.default(
          currentTrack.audioBuffer,
        );
        exportBlob = new Blob([wavArrayBuffer], { type: "audio/wav" });
      }

      // Download the file
      const url = URL.createObjectURL(exportBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${currentTrack.name.split(".")[0]}_edited.${exportFormat}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success(`Audio exported as ${exportFormat.toUpperCase()}!`);
    } catch (error) {
      console.error("Error exporting audio:", error);
      toast.error("Failed to export audio");
    }

    setIsProcessing(false);
  };

  // Utility functions
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const resetAll = () => {
    setTracks([]);
    setAudioFiles([]);
    setCurrentTrackIndex(0);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setSelection({ start: 0, end: 0 });
    setEffects({
      lowGain: 0,
      midGain: 0,
      highGain: 0,
      compressorThreshold: -24,
      compressorRatio: 4,
      compressorAttack: 3,
      compressorRelease: 250,
      limiterThreshold: -3,
      gateThreshold: -40,
      reverbAmount: 0,
      reverbDecay: 2,
      delayTime: 0.3,
      delayFeedback: 0.3,
      delayAmount: 0,
      chorusRate: 1.5,
      chorusDepth: 0.35,
      chorusAmount: 0,
      flangerRate: 0.5,
      flangerDepth: 1,
      flangerAmount: 0,
      phaserRate: 0.5,
      phaserDepth: 1,
      phaserAmount: 0,
      distortionAmount: 0,
      overdrive: 0,
      bitcrusher: 0,
      lowPassFreq: 20000,
      highPassFreq: 20,
      bandPassFreq: 1000,
      bandPassQ: 1,
      notchFreq: 1000,
      notchQ: 1,
      pitch: 0,
      formant: 0,
      timeStretch: 1,
      noisereduction: 0,
      deesser: 0,
      exciter: 0,
      stereoWidth: 100,
      masterGain: 0,
      masterLimiter: true,
    });

    if (wavesurferRef.current) {
      wavesurferRef.current.destroy();
      wavesurferRef.current = null;
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-background">
              Pro Audio Editor
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional-grade audio editing with real-time effects and
              multi-track support
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Badge
                variant="outline"
                className="bg-muted/50 text-primary border-border"
              >
                <Waves className="w-3 h-3 mr-1" />
                Multi-track
              </Badge>
              <Badge
                variant="outline"
                className="bg-muted/50 text-primary border-border"
              >
                <Headphones className="w-3 h-3 mr-1" />
                Real-time Effects
              </Badge>
              <Badge
                variant="outline"
                className="bg-muted/50 text-primary border-border"
              >
                <FileAudio className="w-3 h-3 mr-1" />
                Professional Export
              </Badge>
            </div>
          </div>

          {/* Main Interface */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Left Sidebar - File Management & Recording */}
            <div className="xl:col-span-1 space-y-4">
              <Card className="border-2 border-dashed border-border bg-muted/50/50 hover:border-border transition-colors">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Upload className="w-5 h-5" />
                    Import Audio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="border-2 border-dashed border-border/50 rounded-lg p-6 text-center cursor-pointer hover:border-border transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <FileAudio className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium text-primary mb-1">
                      Drop files here or click to browse
                    </p>
                    <p className="text-xs text-primary/70">
                      Supports MP3, WAV, FLAC, M4A, OGG
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="audio/*"
                    multiple
                    onChange={(e) => handleFileUpload(e.target.files)}
                    className="hidden"
                  />

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <Button
                      onClick={isRecording ? stopRecording : startRecording}
                      variant={isRecording ? "destructive" : "default"}
                      className="w-full"
                      size="sm"
                    >
                      {isRecording ? (
                        <>
                          <Square className="w-4 h-4 mr-2" />
                          Stop Recording
                        </>
                      ) : (
                        <>
                          <Mic className="w-4 h-4 mr-2" />
                          Start Recording
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Track List */}
              {tracks.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Layers className="w-5 h-5" />
                      Tracks ({tracks.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-2">
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {tracks.map((track, index) => (
                        <div
                          key={track.id}
                          className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                            index === currentTrackIndex
                              ? "bg-muted/50 border-border"
                              : "bg-white border-border hover:bg-gray-50"
                          }`}
                          onClick={() => setCurrentTrackIndex(index)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">
                                {track.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {formatTime(track.duration)} • {track.channels}
                                ch • {Math.round(track.sampleRate / 1000)}kHz
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Toggle track visibility
                                }}
                              >
                                {track.visible ? (
                                  <Eye className="w-3 h-3" />
                                ) : (
                                  <EyeOff className="w-3 h-3" />
                                )}
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Delete track
                                  setTracks((prev) =>
                                    prev.filter((_, i) => i !== index),
                                  );
                                  if (
                                    index === currentTrackIndex &&
                                    tracks.length > 1
                                  ) {
                                    setCurrentTrackIndex(0);
                                  }
                                }}
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Main Content Area */}
            <div className="xl:col-span-3">
              {/* Transport Controls */}
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    {/* Transport buttons */}
                    <div className="flex items-center gap-2">
                      <Button
                        onClick={skipBackward}
                        variant="outline"
                        size="sm"
                      >
                        <SkipBack className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={togglePlayPause}
                        size="lg"
                        className="px-6"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5" />
                        ) : (
                          <Play className="w-5 h-5" />
                        )}
                      </Button>
                      <Button onClick={stop} variant="outline" size="sm">
                        <StopCircle className="w-4 h-4" />
                      </Button>
                      <Button onClick={skipForward} variant="outline" size="sm">
                        <SkipForward className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Time display */}
                    <div className="flex items-center gap-4 text-sm font-mono">
                      <span>{formatTime(currentTime)}</span>
                      <span className="text-muted-foreground">/</span>
                      <span>{formatTime(duration)}</span>
                    </div>

                    {/* Master volume */}
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4" />
                      <Slider
                        value={[volume]}
                        onValueChange={(value) => setVolume(value[0])}
                        max={100}
                        step={1}
                        className="w-20"
                      />
                      <span className="text-sm font-mono w-8">{volume}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Waveform Display */}
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Waves className="w-5 h-5" />
                      Waveform
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setZoom(Math.max(10, zoom - 10))}
                      >
                        <ZoomOut className="w-4 h-4" />
                      </Button>
                      <span className="text-sm font-mono w-12 text-center">
                        {zoom}%
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setZoom(Math.min(200, zoom + 10))}
                      >
                        <ZoomIn className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div
                    id="waveform"
                    className="w-full h-32 bg-slate-50 rounded-lg"
                  ></div>
                  {tracks.length === 0 && (
                    <div className="flex items-center justify-center h-32 bg-slate-50 rounded-lg">
                      <div className="text-center">
                        <Waves className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          Load an audio file to see waveform
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Effects Panel */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Audio Processing & Effects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="eq" className="w-full">
                    <TabsList className="grid w-full grid-cols-6">
                      <TabsTrigger value="eq">EQ</TabsTrigger>
                      <TabsTrigger value="dynamics">Dynamics</TabsTrigger>
                      <TabsTrigger value="effects">Effects</TabsTrigger>
                      <TabsTrigger value="filters">Filters</TabsTrigger>
                      <TabsTrigger value="advanced">Advanced</TabsTrigger>
                      <TabsTrigger value="export">Export</TabsTrigger>
                    </TabsList>

                    {/* EQ Tab */}
                    <TabsContent value="eq" className="space-y-4 mt-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Low (320Hz)
                          </Label>
                          <Slider
                            value={[effects.lowGain]}
                            onValueChange={(value) =>
                              setEffects((prev) => ({
                                ...prev,
                                lowGain: value[0],
                              }))
                            }
                            min={-20}
                            max={20}
                            step={0.5}
                            className="w-full"
                          />
                          <span className="text-xs text-muted-foreground text-center block">
                            {effects.lowGain}dB
                          </span>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Mid (1kHz)
                          </Label>
                          <Slider
                            value={[effects.midGain]}
                            onValueChange={(value) =>
                              setEffects((prev) => ({
                                ...prev,
                                midGain: value[0],
                              }))
                            }
                            min={-20}
                            max={20}
                            step={0.5}
                            className="w-full"
                          />
                          <span className="text-xs text-muted-foreground text-center block">
                            {effects.midGain}dB
                          </span>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            High (3.2kHz)
                          </Label>
                          <Slider
                            value={[effects.highGain]}
                            onValueChange={(value) =>
                              setEffects((prev) => ({
                                ...prev,
                                highGain: value[0],
                              }))
                            }
                            min={-20}
                            max={20}
                            step={0.5}
                            className="w-full"
                          />
                          <span className="text-xs text-muted-foreground text-center block">
                            {effects.highGain}dB
                          </span>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Dynamics Tab */}
                    <TabsContent value="dynamics" className="space-y-4 mt-4">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-medium">Compressor</h4>
                          <div className="space-y-3">
                            <div>
                              <Label className="text-sm">Threshold</Label>
                              <Slider
                                value={[effects.compressorThreshold]}
                                onValueChange={(value) =>
                                  setEffects((prev) => ({
                                    ...prev,
                                    compressorThreshold: value[0],
                                  }))
                                }
                                min={-60}
                                max={0}
                                step={1}
                              />
                              <span className="text-xs text-muted-foreground">
                                {effects.compressorThreshold}dB
                              </span>
                            </div>
                            <div>
                              <Label className="text-sm">Ratio</Label>
                              <Slider
                                value={[effects.compressorRatio]}
                                onValueChange={(value) =>
                                  setEffects((prev) => ({
                                    ...prev,
                                    compressorRatio: value[0],
                                  }))
                                }
                                min={1}
                                max={20}
                                step={0.1}
                              />
                              <span className="text-xs text-muted-foreground">
                                {effects.compressorRatio}:1
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-medium">Limiter</h4>
                          <div className="space-y-3">
                            <div>
                              <Label className="text-sm">Threshold</Label>
                              <Slider
                                value={[effects.limiterThreshold]}
                                onValueChange={(value) =>
                                  setEffects((prev) => ({
                                    ...prev,
                                    limiterThreshold: value[0],
                                  }))
                                }
                                min={-20}
                                max={0}
                                step={0.1}
                              />
                              <span className="text-xs text-muted-foreground">
                                {effects.limiterThreshold}dB
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Effects Tab */}
                    <TabsContent value="effects" className="space-y-4 mt-4">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-medium">Reverb</h4>
                          <div className="space-y-3">
                            <div>
                              <Label className="text-sm">Amount</Label>
                              <Slider
                                value={[effects.reverbAmount]}
                                onValueChange={(value) =>
                                  setEffects((prev) => ({
                                    ...prev,
                                    reverbAmount: value[0],
                                  }))
                                }
                                min={0}
                                max={100}
                                step={1}
                              />
                              <span className="text-xs text-muted-foreground">
                                {effects.reverbAmount}%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-medium">Delay</h4>
                          <div className="space-y-3">
                            <div>
                              <Label className="text-sm">Amount</Label>
                              <Slider
                                value={[effects.delayAmount]}
                                onValueChange={(value) =>
                                  setEffects((prev) => ({
                                    ...prev,
                                    delayAmount: value[0],
                                  }))
                                }
                                min={0}
                                max={100}
                                step={1}
                              />
                              <span className="text-xs text-muted-foreground">
                                {effects.delayAmount}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Export Tab */}
                    <TabsContent value="export" className="space-y-4 mt-4">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <Label className="text-sm font-medium">
                              Format
                            </Label>
                            <Select
                              value={exportFormat}
                              onValueChange={setExportFormat}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="wav">
                                  WAV (Uncompressed)
                                </SelectItem>
                                <SelectItem value="mp3">
                                  MP3 (Compressed)
                                </SelectItem>
                                <SelectItem value="flac">
                                  FLAC (Lossless)
                                </SelectItem>
                                <SelectItem value="ogg">OGG Vorbis</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label className="text-sm font-medium">
                              Quality
                            </Label>
                            <Select
                              value={exportQuality}
                              onValueChange={setExportQuality}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="high">
                                  High (320 kbps)
                                </SelectItem>
                                <SelectItem value="medium">
                                  Medium (192 kbps)
                                </SelectItem>
                                <SelectItem value="low">
                                  Low (128 kbps)
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <Label className="text-sm font-medium">
                              Sample Rate
                            </Label>
                            <Select
                              value={exportSampleRate.toString()}
                              onValueChange={(value) =>
                                setExportSampleRate(parseInt(value))
                              }
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="44100">44.1 kHz</SelectItem>
                                <SelectItem value="48000">48 kHz</SelectItem>
                                <SelectItem value="96000">96 kHz</SelectItem>
                                <SelectItem value="192000">192 kHz</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label className="text-sm font-medium">
                              Bit Depth
                            </Label>
                            <Select
                              value={exportBitDepth.toString()}
                              onValueChange={(value) =>
                                setExportBitDepth(parseInt(value))
                              }
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="16">16-bit</SelectItem>
                                <SelectItem value="24">24-bit</SelectItem>
                                <SelectItem value="32">32-bit Float</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button
                          onClick={exportAudio}
                          disabled={isProcessing || tracks.length === 0}
                          className="flex-1"
                        >
                          {isProcessing ? (
                            <>
                              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                              Exporting...
                            </>
                          ) : (
                            <>
                              <Download className="w-4 h-4 mr-2" />
                              Export Audio
                            </>
                          )}
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <Separator className="my-6" />

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      onClick={applyEffects}
                      disabled={isProcessing || tracks.length === 0}
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Apply Effects
                    </Button>
                    <Button onClick={resetAll} variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset All
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
