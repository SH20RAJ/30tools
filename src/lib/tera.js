/**
 * Terabox Video Player API
 * Fetches video streaming URLs from Terabox links
 */

/**
 * Extract video ID from Terabox URL
 * Example: https://teraboxshare.com/s/1Qx3vtX3rpRcI6poGaRe5wA -> Qx3vtX3rpRcI6poGaRe5wA
 */
export function extractTeraboxId(url) {
  try {
    // Handle different Terabox URL formats
    const patterns = [
      /teraboxshare\.com\/s\/1([a-zA-Z0-9_-]+)/i,
      /terabox\.com\/s\/1([a-zA-Z0-9_-]+)/i,
      /1024terabox\.com\/s\/1([a-zA-Z0-9_-]+)/i,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    // If no pattern matches, check if it's already an ID
    if (/^[a-zA-Z0-9_-]+$/.test(url)) {
      return url;
    }

    return null;
  } catch (error) {
    console.error("Error extracting Terabox ID:", error);
    return null;
  }
}

/**
 * Fetch video streaming data from Terabox
 * @param {string} url - Terabox share URL or video ID
 * @returns {Promise<{status: string, source: string, download: string}>}
 */
export async function fetchTeraboxVideo(url) {
  try {
    // Extract video ID from URL
    const videoId = extractTeraboxId(url);

    if (!videoId) {
      throw new Error("Invalid Terabox URL or ID");
    }

    // Fetch video data from API
    const apiUrl = `https://core.mdiskplay.com/box/terabox/${videoId}?aka=baka`;

    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();

    if (data.status !== "success") {
      throw new Error(data.message || "Failed to fetch video");
    }

    return {
      status: data.status,
      source: data.source, // M3U8 playlist URL
      download: data.download, // Direct MP4 download URL
    };
  } catch (error) {
    console.error("Error fetching Terabox video:", error);
    throw error;
  }
}

/**
 * Parse M3U8 playlist and get video segment URLs
 * @param {string} m3u8Url - URL to M3U8 playlist
 * @returns {Promise<Array<string>>} Array of video segment URLs
 */
export async function parseM3U8Playlist(m3u8Url) {
  try {
    const response = await fetch(m3u8Url);
    const m3u8Content = await response.text();

    // Extract base URL from m3u8 URL
    const baseUrl = m3u8Url.substring(0, m3u8Url.lastIndexOf("/") + 1);

    // Parse M3U8 content and extract .ts segments
    const segments = [];
    const lines = m3u8Content.split("\n");

    for (const line of lines) {
      const trimmedLine = line.trim();

      // Skip comments and empty lines
      if (!trimmedLine || trimmedLine.startsWith("#")) {
        continue;
      }

      // If it's a relative URL, make it absolute
      if (trimmedLine.endsWith(".ts")) {
        const segmentUrl = trimmedLine.startsWith("http")
          ? trimmedLine
          : baseUrl + trimmedLine;
        segments.push(segmentUrl);
      }
    }

    return segments;
  } catch (error) {
    console.error("Error parsing M3U8 playlist:", error);
    throw error;
  }
}

/**
 * Get video segment URL for streaming
 * The actual video segments are hosted at https://streams.mdiskplay.com/videos/
 * @param {string} segmentName - Segment filename (e.g., "source0.ts")
 * @param {string} videoHash - Video hash for streaming URL
 * @returns {string} Full URL to video segment
 */
export function getVideoSegmentUrl(segmentName, videoHash) {
  return `https://streams.mdiskplay.com/videos/${videoHash}/${segmentName}`;
}

/**
 * Extract video hash from M3U8 URL
 * Example: https://sin1.contabostorage.com/.../mdiskplay1.m3u8
 * Returns the hash needed for streaming URLs
 */
export function extractVideoHash(m3u8Url) {
  try {
    // Extract hash from the M3U8 URL by parsing the path
    // Looking for patterns in the URL that might contain the video hash
    const url = new URL(m3u8Url);
    const pathParts = url.pathname.split("/");

    // Look for potential hash in the path (usually in the filename or parent directory)
    for (let i = pathParts.length - 1; i >= 0; i--) {
      const part = pathParts[i];
      // Look for a pattern that resembles a video hash (alphanumeric with hyphens)
      if (
        part &&
        part.length > 10 &&
        /[a-zA-Z0-9-]/.test(part) &&
        part.includes("-")
      ) {
        return part;
      }
    }

    // If no hash found in path, return a default or try to extract from query params
    const hashParam = url.searchParams.get("hash");
    if (hashParam) {
      return hashParam;
    }

    // If no hash found in path or query params, return null
    return null;
  } catch (error) {
    console.error("Error extracting video hash:", error);
    return null;
  }
}
