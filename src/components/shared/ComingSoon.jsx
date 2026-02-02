import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hammer } from "lucide-react";

export default function ComingSoon({ toolName }) {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <Hammer className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          {toolName}
        </h1>
        
        <p className="text-xl text-muted-foreground leading-relaxed">
          We're working hard to build the best <span className="font-semibold text-foreground">{toolName}</span> for you. 
          It will be available very soon!
        </p>

        <div className="p-6 bg-card border border-border/50 rounded-xl shadow-sm">
          <p className="font-medium mb-4">While you wait, check out our other popular tools:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/youtube-downloader">
              <Button variant="outline" className="gap-2">
                YouTube Downloader
              </Button>
            </Link>
            <Link href="/tiktok-downloader">
              <Button variant="outline" className="gap-2">
                TikTok Downloader
              </Button>
            </Link>
            <Link href="/pdf-compressor">
              <Button variant="outline" className="gap-2">
                 PDF Compressor
              </Button>
            </Link>
          </div>
        </div>

        <div className="pt-8">
          <Link href="/">
            <Button size="lg" className="rounded-full px-8">
              Explore All Tools
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
