"use server";

// Server action to fetch OG metadata from Terabox URL
export async function fetchTeraboxOGData(url) {
  try {
    if (!url || !url.includes("teraboxapp.com")) {
      return { error: "Invalid Terabox URL" };
    }

    // Fetch the HTML page to extract OG meta tags
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch page");
    }

    const html = await response.text();

    // Extract OG meta tags using regex
    const titleMatch = html.match(
      /<meta[^>]*property="og:title"[^>]*content="([^"]*)"[^>]*>/i,
    );
    const descriptionMatch = html.match(
      /<meta[^>]*property="og:description"[^>]*content="([^"]*)"[^>]*>/i,
    );
    const imageMatch = html.match(
      /<meta[^>]*property="og:image"[^>]*content="([^"]*)"[^>]*>/i,
    );
    const typeMatch = html.match(
      /<meta[^>]*property="og:type"[^>]*content="([^"]*)"[^>]*>/i,
    );

    // Also try to extract from title tag if OG title not found
    const pageTitleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);

    return {
      title: titleMatch?.[1] || pageTitleMatch?.[1] || "Terabox Video",
      description: descriptionMatch?.[1] || "Video from Terabox",
      image: imageMatch?.[1] || null,
      type: typeMatch?.[1] || "video",
      url: url,
    };
  } catch (_error) {
    console.error("Error fetching OG data:", error);
    return {
      title: "Terabox Video",
      description: "Video from Terabox",
      image: null,
      type: "video",
      url: url,
    };
  }
}

