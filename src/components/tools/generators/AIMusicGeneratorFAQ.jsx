import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AIMusicGeneratorFAQ() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">What is MiniMax Music 2.6?</h4>
              <p className="text-sm text-muted-foreground">
                MiniMax Music 2.6 is an advanced AI music generation model that creates full-length songs with natural vocals, layered instrumentation, and professional mixing from text prompts and lyrics.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Is the generated music royalty-free?</h4>
              <p className="text-sm text-muted-foreground">
                Yes. All music generated is royalty-free and cleared for commercial use in videos, podcasts, games, advertisements, and branded content without additional licensing.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">How does Lyrics Optimizer work?</h4>
              <p className="text-sm text-muted-foreground">
                When enabled, the AI automatically generates lyrics based on your style prompt. You do not need to write any lyrics yourself — just describe the mood and genre.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">What audio formats are supported?</h4>
              <p className="text-sm text-muted-foreground">
                You can export in MP3 or WAV format. Sample rate options include 16kHz, 24kHz, 32kHz, and 44.1kHz. Bitrate options range from 32kbps to 256kbps.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">What are structure tags?</h4>
              <p className="text-sm text-muted-foreground">
                Structure tags like [Verse], [Chorus], [Bridge], and [Drop] let you precisely control the arrangement and emotional arc of your generated song.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Why is it free this week?</h4>
              <p className="text-sm text-muted-foreground">
                Cloudflare is offering MiniMax Music 2.6 for free on Workers AI as a limited-time promotion. Take advantage of unlimited generation while the offer lasts.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}