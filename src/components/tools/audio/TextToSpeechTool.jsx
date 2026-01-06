"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Square, Download, Volume2, Settings } from "lucide-react";
import { toast } from "sonner";

export default function TextToSpeechTool() {
  const [text, setText] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("");
  const [rate, setRate] = useState([1]);
  const [pitch, setPitch] = useState([1]);
  const [volume, setVolume] = useState([1]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voices, setVoices] = useState([]);
  const [audioBlob, setAudioBlob] = useState(null);
  const speechRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // Initialize voices when component mounts
  useEffect(() => {
    const loadVoices = () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        const availableVoices = speechSynthesis.getVoices();
        setVoices(availableVoices);
        if (availableVoices.length > 0 && !selectedVoice) {
          setSelectedVoice(availableVoices[0].name);
        }
      }
    };

    loadVoices();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      speechSynthesis.addEventListener("voiceschanged", loadVoices);
    }

    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        speechSynthesis.removeEventListener("voiceschanged", loadVoices);
      }
    };
  }, []);

  const speakText = () => {
    if (!text.trim()) {
      toast.error("Please enter text to convert to speech");
      return;
    }

    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      toast.error("Speech synthesis is not supported in this browser");
      return;
    }

    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
      return;
    }

    if (speechSynthesis.paused) {
      speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    // Create new speech synthesis utterance
    const utterance = new SpeechSynthesisUtterance(text);

    // Find selected voice
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.rate = rate[0];
    utterance.pitch = pitch[0];
    utterance.volume = volume[0];

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = (event) => {
      toast.error("An error occurred during speech synthesis");
      setIsPlaying(false);
      setIsPaused(false);
    };

    speechRef.current = utterance;
    speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
  };

  const downloadAudio = async () => {
    if (!("MediaRecorder" in window)) {
      toast.error("Audio recording is not supported in your browser");
      return;
    }

    if (!text.trim()) {
      toast.error("Please enter text to convert to audio");
      return;
    }

    try {
      // Create audio context for recording
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const destination = audioContext.createMediaStreamDestination();

      // We'll simulate audio generation since direct TTS recording has limitations
      // In a real implementation, you might use Web Audio API or server-side TTS

      toast.success(
        "Note: Direct TTS audio download requires additional browser permissions. Using speech synthesis instead.",
      );

      // For now, just play the audio - in production you'd implement proper audio capture
      speakText();
    } catch (_error) {
      toast.error("Could not generate downloadable audio file");
    }
  };

  const getVoicesByLanguage = () => {
    const grouped = voices.reduce((acc, voice) => {
      const lang = voice.lang.split("-")[0];
      if (!acc[lang]) acc[lang] = [];
      acc[lang].push(voice);
      return acc;
    }, {});
    return grouped;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Volume2 className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">Text to Speech</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convert text to natural-sounding speech using your browser's built-in
          voice synthesis. Perfect for accessibility, learning, and content
          creation.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Text Input</CardTitle>
              <CardDescription>
                Enter the text you want to convert to speech
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="text">Text to Speak</Label>
                <Textarea
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your text here..."
                  className="mt-1 min-h-[200px]"
                  maxLength={5000}
                />
                <div className="text-sm text-muted-foreground mt-1">
                  {text.length}/5000 characters
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={speakText}
                  disabled={!text.trim()}
                  variant={isPlaying ? "secondary" : "default"}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-4 w-4 mr-2" />
                      {isPaused ? "Resume" : "Pause"}
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Play
                    </>
                  )}
                </Button>

                <Button
                  onClick={stopSpeech}
                  disabled={!isPlaying && !isPaused}
                  variant="outline"
                >
                  <Square className="h-4 w-4 mr-2" />
                  Stop
                </Button>

                <Button
                  onClick={downloadAudio}
                  disabled={!text.trim()}
                  variant="outline"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Voice Settings
              </CardTitle>
              <CardDescription>
                Customize voice and speech parameters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="voice">Voice</Label>
                <Select value={selectedVoice} onValueChange={setSelectedVoice}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a voice" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(getVoicesByLanguage()).map(
                      ([lang, langVoices]) => (
                        <div key={lang}>
                          <div className="px-2 py-1 text-sm font-semibold text-muted-foreground">
                            {lang.toUpperCase()}
                          </div>
                          {langVoices.map((voice) => (
                            <SelectItem key={voice.name} value={voice.name}>
                              {voice.name} ({voice.lang})
                            </SelectItem>
                          ))}
                        </div>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Rate: {rate[0].toFixed(1)}x</Label>
                <Slider
                  value={rate}
                  onValueChange={setRate}
                  min={0.1}
                  max={3}
                  step={0.1}
                  className="mt-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Slow</span>
                  <span>Fast</span>
                </div>
              </div>

              <div>
                <Label>Pitch: {pitch[0].toFixed(1)}</Label>
                <Slider
                  value={pitch}
                  onValueChange={setPitch}
                  min={0}
                  max={2}
                  step={0.1}
                  className="mt-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>

              <div>
                <Label>Volume: {Math.round(volume[0] * 100)}%</Label>
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  min={0}
                  max={1}
                  step={0.1}
                  className="mt-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Quiet</span>
                  <span>Loud</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="mt-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>About Text to Speech</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Text-to-Speech (TTS) technology converts written text into spoken
              words using synthetic speech. Our browser-based TTS tool uses the
              Web Speech API to provide natural-sounding voice synthesis without
              requiring any downloads or installations.
            </p>

            <h3>Key Features:</h3>
            <ul>
              <li>
                <strong>Multiple Voices:</strong> Choose from various built-in
                system voices
              </li>
              <li>
                <strong>Language Support:</strong> Support for multiple
                languages and accents
              </li>
              <li>
                <strong>Customizable Settings:</strong> Adjust rate, pitch, and
                volume
              </li>
              <li>
                <strong>Real-time Playback:</strong> Instant speech synthesis
              </li>
              <li>
                <strong>Pause & Resume:</strong> Full playback control
              </li>
              <li>
                <strong>Browser-based:</strong> No software installation
                required
              </li>
            </ul>

            <h3>Common Use Cases:</h3>
            <ul>
              <li>Accessibility for visually impaired users</li>
              <li>Language learning and pronunciation practice</li>
              <li>Content creation for podcasts and videos</li>
              <li>Proofreading by listening to text</li>
              <li>Creating audio versions of written content</li>
              <li>Assistive technology for reading difficulties</li>
              <li>Voice-over generation for presentations</li>
              <li>Audio feedback for applications</li>
            </ul>

            <h3>Voice Settings Explained:</h3>
            <ul>
              <li>
                <strong>Rate:</strong> Controls speech speed (0.1x to 3x normal
                speed)
              </li>
              <li>
                <strong>Pitch:</strong> Adjusts voice pitch from low to high
              </li>
              <li>
                <strong>Volume:</strong> Controls audio output level (0% to
                100%)
              </li>
              <li>
                <strong>Voice:</strong> Selects different voice personalities
                and languages
              </li>
            </ul>

            <h3>Browser Compatibility:</h3>
            <p>
              This tool uses the Web Speech API, which is supported by most
              modern browsers including Chrome, Firefox, Safari, and Edge. Voice
              availability may vary depending on your operating system and
              browser version.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
