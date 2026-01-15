
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "How to Make Your Own Terabox Video Player Website - 30Tools",
    description: "Build a custom video player for Terabox files. Stream videos directly on your own site without ads.",
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Make Your Own Terabox Video Player Website</h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-8">
                    <span>January 19, 2025</span>
                    <span>•</span>
                    <span>8 min read</span>
                </div>

                <p className="lead text-xl text-muted-foreground">
                    Streaming directly from Terabox can be slow and ad-heavy. Creating your own web player allows you to serve content to users cleanly and efficiently.
                </p>

                <h2>Why Build a Custom Player?</h2>
                <ul>
                    <li><strong>No Ads:</strong> Provide a clean viewing experience.</li>
                    <li><strong>Custom Branding:</strong> Use your own domain and logo.</li>
                    <li><strong>Better Controls:</strong> Add speed control, quality selection, and more.</li>
                </ul>

                <h2>The Tech Stack</h2>
                <p>
                    We recommend using <strong>Next.js</strong> for the frontend and a simple API route to fetch the direct stream URL from Terabox.
                </p>

                <h2>Getting the Direct Stream Link</h2>
                <p>
                    Similar to the bot, you need to authenticate with Terabox (using headers/cookies) and request the file information. The API typically returns a <code>dlink</code> (direct link) which you can feed into an HTML5 video player.
                </p>

                <h2>Implementing the Player</h2>
                <p>
                    You can use libraries like <code>video.js</code> or <code>react-player</code> to handle the streaming.
                </p>

                <div className="bg-muted p-4 rounded-lg my-4">
                    <code>
                        &lt;video controls width="100%"&gt;<br />
                        &nbsp;&nbsp;&lt;source src="DIRECT_TERABOX_LINK_HERE" type="video/mp4" /&gt;<br />
                        &lt;/video&gt;
                    </code>
                </div>

                <h2>Ready-made Solution</h2>
                <p>
                    If building this from scratch seems daunting, check out our <strong>Terabox Player</strong> tool. It essentially does exactly this—generates a streamable and embeddable player for any Terabox link.
                </p>

                <div className="not-prose mt-8 text-center">
                    <Button size="lg" asChild>
                        <Link href="/terabox-downloader">Use Terabox Player</Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}
