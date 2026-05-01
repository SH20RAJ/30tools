import { ArrowLeftIcon, MusicIcon, Sparkles, Mic2, FileAudio, DownloadIcon, Zap, InfoIcon } from "lucide-react";
import Link from "next/link";
import { getRouteById } from "@/lib/tools";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

export default function AIMusicGeneratorHeader() {
  return (
    <div className="mb-8">
      <Link href={getRouteById("other-tools")} className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Generator Tools
      </Link>
      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-3 border">
            <MusicIcon className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-4xl font-bold tracking-tight">AI Music Generator</h2>
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 text-xs px-2 py-0.5 animate-pulse">
                Free This Week
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Create full-length songs with vocals and instrumentation from text prompts using MiniMax Music 2.6 on Cloudflare AI. Royalty-free AI music generation with studio-grade quality.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="gap-1">
            <Sparkles className="h-3 w-3" />AI-Powered (MiniMax 2.6)
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Mic2 className="h-3 w-3" />Vocals + Instruments
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <FileAudio className="h-3 w-3" />Studio-Grade Audio
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <DownloadIcon className="h-3 w-3" />MP3 & WAV Export
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Zap className="h-3 w-3" />Free on Cloudflare
          </Badge>
        </div>
      </div>
      <Alert className="mb-8 border-amber-500/30 bg-amber-500/5">
        <InfoIcon className="h-4 w-4 text-amber-500" />
        <AlertDescription className="text-amber-700 dark:text-amber-300">
          <strong>Free This Week Only!</strong> MiniMax Music 2.6 is powered by Cloudflare Workers AI and is completely free to use this week. Generate full-length songs with vocals or instrumentals from text prompts. No signup required — start creating royalty-free music instantly.
        </AlertDescription>
      </Alert>
    </div>
  );
}