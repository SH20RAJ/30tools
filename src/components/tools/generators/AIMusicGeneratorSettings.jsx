import { Settings, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { RefreshCwIcon, Sparkles } from "lucide-react";
import { STRUCTURE_TAGS } from "./ai-music-constants";

export default function AIMusicGeneratorSettings({
  prompt,
  setPrompt,
  lyrics,
  setLyrics,
  audioData,
  loading,
  error,
  lyricsOptimizer,
  setLyricsOptimizer,
  isInstrumental,
  setIsInstrumental,
  sampleRate,
  setSampleRate,
  bitrate,
  setBitrate,
  format,
  setFormat,
  generationProgress,
  handleGenerate,
  insertTag,
}) {
  return (
    <div className="lg:col-span-1 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Generation Settings
          </CardTitle>
          <CardDescription>Configure your AI music generation parameters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="prompt">Style Prompt</Label>
            <Textarea
              id="prompt"
              placeholder="An upbeat electronic dance track with a catchy synth melody and driving beat, 128 BPM..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={loading}
              className="min-h-[100px] resize-none"
            />
            <p className="text-xs text-muted-foreground">
              Describe genre, mood, vocal style, tempo, and instruments. Be specific for best results.
            </p>
          </div>
          <Separator />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">Instrumental Mode</Label>
                <p className="text-xs text-muted-foreground">Generate music without vocals</p>
              </div>
              <Switch checked={isInstrumental} onCheckedChange={setIsInstrumental} disabled={loading} />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">Lyrics Optimizer</Label>
                <p className="text-xs text-muted-foreground">Auto-write lyrics from your prompt</p>
              </div>
              <Switch
                checked={lyricsOptimizer}
                onCheckedChange={setLyricsOptimizer}
                disabled={loading || isInstrumental}
              />
            </div>
          </div>
          {!isInstrumental && (
            <>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="lyrics-input">Lyrics (optional)</Label>
                <Textarea
                  id="lyrics-input"
                  placeholder="[Verse]\nWalking down a dusty road\nWith the sunset painting gold\nEvery step a story told\nOf the places I call home\n\n[Chorus]\nCarry me away tonight\nUnder stars so burning bright\nEvery wrong will turn to right\nIn the morning's golden light"
                  value={lyrics}
                  onChange={(e) => setLyrics(e.target.value)}
                  disabled={loading || lyricsOptimizer}
                  className="min-h-[160px] resize-none font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground">
                  Use \n to separate lines. Add structure tags below for arrangement control.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {STRUCTURE_TAGS.map((tag) => (
                    <Button
                      key={tag}
                      variant="outline"
                      size="sm"
                      className="text-[10px] h-6 px-2 py-0"
                      onClick={() => insertTag(tag)}
                      disabled={loading || lyricsOptimizer}
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>
            </>
          )}
          <Separator />
          <div className="space-y-3">
            <Label className="text-sm font-semibold">Audio Quality</Label>
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1">
                <Label className="text-xs">Sample Rate</Label>
                <Select value={sampleRate} onValueChange={setSampleRate} disabled={loading}>
                  <SelectTrigger className="text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="16000">16 kHz</SelectItem>
                    <SelectItem value="24000">24 kHz</SelectItem>
                    <SelectItem value="32000">32 kHz</SelectItem>
                    <SelectItem value="44100">44.1 kHz</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Bitrate</Label>
                <Select value={bitrate} onValueChange={setBitrate} disabled={loading}>
                  <SelectTrigger className="text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="32">32 kbps</SelectItem>
                    <SelectItem value="64">64 kbps</SelectItem>
                    <SelectItem value="128">128 kbps</SelectItem>
                    <SelectItem value="256">256 kbps</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Format</Label>
                <Select value={format} onValueChange={setFormat} disabled={loading}>
                  <SelectTrigger className="text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mp3">MP3</SelectItem>
                    <SelectItem value="wav">WAV</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <Separator />
          <Button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim() || (!isInstrumental && !lyricsOptimizer && !lyrics.trim())}
            className="w-full"
            size="lg"
          >
            {loading ? (
              <>
                <RefreshCwIcon className="animate-spin h-4 w-4 mr-2" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Generate AI Music
              </>
            )}
          </Button>
          {loading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Composing your track...</span>
                <span>{Math.round(generationProgress)}%</span>
              </div>
              <Progress value={generationProgress} className="h-2" />
              <p className="text-xs text-muted-foreground">
                This may take 10-30 seconds. MiniMax Music 2.6 is crafting your song.
              </p>
            </div>
          )}
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <BadgePercent className="h-4 w-4 text-amber-500" />
            Free on Cloudflare This Week
          </CardTitle>
        </CardHeader>
        <CardContent className="text-xs text-muted-foreground space-y-2">
          <p>MiniMax Music 2.6 is available for free on Cloudflare Workers AI this week. Generate unlimited songs with no cost.</p>
          <p>All generated music is royalty-free and cleared for commercial use in videos, podcasts, games, and ads.</p>
        </CardContent>
      </Card>
    </div>
  );
}