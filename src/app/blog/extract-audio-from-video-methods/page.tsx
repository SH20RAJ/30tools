
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "3 Methods to Help You Extract Audio from Video - 30Tools",
    description: "Step-by-step guide on how to strip audio tracks from video files easily using online tools and software.",
};

export default function BlogPost() {
    return (
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
            <div className="mb-8">
                <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button>
            </div>

            <article className="prose prose-lg dark:prose-invert max-w-none">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">3 Methods to Help You Extract Audio from Video</h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-8">
                    <span>January 11, 2025</span>
                    <span>•</span>
                    <span>5 min read</span>
                </div>

                <p className="lead">
                    Extracting audio from video files is a common need for content creators. Whether you want to save a music track, a speech, or a podcast from a video, here are 3 reliable methods.
                </p>

                <h2>Method 1: Online Video Converter</h2>
                <p>The easiest way is using an online converter like 30Tools Video to MP3.</p>

                <h2>Method 2: VLC Media Player</h2>
                <p>VLC is a versatile player that can also convert media.</p>

                <h2>Method 3: FFmpeg</h2>
                <p>For advanced users, the command line tool FFmpeg offers the best quality and control.</p>
            </article>
        </div>
    );
}