// Extract video ID from terabox URL
function extractVideoIdFromTeraboxUrl(url) {
  // Handle both teraboxapp.com and teraboxshare.com URLs
  // Extract video ID from URLs like https://teraboxshare.com/s/1Qx3vtX3rpRcI6poGaRe5wA
  // or https://teraboxapp.com/s/1abc123def456
  const match = url.match(/\/s\/1?([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

// Parse M3U8 content and generate segment URLs
function parseM3u8Content(m3u8Content, videoId) {
  const segments = [];
  const lines = m3u8Content.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Look for .ts segment files
    if (line && line.endsWith(".ts")) {
      // Extract segment filename (e.g., "source0.ts")
      const segmentName = line;

      // Generate the full URL using the mdiskplay video streams pattern
      const segmentUrl = `https://streams.mdiskplay.com/videos/${videoId}/${segmentName}`;

      segments.push({
        filename: segmentName,
        url: segmentUrl,
        index: segments.length,
      });
    }
  }

  return segments;
}

// Server action to fetch video data using mdiskplay API
export async function fetchTeraboxVideoDataMdiskplay(url) {
  try {
    if (
      !url ||
      (!url.includes("teraboxapp.com") && !url.includes("teraboxshare.com"))
    ) {
      return { error: "Invalid Terabox URL" };
    }

    console.log("🔍 Fetching Terabox video data from mdiskplay for:", url);

    // Extract video ID from the terabox URL
    const videoId = extractVideoIdFromTeraboxUrl(url);
    if (!videoId) {
      throw new Error("Invalid Terabox URL - could not extract video ID");
    }

    console.log("🎬 Extracted video ID:", videoId);

    // Fetch video data from mdiskplay API
    const apiUrl = `https://core.mdiskplay.com/box/terabox/${videoId}?aka=baka`;
    console.log("🔍 Fetching from mdiskplay API:", apiUrl);

    const response = await fetch(apiUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error(`mdiskplay API request failed: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ Received data from mdiskplay API:", data);

    if (data.status !== "success" || !data.source) {
      throw new Error("Invalid response from mdiskplay API");
    }

    // Process M3U8 playlist if available
    let segments = [];
    if (data.source && data.source.includes(".m3u8")) {
      try {
        const m3u8Response = await fetch(data.source, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          },
        });
        const m3u8Content = await m3u8Response.text();
        console.log("🎵 M3U8 Content fetched successfully");

        // Parse M3U8 and generate video segment URLs
        segments = parseM3u8Content(m3u8Content, videoId);
        console.log(`🔗 Generated ${segments.length} video segment URLs`);
      } catch (m3u8Error) {
        console.warn("⚠️ Failed to fetch/process M3U8:", m3u8Error);
        // Continue with direct video URL
      }
    }

    // Transform the response to match the expected format
    const transformedData = {
      name: `Terabox Video ${videoId}`,
      type: "video",
      size: 0, // Size not available from mdiskplay API
      size_formatted: "Unknown",
      image: null, // Thumbnail not available from mdiskplay API
      download_links: {
        url_1: data.download, // Direct download link
        url_2: data.source, // M3U8 or video source
        stream: data.source, // Stream URL for playing
      },
      stream_url: data.source, // Use source as the video URL
      thumbnail: null,
      file_size: "Unknown",
      // Additional metadata from mdiskplay API
      download_link: data.download,
      proxy_url: data.source,
      size_bytes: 0,
      // M3U8 specific data
      m3u8_url: data.source.includes(".m3u8") ? data.source : null,
      segments: segments,
      total_segments: segments.length,
      // mdiskplay specific fields
      mdiskplay_source: data.source,
      mdiskplay_download: data.download,
    };

    console.log("✅ Transformed mdiskplay data:", transformedData);

    return {
      success: true,
      data: transformedData,
    };
  } catch (_error) {
    console.error("❌ Error fetching video data from mdiskplay:", error);
    return {
      error:
        error.message ||
        "Unable to fetch video from mdiskplay API. Please check the URL and try again.",
    };
  }
}

// Server action to fetch full video data from Terabox API with mdiskplay fallback
export async function fetchTeraboxVideoData(
  url,
  cookies = "ndus=Y2YqaCTteHuiU3Ud_MYU7vHoVW4DNBi0MPmg_1tQ",
) {
  try {
    if (
      !url ||
      (!url.includes("teraboxapp.com") && !url.includes("teraboxshare.com"))
    ) {
      return { error: "Invalid Terabox URL" };
    }

    console.log("🔍 Fetching Terabox video data for:", url);

    // First try the mdiskplay API for better streaming support
    try {
      console.log("🎯 Trying mdiskplay API first...");
      const mdiskplayResult = await fetchTeraboxVideoDataMdiskplay(url);
      if (mdiskplayResult.success && mdiskplayResult.data) {
        console.log("✅ mdiskplay API successful, using its data");
        return mdiskplayResult;
      }
    } catch (mdiskplayError) {
      console.warn(
        "⚠️ mdiskplay API failed, falling back to TeraSnap:",
        mdiskplayError,
      );
    }

    // Fallback to original TeraSnap API
    console.log("🔄 Falling back to TeraSnap API...");
    const apiUrl = "https://terasnap.netlify.app/api/download";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        link: url,
        cookies: cookies,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ TeraSnap API Error:", response.status, errorText);
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ Received data from TeraSnap API:", data);

    if (!data || !data.file_name) {
      throw new Error("Invalid video data received");
    }

    // Transform the response to match the expected format
    // proxy_url is the video src for playback
    const transformedData = {
      name: data.file_name || "Terabox Video",
      type: "video",
      size: data.size_bytes || 0,
      size_formatted: data.file_size || "Unknown",
      image: data.thumbnail || null,
      download_links: {
        url_1: data.download_link, // Original download link
        url_2: data.proxy_url, // Proxied download link (more reliable)
        stream: data.proxy_url, // Stream URL for playing (use proxy_url for video src)
      },
      stream_url: data.proxy_url, // Use proxy_url as the video source
      thumbnail: data.thumbnail,
      file_size: data.file_size || "Unknown",
      // Additional metadata from the new API
      download_link: data.download_link,
      proxy_url: data.proxy_url, // This is the key field for video playback
      size_bytes: data.size_bytes,
    };

    console.log("✅ Transformed TeraSnap data:", transformedData);

    return {
      success: true,
      data: transformedData,
    };
  } catch (_error) {
    console.error("❌ Error fetching video data:", error);
    return {
      error:
        error.message ||
        "Unable to fetch video from Terabox. Please check the URL and try again.",
    };
  }
}
