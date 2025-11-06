'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Mic, 
  Square, 
  Play, 
  Pause, 
  Download, 
  RotateCcw,
  Volume2,
  ArrowLeftIcon,
  InfoIcon,
  CheckIcon,
  Settings,
  Waves,
  Timer
} from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';

export default function VoiceRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioFormat, setAudioFormat] = useState('webm');
  const [audioQuality, setAudioQuality] = useState('high');
  const [microphoneLevel, setMicrophoneLevel] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const mediaRecorderRef = useRef(null);
  const audioRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const streamRef = useRef(null);
  const analyserRef = useRef(null);
  const animationRef = useRef(null);

  const formatTime = useCallback((seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const updateMicrophoneLevel = useCallback(() => {
    if (!analyserRef.current) return;
    
    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteFrequencyData(dataArray);
    
    const average = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;
    setMicrophoneLevel(Math.round((average / 255) * 100));
    
    if (isRecording && !isPaused) {
      animationRef.current = requestAnimationFrame(updateMicrophoneLevel);
    }
  }, [isRecording, isPaused]);

  const startRecording = async () => {
    try {
      setIsProcessing(true);
      
      const constraints = {
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: audioQuality === 'high' ? 48000 : 22050
        }
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      
      // Set up audio analysis
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      analyserRef.current = analyser;
      
      // Configure MediaRecorder
      const mimeType = audioFormat === 'mp3' ? 'audio/webm' : `audio/${audioFormat}`;
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: mimeType,
        audioBitsPerSecond: audioQuality === 'high' ? 128000 : 64000
      });
      
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: mimeType });
        setRecordedBlob(blob);
        const url = URL.createObjectURL(blob);
        if (audioRef.current) {
          audioRef.current.src = url;
        }
        
        // Stop all tracks
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
        }
      };

      mediaRecorderRef.current.start(1000); // Collect data every second
      setIsRecording(true);
      setIsPaused(false);
      setRecordingTime(0);
      setRecordedBlob(null);
      
      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      
      // Start microphone level monitoring
      updateMicrophoneLevel();
      
      toast.success('Recording started successfully!');
    } catch (error) {
      console.error('Error accessing microphone:', error);
      toast.error('Failed to access microphone. Please check permissions.');
    } finally {
      setIsProcessing(false);
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      if (isPaused) {
        mediaRecorderRef.current.resume();
        setIsPaused(false);
        timerRef.current = setInterval(() => {
          setRecordingTime(prev => prev + 1);
        }, 1000);
        updateMicrophoneLevel();
        toast.success('Recording resumed');
      } else {
        mediaRecorderRef.current.pause();
        setIsPaused(true);
        clearInterval(timerRef.current);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        toast.success('Recording paused');
      }
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      clearInterval(timerRef.current);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setMicrophoneLevel(0);
      toast.success('Recording stopped successfully!');
    }
  };

  const playRecording = () => {
    if (audioRef.current && recordedBlob) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const downloadRecording = () => {
    if (recordedBlob) {
      const url = URL.createObjectURL(recordedBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `voice-recording-${Date.now()}.${audioFormat === 'webm' ? 'webm' : audioFormat}`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success('Recording downloaded!');
    }
  };

  const resetRecording = () => {
    if (isRecording) {
      stopRecording();
    }
    setRecordedBlob(null);
    setRecordingTime(0);
    setIsPlaying(false);
    setMicrophoneLevel(0);
    if (audioRef.current) {
      audioRef.current.src = '';
    }
    toast.success('Recording reset');
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => setIsPlaying(false);
      audio.addEventListener('ended', handleEnded);
      return () => audio.removeEventListener('ended', handleEnded);
    }
  }, [recordedBlob]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/audio-tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Audio Tools
          </Link>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 border rounded-lg bg-background">
                <Mic className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">
                  Professional Voice Recorder
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                  Record high-quality audio directly in your browser with professional features and real-time waveform visualization.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="gap-1">
                <Waves className="h-3 w-3" />
                Real-time Waveform
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Volume2 className="h-3 w-3" />
                High Quality Audio
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Timer className="h-3 w-3" />
                Unlimited Duration
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Download className="h-3 w-3" />
                Instant Download
              </Badge>
            </div>
          </div>

          <Alert className="mb-8">
            <InfoIcon className="h-4 w-4" />
            <AlertDescription>
              All recording happens locally in your browser. Your audio is never uploaded to our servers, ensuring complete privacy.
            </AlertDescription>
          </Alert>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Recording Settings
                </CardTitle>
                <CardDescription>
                  Configure your audio recording preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Audio Format</label>
                  <Select value={audioFormat} onValueChange={setAudioFormat} disabled={isRecording}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="webm">WebM (Recommended)</SelectItem>
                      <SelectItem value="wav">WAV (Uncompressed)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Audio Quality</label>
                  <Select value={audioQuality} onValueChange={setAudioQuality} disabled={isRecording}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High (48kHz)</SelectItem>
                      <SelectItem value="standard">Standard (22kHz)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                {/* Microphone Level */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Microphone Level</label>
                  <div className="space-y-2">
                    <Progress value={microphoneLevel} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Silent</span>
                      <span>{microphoneLevel}%</span>
                      <span>Loud</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Recording Timer */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Recording Time</label>
                  <div className="text-2xl font-mono font-bold text-center p-4 bg-muted rounded-lg">
                    {formatTime(recordingTime)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Recording Interface */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="h-5 w-5" />
                  Voice Recorder
                </CardTitle>
                <CardDescription>
                  Start recording by clicking the microphone button below
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-6">
                  {/* Recording Status */}
                  <div className="space-y-2">
                    {isRecording ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${isPaused ? 'bg-muted/500' : 'bg-destructive/100 animate-pulse'}`} />
                        <span className="font-medium">
                          {isPaused ? 'Recording Paused' : 'Recording Active'}
                        </span>
                      </div>
                    ) : recordedBlob ? (
                      <div className="flex items-center justify-center gap-2">
                        <CheckIcon className="w-4 h-4 text-primary" />
                        <span className="font-medium text-primary">Recording Complete</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">Ready to Record</span>
                    )}
                  </div>

                  {/* Main Controls */}
                  <div className="flex justify-center gap-4">
                    {!isRecording ? (
                      <Button
                        onClick={startRecording}
                        size="lg"
                        className="h-16 w-16 rounded-full"
                        disabled={isProcessing}
                      >
                        <Mic className="h-6 w-6" />
                      </Button>
                    ) : (
                      <>
                        <Button
                          onClick={pauseRecording}
                          size="lg"
                          variant="outline"
                          className="h-16 w-16 rounded-full"
                        >
                          {isPaused ? <Play className="h-6 w-6" /> : <Pause className="h-6 w-6" />}
                        </Button>
                        <Button
                          onClick={stopRecording}
                          size="lg"
                          variant="destructive"
                          className="h-16 w-16 rounded-full"
                        >
                          <Square className="h-6 w-6" />
                        </Button>
                      </>
                    )}
                  </div>

                  {/* Playback and Download Controls */}
                  {recordedBlob && (
                    <div className="space-y-4">
                      <Separator />
                      <div className="flex justify-center gap-4">
                        <Button
                          onClick={playRecording}
                          variant="outline"
                          className="gap-2"
                        >
                          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                          {isPlaying ? 'Pause' : 'Play'} Recording
                        </Button>
                        <Button
                          onClick={downloadRecording}
                          className="gap-2"
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                        <Button
                          onClick={resetRecording}
                          variant="outline"
                          className="gap-2"
                        >
                          <RotateCcw className="h-4 w-4" />
                          Reset
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Hidden audio element for playback */}
                  <audio ref={audioRef} style={{ display: 'none' }} />
                </div>
              </CardContent>
            </Card>

            {/* Usage Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Recording Tips & Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-muted dark:bg-primary/20 rounded-lg">
                        <Mic className="h-4 w-4 text-primary dark:text-primary" />
                      </div>
                      <h4 className="font-semibold">Microphone Tips</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Position your microphone 6-8 inches from your mouth for optimal audio quality. Avoid background noise.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-muted dark:bg-primary/20 rounded-lg">
                        <CheckIcon className="h-4 w-4 text-primary dark:text-primary" />
                      </div>
                      <h4 className="font-semibold">Browser Support</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Works best in Chrome, Firefox, Safari, and Edge. Requires microphone permissions to function.
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-semibold">Common Use Cases</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Voice Memos:</strong> Quick notes and reminders</li>
                    <li>• <strong>Interviews:</strong> Record conversations and meetings</li>
                    <li>• <strong>Podcasting:</strong> Create audio content for podcasts</li>
                    <li>• <strong>Lectures:</strong> Record educational content</li>
                    <li>• <strong>Music:</strong> Capture musical ideas and performances</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
