/**
 * YouTube Transcript API Integration
 * Supports multiple transcript sources and formats
 */

/**
 * Extract video ID from YouTube URL
 */
export function extractVideoId(url) {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^\&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^\&\n?#]+)/,
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
}

/**
 * Format time in seconds to SRT/VTT timestamp format
 */
export function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 1000);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")},${String(ms).padStart(3, "0")}`;
}

/**
 * Format transcript data to SRT format
 */
export function formatSRT(transcriptData) {
    if (!transcriptData.segments || transcriptData.segments.length === 0) {
        return transcriptData.text || "";
    }

    return transcriptData.segments
        .map((segment, index) => {
            const startTime = formatTime(segment.start);
            const endTime = formatTime(segment.start + (segment.duration || 3));
            return `${index + 1}\n${startTime} --> ${endTime}\n${segment.text}\n`;
        })
        .join("\n");
}

/**
 * Format transcript data to VTT format
 */
export function formatVTT(transcriptData) {
    if (!transcriptData.segments || transcriptData.segments.length === 0) {
        return `WEBVTT\n\n${transcriptData.text || ""}`;
    }

    const vttContent = transcriptData.segments
        .map((segment, index) => {
            const startTime = formatTime(segment.start).replace(",", ".");
            const endTime = formatTime(segment.start + (segment.duration || 3)).replace(",", ".");
            return `${index + 1}\n${startTime} --> ${endTime}\n${segment.text}\n`;
        })
        .join("\n");

    return `WEBVTT\n\n${vttContent}`;
}

/**
 * Fetch transcript using YouTube's internal API
 */
export async function fetchYouTubeTranscript(videoId, languageCode = "en") {
    try {
        // This would typically use a server-side API or proxy
        // For client-side, we'll use the youtube-transcript package via API route
        const response = await fetch(`/api/youtube/transcript?videoId=${videoId}&lang=${languageCode}`);

        if (!response.ok) {
            throw new Error("Failed to fetch transcript");
        }

        const data = await response.json();
        return {
            success: true,
            data: data,
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
        };
    }
}

/**
 * Parse transcript segments and calculate metadata
 */
export function parseTranscriptData(rawTranscript, videoInfo = {}) {
    const segments = rawTranscript.map((item) => ({
        start: item.offset / 1000 || item.start || 0,
        duration: item.duration / 1000 || item.dur || 3,
        text: item.text || "",
    }));

    const text = segments.map((s) => s.text).join(" ");
    const wordCount = text.split(/\s+/).filter((w) => w.length > 0).length;
    const duration = segments.length > 0
        ? segments[segments.length - 1].start + segments[segments.length - 1].duration
        : 0;

    return {
        title: videoInfo.title || "YouTube Video",
        thumbnail: videoInfo.thumbnail || "",
        duration: formatDuration(duration),
        language: videoInfo.language || "en",
        wordCount: wordCount,
        segments: segments,
        text: text,
    };
}

/**
 * Format duration in seconds to readable format
 */
function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hours > 0) {
        return `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }
    return `${minutes}:${String(secs).padStart(2, "0")}`;
}
