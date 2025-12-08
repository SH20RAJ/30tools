"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Play } from "lucide-react"

export function SimpleTeraboxPlayer() {
    const [url, setUrl] = useState("")
    const [embedId, setEmbedId] = useState<string | null>(null)
    const [error, setError] = useState("")

    const handlePlay = () => {
        setError("")
        setEmbedId(null)

        if (!url) {
            setError("Please enter a valid Terabox URL")
            return
        }

        try {
            // Regex to extract the ID from patterns like /s/ID
            // Example: https://teraboxapp.com/s/1EWkWY66FhZKS2WfxwBgd0Q
            const match = url.match(/\/s\/([a-zA-Z0-9_-]+)/)

            if (match && match[1]) {
                setEmbedId(match[1])
            } else {
                // Fallback: Check if the user just pasted the ID? Or maybe the URL format is different.
                // For now, strict extraction based on knowledge.
                setError("Could not extract video ID from the URL. Please ensure it is a valid Terabox share link.")
            }
        } catch (err) {
            setError("An error occurred while processing the URL.")
        }
    }

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Play Terabox Video</CardTitle>
                    <CardDescription>
                        Enter your Terabox URL below to watch the video instantly without ads.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                            placeholder="https://teraboxapp.com/s/..."
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="flex-1"
                        />
                        <Button onClick={handlePlay} className="min-w-[120px]">
                            <Play className="mr-2 h-4 w-4" /> Watch
                        </Button>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </CardContent>
            </Card>

            {embedId && (
                <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl">
                    <CardContent className="p-0">
                        <div className="aspect-video w-full bg-black relative">
                            <iframe
                                src={`https://terabox.beer/watch/${embedId}`}
                                className="w-full h-full absolute top-0 left-0"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; encrypted-media; picture-in-picture"
                                title="Terabox Video Player"
                            />
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
