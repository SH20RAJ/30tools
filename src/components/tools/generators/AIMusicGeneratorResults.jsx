import { MusicIcon, DownloadIcon, CopyIcon, HeartIcon, FileAudio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AIMusicGeneratorResults({
  audioData,
  audioRef,
  handleDownload,
  addToFavorites,
  prompt,
  lyrics,
  lyricsOptimizer,
  isInstrumental,
  sampleRate,
  bitrate,
  format,
  copied,
  setCopied,
  toast,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MusicIcon className="h-5 w-5" />
          Generated Track
        </CardTitle>
        <CardDescription>
          Your AI-generated music will appear here with a built-in player
        </CardDescription>
      </CardHeader>
      <CardContent>
        {audioData ? (
          <div className="space-y-6">
            <audio ref={audioRef} controls className="w-full" src={audioData} />
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleDownload} className="gap-2">
                <DownloadIcon className="h-4 w-4" />
                Download {format.toUpperCase()}
              </Button>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(audioData);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                  toast.success("Audio data copied");
                }}
                variant="outline"
                className="gap-2"
              >
                <CopyIcon className="h-4 w-4" />
                {copied ? "Copied!" : "Copy Data"}
              </Button>
              <Button
                onClick={() =>
                  addToFavorites({
                    id: Date.now(),
                    audio: audioData,
                    prompt,
                    lyrics,
                    lyricsOptimizer,
                    isInstrumental,
                    sampleRate,
                    bitrate,
                    format,
                    timestamp: new Date().toISOString(),
                  })
                }
                variant="outline"
                className="gap-2"
              >
                <HeartIcon className="h-4 w-4" />
                Add to Favorites
              </Button>
            </div>
            <div className="bg-muted/50 p-4 space-y-3 rounded-lg">
              <div>
                <p className="text-sm font-medium mb-1">Prompt:</p>
                <p className="text-sm text-muted-foreground">{prompt}</p>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <FileAudio className="h-3 w-3" />
                  {sampleRate} Hz / {bitrate} kbps
                </span>
                <span className="flex items-center gap-1">
                  <MusicIcon className="h-3 w-3" />
                  {format.toUpperCase()}
                </span>
                {isInstrumental && <Badge variant="outline" className="text-[10px]">Instrumental</Badge>}
                {lyricsOptimizer && <Badge variant="outline" className="text-[10px]">Auto Lyrics</Badge>}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <MusicIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-lg font-medium mb-2">Ready to Compose</h3>
            <p className="text-muted-foreground mb-4">
              Describe your song and let MiniMax 2.6 bring it to life
            </p>
            <p className="text-sm text-muted-foreground">
              Generated tracks appear here with a built-in audio player
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}