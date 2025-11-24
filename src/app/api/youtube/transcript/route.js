import { NextResponse } from "next/server";

/**
 * YouTube Transcript API Route
 * Fetches transcripts from NoteGPT API
 */
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const videoId = searchParams.get("videoId");
    const lang = searchParams.get("lang") || "en";

    if (!videoId) {
        return NextResponse.json(
            { success: false, error: "Video ID is required" },
            { status: 400 }
        );
    }

    try {
        // Fetch from NoteGPT API
        const response = await fetch(
            `https://notegpt.io/api/v2/video-transcript?platform=youtube&video_id=${videoId}`,
            {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
                },
            }
        );

        if (!response.ok) {
            throw new Error(`API returned ${response.status}`);
        }

        const data = await response.json();

        if (data.code !== 100000) {
            return NextResponse.json(
                { success: false, error: data.message || "Failed to fetch transcript" },
                { status: 400 }
            );
        }

        // Transform the data to our format
        const transcriptData = data.data;
        const videoInfo = transcriptData.videoInfo;

        // Get the appropriate transcript format
        const transcripts = transcriptData.transcripts;
        let selectedTranscript = transcripts.en_auto || transcripts.en || Object.values(transcripts)[0];

        // Use custom format if available (longer segments), otherwise use default
        const segments = selectedTranscript?.custom || selectedTranscript?.default || selectedTranscript?.auto || [];

        // Calculate total duration and word count
        const fullText = segments.map(s => s.text).join(" ");
        const wordCount = fullText.split(/\s+/).filter(w => w.length > 0).length;

        return NextResponse.json({
            success: true,
            data: {
                videoId: transcriptData.videoId,
                title: videoInfo.name,
                thumbnail: videoInfo.thumbnailUrl?.maxresdefault || videoInfo.thumbnailUrl?.hqdefault,
                embedUrl: videoInfo.embedUrl,
                duration: formatDuration(parseInt(videoInfo.duration)),
                author: videoInfo.author,
                channelId: videoInfo.channel_id,
                language: transcriptData.language_code[0]?.code || "en",
                languageName: transcriptData.language_code[0]?.name || "English",
                availableLanguages: transcriptData.language_code,
                wordCount: wordCount,
                segments: segments.map(seg => ({
                    start: parseTimestamp(seg.start),
                    end: parseTimestamp(seg.end),
                    duration: parseTimestamp(seg.end) - parseTimestamp(seg.start),
                    text: seg.text,
                })),
                text: fullText,
                rawData: transcriptData, // Include raw data for advanced use cases
            },
        });
    } catch (error) {
        console.error("Transcript fetch error:", error);
        return NextResponse.json(
            {
                success: false,
                error: error.message || "Failed to fetch transcript from YouTube"
            },
            { status: 500 }
        );
    }
}

/**
 * Parse timestamp string (HH:MM:SS) to seconds
 */
function parseTimestamp(timestamp) {
    const parts = timestamp.split(":").map(p => parseInt(p));
    if (parts.length === 3) {
        return parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
        return parts[0] * 60 + parts[1];
    }
    return parts[0] || 0;
}

/**
 * Format duration in seconds to readable format (HH:MM:SS or MM:SS)
 */
function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
        return `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }
    return `${minutes}:${String(secs).padStart(2, "0")}`;
}
