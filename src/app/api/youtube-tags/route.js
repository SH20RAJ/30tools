import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const videoId = searchParams.get("videoId");

        if (!videoId) {
            return NextResponse.json(
                { error: "Video ID is required" },
                { status: 400 }
            );
        }

        // Fetch the YouTube video page
        const response = await fetch(
            `https://www.youtube.com/watch?v=${videoId}`,
            {
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                    Accept:
                        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                    "Accept-Language": "en-US,en;q=0.5",
                },
            }
        );

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch video data" },
                { status: response.status }
            );
        }

        const html = await response.text();

        // Extract tags from meta keywords tag
        let tags = [];

        // Method 1: Extract from meta keywords
        const keywordsMatch = html.match(
            /<meta\s+name="keywords"\s+content="([^"]+)"/i
        );
        if (keywordsMatch && keywordsMatch[1]) {
            tags = keywordsMatch[1].split(",").map((tag) => tag.trim());
        }

        // Method 2: Extract from ytInitialData (more reliable)
        if (tags.length === 0) {
            const ytInitialDataMatch = html.match(
                /var ytInitialData = ({.+?});/
            );

            if (ytInitialDataMatch && ytInitialDataMatch[1]) {
                try {
                    const ytData = JSON.parse(ytInitialDataMatch[1]);

                    // Navigate through the complex YouTube data structure
                    const videoDetails =
                        ytData?.contents?.twoColumnWatchNextResults?.results?.results
                            ?.contents?.[0]?.videoPrimaryInfoRenderer;

                    if (videoDetails?.superTitleLink?.runs) {
                        tags = videoDetails.superTitleLink.runs.map((run) => run.text);
                    }
                } catch (e) {
                    console.error("Error parsing ytInitialData:", e);
                }
            }
        }

        // Method 3: Extract from JSON-LD structured data
        if (tags.length === 0) {
            const jsonLdMatches = html.matchAll(
                /<script type="application\/ld\+json">(.+?)<\/script>/gs
            );

            for (const match of jsonLdMatches) {
                try {
                    const jsonData = JSON.parse(match[1]);
                    if (jsonData.keywords) {
                        if (Array.isArray(jsonData.keywords)) {
                            tags = jsonData.keywords;
                        } else if (typeof jsonData.keywords === "string") {
                            tags = jsonData.keywords.split(",").map((tag) => tag.trim());
                        }
                        break;
                    }
                } catch (e) {
                    // Continue to next match
                }
            }
        }

        // Extract title as fallback
        let title = "";
        const titleMatch = html.match(/<title>(.+?)<\/title>/i);
        if (titleMatch && titleMatch[1]) {
            title = titleMatch[1].replace(" - YouTube", "").trim();
        }

        // Remove duplicates and empty tags
        tags = [...new Set(tags)].filter((tag) => tag && tag.length > 0);

        return NextResponse.json({
            videoId,
            title,
            tags,
            tagCount: tags.length,
        });
    } catch (error) {
        console.error("Error extracting YouTube tags:", error);
        return NextResponse.json(
            { error: "Failed to extract tags from video" },
            { status: 500 }
        );
    }
}
